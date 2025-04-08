
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, User, authenticateUser, getUserById } from '@/lib/supabase';
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
        const userId = localStorage.getItem('userId');
        
        if (userId) {
          const user = await getUserById(parseInt(userId));
          if (user) setCurrentUser(user);
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
    
    try {
      // Verify password using Supabase RPC
      const { data, error } = await supabase.rpc('verify_password', {
        user_id: currentUser.id,
        password_to_check: password
      });
      
      if (error) {
        console.error('Password verification error:', error);
        return false;
      }
      
      return !!data;
    } catch (error) {
      console.error('Password verification error:', error);
      return false;
    }
  };

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const authenticatedUser = await authenticateUser(username, password);
      
      if (!authenticatedUser) {
        toast.error('Invalid username or password');
        return;
      }
      
      // Check if the user is banned
      if (authenticatedUser.is_banned) {
        toast.error('Your account has been banned');
        return;
      }
      
      // Update last_login time
      const { error: updateError } = await supabase
        .from('users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', authenticatedUser.id);
        
      if (updateError) {
        console.error('Failed to update last login:', updateError);
      }
      
      // Set user session
      setCurrentUser(authenticatedUser);
      localStorage.setItem('userId', authenticatedUser.id.toString());
      
      toast.success('Login successful');
      navigate('/dashboard');
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
