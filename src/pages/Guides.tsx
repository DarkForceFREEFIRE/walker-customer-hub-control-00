
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { AlertTriangle, CheckCircle, Download, Monitor, PlayCircle, Shield, Clock, Zap, Users, Star, ArrowRight, BookOpen, Settings, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StatCard = ({
  icon,
  value,
  label,
  gradient
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  gradient: string;
}) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${gradient} border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
            {icon}
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-2">{value}</div>
        <div className="text-white/80 text-sm">{label}</div>
      </div>
    </div>
  );
};

const GuideCard = ({
  icon,
  title,
  description,
  features,
  buttonText = "Learn More"
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-8">
        <div className="flex items-center mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
            {icon}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-300">
              <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl h-12 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};

const StepCard = ({
  number,
  title,
  description,
  tips
}: {
  number: number;
  title: string;
  description: string;
  tips: string[];
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25">
            {number}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
            {tips && (
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-center text-sm text-blue-300">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Guides = () => {
  const { data: userStats } = useQuery({
    queryKey: ['userStats'],
    queryFn: async () => {
      const { count: totalUsers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });
      
      const { count: activeUsers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
        .eq('is_banned', false);
      
      return {
        totalUsers: totalUsers || 0,
        activeUsers: activeUsers || 0
      };
    }
  });

  return (
    <PageLayout title="User Guides" subtitle="Complete guide to using Walker Regedits safely and effectively">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            
            {/* Safety Alert */}
            <div className="mb-16">
              <Alert className="border-amber-500/30 bg-gradient-to-r from-amber-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl border border-amber-500/30 p-6">
                <AlertTriangle className="h-6 w-6 text-amber-400" />
                <div className="ml-4">
                  <AlertTitle className="text-amber-300 text-xl font-bold">Safety First</AlertTitle>
                  <AlertDescription className="text-amber-100/90 mt-2 text-base">
                    Always check the panel safety status before use to minimize ban risks. We recommend using our recommended Free Fire APK for the best experience.
                  </AlertDescription>
                </div>
              </Alert>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <StatCard
                icon={<Users className="h-8 w-8 text-blue-300" />}
                value={userStats?.totalUsers?.toString() || "0"}
                label="Total Users"
                gradient="from-blue-600/20 to-cyan-600/20"
              />
              <StatCard
                icon={<Shield className="h-8 w-8 text-green-300" />}
                value="99.7%"
                label="Safety Rate"
                gradient="from-green-600/20 to-emerald-600/20"
              />
              <StatCard
                icon={<Clock className="h-8 w-8 text-purple-300" />}
                value="24/7"
                label="Support"
                gradient="from-purple-600/20 to-indigo-600/20"
              />
              <StatCard
                icon={<Star className="h-8 w-8 text-amber-300" />}
                value="4.9/5"
                label="User Rating"
                gradient="from-amber-600/20 to-orange-600/20"
              />
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Getting Started
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow these essential steps to safely and effectively use Walker Regedits
            </p>
          </div>
          
          <div className="space-y-8">
            <StepCard
              number={1}
              title="Check Safety Status"
              description="Before using any panel features, always verify the current safety status on your dashboard. This helps you make informed decisions about when to use specific features."
              tips={[
                "Green status = Safe to use all features",
                "Yellow status = Use with caution, limit usage",
                "Red status = Avoid usage completely"
              ]}
            />
            
            <StepCard
              number={2}
              title="Download Required Files"
              description="Access the downloads section to get the latest panel version and recommended APK files. Always use official downloads for maximum security."
              tips={[
                "Download only from official sources",
                "Keep your panel updated to latest version",
                "Verify file integrity before installation"
              ]}
            />
            
            <StepCard
              number={3}
              title="Setup Your Environment"
              description="Configure your emulator or device with our recommended settings for optimal performance and safety. Proper setup is crucial for the best experience."
              tips={[
                "Use BlueStacks 5.12+ or MSI 5.12+ emulator",
                "Enable hardware acceleration if available",
                "Allocate at least 4GB RAM to emulator"
              ]}
            />
            
            <StepCard
              number={4}
              title="Follow Usage Guidelines"
              description="Use the panel according to our safety guidelines and best practices. Responsible usage ensures account safety and optimal performance."
              tips={[
                "Don't overuse features in single session",
                "Take regular breaks between gaming sessions",
                "Monitor your account status regularly"
              ]}
            />
          </div>
        </div>

        {/* Guides Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Comprehensive Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed guides covering every aspect of Walker Regedits
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GuideCard
              icon={<Settings className="h-8 w-8 text-blue-400" />}
              title="Installation & Setup"
              description="Complete guide for installing and configuring Walker Regedits on your system."
              features={[
                "System requirements and compatibility",
                "Step-by-step installation process",
                "Initial configuration and settings",
                "Troubleshooting common issues"
              ]}
            />
            
            <GuideCard
              icon={<Shield className="h-8 w-8 text-green-400" />}
              title="Safety & Security"
              description="Essential safety practices to protect your accounts and maintain security."
              features={[
                "Understanding safety status indicators",
                "Best practices for safe usage",
                "Account protection strategies",
                "Risk mitigation techniques"
              ]}
            />
            
            <GuideCard
              icon={<Target className="h-8 w-8 text-purple-400" />}
              title="Features & Usage"
              description="Detailed explanation of all features and how to use them effectively."
              features={[
                "Complete feature overview",
                "Usage instructions and tips",
                "Performance optimization",
                "Advanced techniques"
              ]}
            />
            
            <GuideCard
              icon={<BookOpen className="h-8 w-8 text-cyan-400" />}
              title="FAQ & Support"
              description="Frequently asked questions and comprehensive support resources."
              features={[
                "Common questions and answers",
                "Troubleshooting guide",
                "Contact support methods",
                "Community resources"
              ]}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-sm p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Join thousands of users who have enhanced their gaming experience with Walker Regedits
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-14 rounded-xl text-lg">
                  Start Using Walker Regedits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 h-14 rounded-xl text-lg">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Guides;
