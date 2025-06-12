
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, Shield, User, Settings, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
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

  return (
    <PageLayout title="Dashboard" subtitle="Manage your account and check product status">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
        {/* User Information Card */}
        <div className="lg:col-span-2 dashboard-card p-8">
          <div className="flex items-center mb-6">
            <User className="h-6 w-6 text-accent mr-3" />
            <h2 className="text-2xl font-bold">User Information</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Username</p>
              <p className="font-semibold text-lg">{currentUser.username}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Subscription</p>
              <p className="font-semibold text-lg">{currentUser.subscription_status}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Status</p>
              <StatusBadge
                status={currentUser.is_banned ? "danger" : "safe"}
                className="mt-1"
              >
                {currentUser.is_banned ? "Banned" : "Active"}
              </StatusBadge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">IP Address</p>
              <p className="font-semibold">{currentUser.ip_address}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">HWID</p>
              <p className="font-mono text-sm bg-black/20 px-3 py-1 rounded-lg truncate">
                {currentUser.hwid || 'Not set'}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">HWID Resets</p>
              <HWIDResetProgress used={currentUser.hwid_resets_used} max={currentUser.max_hwid_resets} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Created Date</p>
              <p className="font-semibold">{formatDate(currentUser.created_at)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Last Login</p>
              <p className="font-semibold">{formatDate(currentUser.last_login)}</p>
            </div>
          </div>
        </div>

        {/* Safety Status Card */}
        <div className="dashboard-card p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-accent mr-3" />
              <h2 className="text-2xl font-bold">Safety Status</h2>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="modern-button-secondary"
            >
              <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
          
          <div className="space-y-4">
            {safetyStatusData ? (
              safetyStatusData.map((product) => (
                <div key={product.id} className="modern-card p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{product.product_name}</p>
                      <p className="text-xs text-muted-foreground">
                        Updated: {formatDate(product.last_updated)}
                      </p>
                    </div>
                    <StatusBadge status={product.status as any} />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground">Loading safety status...</p>
              </div>
            )}
          </div>
        </div>

        {/* Account Configuration Card */}
        <div className="lg:col-span-3 dashboard-card p-8">
          <div className="flex items-center mb-6">
            <Settings className="h-6 w-6 text-accent mr-3" />
            <h2 className="text-2xl font-bold">Account Configuration</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="modern-card p-6">
              <h4 className="text-xl font-semibold mb-3 text-gradient-blue">Reset Hardware ID</h4>
              <p className="text-muted-foreground mb-4">
                Reset your HWID if you've changed your hardware or are using a new device.
                You have <span className="font-semibold text-accent">{currentUser.max_hwid_resets - currentUser.hwid_resets_used}</span> resets remaining.
              </p>
              <Button
                onClick={() => setIsHWIDDialogOpen(true)}
                className="modern-button w-full"
                disabled={currentUser.hwid_resets_used >= currentUser.max_hwid_resets}
              >
                Reset HWID
              </Button>
            </div>

            <div className="modern-card p-6">
              <h4 className="text-xl font-semibold mb-3 text-gradient-red">Delete Account</h4>
              <p className="text-muted-foreground mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button
                variant="destructive"
                onClick={() => setIsDeleteDialogOpen(true)}
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-xl"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>
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
