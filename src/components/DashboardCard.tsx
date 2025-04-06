
import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  children,
  className,
  footer
}) => {
  return (
    <Card className={cn('border-white/5 bg-card overflow-hidden', className)}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            {icon && <span className="text-walker-DEFAULT">{icon}</span>}
            {title}
          </h3>
        </div>
        <div>{children}</div>
      </div>
      {footer && (
        <div className="border-t border-white/5 bg-black/20 p-4">
          {footer}
        </div>
      )}
    </Card>
  );
};

export default DashboardCard;
