
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Clock, Shield, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <PageLayout title="Refund and Cancellation Policy" subtitle="Learn about our refund and cancellation procedures">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-white/5">
          <div className="p-8">
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed">
                This refund and cancellation policy outlines how you can cancel an order or seek a refund for a product 
                or service you've purchased through the Platform.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="h-6 w-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">Cancellation Policy</h2>
                </div>
                
                <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-red-400" />
                    <span className="font-semibold text-red-400">24-Hour Cancellation Window</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Cancellations will only be considered if the request is made within one (1) day of placing the order.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Important Notes:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        Cancellation requests may not be entertained if orders have already been communicated to partner sellers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        If the shipping process has been initiated, cancellation may not be possible
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        Products already out for delivery cannot be cancelled (rejection at doorstep is an option)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-400 mb-2">Non-Cancellable Items:</h3>
                    <p className="text-gray-300">
                      Walker Regedits does not accept cancellation requests for perishable items such as fresh produce, 
                      flowers, or prepared food items. However, a refund or replacement can be arranged if you can clearly 
                      demonstrate that the quality of the product delivered was unsatisfactory upon receipt.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h2 className="text-2xl font-bold text-white">Refund Policy</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/10 border border-green-500/20 rounded-lg p-6">
                    <h3 className="font-semibold text-green-400 mb-3">Damaged/Defective Items</h3>
                    <p className="text-gray-300 text-sm">
                      Report damaged or defective items to our customer service team immediately. You must report such 
                      issues within one (1) day of receiving the products.
                    </p>
                  </div>
                  
                  <div className="bg-purple-900/10 border border-purple-500/20 rounded-lg p-6">
                    <h3 className="font-semibold text-purple-400 mb-3">Refund Processing Time</h3>
                    <p className="text-gray-300 text-sm">
                      If a refund is approved, please allow up to five (5) working days for the refund to be processed 
                      and credited to your account.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Refund Process:</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-medium">1.</span>
                        Contact customer service within 24 hours of receiving the product
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-medium">2.</span>
                        Our partner seller/merchant will check and confirm the issue
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-medium">3.</span>
                        Customer service team investigates and makes appropriate decision
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-medium">4.</span>
                        Approved refunds are processed within 5 working days
                      </li>
                    </ol>
                  </div>

                  <div className="bg-amber-900/10 border border-amber-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-amber-400" />
                      <span className="font-semibold text-amber-400">Product Expectations</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      If you feel that the product received is not as described on our site or doesn't meet your expectations, 
                      you must bring it to the notice of our customer service team within one (1) day of receiving the product.
                    </p>
                  </div>

                  <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-blue-400" />
                      <span className="font-semibold text-blue-400">Manufacturer Warranty</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      For any complaints regarding products that come with a manufacturer's warranty, please refer the issue 
                      directly to the respective manufacturer or their authorized service center in Sri Lanka (e.g., at Liberty 
                      Plaza, Colombo for electronics, or specific brand outlets across the island).
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="h-6 w-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Digital Items</h2>
                </div>

                <div className="bg-purple-900/10 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Important Notice for Digital Products</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For digital consumable items, we generally do not provide cancellations or refunds if the item has been 
                    used or accessed. We urge you to carefully review the product details and specifications before making any 
                    purchase of digital goods.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-2">No Refunds</div>
                    <div className="text-sm text-gray-400">Once accessed or used</div>
                  </div>
                  <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">Review First</div>
                    <div className="text-sm text-gray-400">Check all specifications</div>
                  </div>
                  <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">Final Sale</div>
                    <div className="text-sm text-gray-400">All digital purchases</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default RefundPolicy;
