
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  chart?: React.ReactNode;
  percentage?: number;
  className?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'teal' | 'yellow' | 'orange' | 'blue' | 'default';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  chart,
  percentage,
  className,
  trend = 'neutral',
  color = 'default'
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'teal':
        return 'bg-teal-DEFAULT/20 border-teal-DEFAULT/30';
      case 'yellow':
        return 'bg-amber-500/10 border-amber-500/20';
      case 'orange':
        return 'bg-orange-500/10 border-orange-500/20';
      case 'blue':
        return 'bg-blue-500/10 border-blue-500/20';
      default:
        return 'bg-card border-border/50';
    }
  };

  const getTrendIcon = () => {
    if (trend === 'up') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
          <path d="M8 4L12 8L10.6 9.4L8.5 7.3V12H7.5V7.3L5.4 9.4L4 8L8 4Z" fill="currentColor" />
        </svg>
      );
    }
    if (trend === 'down') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
          <path d="M8 12L4 8L5.4 6.6L7.5 8.7V4H8.5V8.7L10.6 6.6L12 8L8 12Z" fill="currentColor" />
        </svg>
      );
    }
    return null;
  };

  return (
    <Card className={cn(
      'p-4 h-full overflow-hidden',
      getColorClass(),
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-2xl font-semibold">{value}</h3>
            {percentage !== undefined && (
              <div className="flex items-center text-sm">
                {getTrendIcon()}
                <span className={cn(
                  trend === 'up' ? 'text-green-500' : 
                  trend === 'down' ? 'text-red-500' : 
                  'text-muted-foreground'
                )}>
                  {percentage}%
                </span>
              </div>
            )}
          </div>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        
        {icon && (
          <div className="text-primary">
            {icon}
          </div>
        )}
      </div>
      
      {chart && (
        <div className="mt-4">
          {chart}
        </div>
      )}
    </Card>
  );
};

export default StatCard;
