
import React from 'react';
import FloatingNavBar from './FloatingNavBar';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <FloatingNavBar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {(title || subtitle) && (
          <div className="mb-10 text-center animate-fade-in">
            {title && <h1 className="text-3xl font-bold text-white mb-3">{title}</h1>}
            {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      <footer className="py-8 border-t border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-DEFAULT to-blue-500 flex items-center justify-center text-white font-bold mr-3">
                W
              </div>
              <div>
                <p className="font-medium text-white">Walker Regedits</p>
                <p className="text-xs text-gray-500">Premium optimization tools</p>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal-DEFAULT transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-DEFAULT transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-DEFAULT transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
