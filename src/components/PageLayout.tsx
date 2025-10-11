import React from 'react';
import NavBar from './NavBar';
interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  subtitle,
  className = ""
}) => {
  return <div className="min-h-screen flex flex-col bg-black">
      <NavBar />
      
      <main className={`flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full ${className}`}>
        {(title || subtitle) && <div className="mb-10 text-center animate-fade-in">
            {title && <h1 className="text-3xl font-bold text-white mb-3">{title}</h1>}
            {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
          </div>}
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      <footer className="py-8 border-t border-white/8 backdrop-blur-[60px] saturate-[180%] bg-[rgba(255,255,255,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-white font-bold mr-3 backdrop-blur-xl shadow-lg">
                W
              </div>
              <div>
                <p className="font-medium text-white">Walker Regedits</p>
                <p className="text-xs text-gray-500">Premium optimization tools</p>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 flex space-x-6">
              <a href="/terms" className="text-gray-400 hover:text-accent transition-colors">
                Terms
              </a>
              <a href="/disclaimer" className="text-gray-400 hover:text-accent transition-colors">
                Disclaimer
              </a>
              <a href="/refund-policy" className="text-gray-400 hover:text-accent transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default PageLayout;