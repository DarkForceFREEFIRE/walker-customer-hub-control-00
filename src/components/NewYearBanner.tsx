
import React from 'react';
import { PartyPopper, Percent } from 'lucide-react';

const NewYearBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-blue-900/20 rounded-xl overflow-hidden backdrop-blur-md p-6 mb-10 border border-white/10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-500/10 rounded-full blur-lg" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <div className="inline-flex items-center mb-2 px-3 py-1 bg-purple-900/30 rounded-full border border-purple-500/20">
                <PartyPopper className="w-4 h-4 text-purple-300 mr-2" />
                <span className="text-sm text-purple-200">Limited Time Offer</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-2">
                Sinhala & Tamil New Year Sale!
              </h2>
              
              <p className="text-gray-300 max-w-md">
                Celebrate with special discounts up to 90% off on all our packages.
                Valid until April 20th.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-300 blur-lg opacity-50 rounded-full"></div>
                <div className="relative bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-xl md:text-4xl px-6 py-3 rounded-full rotate-6 transform hover:rotate-0 transition-all duration-300 flex items-center">
                  <Percent className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  <span>UP TO 90% OFF</span>
                </div>
              </div>
              
              {/* Animated countdown */}
              <div className="mt-4 text-sm text-gray-300">
                <span className="animate-pulse">Limited time only!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full opacity-30"
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

export default NewYearBanner;
