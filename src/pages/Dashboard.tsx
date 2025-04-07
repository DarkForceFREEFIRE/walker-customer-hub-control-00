
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, Shield, User, Settings, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import PageLayout from '@/components/PageLayout';
import DashboardCard from '@/components/DashboardCard';
import StatusBadge from '@/components/StatusBadge';
import HWIDResetProgress from '@/components/HWIDResetProgress';
import PasswordConfirmDialog from '@/components/PasswordConfirmDialog';
import { toast } from 'sonner';
import { supabase, ProductSafetyStatus } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { currentUser, resetHWID, deleteAccount } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isHWIDDialogOpen, setIsHWIDDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Query for fetching safety status data
  const { data: safetyStatusData, refetch: refetchSafetyStatus } = useQuery({
    queryKey: ['safetyStatus'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_safety_status')
        .select('*');
      
      if (error) throw error;
      return data as ProductSafetyStatus[];
    }
  });
  
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refetchSafetyStatus();
      toast.success("Safety status refreshed");
    } catch (error) {
      console.error('Error refreshing safety status:', error);
      toast.error("Failed to refresh safety status");
    } finally {
      setIsRefreshing(false);
    }
  };
  
  const handleHWIDResetConfirm = async (password: string) => {
    setIsProcessing(true);
    try {
      // In a real implementation, you would verify the password server-side
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
  
  const handleDeleteAccountConfirm = async (password: string) => {
    setIsProcessing(true);
    try {
      // In a real implementation, you would verify the password server-side
      await deleteAccount();
      toast.success('Account deleted successfully');
      // Navigation is handled in the deleteAccount function
    } catch (error) {
      console.error('Delete account error:', error);
      toast.error('Failed to delete account');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!currentUser) {
    return <div className="min-h-screen flex items-center justify-center bg-[#15141B]">Loading user data...</div>;
  }

  return (
    <PageLayout title="Dashboard" subtitle="Manage your account and check product status">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
        {/* User Information Card */}
        <DashboardCard 
          title="User Information" 
          icon={<User size={18} />}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <div>
              <p className="text-sm text-gray-400">Username</p>
              <p className="font-medium">{currentUser.username}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Subscription</p>
              <p className="font-medium">{currentUser.subscription_status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Status</p>
              <StatusBadge 
                status={currentUser.is_banned ? "danger" : "safe"} 
                className="mt-1"
              >
                {currentUser.is_banned ? "Banned" : "Active"}
              </StatusBadge>
            </div>
            <div>
              <p className="text-sm text-gray-400">IP Address</p>
              <p className="font-medium">{currentUser.ip_address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">HWID</p>
              <p className="font-medium text-xs truncate">{currentUser.hwid || 'Not set'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">HWID Resets</p>
              <HWIDResetProgress used={currentUser.hwid_resets_used} max={currentUser.max_hwid_resets} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Created Date</p>
              <p className="font-medium">{formatDate(currentUser.created_at)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Last Login</p>
              <p className="font-medium">{formatDate(currentUser.last_login)}</p>
            </div>
          </div>
        </DashboardCard>
        
        {/* Safety Status Card */}
        <DashboardCard 
          title="Safety Status" 
          icon={<Shield size={18} />}
          footer={
            <div className="flex justify-end">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="text-sm hover:bg-walker-DEFAULT hover:text-white transition-all duration-300"
              >
                <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            {safetyStatusData ? (
              safetyStatusData.map((product) => (
                <div key={product.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{product.product_name}</p>
                    <p className="text-xs text-gray-400">
                      Updated: {formatDate(product.last_updated)}
                    </p>
                  </div>
                  <StatusBadge status={product.status as any} />
                </div>
              ))
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-400">Loading safety status...</p>
              </div>
            )}
          </div>
        </DashboardCard>
        
        {/* Account Configuration Card */}
        <DashboardCard 
          title="Account Configuration" 
          icon={<Settings size={18} />}
          className="lg:col-span-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Reset Hardware ID</h4>
              <p className="text-sm text-gray-400 mb-4">
                Reset your HWID if you've changed your hardware or are using a new device.
                You have {currentUser.max_hwid_resets - currentUser.hwid_resets_used} resets remaining.
              </p>
              <Button 
                onClick={() => setIsHWIDDialogOpen(true)}
                className="bg-walker-DEFAULT hover:bg-walker-hover transition-all duration-300"
                disabled={currentUser.hwid_resets_used >= currentUser.max_hwid_resets}
              >
                Reset HWID
              </Button>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Delete Account</h4>
              <p className="text-sm text-gray-400 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button 
                variant="destructive"
                onClick={() => setIsDeleteDialogOpen(true)}
                className="transition-all duration-300"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </DashboardCard>
      </div>
      
      {/* Password confirmation dialogs */}
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
      />
    </PageLayout>
  );
};

export default Dashboard;
