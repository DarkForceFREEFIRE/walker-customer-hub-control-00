
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  image: string;
  badge?: string;
  action?: string;
  className?: string;
  onAction?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  badge,
  action = "Buy now",
  className,
  onAction
}) => {
  return (
    <Card className={cn(
      'overflow-hidden relative h-[220px] group rounded-xl',
      className
    )}>
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-between h-full p-5">
        <div>
          {badge && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full mb-2 border border-white/10">
              {badge}
            </span>
          )}
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium text-lg text-white group-hover:text-teal-DEFAULT transition-colors duration-300">{title}</h3>
          <Button 
            onClick={onAction}
            size="sm"
            className="bg-teal-DEFAULT hover:bg-teal-hover text-white shadow-lg shadow-teal-DEFAULT/20 group-hover:shadow-teal-DEFAULT/40 transition-all duration-300"
          >
            {action}
          </Button>
          
          <div className="flex items-center space-x-1 mt-2">
            <span className="w-2 h-2 rounded-full bg-teal-DEFAULT animate-pulse-glow" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
