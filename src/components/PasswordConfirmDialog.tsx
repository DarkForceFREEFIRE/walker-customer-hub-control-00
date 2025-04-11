
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
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

interface PasswordConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title: string;
  description: string;
  actionLabel: string;
  isLoading?: boolean;
}

const PasswordConfirmDialog: React.FC<PasswordConfirmDialogProps> = ({
  open,
  onOpenChange,
  onConfirm,
  title,
  description,
  actionLabel,
  isLoading = false,
}) => {
  const [password, setPassword] = useState('');
  const [verifying, setVerifying] = useState(false);
  const { currentUser, verifyPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser) {
      toast.error("User information not available");
      return;
    }
    
    setVerifying(true);
    
    try {
      const isValid = await verifyPassword(password);
      
      if (isValid) {
        onConfirm();
        setPassword('');
        onOpenChange(false);
        toast.success("Password confirmed");
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
      <DialogContent className="sm:max-w-md bg-card border border-border/30 shadow-xl">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-foreground">{title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">{description}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-muted-foreground">Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-secondary/50 border-border/50 focus-visible:ring-teal-DEFAULT"
                required
              />
            </div>
          </div>
          <DialogFooter className="pt-2">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)} 
              className="bg-transparent hover:bg-secondary/50 border-border/30"
              type="button"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-teal-DEFAULT hover:bg-teal-hover text-white" 
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
