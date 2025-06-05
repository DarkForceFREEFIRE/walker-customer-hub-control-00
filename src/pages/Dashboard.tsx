
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, Shield, User, Settings, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

  if (!currentUser) {
    return <div className="min-h-screen flex items-center justify-center bg-background">Loading user data...</div>;
  }

  // Cool styles
  const cardBase = "bg-gradient-to-br from-[#1d1a24]/70 to-[#15141B]/70";
  const userHeader = "bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10";
  const safetyHeader = "bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-blue-500/10";
  const configHeader = "bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10";

  const coolButton = "bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 border-0 text-white shadow-lg shadow-indigo-700/20 transition-all duration-300";
  const deleteButton = "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 border-0 shadow-lg shadow-rose-700/20 transition-all duration-300";

  return (
    <PageLayout title="Dashboard" subtitle="Manage your account and check product status">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
        {/* User Information Card */}
        <DashboardCard
          title="User Information"
          icon={<User size={18} />}
          className={`lg:col-span-2 ${cardBase}`}
          headerClassName={userHeader}
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
          className={cardBase}
          headerClassName={safetyHeader}
          footer={
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="text-sm transition-all duration-300 border-white/10 bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:text-white"
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
                <div key={product.id} className="flex justify-between items-center p-2 rounded-lg bg-black/20 hover:bg-black/30 transition-all duration-300">
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
          className={`lg:col-span-3 ${cardBase}`}
          headerClassName={configHeader}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-black/20">
              <h4 className="text-lg font-medium mb-2 text-gradient-blue">Reset Hardware ID</h4>
              <p className="text-sm text-gray-400 mb-4">
                Reset your HWID if you've changed your hardware or are using a new device.
                You have <span>{currentUser.max_hwid_resets - currentUser.hwid_resets_used}</span> resets remaining.
              </p>
              <Button
                onClick={() => setIsHWIDDialogOpen(true)}
                className={coolButton}
                disabled={currentUser.hwid_resets_used >= currentUser.max_hwid_resets}
              >
                Reset HWID
              </Button>
            </div>

            <div className="p-4 rounded-lg bg-black/20">
              <h4 className="text-lg font-medium mb-2 text-gradient-red">Delete Account</h4>
              <p className="text-sm text-gray-400 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button
                variant="destructive"
                onClick={() => setIsDeleteDialogOpen(true)}
                className={deleteButton}
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
        isDestructive
      />
    </PageLayout>
  );
};

export default Dashboard;
