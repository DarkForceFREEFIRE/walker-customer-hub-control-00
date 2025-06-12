
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { User, Mail, Shield, Key, Bell, Palette } from 'lucide-react';

const Settings = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('john@example.com');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUsernameUpdate = async () => {
    if (!username.trim()) {
      toast.error('Username cannot be empty');
      return;
    }
    
    setIsUpdating(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Username updated successfully!');
      setIsUpdating(false);
    }, 1500);
  };

  return (
    <PageLayout title="Settings" subtitle="Manage your account preferences and security">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Settings */}
        <Card className="border border-white/5">
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
                    className="bg-walker-dark border-white/10 mt-2"
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-walker-dark border-white/10 mt-2"
                    placeholder="Enter your email"
                    disabled
                  />
                  <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
                </div>
              </div>
              
              <Button 
                onClick={handleUsernameUpdate} 
                disabled={isUpdating}
                className="bg-walker-DEFAULT hover:bg-walker-hover"
              >
                {isUpdating ? 'Updating...' : 'Update Profile'}
              </Button>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="border border-white/5">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-5 w-5 text-green-400" />
              <h2 className="text-xl font-semibold">Security</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Key className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-sm text-gray-400">Last changed 30 days ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-400">Add an extra layer of security</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Enable 2FA
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Notification Preferences */}
        <Card className="border border-white/5">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="h-5 w-5 text-yellow-400" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Safety Status Updates', description: 'Get notified when safety status changes' },
                { label: 'New Features', description: 'Learn about new panel features and updates' },
                { label: 'Security Alerts', description: 'Important security notifications' },
                { label: 'Marketing Updates', description: 'Promotional offers and news' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-secondary/10 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <input 
                    type="checkbox" 
                    defaultChecked={index < 2}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card className="border border-white/5">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="h-5 w-5 text-purple-400" />
              <h2 className="text-xl font-semibold">Appearance</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Theme</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="p-3 border border-white/10 rounded-lg bg-secondary/20 cursor-pointer hover:border-blue-500/30 transition-colors">
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-gray-400">Current theme</p>
                  </div>
                  <div className="p-3 border border-white/10 rounded-lg cursor-pointer hover:border-blue-500/30 transition-colors opacity-50">
                    <p className="font-medium">Light Mode</p>
                    <p className="text-sm text-gray-400">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border border-red-500/20 bg-red-900/5">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-red-400 mb-4">Danger Zone</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg">
                <div>
                  <p className="font-medium text-red-400">Delete Account</p>
                  <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
                </div>
                <Button variant="outline" size="sm" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Settings;
