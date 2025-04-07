
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface PasswordConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (password: string) => void;
  title: string;
  description: string;
  actionLabel: string;
  isLoading?: boolean;
  userId?: number; // Added userId to verify against the correct user
}

const PasswordConfirmDialog: React.FC<PasswordConfirmDialogProps> = ({
  open,
  onOpenChange,
  onConfirm,
  title,
  description,
  actionLabel,
  isLoading = false,
  userId,
}) => {
  const [password, setPassword] = useState('');
  const [verifying, setVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId) {
      toast.error("User information not available");
      return;
    }
    
    setVerifying(true);
    
    try {
      // Send the password to a server function that can verify bcrypt
      // Since we can't verify bcrypt directly in the browser, we'll use an API call
      const { data, error } = await supabase.rpc('verify_password', {
        user_id: userId,
        password_to_check: password
      });
      
      if (error) {
        toast.error("Password verification failed");
        console.error("Password verification error:", error);
        return;
      }
      
      if (data === true) {
        // Password is correct
        onConfirm(password);
      } else {
        toast.error("Incorrect password");
      }
    } catch (error) {
      console.error("Password verification error:", error);
      toast.error("Password verification failed");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-to-b from-[#17141f] to-[#0d0b13] border border-purple-500/20 shadow-xl shadow-purple-900/10">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-gradient-purple">{title}</DialogTitle>
            <DialogDescription className="text-gray-400">{description}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-gray-300">Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#1d1a24] border-white/10 focus:border-walker-DEFAULT/70 focus:ring-walker-DEFAULT/30"
                required
              />
            </div>
          </div>
          <DialogFooter className="pt-2">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)} 
              className="bg-transparent hover:bg-white/5 border-white/10"
              type="button"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 hover:from-blue-700 hover:via-violet-700 hover:to-purple-700 text-white shadow-lg shadow-purple-700/30 border-0 transition-all duration-300" 
              disabled={isLoading || verifying}
            >
              {isLoading || verifying ? "Processing..." : actionLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordConfirmDialog;
