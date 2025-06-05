
import React from 'react';
import { Zap, Star } from 'lucide-react';

const CoolBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 rounded-xl overflow-hidden backdrop-blur-md p-6 mb-10 border border-white/10">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-500/10 rounded-full blur-lg" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <div className="inline-flex items-center mb-2 px-3 py-1 bg-blue-900/30 rounded-full border border-blue-500/20">
                <Star className="w-4 h-4 text-blue-300 mr-2" />
                <span className="text-sm text-blue-200">Premium Performance</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-2">
                Ultimate Gaming Experience
              </h2>
              
              <p className="text-gray-300 max-w-md">
                Take your gaming to the next level with our premium optimization tools.
                Experience higher FPS and lower latency.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-50 rounded-full"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-bold text-xl md:text-4xl px-6 py-3 rounded-full rotate-3 transform hover:rotate-0 transition-all duration-300 flex items-center">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  <span>OPTIMIZE NOW</span>
                </div>
              </div>
              
              {/* Animation */}
              <div className="mt-4 text-sm text-gray-300">
                <span className="animate-pulse">Unlock your potential</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-30"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite alternate`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          100% { transform: translateY(-20px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CoolBanner;
