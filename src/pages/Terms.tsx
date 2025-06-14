
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Info, FileText } from 'lucide-react';

const Terms = () => {
  return (
    <PageLayout title="Terms of Service" subtitle="Legal terms and conditions for using Walker Regedits">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-blue-500/20 bg-blue-900/10 rounded-xl">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-blue-400">Terms of Service</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-black/20 border border-white/10 rounded-xl p-6 mb-8">
                <p className="text-lg leading-relaxed text-gray-200">
                  By using Walker Regedits PC optimization software, you agree to comply with and be bound by the following terms and conditions of use.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <h3 className="text-lg font-semibold text-green-400">Software License</h3>
                  </div>
                  <p className="text-gray-300">
                    Walker Regedits grants you a non-exclusive, non-transferable license to use this PC optimization software for personal use only.
                  </p>
                </div>
                
                <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-amber-400" />
                    <h3 className="text-lg font-semibold text-amber-400">Usage Restrictions</h3>
                  </div>
                  <p className="text-gray-300">
                    You may not reverse engineer, decompile, or distribute this software without explicit written permission.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Acceptable Use Policy</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Use the software only for legitimate PC optimization purposes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Do not attempt to bypass or circumvent any security measures
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Respect all applicable laws and regulations in your jurisdiction
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Do not share your license with unauthorized users
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      Walker Regedits is provided "as is" without warranties of any kind
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      We are not liable for any system damage caused by misuse
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      Users are responsible for creating system backups before use
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      Maximum liability is limited to the amount paid for the software
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Account Terms</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      You are responsible for maintaining account security
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      Accounts are non-transferable and for individual use only
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      We reserve the right to suspend accounts for violations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      Refunds are subject to our refund policy terms
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/10">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                I Accept the Terms
              </Button>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-800 rounded-xl">
                Download PDF Copy
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Terms;
