import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, User } from '@/lib/supabase';
import { toast } from 'sonner';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetHWID: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  verifyPassword: (password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing user session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        // In a real implementation, we would check for a JWT token
        // For now, let's check localStorage for a user ID
        const userId = localStorage.getItem('userId');
        
        if (userId) {
          const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();
          
          if (error) throw error;
          if (data) setCurrentUser(data as User);
        }
      } catch (error) {
        console.error('Session error:', error);
        localStorage.removeItem('userId');
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const verifyPassword = async (password: string): Promise<boolean> => {
    if (!currentUser) return false;

    // For the Walker account with specific password
    if (currentUser.username === 'Walker' && password === 'walker#1234') {
      return true;
    }
    
    // For demo testing - keep the test password working
    if (password === 'test') {
      return true;
    }
    
    return false;
  };

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      // Fetch the user
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .single();
      
      if (error) throw error;
      if (!data) {
        toast.error('User not found');
        setLoading(false);
        return;
      }
      
      // Handle specific known user (Walker)
      if (username === 'Walker' && password === 'walker#1234') {
        setCurrentUser(data as User);
        localStorage.setItem('userId', data.id.toString());
        
        // Update last_login time
        const { error: updateError } = await supabase
          .from('users')
          .update({ last_login: new Date().toISOString() })
          .eq('id', data.id);
          
        if (updateError) console.error('Failed to update last login:', updateError);
        
        toast.success('Login successful');
        navigate('/dashboard');
        return;
      }
      
      // Demo login for testing - fallback to allow "test" password
      if (password === 'test') {
        setCurrentUser(data as User);
        localStorage.setItem('userId', data.id.toString());
        
        const { error: updateError } = await supabase
          .from('users')
          .update({ last_login: new Date().toISOString() })
          .eq('id', data.id);
          
        if (updateError) console.error('Failed to update last login:', updateError);
        
        toast.success('Login successful (demo mode)');
        navigate('/dashboard');
      } else {
        toast.error('Invalid password');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setCurrentUser(null);
      localStorage.removeItem('userId');
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };

  const resetHWID = async () => {
    if (!currentUser) return;
    
    try {
      // Check if user has resets remaining
      if (currentUser.hwid_resets_used >= currentUser.max_hwid_resets) {
        toast.error('You have used all your HWID resets');
        return;
      }
      
      const { error } = await supabase
        .from('users')
        .update({ 
          hwid_resets_used: currentUser.hwid_resets_used + 1,
          hwid: null // Reset HWID
        })
        .eq('id', currentUser.id);
        
      if (error) throw error;
      
      // Update local user state
      setCurrentUser({
        ...currentUser,
        hwid_resets_used: currentUser.hwid_resets_used + 1,
        hwid: null
      });
      
      toast.success('HWID has been reset successfully');
    } catch (error) {
      console.error('HWID reset error:', error);
      toast.error('Failed to reset HWID');
    }
  };

  const deleteAccount = async () => {
    if (!currentUser) return;
    
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', currentUser.id);
        
      if (error) throw error;
      
      setCurrentUser(null);
      localStorage.removeItem('userId');
      toast.success('Account deleted successfully');
      navigate('/');
    } catch (error) {
      console.error('Account deletion error:', error);
      toast.error('Failed to delete account');
    }
  };

  const value = {
    currentUser,
    loading,
    login,
    logout,
    resetHWID,
    deleteAccount,
    verifyPassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
