
import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  footer?: ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  children,
  className,
  headerClassName,
  footer
}) => {
  return (
    <Card className={cn(
      'overflow-hidden transition-all duration-500 animate-fade-in rounded-3xl',
      'bg-[var(--glass-bg)] backdrop-blur-[60px] saturate-[180%]',
      'border border-[var(--glass-border)]',
      'shadow-[var(--glass-shadow)] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]',
      'hover:border-accent/30 hover:bg-[rgba(255,255,255,0.06)]',
      className
    )}>
      <div className={cn(
        'py-4 px-6 border-b border-white/8',
        'bg-[rgba(255,255,255,0.02)] backdrop-blur-xl',
        headerClassName
      )}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium flex items-center gap-2">
            {icon && <span className="text-walker-DEFAULT">{icon}</span>}
            <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-violet-300 bg-clip-text text-transparent">{title}</span>
          </h3>
        </div>
      </div>
      <div className="p-6 animate-fade-in">{children}</div>
      {footer && (
        <div className="border-t border-white/8 bg-[rgba(0,0,0,0.2)] backdrop-blur-xl p-4 animate-fade-in">
          {footer}
        </div>
      )}
    </Card>
  );
};

export default DashboardCard;
