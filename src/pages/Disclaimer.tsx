
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Info } from 'lucide-react';

const Disclaimer = () => {
  return (
    <PageLayout title="Disclaimer & Legal Notice" subtitle="Important information about using Walker Regedits">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-amber-500/20 bg-amber-900/10">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-amber-400">Important Disclaimer</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-black/20 border border-white/10 rounded-lg p-6 mb-8">
                <p className="text-lg leading-relaxed text-gray-200">
                  This software is an independent tool intended solely for private use. It is not affiliated with any third-party services or platforms. By clicking "Accept," you agree to our Terms of Service and General Conditions. The developer and seller are not liable for any improper or unauthorized use.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-blue-400">Independent Software</h3>
                  </div>
                  <p className="text-gray-300">
                    Walker Regedits operates independently and is not affiliated with, endorsed by, or connected to any gaming platforms or third-party services.
                  </p>
                </div>
                
                <div className="bg-purple-900/10 border border-purple-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="h-5 w-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-purple-400">Private Use Only</h3>
                  </div>
                  <p className="text-gray-300">
                    This software is designed exclusively for private, personal use. Commercial use or distribution is strictly prohibited.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Liability Limitations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      The developers and sellers are not responsible for any consequences arising from improper use
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      Users assume full responsibility for their actions while using this software
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      Any violations of third-party terms of service are the sole responsibility of the user
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      The software is provided "as is" without warranties of any kind
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">User Responsibilities</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Comply with all applicable laws and regulations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Use the software ethically and responsibly
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Respect the terms of service of third-party platforms
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Maintain the confidentiality of your account and access credentials
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/10">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                I Accept the Terms
              </Button>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-800">
                View Full Terms
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
