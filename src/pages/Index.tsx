import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { ArrowRight, CheckCircle2, Star, Shield, Zap, Users, Download, Play, Trophy } from 'lucide-react';
import NewYearGreeting from '@/components/NewYearGreeting';
import PerformanceComparison from '@/components/PerformanceComparison';
const Index = () => {
  return <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <NewYearGreeting />
          
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-blue-300">Trusted by 1,200+ Pro Gamers</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Walker Regedits for Pro Gamers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              The ultimate optimization toolkit for enhancing your gaming performance, 
              customization, and competitive edge.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/downloads">
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                Download Free
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-gray-400">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-gray-400">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Premium Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced tools designed to give you the competitive edge
            </p>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Performance Boost",
            description: "Optimize your system for maximum FPS and reduced lag"
          }, {
            icon: <Shield className="w-8 h-8 text-blue-400" />,
            title: "Safe & Secure",
            description: "All tools are verified and completely safe to use"
          }, {
            icon: <Trophy className="w-8 h-8 text-purple-400" />,
            title: "Pro Gaming",
            description: "Features specifically designed for competitive gaming"
          }, {
            icon: <Users className="w-8 h-8 text-cyan-400" />,
            title: "Community",
            description: "Join thousands of satisfied gamers worldwide"
          }].map((feature, index) => <div key={index} className="group">
                <div className="rounded-3xl backdrop-blur-xl backdrop-saturate-150 bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 h-full transition-all duration-300 transform hover:-translate-y-2 hover:bg-[var(--glass-bg-hover)] hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Performance Comparison Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our optimized memory handling outperforms traditional solutions
            </p>
          </div>
          
          <PerformanceComparison />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Choose Your Package
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select the perfect package for your gaming needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            name: "Supreme Package",
            price: "2,500",
            description: "Full premium access with priority support",
            features: ["All Premium Features", "Priority Support", "Regular Updates", "Performance Analytics"],
            popular: true,
            gradient: "from-blue-600 to-cyan-600"
          }, {
            name: "Essential Package",
            price: "3,000",
            description: "Core features for everyday users",
            features: ["Core Optimization", "Basic Support", "Monthly Updates", "Gaming Profiles"],
            popular: false,
            gradient: "from-purple-600 to-pink-600"
          }, {
            name: "External Package",
            price: "5,000",
            description: "Advanced tools for power users",
            features: ["Advanced Features", "Custom Configs", "24/7 Support", "Beta Access"],
            popular: false,
            gradient: "from-indigo-600 to-blue-600"
          }].map((plan, index) => <div key={index} className="relative">
                {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-lg shadow-lg">
                      Most Popular
                    </div>
                  </div>}
                <div className={`rounded-3xl backdrop-blur-xl backdrop-saturate-150 bg-[var(--glass-bg)] border ${plan.popular ? 'border-blue-500/40' : 'border-[var(--glass-border)]'} p-8 h-full transition-all duration-300 transform hover:scale-105 hover:bg-[var(--glass-bg-hover)] hover:border-accent/30 shadow-[var(--glass-shadow)]`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">Rs. {plan.price}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => <div key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>)}
                  </div>
                  
                  <Link to="/store">
                    <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white rounded-xl py-3 font-semibold`}>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Level Up</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied gamers who have transformed their gaming experience with Walker Regedits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/store">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl shadow-blue-500/25">
                <Play className="mr-2 h-5 w-5" />
                Start Now
              </Button>
            </Link>
            <Link to="/guides">
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-black/50 rounded-sm">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Walker Regedits. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</a>
              <a href="/disclaimer" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</a>
              <a href="/refund-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;