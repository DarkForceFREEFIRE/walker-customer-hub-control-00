
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type StatusType = 'safe' | 'maintenance' | 'danger' | 'warning' | 'risk';

export interface StatusBadgeProps {
  status: StatusType;
  className?: string;
  children?: ReactNode;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className, children }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'safe':
        return 'bg-gradient-to-r from-green-500/20 to-emerald-400/20 text-green-400 border-green-500/20';
      case 'maintenance':
        return 'bg-gradient-to-r from-amber-500/20 to-yellow-400/20 text-amber-400 border-amber-500/20';
      case 'danger':
        return 'bg-gradient-to-r from-red-600/20 to-red-400/20 text-red-400 border-red-500/20';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500/20 to-amber-400/20 text-yellow-400 border-yellow-500/20';
      case 'risk':
        return 'bg-gradient-to-r from-red-700/30 to-red-500/20 text-red-500 border-red-600/30';
      default:
        return 'bg-gradient-to-r from-gray-600/20 to-gray-400/20 text-gray-400 border-gray-500/20';
    }
  };

  const getPulsingEffect = () => {
    if (status === 'safe') return 'animate-pulse';
    if (status === 'risk') return 'animate-pulse';
    return '';
  };

  return (
    <div className={cn(
      'inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-medium backdrop-blur-sm shadow-lg',
      getStatusStyles(),
      className
    )}>
      <span className={`h-2 w-2 rounded-full mr-1.5 ${getPulsingEffect()}`} style={{ backgroundColor: 'currentColor' }}></span>
      <span className="capitalize">{children || status}</span>
    </div>
  );
};

export default StatusBadge;
