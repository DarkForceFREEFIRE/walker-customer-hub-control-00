
import React, { useState } from 'react';
import { RefreshCw, Shield, User, Settings, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import PageLayout from '@/components/PageLayout';
import DashboardCard from '@/components/DashboardCard';
import StatusBadge from '@/components/StatusBadge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { toast } from 'sonner';

// Mock user data - would come from Supabase in reality
const userData = {
  id: 4,
  username: "Walker",
  subscription_status: "Owner",
  is_banned: false,
  hwid: "59613b20713f7d0b4e588022ef8f8a00",
  ip_address: "116.206.247.34",
  created_at: "2025-03-26 08:36:25.483433+00",
  updated_at: "2025-04-06 09:47:55.256694+00",
  last_login: "2025-04-06 13:32:46.852975+00",
  hwid_resets_used: 12,
  max_hwid_resets: 999,
  is_tester: false
};

// Mock safety status data - would come from Supabase in reality
const safetyStatusData = [
  { id: 1, product_name: "Supreme", status: "safe" as const, last_updated: "2025-03-28 07:54:23.219177+00" },
  { id: 2, product_name: "Essential", status: "safe" as const, last_updated: "2025-03-28 07:54:23.219177+00" },
  { id: 3, product_name: "External", status: "maintenance" as const, last_updated: "2025-03-28 07:54:23.219177+00" }
];

const Dashboard = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    setTimeout(() => {
      toast.success("Safety status refreshed");
      setIsRefreshing(false);
    }, 1500);
  };
  
  const handleHWIDReset = () => {
    toast.success("HWID has been reset successfully");
  };
  
  const handleDeleteAccount = () => {
    toast.error("Account deletion requested");
  };

  return (
    <PageLayout title="Dashboard" subtitle="Manage your account and check product status">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Information Card */}
        <DashboardCard 
          title="User Information" 
          icon={<User size={18} />}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <div>
              <p className="text-sm text-gray-400">Username</p>
              <p className="font-medium">{userData.username}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Subscription</p>
              <p className="font-medium">{userData.subscription_status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Status</p>
              <StatusBadge 
                status={userData.is_banned ? "danger" : "safe"} 
                className="mt-1"
              >
                {userData.is_banned ? "Banned" : "Active"}
              </StatusBadge>
            </div>
            <div>
              <p className="text-sm text-gray-400">IP Address</p>
              <p className="font-medium">{userData.ip_address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">HWID</p>
              <p className="font-medium text-xs truncate">{userData.hwid}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">HWID Resets</p>
              <p className="font-medium">
                {userData.hwid_resets_used} / {userData.max_hwid_resets}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Created Date</p>
              <p className="font-medium">{formatDate(userData.created_at)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Last Login</p>
              <p className="font-medium">{formatDate(userData.last_login)}</p>
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
                className="text-sm hover:bg-walker-DEFAULT hover:text-white"
              >
                <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            {safetyStatusData.map((product) => (
              <div key={product.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{product.product_name}</p>
                  <p className="text-xs text-gray-400">
                    Updated: {formatDate(product.last_updated)}
                  </p>
                </div>
                <StatusBadge status={product.status} />
              </div>
            ))}
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
                You have {userData.max_hwid_resets - userData.hwid_resets_used} resets remaining.
              </p>
              <Button 
                onClick={handleHWIDReset}
                className="bg-walker-DEFAULT hover:bg-walker-hover"
              >
                Reset HWID
              </Button>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Delete Account</h4>
              <p className="text-sm text-gray-400 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    Delete Account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-walker-dark border-white/10">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove all data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </DashboardCard>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
