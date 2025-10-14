import React from 'react';
import { motion } from 'framer-motion';
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

// Animation variants for the container to orchestrate staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for each item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const PerformanceComparison: React.FC = () => {
  // SVG Graph Constants
  const svgWidth = 400;
  const svgHeight = 250;
  const padding = 40;
  
  // Function to map data points to SVG coordinates
  const getPathData = () => {
    let path = `M ${padding},${svgHeight - padding - (performanceData[0].rating / 100) * (svgHeight - 2 * padding)}`;
    performanceData.forEach((item, index) => {
      if (index === 0) return;
      const x = padding + (index / (performanceData.length - 1)) * (svgWidth - 2 * padding);
      const y = svgHeight - padding - (item.rating / 100) * (svgHeight - 2 * padding);
      path += ` L ${x},${y}`;
    });
    return path;
  };

  const pathData = getPathData();

  return (
    <motion.div 
      className="rounded-3xl backdrop-blur-2xl backdrop-saturate-150 bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 shadow-[var(--glass-shadow)] hover:border-accent/30 transition-all duration-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.div 
        className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
          <Activity className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-300 via-purple-200 to-violet-300 bg-clip-text text-transparent">
            Memory Handling Performance
          </h3>
          <p className="text-sm text-gray-400">Comparison across different technologies</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column: Progress Bars */}
        <motion.div className="space-y-6" variants={itemVariants}>
          {performanceData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-300">{item.name}</span>
                <span className="text-sm font-semibold text-blue-300">{item.rating}%</span>
              </div>
              <div className="relative h-3 w-full rounded-full overflow-hidden backdrop-blur-xl bg-[rgba(255,255,255,0.03)] border border-white/10">
                <motion.div 
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} rounded-full shadow-lg`}
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${item.rating}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                />
              </div>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Right Column: Performance Graph */}
        <motion.div className="relative" variants={itemVariants}>
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto">
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="33%" stopColor="#f59e0b" />
                <stop offset="66%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map(val => (
                <g key={val}>
                    <line x1={padding} y1={svgHeight - padding - (val/100) * (svgHeight - 2 * padding)} x2={svgWidth - padding} y2={svgHeight - padding - (val/100) * (svgHeight - 2 * padding)} stroke="rgba(255,255,255,0.05)" />
                    <text x={padding - 10} y={svgHeight - padding - (val/100) * (svgHeight - 2 * padding) + 4} fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="end">{val}%</text>
                </g>
            ))}

            {/* Animated Graph Line */}
            <motion.path
              d={pathData}
              fill="none"
              stroke="url(#line-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Data Points */}
            {performanceData.map((item, index) => {
              const x = padding + (index / (performanceData.length - 1)) * (svgWidth - 2 * padding);
              const y = svgHeight - padding - (item.rating / 100) * (svgHeight - 2 * padding);
              return (
                <motion.circle
                  key={item.name}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#fff"
                  stroke="rgba(0,0,0,0.5)"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                />
              );
            })}
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PerformanceComparison;
