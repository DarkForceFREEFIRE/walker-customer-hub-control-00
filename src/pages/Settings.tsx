
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { User, Palette, ExternalLink, MessageCircle, Youtube, Send } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { supabase } from '@/lib/supabase';
import PasswordConfirmDialog from '@/components/PasswordConfirmDialog';

const Settings = () => {
  const { currentUser } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const [username, setUsername] = useState(currentUser?.username || '');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
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

  const handleThemeToggle = () => {
    toggleTheme();
    toast.success(`Switched to ${isDarkMode ? 'light' : 'dark'} mode`);
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
    <PageLayout title="Settings" subtitle="Manage your account preferences">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Settings */}
        <Card className="border border-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-5 w-5 text-blue-400" />
              <h2 className="text-xl font-semibold">Profile Information</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-2"
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <Label htmlFor="subscription">Subscription Status</Label>
                  <Input
                    id="subscription"
                    value={currentUser?.subscription_status || 'Not available'}
                    className="mt-2"
                    disabled
                  />
                  <p className="text-xs text-muted-foreground mt-1">Subscription status cannot be changed</p>
                </div>
              </div>
              
              <Button 
                onClick={handleUsernameUpdate} 
                disabled={isUpdating || username === currentUser?.username}
                className="bg-accent hover:bg-accent/90"
              >
                {isUpdating ? 'Updating...' : 'Update Username'}
              </Button>
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card className="border border-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="h-5 w-5 text-purple-400" />
              <h2 className="text-xl font-semibold">Appearance</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Theme</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      isDarkMode 
                        ? 'border-blue-500/30 bg-secondary/20' 
                        : 'border-border hover:border-blue-500/30'
                    }`}
                    onClick={() => !isDarkMode && handleThemeToggle()}
                  >
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Default theme</p>
                  </div>
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      !isDarkMode 
                        ? 'border-blue-500/30 bg-secondary/20' 
                        : 'border-border hover:border-blue-500/30'
                    }`}
                    onClick={() => isDarkMode && handleThemeToggle()}
                  >
                    <p className="font-medium">Light Mode</p>
                    <p className="text-sm text-muted-foreground">Light theme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Links */}
        <Card className="border border-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <ExternalLink className="h-5 w-5 text-green-400" />
              <h2 className="text-xl font-semibold">Community & Support</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-blue-500/30 hover:bg-secondary/10 transition-colors"
                >
                  <div className="text-blue-400">
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-medium">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Password confirmation dialog */}
      <PasswordConfirmDialog
        open={isPasswordDialogOpen}
        onOpenChange={setIsPasswordDialogOpen}
        onConfirm={confirmUsernameUpdate}
        title="Update Username"
        description="Please enter your password to confirm username change."
        actionLabel="Update Username"
        isLoading={isUpdating}
      />
    </PageLayout>
  );
};

export default Settings;
