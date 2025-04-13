
import React, { useEffect, useState } from "react";

const NewYearGreeting: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);

  useEffect(() => {
    // Delay animation start to let the page load
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 500);

    // Show English translation after showing Sinhala
    const translateTimer = setTimeout(() => {
      setShowEnglish(true);
    }, 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(translateTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="relative">
        {/* Festive decorations */}
        <div className="absolute -left-12 -top-8">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-300 rounded-full animate-pulse opacity-70"></div>
        </div>
        <div className="absolute -right-10 -top-6">
          <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-pulse opacity-70"></div>
        </div>
        
        {/* Main greeting */}
        <div 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${
            visible 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform -translate-y-8 scale-95'
          }`}
        >
          <span className="bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500 text-transparent bg-clip-text py-2 px-4 rounded-lg backdrop-blur-lg">
            සුබ අලුත් අවුරුද්දක් වේවා!
          </span>
        </div>
        
        {/* English translation */}
        <div 
          className={`text-center text-gray-300 transition-all duration-1000 ${
            showEnglish 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
        >
          <span className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            Happy New Year to you!
          </span>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-300 to-orange-500"
            style={{ 
              animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite alternate` 
            }}
          ></div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default NewYearGreeting;
