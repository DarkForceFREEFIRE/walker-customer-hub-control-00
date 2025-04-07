
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

interface PasswordConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (password: string) => void;
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(password);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
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
                className="bg-[#28262f] border-white/10 focus:border-walker-DEFAULT/70 focus:ring-walker-DEFAULT/30"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)} 
              className="bg-transparent hover:bg-white/5"
              type="button"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-walker-DEFAULT hover:bg-walker-hover transition-all duration-300" 
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : actionLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordConfirmDialog;
