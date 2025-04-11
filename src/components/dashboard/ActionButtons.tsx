
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Upload, MessageSquare, Mail, Bell, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  icon: React.ReactNode;
  label?: string;
  color?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  className?: string;
  badge?: number;
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  icon,
  label,
  color = 'teal-DEFAULT',
  variant = 'default',
  className,
  badge,
  onClick
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 relative',
        variant === 'default' && `bg-${color} hover:bg-${color}/90`,
        className
      )}
    >
      {icon}
      {label && <span>{label}</span>}
      {badge !== undefined && (
        <span className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
          {badge}
        </span>
      )}
    </Button>
  );
};

export const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <ActionButton 
        icon={<ShoppingCart size={18} />} 
        label="Add to cart" 
        color="teal-DEFAULT"
      />
      
      <ActionButton 
        icon={<Upload size={18} />} 
        label="Upload" 
        variant="outline" 
        className="border-white/10 bg-secondary/30 hover:bg-secondary"
      />
      
      <ActionButton 
        icon={<MessageSquare size={18} />} 
        variant="ghost" 
        badge={3}
      />
      
      <ActionButton 
        icon={<Mail size={18} />} 
        variant="ghost" 
        badge={5}
      />
      
      <ActionButton 
        icon={<Bell size={18} />} 
        variant="ghost"
      />
      
      <div className="relative ml-2">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-secondary/50 border border-border/30 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-DEFAULT"
        />
      </div>
      
      <div className="ml-2 flex items-center gap-2">
        <div className="relative h-8 w-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-red-500" style={{ clipPath: 'circle(80%)' }}></div>
          <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500 border border-background"></div>
        </div>
        <div className="text-sm font-medium">80%</div>
      </div>
    </div>
  );
};

export default ActionButtons;
