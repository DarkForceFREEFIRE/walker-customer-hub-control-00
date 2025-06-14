
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Clock, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <PageLayout title="Refund Policy" subtitle="Our refund terms and conditions for Walker Regedits">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-green-500/20 bg-green-900/10 rounded-xl">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-green-400">Refund Policy</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-black/20 border border-white/10 rounded-xl p-6 mb-8">
                <p className="text-lg leading-relaxed text-gray-200">
                  We stand behind the quality of Walker Regedits PC optimization software. This policy outlines the terms and conditions for refunds and returns.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-green-400" />
                    <h3 className="text-lg font-semibold text-green-400">14-Day Guarantee</h3>
                  </div>
                  <p className="text-gray-300">
                    All purchases come with a 14-day money-back guarantee from the date of purchase. No questions asked within this period.
                  </p>
                </div>
                
                <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-blue-400">Easy Process</h3>
                  </div>
                  <p className="text-gray-300">
                    Simply contact our support team with your order details, and we'll process your refund within 3-5 business days.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Eligible for Refund</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      Refund requested within 14 days of purchase
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      Software doesn't work on your system despite meeting requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      Accidental duplicate purchases
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      Technical issues that cannot be resolved by our support team
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Not Eligible for Refund</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      Refund requested after 14 days from purchase date
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      Account suspension due to terms of service violations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      System damage caused by user misuse or negligence
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      Dissatisfaction with optimization results due to hardware limitations
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Refund Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">1</div>
                      <div>
                        <h4 className="font-medium text-white">Contact Support</h4>
                        <p className="text-gray-300 text-sm">Send an email to support with your order details and reason for refund</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">2</div>
                      <div>
                        <h4 className="font-medium text-white">Verification</h4>
                        <p className="text-gray-300 text-sm">We'll verify your purchase and eligibility for refund</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">3</div>
                      <div>
                        <h4 className="font-medium text-white">Processing</h4>
                        <p className="text-gray-300 text-sm">Refund will be processed to your original payment method within 3-5 business days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/10">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl">
                Contact Support
              </Button>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-800 rounded-xl">
                View Purchase History
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default RefundPolicy;
