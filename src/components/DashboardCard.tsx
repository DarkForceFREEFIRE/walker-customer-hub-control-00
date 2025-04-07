
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
      'border-white/5 overflow-hidden backdrop-blur-sm hover:border-walker-DEFAULT/30 transition-colors duration-300 animate-fade-in shadow-xl shadow-black/40 bg-gradient-to-br from-[#1d1a24]/70 to-[#15141B]/70',
      className
    )}>
      <div className={cn(
        'py-4 px-6 border-b border-white/5 bg-black/20',
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
        <div className="border-t border-white/5 bg-black/30 p-4 animate-fade-in">
          {footer}
        </div>
      )}
    </Card>
  );
};

export default DashboardCard;
