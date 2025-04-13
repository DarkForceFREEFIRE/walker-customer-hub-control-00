
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { ArrowRight, CheckCircle2, ChevronDown, Star, Gift, Cake, PartyPopper, Percent, Package, Layers } from 'lucide-react';
import NewYearGreeting from '@/components/NewYearGreeting';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdGFycyIgeD0iMCIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkiLz48Y2lyY2xlIGN4PSIyNSIgY3k9IjQwIiByPSIwLjUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjE1IiByPSIwLjUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNikiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjM1IiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpIi8+PGNpcmNsZSBjeD0iNTUiIGN5PSIyNSIgcj0iMC43NSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzdGFycykiLz48L3N2Zz4=')]"></div>
        <div className="absolute left-0 right-0 top-0 h-[500px] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-3xl opacity-20"></div>
        <div className="absolute -bottom-48 left-0 right-0 h-[500px] bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      
      <main className="flex-grow">
        {/* Hero Section with Animated Greeting */}
        <section className="pt-28 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <NewYearGreeting />
            
            <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm text-accent bg-accent/10 rounded-full mb-6 border border-accent/20">
              <Star className="w-4 h-4" />
              <span>4.9/5 rating from over 1,200 users</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-accent via-primary to-blue-500 text-transparent bg-clip-text">
                Walker Regedits
              </span> for <br className="md:hidden" />
              <span className="typing-text inline-block">Pro Gamers</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              The ultimate optimization toolkit for enhancing your gaming experience, performance, and customization
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-500/90 text-white px-8 h-12 rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 text-base">
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
                <a href="#discounts" className="animate-bounce flex flex-col items-center text-gray-400 hover:text-accent transition-colors">
                  <span className="text-sm mb-2">Special New Year Discounts</span>
                  <ChevronDown className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
            
        {/* New Year Celebration Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm text-accent bg-accent/10 rounded-full mb-6 border border-accent/20">
              <PartyPopper className="w-4 h-4" />
              <span>Sinhala and Tamil New Year Celebration</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-accent via-primary to-blue-500 text-transparent bg-clip-text">
                සුබ අලුත් අවුරුද්දක් වේවා!
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Celebrate the traditional New Year with joy, prosperity, and cultural richness. 
              A time of renewal, family gatherings, and festive traditions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { 
                  icon: <Gift className="h-6 w-6 text-accent" />, 
                  text: "Festive Traditions" 
                },
                { 
                  icon: <Cake className="h-6 w-6 text-accent" />, 
                  text: "Family Celebrations" 
                },
                { 
                  icon: <PartyPopper className="h-6 w-6 text-accent" />, 
                  text: "Cultural Harmony" 
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center bg-card border border-white/5 rounded-xl p-6 hover:border-accent/30 transition-colors duration-300"
                >
                  {item.icon}
                  <span className="ml-3 text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/guides">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white px-8 h-12 rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/store">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 h-12 rounded-xl transition-all duration-300 text-base"
                >
                  Special Offers
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* New Year Discounts Section */}
        <section id="discounts" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm text-purple-300 bg-purple-900/20 rounded-full mb-6 border border-purple-500/30">
                <Percent className="w-4 h-4" />
                <span>Limited Time New Year Offers</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
                New Year Special Discounts
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Celebrate Sinhala and Tamil New Year with exclusive discounts on our premium packages
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Supreme Package",
                  icon: <Package className="h-8 w-8 text-purple-400" />,
                  originalPrice: "2,500",
                  discountedPrice: "500",
                  discount: "80%",
                  color: "from-purple-600/20 to-pink-600/20",
                  borderColor: "border-purple-500/30",
                  description: "Full premium access with priority support",
                  badge: "Most Popular"
                },
                {
                  title: "Essential Package",
                  icon: <Layers className="h-8 w-8 text-blue-400" />,
                  originalPrice: "3,000",
                  discountedPrice: "600",
                  discount: "80%",
                  color: "from-blue-600/20 to-cyan-600/20",
                  borderColor: "border-blue-500/30",
                  description: "Core features for everyday users"
                },
                {
                  title: "External Package",
                  icon: <Gift className="h-8 w-8 text-teal-400" />,
                  originalPrice: "5,000",
                  discountedPrice: "500",
                  discount: "90%",
                  color: "from-teal-600/20 to-green-600/20",
                  borderColor: "border-teal-500/30",
                  description: "Basic functionality for casual users"
                }
              ].map((pack, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-1 bg-gradient-to-br ${pack.color} backdrop-blur-xl group hover:scale-105 transition-all duration-500`}
                >
                  <div className="bg-black/80 rounded-lg p-6 h-full flex flex-col relative overflow-hidden border-t border-white/10">
                    {pack.badge && (
                      <div className="absolute -right-10 top-5 rotate-45 bg-purple-600 px-10 py-1 text-xs text-white font-medium">
                        {pack.badge}
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-black to-gray-900 border border-white/5">
                        {pack.icon}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-gray-400 line-through text-sm">Rs. {pack.originalPrice}</span>
                        <span className="text-2xl font-bold text-white">Rs. {pack.discountedPrice}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{pack.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs bg-purple-900/30 text-purple-300 rounded-full mb-3 border border-purple-500/20">
                      Save {pack.discount}
                    </span>
                    <p className="text-gray-400 mb-6 flex-grow">{pack.description}</p>
                    <Link to="/store">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                        Buy Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Supreme + Essential Bundle",
                  icon: <Layers className="h-8 w-8 text-indigo-400" />,
                  originalPrice: "1,840",
                  discountedPrice: "920",
                  discount: "50%",
                  color: "from-indigo-600/20 to-blue-600/20",
                  borderColor: "border-indigo-500/30",
                  description: "Perfect combination of our top packages"
                },
                {
                  title: "Complete Bundle",
                  icon: <Layers className="h-8 w-8 text-violet-400" />,
                  originalPrice: "6,000",
                  discountedPrice: "1,200",
                  discount: "80%",
                  color: "from-violet-600/20 to-fuchsia-600/20",
                  borderColor: "border-violet-500/30",
                  description: "Supreme + Essential + External - everything included",
                  badge: "Best Value"
                }
              ].map((bundle, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-1 bg-gradient-to-br ${bundle.color} backdrop-blur-xl group hover:scale-105 transition-all duration-500`}
                >
                  <div className="bg-black/80 rounded-lg p-6 flex flex-col md:flex-row md:items-center relative overflow-hidden border-t border-white/10">
                    {bundle.badge && (
                      <div className="absolute -right-10 top-5 rotate-45 bg-violet-600 px-10 py-1 text-xs text-white font-medium">
                        {bundle.badge}
                      </div>
                    )}
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-black to-gray-900 border border-white/5">
                        {bundle.icon}
                      </div>
                    </div>
                    <div className="flex-grow md:mr-6">
                      <h3 className="text-xl font-bold mb-1 text-white">{bundle.title}</h3>
                      <span className="inline-block px-2 py-1 text-xs bg-purple-900/30 text-purple-300 rounded-full mb-2 border border-purple-500/20">
                        Save {bundle.discount}
                      </span>
                      <p className="text-gray-400">{bundle.description}</p>
                    </div>
                    <div className="flex flex-col items-end mt-4 md:mt-0">
                      <span className="text-gray-400 line-through text-sm">Rs. {bundle.originalPrice}</span>
                      <span className="text-2xl font-bold text-white mb-3">Rs. {bundle.discountedPrice}</span>
                      <Link to="/store">
                        <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">Key Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our toolkit provides everything you need to elevate your gaming experience
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
                      <path d="M9 12H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  description: "Built with security in mind, our tools are regularly updated to keep you safe."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-card border border-white/5 rounded-xl p-6 flex flex-col items-center text-center hover:border-teal-DEFAULT/30 transition-colors duration-300 backdrop-blur-sm">
                  <div className="text-teal-DEFAULT mb-4 p-3 bg-teal-DEFAULT/10 rounded-xl border border-teal-DEFAULT/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-DEFAULT/20 to-blue-500/10 opacity-10 rounded-3xl mx-4 lg:mx-16"></div>
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Enhance Your Gaming Experience?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of satisfied gamers who have improved their gameplay with Walker Regedits.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                "Improved FPS", "Reduced Lag", "Enhanced Visuals", "Optimized Settings", "Easy to Use", "Constant Updates"
              ].map((item, i) => (
                <div key={i} className="flex items-center bg-card border border-white/5 rounded-lg px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-DEFAULT mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/store">
                <Button size="lg" className="bg-teal-DEFAULT hover:bg-teal-hover text-white px-8 h-12 rounded-xl shadow-lg shadow-teal-DEFAULT/20 hover:shadow-teal-DEFAULT/30 transition-all duration-300 text-base">
                  View Packages
                </Button>
              </Link>
              <Link to="/guides">
                <Button size="lg" variant="outline" className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 h-12 rounded-xl transition-all duration-300 text-base">
                  Read Guides
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-DEFAULT to-blue-500 flex items-center justify-center text-white font-bold mr-3">
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
              <Link to="/dashboard" className="text-gray-300 hover:text-teal-DEFAULT">Dashboard</Link>
              <Link to="/store" className="text-gray-300 hover:text-teal-DEFAULT">Store</Link>
              <Link to="/downloads" className="text-gray-300 hover:text-teal-DEFAULT">Downloads</Link>
              <Link to="/guides" className="text-gray-300 hover:text-teal-DEFAULT">Guides</Link>
              <Link to="/redeem" className="text-gray-300 hover:text-teal-DEFAULT">Redeem</Link>
              <Link to="/login" className="text-gray-300 hover:text-teal-DEFAULT">Login</Link>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Walker Regedits. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal-DEFAULT">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-DEFAULT">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-DEFAULT">
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

