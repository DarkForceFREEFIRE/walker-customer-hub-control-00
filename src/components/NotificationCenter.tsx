import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Bell, Check, Info, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type Notification = {
  id: string;
  user_id: number;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  created_at: string;
  link?: string;
  is_read?: boolean; // Computed on client side
};

const NotificationCenter = () => {
  const queryClient = useQueryClient();
  const { currentUser } = useAuth();

  const { data: notifications = [], isLoading } = useQuery({
    queryKey: ['notifications', currentUser?.id],
    queryFn: async () => {
      if (!currentUser) return [];

      // Fetch notifications
      const { data: notificationData, error: notifError } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (notifError) throw notifError;

      // Fetch current user's read status
      const { data: readData, error: readError } = await supabase
        .from('notification_reads')
        .select('notification_id')
        .eq('user_id', currentUser.id);

      if (readError) throw readError;

      const readNotificationIds = new Set(readData?.map(r => r.notification_id) || []);

      // Merge read status into notifications
      return (notificationData || []).map(notification => ({
        ...notification,
        is_read: readNotificationIds.has(notification.id)
      })) as Notification[];
    },
    enabled: !!currentUser,
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (id: string) => {
      if (!currentUser) throw new Error('Not authenticated');

      const { error } = await supabase
        .from('notification_reads')
        .insert({ notification_id: id, user_id: currentUser.id });

      if (error && error.code !== '23505') throw error; // Ignore duplicate key error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications', currentUser?.id] });
    },
  });

  const markAllAsReadMutation = useMutation({
    mutationFn: async () => {
      if (!currentUser) throw new Error('Not authenticated');

      const unreadNotifications = notifications.filter(n => !n.is_read);
      const reads = unreadNotifications.map(n => ({
        notification_id: n.id,
        user_id: currentUser.id
      }));

      if (reads.length === 0) return;

      const { error } = await supabase
        .from('notification_reads')
        .insert(reads);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications', currentUser?.id] });
      toast.success('All notifications marked as read');
    },
  });

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="h-4 w-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-400" />;
      default:
        return <Info className="h-4 w-4 text-blue-400" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-500/20 bg-green-500/10';
      case 'warning':
        return 'border-yellow-500/20 bg-yellow-500/10';
      case 'error':
        return 'border-red-500/20 bg-red-500/10';
      default:
        return 'border-blue-500/20 bg-blue-500/10';
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative w-9 h-9 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <Bell size={16} />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-accent to-blue-500 flex items-center justify-center text-xs font-bold text-white animate-pulse">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={cn(
          "w-80 sm:w-96 p-0 border",
          "bg-black/20 backdrop-blur-xl border-white/10"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="font-semibold text-white">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => markAllAsReadMutation.mutate()}
              className="text-xs text-accent hover:text-accent/80"
            >
              <Check className="h-3 w-3 mr-1" />
              Mark all read
            </Button>
          )}
        </div>

        <ScrollArea className="h-[400px]">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          ) : notifications.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">No notifications yet</p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-4 transition-all duration-300 hover:bg-white/5 cursor-pointer group",
                    !notification.is_read && "bg-white/5"
                  )}
                  onClick={() => {
                    if (!notification.is_read) {
                      markAsReadMutation.mutate(notification.id);
                    }
                    if (notification.link) {
                      window.location.href = notification.link;
                    }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "p-2 rounded-xl border transition-all duration-300",
                      getTypeColor(notification.type)
                    )}>
                      {getIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-white text-sm leading-tight">
                          {notification.title}
                        </h4>
                        {!notification.is_read && (
                          <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {formatTime(notification.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;
