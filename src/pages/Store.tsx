
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import { Badge } from '@/components/ui/badge';
import { Package, Gift, Layers, Star, ShieldCheck, MessageSquare } from 'lucide-react';
import NewYearBanner from '@/components/NewYearBanner';

const products = [
  {
    id: 1,
    name: 'Supreme Package',
    description: 'Full access to all Walker Regedits features with priority support.',
    originalPrice: '2,500',
    price: '500',
    discount: '80%',
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
    originalPrice: '3,000',
    price: '600',
    discount: '80%',
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
    originalPrice: '5,000',
    price: '500',
    discount: '90%',
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
    originalPrice: '1,840',
    price: '920',
    discount: '50%',
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
    originalPrice: '6,000',
    price: '1,200',
    discount: '80%',
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
      <NewYearBanner />
      
      <h2 className="text-2xl font-bold mb-6 mt-10 flex items-center">
        <Gift className="mr-2 h-5 w-5 text-purple-400" />
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          New Year Special Offers
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className={`border relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              product.popular 
                ? 'border-purple-500/30 shadow-lg shadow-purple-500/10' 
                : 'border-white/5'
            }`}
          >
            {product.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-walker-DEFAULT text-white text-xs font-semibold px-3 py-1 rounded-bl">
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
              
              <p className="text-gray-400 mb-4">{product.description}</p>
              
              <div className="flex items-baseline mb-2">
                <span className="text-gray-400 text-sm line-through mr-2">Rs. {product.originalPrice}</span>
                <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  {product.discount} OFF
                </Badge>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Rs. {product.price}</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              
              <Button 
                className={`w-full mb-6 ${
                  product.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                    : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-white/5'
                }`}
              >
                Purchase Now
              </Button>
              
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-walker-DEFAULT mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <Package className="mr-2 h-5 w-5 text-blue-400" />
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Special Bundles
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {bundles.map((bundle) => (
          <Card
            key={bundle.id}
            className={`border relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              bundle.popular 
                ? 'border-blue-500/30 shadow-lg shadow-blue-500/10' 
                : 'border-white/5'
            }`}
          >
            {bundle.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-bl">
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
              
              <div className="flex items-baseline mb-2">
                <span className="text-gray-400 text-sm line-through mr-2">Rs. {bundle.originalPrice}</span>
                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  {bundle.discount} OFF
                </Badge>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Rs. {bundle.price}</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              
              <Button 
                className={`w-full mb-6 ${
                  bundle.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                    : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-white/5'
                }`}
              >
                Purchase Now
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                {bundle.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-walker-DEFAULT mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <MessageSquare className="mr-2 h-5 w-5 text-teal-DEFAULT" />
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
            <div key={index} className="bg-walker-dark/50 border border-white/5 rounded-lg p-6 hover:border-white/10 transition-colors">
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
