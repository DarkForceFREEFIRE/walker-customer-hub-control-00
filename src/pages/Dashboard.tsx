
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, Shield, User, Calendar, Clock, MapPin, Server, Users, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import StatusBadge from '@/components/StatusBadge';
import HWIDResetProgress from '@/components/HWIDResetProgress';
import { toast } from 'sonner';
import { supabase, ProductSafetyStatus } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isMobile = useIsMobile();

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

      const { count: onlineUsers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
        .gte('last_login', new Date(Date.now() - 5 * 60 * 1000).toISOString()); // Last 5 minutes

      return {
        totalUsers: totalUsers || 0,
        activeUsers: activeUsers || 0,
        onlineUsers: onlineUsers || 0,
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
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div className="dashboard-card p-4 sm:p-6">
          <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'items-center justify-between'}`}>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img 
                src="https://raw.githubusercontent.com/DarkForceFREEFIRE/Server-Updates/refs/heads/main/logo.png" 
                alt="Walker Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg transition-transform duration-300 hover:scale-110 flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white truncate">Welcome back, {currentUser.username}!</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1">Here's what's happening with your account</p>
              </div>
            </div>
            <Button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className={`modern-button-secondary transition-all duration-300 hover:scale-105 ${isMobile ? 'w-full' : ''}`}
            >
              <RefreshCw size={16} className={`${isMobile ? 'mr-2' : 'mr-2'} transition-transform duration-300 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="stats-card transition-all duration-300 hover:scale-105 animate-fade-in p-3 sm:p-4" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl mb-2 sm:mb-4 transition-all duration-300 hover:scale-110">
              <Users className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">{userStats?.totalUsers?.toLocaleString() || 0}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Total Users</p>
          </div>
          
          <div className="stats-card transition-all duration-300 hover:scale-105 animate-fade-in p-3 sm:p-4" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl mb-2 sm:mb-4 transition-all duration-300 hover:scale-110">
              <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-green-400" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">{userStats?.activeUsers?.toLocaleString() || 0}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Active Users</p>
          </div>

          <div className="stats-card transition-all duration-300 hover:scale-105 animate-fade-in p-3 sm:p-4" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-accent/20 rounded-xl mb-2 sm:mb-4 transition-all duration-300 hover:scale-110">
              <Activity className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">{userStats?.onlineUsers?.toLocaleString() || 0}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Online Now</p>
          </div>

          <div className="stats-card transition-all duration-300 hover:scale-105 animate-fade-in p-3 sm:p-4" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl mb-2 sm:mb-4 transition-all duration-300 hover:scale-110">
              <Server className="h-4 w-4 sm:h-6 sm:w-6 text-purple-400" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white capitalize">{currentUser.subscription_status}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Your Plan</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* User Information Widget */}
          <div className="dashboard-card p-4 sm:p-6 animate-fade-in transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center mb-4 sm:mb-6">
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Account Information</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm sm:text-base">Username</span>
                <span className="text-white font-medium text-sm sm:text-base truncate ml-2">{currentUser.username}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm sm:text-base">Status</span>
                <StatusBadge
                  status={currentUser.is_banned ? "danger" : "safe"}
                  className="text-xs sm:text-sm"
                >
                  {currentUser.is_banned ? "Banned" : "Active"}
                </StatusBadge>
              </div>
              
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm sm:text-base">Subscription</span>
                <span className="text-white font-medium capitalize text-sm sm:text-base">{currentUser.subscription_status}</span>
              </div>
              
              <div className="py-2 sm:py-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm sm:text-base">HWID Resets</span>
                </div>
                <HWIDResetProgress used={currentUser.hwid_resets_used} max={currentUser.max_hwid_resets} />
              </div>
            </div>
          </div>

          {/* Safety Status Widget */}
          <div className="dashboard-card p-4 sm:p-6 animate-fade-in transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-4 sm:mb-6">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Safety Status</h3>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              {safetyStatusData ? (
                safetyStatusData.map((product) => (
                  <div key={product.id} className="flex justify-between items-center p-3 sm:p-4 bg-black/20 rounded-xl transition-all duration-300 hover:bg-black/30">
                    <div className="text-left min-w-0 flex-1">
                      <p className="font-medium text-white text-sm sm:text-base truncate">{product.product_name}</p>
                      <p className="text-xs text-gray-400">
                        Updated: {formatDate(product.last_updated)}
                      </p>
                    </div>
                    <StatusBadge status={product.status as any} className="transition-all duration-300 hover:scale-105 ml-2 flex-shrink-0" />
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm">Loading safety status...</p>
                </div>
              )}
            </div>
          </div>

          {/* Session Information Widget */}
          <div className="dashboard-card p-4 sm:p-6 animate-fade-in transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center mb-4 sm:mb-6">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Session Details</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                <span className="text-gray-400 flex items-center text-sm sm:text-base">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  IP Address
                </span>
                <span className="text-white font-mono text-xs sm:text-sm truncate ml-2">{currentUser.ip_address}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                <span className="text-gray-400 flex items-center text-sm sm:text-base">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Member Since
                </span>
                <span className="text-white text-xs sm:text-sm">{formatDate(currentUser.created_at)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 sm:py-3">
                <span className="text-gray-400 flex items-center text-sm sm:text-base">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Last Login
                </span>
                <span className="text-white text-xs sm:text-sm">{formatDate(currentUser.last_login)}</span>
              </div>
            </div>
          </div>

          {/* Hardware Information Widget */}
          <div className="dashboard-card p-4 sm:p-6 animate-fade-in transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center mb-4 sm:mb-6">
              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Hardware Information</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-gray-400 text-xs sm:text-sm">Hardware ID</label>
                <div className="mt-2 p-2 sm:p-3 bg-black/20 rounded-xl transition-all duration-300 hover:bg-black/30">
                  <code className="text-white font-mono text-xs sm:text-sm break-all">
                    {currentUser.hwid || 'Not set'}
                  </code>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-2 sm:py-3">
                <span className="text-gray-400 text-sm sm:text-base">HWID Binding</span>
                <StatusBadge status={currentUser.hwid ? "safe" : "warning"} className="transition-all duration-300 hover:scale-105">
                  {currentUser.hwid ? "Bound" : "Not Bound"}
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
