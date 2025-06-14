
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Bell, LogOut, Settings, Home, Package, BookOpen, Download, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        cn(
          "group relative flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-300",
          "hover:bg-white/5 hover:backdrop-blur-sm",
          isActive 
            ? "text-white bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/30 shadow-lg shadow-accent/10" 
            : "text-gray-300 hover:text-white"
        )
      }
    >
      <div className="transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="font-medium text-sm">{label}</span>
    </NavLink>
  );
};

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const publicNavItems = [
    { to: "/", icon: <Home size={18} />, label: "Home" },
    { to: "/store", icon: <Package size={18} />, label: "Store" },
    { to: "/guides", icon: <BookOpen size={18} />, label: "Guides" }
  ];

  const protectedNavItems = [
    { to: "/dashboard", icon: <LayoutDashboard size={18} />, label: "Dashboard" },
    { to: "/downloads", icon: <Download size={18} />, label: "Downloads" }
  ];

  return (
    <nav className={cn(
      "fixed top-4 left-4 right-4 z-50 transition-all duration-500",
      "border border-white/10 rounded-xl",
      scrolled 
        ? "bg-black/90 backdrop-blur-2xl shadow-2xl shadow-black/50" 
        : "bg-black/70 backdrop-blur-xl"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-accent group-hover:to-blue-400 transition-all duration-300 whitespace-nowrap">
                  Walker Regedits for Pro Gamers
                </h1>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
              {publicNavItems.map((item) => (
                <NavItem 
                  key={item.label}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
              
              {currentUser && protectedNavItems.map((item) => (
                <NavItem 
                  key={item.label}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {currentUser ? (
              <div className="hidden md:flex items-center space-x-2">
                {/* Username Display */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">
                    {currentUser.username || 'User'}
                  </span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="w-9 h-9 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Search size={16} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="w-9 h-9 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 relative"
                >
                  <Bell size={16} />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-black"></div>
                </Button>
                <NavLink to="/settings">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="w-9 h-9 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <Settings size={16} />
                  </Button>
                </NavLink>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={logout}
                  className="w-9 h-9 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300"
                >
                  <LogOut size={16} />
                </Button>
              </div>
            ) : (
              <NavLink to="/login">
                <Button 
                  className="bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                >
                  Login
                </Button>
              </NavLink>
            )}

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="bg-black/95 backdrop-blur-2xl border-t border-white/5 shadow-2xl rounded-b-xl">
          <div className="px-6 py-6 space-y-3">
            {publicNavItems.map((item) => (
              <NavItem 
                key={item.label}
                to={item.to}
                icon={item.icon}
                label={item.label}
              />
            ))}
            
            {currentUser ? (
              <>
                {/* Mobile Username Display */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 mb-3">
                  <span className="text-white text-sm font-medium">
                    Welcome, {currentUser.username || 'User'}
                  </span>
                </div>
                
                {protectedNavItems.map((item) => (
                  <NavItem 
                    key={item.label}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                  />
                ))}
                <NavItem 
                  to="/settings"
                  icon={<Settings size={18} />}
                  label="Settings"
                />
                <div className="pt-4 border-t border-white/10">
                  <Button 
                    onClick={logout}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <div className="pt-4 border-t border-white/10">
                <NavLink to="/login" className="block w-full">
                  <Button 
                    className="w-full bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-600 text-white font-medium py-3 rounded-lg shadow-lg transition-all duration-300"
                  >
                    Login
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
