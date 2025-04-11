
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdGFycyIgeD0iMCIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkiLz48Y2lyY2xlIGN4PSIyNSIgY3k9IjQwIiByPSIwLjUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjE1IiByPSIwLjUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNikiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjM1IiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpIi8+PGNpcmNsZSBjeD0iNTUiIGN5PSIyNSIgcj0iMC43NSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzdGFycykiLz48L3N2Zz4=')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>
      </div>
      
      <div className="w-full max-w-md z-10">
        <div className="backdrop-blur-xl bg-card/80 rounded-2xl shadow-2xl border border-white/10">
          <div className="p-8">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-teal-DEFAULT to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-teal-DEFAULT/30 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
              <p className="text-gray-400 text-sm">Sign in to your account to continue</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm text-gray-400">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="modern-input bg-secondary/40"
                  disabled={loading}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-sm text-gray-400">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="modern-input bg-secondary/40"
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
                    className="text-sm text-gray-400 cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>
                
                <a href="#" className="text-sm text-teal-DEFAULT hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-teal-DEFAULT hover:bg-teal-hover text-white transition-all duration-300 rounded-xl h-11 shadow-lg shadow-teal-DEFAULT/20 hover:shadow-teal-DEFAULT/30"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign in'} 
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full border-white/5" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-card px-3 text-xs text-gray-500">or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="bg-secondary/40 border-white/5 hover:bg-secondary/70 text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="h-5 w-5 mr-2">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                  </svg>
                  Google
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="bg-secondary/40 border-white/5 hover:bg-secondary/70 text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 mr-2">
                    <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
              
              <div className="text-center pt-4">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <a href="#" className="text-teal-DEFAULT hover:underline">
                    Create account
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
