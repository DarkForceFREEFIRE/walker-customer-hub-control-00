
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import PageLayout from '@/components/PageLayout';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, currentUser } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [currentUser, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Please enter both username and password');
      return;
    }
    
    await login(username, password);
  };

  return (
    <PageLayout>
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-walker-DEFAULT to-purple-800 flex items-center justify-center animate-scale-in">
              <span className="text-3xl font-bold text-white">W</span>
            </div>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-400 mt-2">Sign in to access your Walker Regedits account</p>
          </div>
          
          <Card className="border-white/5 bg-card overflow-hidden animate-fade-in">
            <form onSubmit={handleLogin} className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-walker-dark border-white/10"
                  disabled={loading}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-walker-DEFAULT hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-walker-dark border-white/10"
                  disabled={loading}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-walker-DEFAULT hover:bg-walker-hover"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <a href="#" className="text-walker-DEFAULT hover:underline">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </Card>

          <div className="mt-6 text-center text-gray-400 text-sm animate-fade-in">
            <p>Demo Accounts:</p>
            <p className="mt-1">Username: Walker | Password: password</p>
            <p className="mt-1">Username: yasa | Password: password</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
