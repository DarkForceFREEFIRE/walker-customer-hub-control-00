import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Activity } from 'lucide-react';

interface PerformanceItem {
  name: string;
  description: string;
  rating: number;
  color: string;
}

const performanceData: PerformanceItem[] = [
  {
    name: "C#",
    description: "Slightly faster but uses hardware resources very highly",
    rating: 25,
    color: "from-red-600 via-orange-500 to-red-400"
  },
  {
    name: "C++",
    description: "Low hardware resources usage but very slow",
    rating: 35,
    color: "from-orange-500 via-amber-400 to-orange-300"
  },
  {
    name: "Python",
    description: "Low hardware resource usage and slightly faster than others",
    rating: 50,
    color: "from-amber-500 via-yellow-400 to-amber-300"
  },
  {
    name: "Python + Customized Memory",
    description: "Low hardware resource usage and very faster than others",
    rating: 95,
    color: "from-green-600 via-emerald-500 to-green-400"
  }
];

const PerformanceComparison: React.FC = () => {
  return (
    <div className="rounded-3xl backdrop-blur-2xl backdrop-saturate-150 bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 shadow-[var(--glass-shadow)] hover:border-accent/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
          <Activity className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-300 via-purple-200 to-violet-300 bg-clip-text text-transparent">
            Memory Handling Performance
          </h3>
          <p className="text-sm text-gray-400">Comparison across different technologies</p>
        </div>
      </div>

      {/* Performance Items */}
      <div className="space-y-6">
        {performanceData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-300">{item.name}</span>
              <span className="text-sm font-semibold text-blue-300">{item.rating}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-3 w-full rounded-full overflow-hidden backdrop-blur-xl bg-[rgba(255,255,255,0.03)] border border-white/10">
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} transition-all duration-500 rounded-full shadow-lg`}
                style={{ width: `${item.rating}%` }}
              />
            </div>
            
            <p className="text-xs text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <p className="text-xs text-gray-400 text-center">
          Optimized for maximum efficiency with minimal resource consumption
        </p>
      </div>
    </div>
  );
};

export default PerformanceComparison;
