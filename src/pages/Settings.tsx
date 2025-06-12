
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { User, ExternalLink, MessageCircle, Youtube, Send, Shield, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import PasswordConfirmDialog from '@/components/PasswordConfirmDialog';
import HWIDResetProgress from '@/components/HWIDResetProgress';

const Settings = () => {
  const { currentUser, resetHWID, deleteAccount } = useAuth();
  const [username, setUsername] = useState(currentUser?.username || '');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [isHWIDDialogOpen, setIsHWIDDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pendingUsername, setPendingUsername] = useState('');

  const handleUsernameUpdate = async () => {
    if (!username.trim()) {
      toast.error('Username cannot be empty');
      return;
    }
    
    if (username === currentUser?.username) {
      toast.error('New username must be different from current username');
      return;
    }

    setPendingUsername(username);
    setIsPasswordDialogOpen(true);
  };

  const confirmUsernameUpdate = async () => {
    if (!currentUser) return;
    
    setIsUpdating(true);
    
    try {
      const { error } = await supabase
        .from('users')
        .update({ username: pendingUsername })
        .eq('id', currentUser.id);
        
      if (error) throw error;
      
      toast.success('Username updated successfully!');
      window.location.reload(); // Refresh to update user context
    } catch (error) {
      console.error('Username update error:', error);
      toast.error('Failed to update username');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleHWIDResetConfirm = async () => {
    setIsProcessing(true);
    try {
      await resetHWID();
      setIsHWIDDialogOpen(false);
      toast.success('HWID reset successful');
    } catch (error) {
      console.error('HWID reset error:', error);
      toast.error('Failed to reset HWID');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDeleteAccountConfirm = async () => {
    setIsProcessing(true);
    try {
      await deleteAccount();
      toast.success('Account deleted successfully');
    } catch (error) {
      console.error('Delete account error:', error);
      toast.error('Failed to delete account');
    } finally {
      setIsProcessing(false);
    }
  };

  const socialLinks = [
    {
      name: 'WhatsApp Community',
      url: 'https://chat.whatsapp.com/E4GTHABSV6p2O56ke7wrm8',
      icon: <MessageCircle className="h-5 w-5" />,
      description: 'Join our WhatsApp community'
    },
    {
      name: 'YouTube Channel',
      url: 'https://www.youtube.com/@WalkerRegeditsFF',
      icon: <Youtube className="h-5 w-5" />,
      description: 'Subscribe to our YouTube channel'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/walkerregz',
      icon: <Send className="h-5 w-5" />,
      description: 'Follow us on Telegram'
    },
    {
      name: 'WhatsApp Support',
      url: 'https://wa.me/94771229020',
      icon: <MessageCircle className="h-5 w-5" />,
      description: 'Contact support via WhatsApp'
    }
  ];

  return (
    <PageLayout title="Settings" subtitle="Manage your account preferences and configurations">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Settings */}
        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="h-5 w-5 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Profile Information</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="username" className="text-gray-300">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 bg-black/20 border-white/10 rounded-xl"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <Label htmlFor="subscription" className="text-gray-300">Subscription Status</Label>
                <Input
                  id="subscription"
                  value={currentUser?.subscription_status || 'Not available'}
                  className="mt-2 bg-black/20 border-white/10 rounded-xl"
                  disabled
                />
                <p className="text-xs text-gray-400 mt-1">Subscription status cannot be changed</p>
              </div>
            </div>
            
            <Button 
              onClick={handleUsernameUpdate} 
              disabled={isUpdating || username === currentUser?.username}
              className="modern-button"
            >
              {isUpdating ? 'Updating...' : 'Update Username'}
            </Button>
          </div>
        </div>

        {/* Account Management */}
        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-5 w-5 text-purple-400" />
            <h2 className="text-xl font-semibold text-white">Account Management</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="modern-card p-6">
              <h4 className="text-lg font-semibold mb-3 text-gradient-blue">Reset Hardware ID</h4>
              <div className="mb-4">
                <HWIDResetProgress used={currentUser?.hwid_resets_used || 0} max={currentUser?.max_hwid_resets || 5} />
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Reset your HWID if you've changed your hardware or are using a new device.
                You have <span className="font-semibold text-accent">{(currentUser?.max_hwid_resets || 5) - (currentUser?.hwid_resets_used || 0)}</span> resets remaining.
              </p>
              <Button
                onClick={() => setIsHWIDDialogOpen(true)}
                className="modern-button w-full"
                disabled={(currentUser?.hwid_resets_used || 0) >= (currentUser?.max_hwid_resets || 5)}
              >
                Reset HWID
              </Button>
            </div>

            <div className="modern-card p-6">
              <h4 className="text-lg font-semibold mb-3 text-gradient-red">Delete Account</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button
                variant="destructive"
                onClick={() => setIsDeleteDialogOpen(true)}
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-xl"
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Delete Account
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="h-5 w-5 text-green-400" />
            <h2 className="text-xl font-semibold text-white">Community & Support</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 modern-card hover:scale-105 transition-transform duration-200"
              >
                <div className="text-blue-400">
                  {link.icon}
                </div>
                <div>
                  <p className="font-medium text-white">{link.name}</p>
                  <p className="text-sm text-gray-400">{link.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 ml-auto" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Password confirmation dialogs */}
      <PasswordConfirmDialog
        open={isPasswordDialogOpen}
        onOpenChange={setIsPasswordDialogOpen}
        onConfirm={confirmUsernameUpdate}
        title="Update Username"
        description="Please enter your password to confirm username change."
        actionLabel="Update Username"
        isLoading={isUpdating}
      />

      <PasswordConfirmDialog
        open={isHWIDDialogOpen}
        onOpenChange={setIsHWIDDialogOpen}
        onConfirm={handleHWIDResetConfirm}
        title="Reset Hardware ID"
        description="Please enter your password to confirm HWID reset."
        actionLabel="Reset HWID"
        isLoading={isProcessing}
      />

      <PasswordConfirmDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeleteAccountConfirm}
        title="Delete Account"
        description="This action cannot be undone. Please enter your password to delete your account."
        actionLabel="Delete Account"
        isLoading={isProcessing}
        isDestructive
      />
    </PageLayout>
  );
};

export default Settings;
