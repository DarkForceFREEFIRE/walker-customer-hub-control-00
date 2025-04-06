
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-walker-dark to-background z-[-1]"></div>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-walker-light to-walker-DEFAULT text-transparent bg-clip-text">
                Walker Regedits
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your gaming experience with our professional toolkit for enhanced performance and customization
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="bg-walker-DEFAULT hover:bg-walker-hover text-white px-8">
                  Dashboard
                </Button>
              </Link>
              <Link to="/downloads">
                <Button size="lg" variant="outline" className="border-walker-DEFAULT text-walker-DEFAULT hover:bg-walker-DEFAULT hover:text-white px-8">
                  Download Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our tools provide everything you need to maximize your gaming experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Performance Optimization",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 4V10.2C14 10.6418 14 10.8627 14.0435 11.054C14.1074 11.3253 14.2415 11.5747 14.4321 11.7699C14.5857 11.9268 14.7903 12.0395 15.1997 12.2649L17.8787 13.6044C18.2972 13.8364 18.5063 13.9525 18.6237 14.1262C18.8253 14.4146 18.8773 14.782 18.7682 15.1125C18.7033 15.3058 18.5394 15.4949 18.2118 15.873L16.75 17.566M3 8L5.5 10.5M10 3L12 6M3 17H6M5 14L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 14C20 17.866 16.866 21 13 21C9.13401 21 6 17.866 6 14C6 10.134 9.13401 7 13 7C16.866 7 20 10.134 20 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  description: "Boost FPS and reduce input lag with our advanced optimization techniques."
                },
                {
                  title: "Custom Configuration",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.95384 2.88336C10.5814 2.40234 11.4186 2.40234 12.0462 2.88336L16.4637 6.20302C17.2315 6.78050 17.1101 7.90816 16.2541 8.33421L12 10.2475L7.74589 8.33421C6.88989 7.90816 6.76849 6.78051 7.53633 6.20302L9.95384 2.88336Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.9235 11.0657C21.1884 11.748 20.8804 12.5081 20.1965 12.7705L12.0004 16L3.80397 12.7705C3.12008 12.5081 2.81211 11.748 3.07708 11.0657C3.30126 10.4922 3.86246 10.1518 4.46568 10.325L12.0004 13.0001L19.5352 10.325C20.1384 10.1518 20.6995 10.4922 20.9235 11.0657Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.9235 15.0657C21.1884 15.748 20.8804 16.5081 20.1965 16.7705L12.0004 20.0001L3.80397 16.7705C3.12008 16.5081 2.81211 15.748 3.07708 15.0657C3.30126 14.4922 3.86246 14.1518 4.46568 14.325L12.0004 17.0001L19.5352 14.325C20.1384 14.1518 20.6995 14.4922 20.9235 15.0657Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  description: "Create and save custom configurations tailored to your specific needs."
                },
                {
                  title: "Secure & Reliable",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 9V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  description: "Built with security in mind, our tools are regularly updated to keep you safe."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-walker-dark/50 border border-white/5 rounded-lg p-6 flex flex-col items-center text-center hover:border-walker-DEFAULT/30 transition-colors duration-300">
                  <div className="text-walker-DEFAULT mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-walker-dark/50 to-walker-DEFAULT/20 border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Gaming Experience?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied users who have improved their gameplay with Walker Regedits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/store">
                <Button size="lg" className="bg-walker-DEFAULT hover:bg-walker-hover text-white px-8">
                  View Packages
                </Button>
              </Link>
              <Link to="/guides">
                <Button size="lg" variant="outline" className="border-white/20 hover:border-walker-DEFAULT hover:bg-walker-DEFAULT/10 px-8">
                  Read Guides
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 bg-walker-dark/70 backdrop-blur-md border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-walker-DEFAULT to-purple-800 flex items-center justify-center text-white font-bold mr-2">
                  W
                </div>
                <span className="text-xl font-bold">Walker Regedits</span>
              </div>
              <p className="text-gray-400 mt-2">
                Premium optimization tools for gamers
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center md:text-left">
              <Link to="/dashboard" className="text-gray-300 hover:text-walker-DEFAULT">Dashboard</Link>
              <Link to="/store" className="text-gray-300 hover:text-walker-DEFAULT">Store</Link>
              <Link to="/downloads" className="text-gray-300 hover:text-walker-DEFAULT">Downloads</Link>
              <Link to="/guides" className="text-gray-300 hover:text-walker-DEFAULT">Guides</Link>
              <Link to="/redeem" className="text-gray-300 hover:text-walker-DEFAULT">Redeem</Link>
              <Link to="/login" className="text-gray-300 hover:text-walker-DEFAULT">Login</Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
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

export default Index;
