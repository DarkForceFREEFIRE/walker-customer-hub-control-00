
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import { Badge } from '@/components/ui/badge';
import { Package, Gift, Layers, Star, ShieldCheck, MessageSquare } from 'lucide-react';
import CoolBanner from '@/components/NewYearBanner';

const products = [
  {
    id: 1,
    name: 'Supreme Package',
    description: 'Full access to all Walker Regedits features with priority support.',
    price: '2,500',
    popular: true,
    icon: <Package className="h-5 w-5" />,
    features: [
      'All essential features',
      'Advanced configurations',
      'Priority customer support',
      'Early access to updates',
      'Unlimited HWID resets',
      'Premium themes'
    ]
  },
  {
    id: 2,
    name: 'Essential Package',
    description: 'Core features for everyday users at an affordable price.',
    price: '3,000',
    popular: false,
    icon: <Layers className="h-5 w-5" />,
    features: [
      'All essential features',
      'Basic configurations',
      'Standard customer support',
      'Regular updates',
      '5 HWID resets',
      'Standard themes'
    ]
  },
  {
    id: 3,
    name: 'External Package',
    description: 'Perfect for casual users needing basic functionality.',
    price: '5,000',
    popular: false,
    icon: <Gift className="h-5 w-5" />,
    features: [
      'Basic features only',
      'Limited configurations',
      'Community support',
      'Regular updates',
      '2 HWID resets',
      'Default theme only'
    ]
  }
];

const bundles = [
  {
    id: 4,
    name: 'Supreme + Essential Bundle',
    description: 'Get the best of both worlds with this powerful combo.',
    price: '1,840',
    popular: false,
    icon: <Star className="h-5 w-5" />,
    features: [
      'All Supreme features',
      'All Essential features',
      'Priority customer support',
      'Early access to updates',
      'Unlimited HWID resets',
      'Premium themes'
    ]
  },
  {
    id: 5,
    name: 'Complete Bundle',
    description: 'The ultimate package with everything included.',
    price: '6,000',
    popular: true,
    icon: <ShieldCheck className="h-5 w-5" />,
    features: [
      'All Supreme features',
      'All Essential features',
      'All External features',
      'VIP customer support',
      'Earliest access to updates',
      'Unlimited HWID resets',
      'Custom themes'
    ]
  }
];

const Store = () => {
  return (
    <PageLayout 
      title="Store" 
      subtitle="Choose the perfect package for your needs"
      className="relative"
    >
      <CoolBanner />
      
      <h2 className="text-2xl font-bold mb-6 mt-10 flex items-center">
        <Gift className="mr-2 h-5 w-5 text-blue-400" />
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Premium Packages
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className={`border relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              product.popular 
                ? 'border-blue-500/30 shadow-lg shadow-blue-500/10' 
                : 'border-white/5'
            }`}
          >
            {product.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-bl">
                  Most Popular
                </div>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-full bg-card/80 border border-white/5">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold">{product.name}</h3>
              </div>
              
              <p className="text-gray-400 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Rs. {product.price}</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              
              <Button 
                className={`w-full mb-6 ${
                  product.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                    : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-white/5'
                }`}
              >
                Purchase Now
              </Button>
              
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-6 mt-12 flex items-center">
        <Package className="mr-2 h-5 w-5 text-cyan-400" />
        <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          Special Bundles
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {bundles.map((bundle) => (
          <Card
            key={bundle.id}
            className={`border relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              bundle.popular 
                ? 'border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
                : 'border-white/5'
            }`}
          >
            {bundle.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl">
                  Best Value
                </div>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-full bg-card/80 border border-white/5">
                  {bundle.icon}
                </div>
                <h3 className="text-xl font-bold">{bundle.name}</h3>
              </div>
              
              <p className="text-gray-400 mb-4">{bundle.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Rs. {bundle.price}</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              
              <Button 
                className={`w-full mb-6 ${
                  bundle.popular 
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700' 
                    : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-white/5'
                }`}
              >
                Purchase Now
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                {bundle.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <MessageSquare className="mr-2 h-5 w-5 text-cyan-400" />
          <span>Frequently Asked Questions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: 'How do the subscription plans work?',
              answer: 'Our subscriptions are charged monthly. You can upgrade, downgrade or cancel at any time. Access to features will remain active until the end of your billing period.'
            },
            {
              question: 'Can I upgrade my plan later?',
              answer: 'Yes! You can upgrade your plan at any time. When you upgrade, you\'ll be charged the prorated difference for the remainder of your billing cycle.'
            },
            {
              question: 'What payment methods do you accept?',
              answer: 'We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin, Ethereum, and Litecoin.'
            },
            {
              question: 'Do you offer refunds?',
              answer: 'We offer a 7-day money-back guarantee if you\'re not satisfied with our service. Contact our support team to process your refund.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-white/5 rounded-lg p-6 hover:border-blue-500/20 transition-colors backdrop-blur-sm">
              <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Store;
