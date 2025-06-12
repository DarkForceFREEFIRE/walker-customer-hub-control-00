
import React, { useEffect, useState } from "react";

const NewYearGreeting: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // Delay animation start to let the page load
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 500);

    // Show subtitle after showing main text
    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
    }, 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="relative">
        {/* Ambient light effects */}
        <div className="absolute -left-12 -top-8 blur-3xl">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-700/30 rounded-full"></div>
        </div>
        <div className="absolute -right-10 -top-6 blur-3xl">
          <div className="w-28 h-28 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-full"></div>
        </div>
        
        {/* Main greeting */}
        <div 
          className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            visible 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform -translate-y-8 scale-95'
          }`}
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text py-2 px-4 rounded-lg backdrop-blur-lg">
            Walker Regedits
          </span>
        </div>
        
        {/* Subtitle */}
        <div 
          className={`text-center text-gray-300 transition-all duration-1000 ${
            showSubtitle 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
        >
          <span className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            Premium Gaming Optimization
          </span>
        </div>
      </div>
      
      {/* Decorative elements - glowing dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
            style={{ 
              animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite alternate` 
            }}
          ></div>
        ))}
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default NewYearGreeting;
