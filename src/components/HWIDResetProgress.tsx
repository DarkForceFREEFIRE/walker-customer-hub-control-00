
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
  
  // Determine the gradient colors based on usage
  const getProgressGradient = () => {
    if (isLow) {
      return 'bg-gradient-to-r from-red-600 via-red-500 to-orange-400';
    } else if (used > max / 2) {
      return 'bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-300';
    } else {
      return 'bg-gradient-to-r from-blue-500 via-purple-400 to-violet-300';
    }
  };
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-400">HWID Resets Used</span>
        <span className={`text-sm font-medium ${isLow ? 'text-red-400' : 'text-walker-DEFAULT'}`}>
          {used} / {max}
        </span>
      </div>
      <div className="relative h-3 w-full rounded-full overflow-hidden backdrop-blur-xl bg-[rgba(255,255,255,0.03)] border border-white/10">
        <div 
          className={`absolute top-0 left-0 h-full ${getProgressGradient()} animate-pulse transition-all duration-500 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className={`text-xs ${isLow ? 'text-red-400' : 'text-gray-500'}`}>
        {remaining > 0 ? `${remaining} reset${remaining !== 1 ? 's' : ''} remaining` : 'No resets remaining'}
      </p>
    </div>
  );
};

export default HWIDResetProgress;
