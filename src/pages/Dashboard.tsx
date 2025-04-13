import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, Shield, User, Settings, AlertTriangle, Sun, Zap } from 'lucide-react'; // Added Sun, Zap for festive icons
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

// Helper to check if it's currently the festive season (e.g., April)
const isFestiveSeason = () => {
  const today = new Date();
  const month = today.getMonth(); // 0 = January, 3 = April
  // Let's assume the festival is primarily celebrated in April
  return month === 3;
};

const Dashboard = () => {
  const { currentUser, resetHWID, deleteAccount } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isHWIDDialogOpen, setIsHWIDDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showFestiveEffects, setShowFestiveEffects] = useState(false);

  // Only show effects during the festive season (e.g., April)
  useEffect(() => {
    setShowFestiveEffects(isFestiveSeason());
  }, []);


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
    // ... (keep your existing formatDate function)
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
    // ... (keep existing logic)
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
    // ... (keep existing logic)
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
    return <div className="min-h-screen flex items-center justify-center bg-[#1a1820]">Loading user data...</div>; // Slightly warmer background
  }

  // --- FESTIVE STYLES ---
  const festiveCardBase = showFestiveEffects
    ? "bg-gradient-to-br from-[#2a2633]/70 to-[#1a1820]/70 border border-yellow-600/20 shadow-lg shadow-yellow-700/10"
    : "bg-gradient-to-br from-[#1d1a24]/70 to-[#15141B]/70"; // Original style

  const festiveHeaderBase = "bg-[length:200%_auto] transition-all duration-500"; // Base for gradient animation
  const festiveUserHeader = showFestiveEffects
    ? `${festiveHeaderBase} bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 animate-festive-gradient`
    : "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-violet-500/10"; // Original
  const festiveSafetyHeader = showFestiveEffects
    ? `${festiveHeaderBase} bg-gradient-to-r from-green-500/10 via-yellow-500/10 to-orange-500/10 animate-festive-gradient`
    : "bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"; // Original
  const festiveConfigHeader = showFestiveEffects
    ? `${festiveHeaderBase} bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-festive-gradient`
    : "bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10"; // Original

  const festiveButton = showFestiveEffects
    ? "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 hover:from-yellow-600 hover:via-orange-600 hover:to-red-700 border-0 text-white shadow-lg shadow-orange-600/30 transition-all duration-300 hover:shadow-orange-600/50"
    : "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 border-0 text-white shadow-lg shadow-indigo-700/20 transition-all duration-300"; // Original

  const festiveDeleteButton = showFestiveEffects
    ? "bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-700 hover:via-rose-700 hover:to-orange-600 border-0 text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:shadow-red-600/50"
    : "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 border-0 shadow-lg shadow-rose-700/20 transition-all duration-300"; // Original

  return (
    <PageLayout title="Dashboard" subtitle="Manage your account and check product status">
        {/* Festive Greeting */}
        {showFestiveEffects && (
           <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-orange-500/30 text-center animate-fade-in">
             <p className="text-lg font-semibold text-gradient-festive animate-subtle-shimmer">
               🎉 Happy Sinhala & Tamil New Year! සුබ අලුත් අවුරුද්දක් වේවා! 🎉
             </p>
           </div>
        )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
        {/* User Information Card */}
        <DashboardCard
          title="User Information"
          icon={showFestiveEffects ? <Sun size={18} className="text-yellow-400 animate-spin [animation-duration:10s]" /> : <User size={18} />} // Example: Replace/animate icon
          className={`lg:col-span-2 ${festiveCardBase}`}
          headerClassName={festiveUserHeader}
        >
           {/* Add a subtle sparkle effect overlay if festive */}
           {showFestiveEffects && <div className="absolute top-2 right-2 text-yellow-400 opacity-70 animate-sparkle"><Zap size={14} /></div>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {/* ... keep existing user info fields ... */}
             <div>
              <p className="text-sm text-gray-400">Username</p>
              <p className="font-medium">{currentUser.username}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Subscription</p>
              <p className={`font-medium ${showFestiveEffects ? 'text-orange-400' : ''}`}>{currentUser.subscription_status}</p> {/* Highlight subscription */}
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
          icon={showFestiveEffects ? <Shield size={18} className="text-green-400 animate-pulse" /> : <Shield size={18} />} // Example: Animate icon
          className={festiveCardBase}
          headerClassName={festiveSafetyHeader}
          footer={
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className={`text-sm transition-all duration-300 border-white/10 ${
                  showFestiveEffects
                  ? 'bg-gradient-to-r from-green-500/20 via-yellow-500/20 to-orange-500/20 hover:border-yellow-400/50 hover:text-yellow-300'
                  : 'bg-gradient-to-r hover:from-walker-DEFAULT/20 hover:to-purple-500/20 hover:text-white' // Original hover
                }`}
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
                <div key={product.id} className={`flex justify-between items-center p-2 rounded-lg ${showFestiveEffects ? 'bg-yellow-900/20 hover:bg-yellow-800/30' : 'bg-black/20 hover:bg-black/30'} transition-all duration-300`}>
                  <div>
                    <p className={`font-medium ${showFestiveEffects ? 'text-orange-300' : ''}`}>{product.product_name}</p>
                    <p className="text-xs text-gray-400">
                      Updated: {formatDate(product.last_updated)}
                    </p>
                  </div>
                  {/* Pass festive prop to StatusBadge if it supports it, otherwise it uses default */}
                  <StatusBadge status={product.status as any} isFestive={showFestiveEffects} />
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
          className={`lg:col-span-3 ${festiveCardBase}`}
          headerClassName={festiveConfigHeader}
        >
           {/* Add another subtle sparkle effect overlay */}
           {showFestiveEffects && <div className="absolute bottom-2 left-2 text-red-400 opacity-60 animate-sparkle [animation-delay:0.3s]"><Zap size={14} /></div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-lg ${showFestiveEffects ? 'bg-orange-900/20' : 'bg-black/20'}`}>
              <h4 className={`text-lg font-medium mb-2 ${showFestiveEffects ? 'text-gradient-festive' : 'text-gradient-purple'}`}>Reset Hardware ID</h4>
              <p className="text-sm text-gray-400 mb-4">
                Reset your HWID if you've changed your hardware or are using a new device.
                You have <span className={showFestiveEffects ? "text-yellow-400 font-bold" : ""}>{currentUser.max_hwid_resets - currentUser.hwid_resets_used}</span> resets remaining.
              </p>
              <Button
                onClick={() => setIsHWIDDialogOpen(true)}
                className={festiveButton} // Use festive button style
                disabled={currentUser.hwid_resets_used >= currentUser.max_hwid_resets}
              >
                Reset HWID
              </Button>
            </div>

            <div className={`p-4 rounded-lg ${showFestiveEffects ? 'bg-red-900/30' : 'bg-black/20'}`}>
              <h4 className={`text-lg font-medium mb-2 ${showFestiveEffects ? 'text-gradient-festive' : 'text-gradient-red'}`}>Delete Account</h4>
              <p className="text-sm text-gray-400 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button
                variant="destructive" // Keep semantic variant
                onClick={() => setIsDeleteDialogOpen(true)}
                className={festiveDeleteButton} // Use festive delete button style
              >
                Delete Account
              </Button>
            </div>
          </div>
        </DashboardCard>
      </div>

      {/* Password confirmation dialogs (keep original styling or lightly theme if needed) */}
      <PasswordConfirmDialog
        open={isHWIDDialogOpen}
        onOpenChange={setIsHWIDDialogOpen}
        onConfirm={handleHWIDResetConfirm}
        title="Reset Hardware ID"
        description="Please enter your password to confirm HWID reset."
        actionLabel="Reset HWID"
        isLoading={isProcessing}
        // Optionally add a festive prop or class here if the component supports it
      />

      <PasswordConfirmDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeleteAccountConfirm}
        title="Delete Account"
        description="This action cannot be undone. Please enter your password to delete your account."
        actionLabel="Delete Account"
        isLoading={isProcessing}
        isDestructive // You might want to make the confirm button clearly red even in festive mode
         // Optionally add a festive prop or class here
      />
    </PageLayout>
  );
};

export default Dashboard;
