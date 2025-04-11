
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
      'overflow-hidden relative h-[220px] group',
      className
    )}>
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        <div>
          {badge && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-background/20 backdrop-blur-sm rounded-md mb-2">
              {badge}
            </span>
          )}
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium text-lg text-white">{title}</h3>
          <Button 
            onClick={onAction}
            size="sm"
            className="bg-teal-DEFAULT hover:bg-teal-dark text-white"
          >
            {action}
          </Button>
          
          <div className="flex space-x-1 mt-2">
            <span className="w-2 h-2 rounded-full bg-teal-DEFAULT" />
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
