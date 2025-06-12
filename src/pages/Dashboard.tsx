
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, Shield, User, Calendar, Clock, MapPin, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import StatusBadge from '@/components/StatusBadge';
import HWIDResetProgress from '@/components/HWIDResetProgress';
import { toast } from 'sonner';
import { supabase, ProductSafetyStatus } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  // Query for fetching user statistics
  const { data: userStats } = useQuery({
    queryKey: ['userStats'],
    queryFn: async () => {
      const { count: totalUsers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });

      const { count: activeUsers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
        .eq('is_banned', false);

      return {
        totalUsers: totalUsers || 0,
        activeUsers: activeUsers || 0,
        bannedUsers: (totalUsers || 0) - (activeUsers || 0)
      };
    }
  });

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Never';
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
      toast.success("Dashboard refreshed");
    } catch (error) {
      console.error('Error refreshing dashboard:', error);
      toast.error("Failed to refresh dashboard");
    } finally {
      setIsRefreshing(false);
    }
  };

  if (!currentUser) {
    return <div className="min-h-screen flex items-center justify-center bg-background">Loading...</div>;
  }

  return (
    <PageLayout title="Dashboard" subtitle="Overview of your account and system status">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="dashboard-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Welcome back, {currentUser.username}!</h2>
              <p className="text-gray-400 mt-1">Here's what's happening with your account</p>
            </div>
            <Button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="modern-button-secondary"
            >
              <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="dashboard-card p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
              <User className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">{userStats?.totalUsers || 0}</h3>
            <p className="text-gray-400">Total Users</p>
          </div>
          
          <div className="dashboard-card p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4">
              <Shield className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">{userStats?.activeUsers || 0}</h3>
            <p className="text-gray-400">Active Users</p>
          </div>

          <div className="dashboard-card p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4">
              <Server className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">{currentUser.subscription_status}</h3>
            <p className="text-gray-400">Your Plan</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Information Widget */}
          <div className="dashboard-card p-6">
            <div className="flex items-center mb-6">
              <User className="h-5 w-5 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-white">Account Information</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Username</span>
                <span className="text-white font-medium">{currentUser.username}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Status</span>
                <StatusBadge
                  status={currentUser.is_banned ? "danger" : "safe"}
                  className="text-sm"
                >
                  {currentUser.is_banned ? "Banned" : "Active"}
                </StatusBadge>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Subscription</span>
                <span className="text-white font-medium">{currentUser.subscription_status}</span>
              </div>
              
              <div className="py-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">HWID Resets</span>
                </div>
                <HWIDResetProgress used={currentUser.hwid_resets_used} max={currentUser.max_hwid_resets} />
              </div>
            </div>
          </div>

          {/* System Status Widget */}
          <div className="dashboard-card p-6">
            <div className="flex items-center mb-6">
              <Shield className="h-5 w-5 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-white">Safety Status</h3>
            </div>
            
            <div className="space-y-3">
              {safetyStatusData ? (
                safetyStatusData.map((product) => (
                  <div key={product.id} className="flex justify-between items-center p-3 bg-black/20 rounded-xl">
                    <div>
                      <p className="font-medium text-white">{product.product_name}</p>
                      <p className="text-xs text-gray-400">
                        Updated: {formatDate(product.last_updated)}
                      </p>
                    </div>
                    <StatusBadge status={product.status as any} />
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-400">Loading safety status...</p>
                </div>
              )}
            </div>
          </div>

          {/* Session Information Widget */}
          <div className="dashboard-card p-6">
            <div className="flex items-center mb-6">
              <Clock className="h-5 w-5 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-white">Session Details</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  IP Address
                </span>
                <span className="text-white font-mono text-sm">{currentUser.ip_address}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Member Since
                </span>
                <span className="text-white">{formatDate(currentUser.created_at)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Last Login
                </span>
                <span className="text-white">{formatDate(currentUser.last_login)}</span>
              </div>
            </div>
          </div>

          {/* HWID Information Widget */}
          <div className="dashboard-card p-6">
            <div className="flex items-center mb-6">
              <Server className="h-5 w-5 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-white">Hardware Information</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">Hardware ID</label>
                <div className="mt-1 p-3 bg-black/20 rounded-xl">
                  <code className="text-white font-mono text-sm break-all">
                    {currentUser.hwid || 'Not set'}
                  </code>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">HWID Lock</span>
                <StatusBadge status={currentUser.hwid_lock ? "safe" : "warning"}>
                  {currentUser.hwid_lock ? "Enabled" : "Disabled"}
                </StatusBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
