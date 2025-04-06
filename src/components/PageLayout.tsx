
import React from 'react';

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
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {(title || subtitle) && (
          <div className="mb-8 text-center animate-fade-in">
            {title && <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>}
            {subtitle && <p className="text-gray-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </main>
      
      <footer className="py-6 bg-walker-dark/70 backdrop-blur-md border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Walker Regedits. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-walker-DEFAULT">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-walker-DEFAULT">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-walker-DEFAULT">
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
