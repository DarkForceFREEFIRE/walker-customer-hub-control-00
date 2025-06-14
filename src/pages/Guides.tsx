
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Shield, Download, Settings, BookOpen } from 'lucide-react';

const GuideCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-blue-500/20">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white ml-4">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const Guides = () => {
  return (
    <PageLayout title="User Guides" subtitle="Learn how to use Walker Regedits effectively">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Safety Notice */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-amber-300 mb-2">Safety First</h3>
              <p className="text-amber-100/90">
                Always check the panel safety status before use to minimize ban risks. 
                We recommend using our recommended Free Fire APK for the best experience.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-white mb-2">1. Check Safety Status</h3>
              <p className="text-gray-300">
                Before using any panel features, verify the current safety status on your dashboard.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-white mb-2">2. Download Required Files</h3>
              <p className="text-gray-300">
                Access the downloads section to get the latest panel version and recommended APK files.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-white mb-2">3. Setup Your Environment</h3>
              <p className="text-gray-300">
                Configure your emulator with our recommended settings for optimal performance.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-white mb-2">4. Follow Guidelines</h3>
              <p className="text-gray-300">
                Use the panel responsibly according to our safety guidelines and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Guide Categories */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Guide Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuideCard
              icon={<Settings className="h-6 w-6 text-blue-400" />}
              title="Installation & Setup"
              description="Complete guide for installing and configuring Walker Regedits on your system with step-by-step instructions."
            />
            <GuideCard
              icon={<Shield className="h-6 w-6 text-green-400" />}
              title="Safety & Security"
              description="Essential safety practices to protect your accounts and maintain security while using the tools."
            />
            <GuideCard
              icon={<Download className="h-6 w-6 text-purple-400" />}
              title="Features & Usage"
              description="Detailed explanation of all features and how to use them effectively for optimal performance."
            />
            <GuideCard
              icon={<BookOpen className="h-6 w-6 text-cyan-400" />}
              title="FAQ & Support"
              description="Frequently asked questions and comprehensive support resources for troubleshooting."
            />
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Best Practices</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Use BlueStacks 5.12+ or MSI 5.12+ emulator for best compatibility
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Don't overuse features in a single gaming session
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Take regular breaks between gaming sessions
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Monitor your account status regularly
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Keep your panel updated to the latest version
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Guides;
