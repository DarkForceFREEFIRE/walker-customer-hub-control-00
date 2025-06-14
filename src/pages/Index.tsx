import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { ArrowRight, CheckCircle2, ChevronDown, Star, Gift, Package, Layers } from 'lucide-react';
import NewYearGreeting from '@/components/NewYearGreeting';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdGFycyIgeD0iMCIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkiLz48Y2lyY2xlIGN4PSIyNSIgY3k9IjQwIiByPSIwLjUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNikiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjE1IiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpIi8+PGNpcmNsZSBjeD0iNTUiIGN5PSIyNSIgcj0iMC43NSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzdGFycykiLz48L3N2Zz4=')]"></div>
        <div className="absolute left-0 right-0 top-0 h-[500px] bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent blur-3xl opacity-20"></div>
        <div className="absolute -bottom-48 left-0 right-0 h-[500px] bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      
      <main className="flex-grow">
        {/* Hero Section with Animated Greeting */}
        <section className="pt-28 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <NewYearGreeting />
            
            <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm text-blue-300 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
              <Star className="w-4 h-4" />
              <span>4.9/5 rating from over 1,200 users</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-transparent bg-clip-text">
                Walker Regedits
              </span> for <br className="md:hidden" />
              <span className="typing-text inline-block">Pro Gamers</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              The ultimate optimization toolkit for enhancing your gaming experience, performance, and customization
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 h-12 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 text-base">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/downloads">
                <Button size="lg" variant="outline" className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 h-12 rounded-xl transition-all duration-300 text-base">
                  Download Now
                </Button>
              </Link>
            </div>
            
            <div className="mt-20 md:mt-28 relative">
              <div className="flex justify-center">
                <a href="#features" className="animate-bounce flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="text-sm mb-2">Explore Features</span>
                  <ChevronDown className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
            
        {/* Features Section - Fixed width issue */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/10 via-blue-900/5 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-transparent bg-clip-text">
                Premium Features
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Advanced tools designed to give you the competitive edge in gaming
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: <Package className="h-6 w-6 text-blue-400" />,
                  text: "Performance Optimization"
                },
                {
                  icon: <Layers className="h-6 w-6 text-cyan-400" />,
                  text: "Custom Game Settings"
                },
                {
                  icon: <Gift className="h-6 w-6 text-indigo-400" />,
                  text: "Priority Support"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center bg-card/50 backdrop-blur-sm border border-white/5 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300">
                  {item.icon}
                  <span className="ml-3 text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/guides">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-12 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/store">
                <Button size="lg" variant="outline" className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 h-12 rounded-lg transition-all duration-300 text-base">
                  View Packages
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Premium Packages - Fixed width issue */}
        <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900/20 via-blue-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm text-blue-300 bg-blue-900/20 rounded-full mb-6 border border-blue-500/30">
                <Package className="w-4 h-4" />
                <span>Premium Packages</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-300 text-transparent bg-clip-text">
                Choose Your Perfect Package
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Select from our range of optimization packages tailored to your gaming needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Supreme Package",
                  icon: <Package className="h-8 w-8 text-blue-400" />,
                  price: "2,500",
                  color: "from-blue-600/20 to-cyan-600/20",
                  borderColor: "border-blue-500/30",
                  description: "Full premium access with priority support",
                  badge: "Most Popular"
                },
                {
                  title: "Essential Package",
                  icon: <Layers className="h-8 w-8 text-cyan-400" />,
                  price: "3,000",
                  color: "from-cyan-600/20 to-indigo-600/20",
                  borderColor: "border-cyan-500/30",
                  description: "Core features for everyday users"
                },
                {
                  title: "External Package",
                  icon: <Gift className="h-8 w-8 text-indigo-400" />,
                  price: "5,000",
                  color: "from-indigo-600/20 to-blue-600/20",
                  borderColor: "border-indigo-500/30",
                  description: "Basic functionality for casual users"
                }
              ].map((pack, index) => (
                <div key={index} className={`rounded-lg p-1 bg-gradient-to-br ${pack.color} backdrop-blur-xl group hover:scale-105 transition-all duration-500`}>
                  <div className="bg-black/80 rounded-lg p-6 h-full flex flex-col relative overflow-hidden border-t border-white/10">
                    {pack.badge && (
                      <div className="absolute -right-10 top-5 rotate-45 bg-gradient-to-r from-blue-600 to-cyan-600 px-10 py-1 text-xs text-white font-medium">
                        {pack.badge}
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-black to-gray-900 border border-white/5">
                        {pack.icon}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-bold text-white text-left">Rs. {pack.price}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{pack.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{pack.description}</p>
                    <Link to="/store">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section - Fixed width issue */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 opacity-10 rounded-xl"></div>
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Enhance Your Gaming Experience?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of satisfied gamers who have improved their gameplay with Walker Regedits.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {["Improved FPS", "Reduced Lag", "Enhanced Visuals", "Optimized Settings", "Easy to Use", "Constant Updates"].map((item, i) => (
                  <div key={i} className="flex items-center bg-card/50 backdrop-blur-sm border border-white/5 rounded-lg px-4 py-3 hover:border-blue-500/20 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link to="/store">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-12 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 text-base">
                    View Packages
                  </Button>
                </Link>
                <Link to="/guides">
                  <Button size="lg" variant="outline" className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 h-12 rounded-lg transition-all duration-300 text-base">
                    Read Guides
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-3">
                  W
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Walker Regedits</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Premium optimization tools for gamers
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center md:text-left md:flex md:space-x-8">
              <Link to="/dashboard" className="text-gray-300 hover:text-blue-400">Dashboard</Link>
              <Link to="/store" className="text-gray-300 hover:text-blue-400">Store</Link>
              <Link to="/downloads" className="text-gray-300 hover:text-blue-400">Downloads</Link>
              <Link to="/guides" className="text-gray-300 hover:text-blue-400">Guides</Link>
              <Link to="/redeem" className="text-gray-300 hover:text-blue-400">Redeem</Link>
              <Link to="/login" className="text-gray-300 hover:text-blue-400">Login</Link>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Walker Regedits. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
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
