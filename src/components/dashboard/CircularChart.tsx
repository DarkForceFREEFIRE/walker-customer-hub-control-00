
import React from 'react';

interface CircularChartProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  colors?: {
    track?: string;
    progress?: string | string[];
  };
  children?: React.ReactNode;
}

const CircularChart: React.FC<CircularChartProps> = ({
  value,
  max = 100,
  size = 140,
  strokeWidth = 10,
  colors = {
    track: '#e6e6e6',
    progress: ['#00C9A7', '#FFB74D', '#FF8A65']
  },
  children
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(Math.max(value, 0), max) / max;
  const progressOffset = circumference - percentage * circumference;
  
  // Multiple arcs with different colors
  const createGradientArcs = () => {
    const progressColors = Array.isArray(colors.progress) ? colors.progress : [colors.progress];
    const segments = progressColors.length;
    const segmentSize = circumference / segments;
    
    return progressColors.map((color, index) => {
      const segmentStart = index * segmentSize;
      const segmentEnd = (index + 1) * segmentSize;
      const arcLength = Math.min(segmentSize, circumference - progressOffset - segmentStart);
      
      if (arcLength <= 0 || segmentStart > (circumference - progressOffset)) {
        return null;
      }
      
      const dashArray = `${arcLength} ${circumference - arcLength}`;
      const dashOffset = circumference - segmentStart;
      
      return (
        <circle
          key={index}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      );
    });
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colors.track || '#e6e6e610'}
          strokeWidth={strokeWidth / 2}
          className="opacity-20"
        />
        
        {/* Colored progress arcs */}
        {Array.isArray(colors.progress) ? (
          createGradientArcs()
        ) : (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colors.progress || '#00C9A7'}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default CircularChart;
