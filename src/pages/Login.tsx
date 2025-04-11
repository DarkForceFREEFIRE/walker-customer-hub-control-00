
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { Separator } from '@/components/ui/separator';
import { Facebook, Github } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
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
    <div className="bg-background min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border/30 rounded-lg shadow-2xl p-8">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="h-8 w-8 bg-teal-DEFAULT rounded-full flex items-center justify-center text-white mr-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z" fill="currentColor" />
                  <path d="M8 4C6.9 4 6 4.9 6 6C6 7.1 6.9 8 8 8C9.1 8 10 7.1 10 6C10 4.9 9.1 4 8 4Z" fill="currentColor" />
                  <path d="M8 9C6.33 9 3 9.83 3 11.5V12C3 12.55 3.45 13 4 13H12C12.55 13 13 12.55 13 12V11.5C13 9.83 9.67 9 8 9Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-medium text-foreground">Walker Regedits</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Sign in</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm text-muted-foreground">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-secondary/50 border-border/50 focus-visible:ring-teal-DEFAULT"
                disabled={loading}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password" className="text-sm text-muted-foreground">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-secondary/50 border-border/50 focus-visible:ring-teal-DEFAULT"
                disabled={loading}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(!!checked)}
                  className="data-[state=checked]:bg-teal-DEFAULT data-[state=checked]:border-teal-DEFAULT"
                />
                <Label 
                  htmlFor="remember-me" 
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Remember me
                </Label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-teal-DEFAULT hover:bg-teal-dark text-white"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
            
            <div className="text-center">
              <a href="#" className="text-sm text-teal-DEFAULT hover:underline">
                Forgot your password?
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-border/50" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-2 text-xs text-muted-foreground">or</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                type="button" 
                variant="outline" 
                className="w-full bg-transparent border-border/50 hover:bg-secondary/70 flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#167EE6"/>
                  <path d="M10.9561 9.73636H19.734C19.9095 9.73636 20 9.97045 19.8839 10.0957L15.9466 14.0214C15.8933 14.0745 15.8211 14.1051 15.7455 14.1051H6.93919C6.76367 14.1051 6.67319 13.8711 6.78932 13.7458L10.7266 9.8201C10.7799 9.767 10.8521 9.73636 10.9277 9.73636H10.9561Z" fill="white"/>
                  <path d="M10.9561 5.89429H19.734C19.9095 5.89429 20 6.12839 19.8839 6.25364L15.9466 10.1794C15.8933 10.2324 15.8211 10.263 15.7455 10.263H6.93919C6.76367 10.263 6.67319 10.029 6.78932 9.90376L10.7266 5.97803C10.7799 5.92495 10.8521 5.89429 10.9277 5.89429H10.9561Z" fill="white"/>
                  <path d="M6.93919 5.89429H15.7171C15.8926 5.89429 15.9831 6.12839 15.867 6.25364L11.9297 10.1794C11.8764 10.2324 11.8042 10.263 11.7287 10.263H2.95078C2.77527 10.263 2.68478 10.029 2.80091 9.90376L6.73822 5.97803C6.79155 5.92495 6.86372 5.89429 6.93919 5.89429Z" fill="#12B347"/>
                  <path d="M6.93919 14.1057H15.7171C15.8926 14.1057 15.9831 13.8716 15.867 13.7464L11.9297 9.82065C11.8764 9.76758 11.8042 9.73692 11.7287 9.73692H2.95078C2.77527 9.73692 2.68478 9.97101 2.80091 10.0963L6.73822 14.022C6.79155 14.075 6.86372 14.1057 6.93919 14.1057Z" fill="#FFD500"/>
                </svg>
                Sign in with Google
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                className="w-full bg-transparent border-border/50 hover:bg-secondary/70 flex items-center justify-center gap-2"
              >
                <Facebook size={20} className="text-blue-600" />
                Sign in with Facebook
              </Button>
            </div>
            
            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <a href="#" className="text-teal-DEFAULT hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
