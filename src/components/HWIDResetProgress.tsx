
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface HWIDResetProgressProps {
  used: number;
  max: number;
}

const HWIDResetProgress: React.FC<HWIDResetProgressProps> = ({ used, max }) => {
  const percentage = Math.min(Math.floor((used / max) * 100), 100);
  const remaining = max - used;
  const isLow = remaining <= 1;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-400">HWID Resets Used</span>
        <span className={`text-sm font-medium ${isLow ? 'text-red-400' : 'text-walker-DEFAULT'}`}>
          {used} / {max}
        </span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-gray-700/50"
        // Add custom styling for the progress bar based on remaining resets
        style={{
          '--progress-background': isLow ? '#f87171' : '#9b87f5',
        } as React.CSSProperties}
      />
      <p className={`text-xs ${isLow ? 'text-red-400' : 'text-gray-500'}`}>
        {remaining > 0 ? `${remaining} reset${remaining !== 1 ? 's' : ''} remaining` : 'No resets remaining'}
      </p>
    </div>
  );
};

export default HWIDResetProgress;
