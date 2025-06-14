
import React from 'react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import { Package, Gift, Layers, Star, ShieldCheck, MessageSquare } from 'lucide-react';
import CoolBanner from '@/components/NewYearBanner';

const products = [
  {
    id: 1,
    name: 'Supreme Package',
    description: 'Full access to all Walker Regedits features with priority support.',
    price: '2,500',
    popular: true,
    icon: <Package className="h-6 w-6" />,
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
    icon: <Layers className="h-6 w-6" />,
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
    icon: <Gift className="h-6 w-6" />,
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
    icon: <Star className="h-6 w-6" />,
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
    icon: <ShieldCheck className="h-6 w-6" />,
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
      
      <h2 className="text-3xl font-bold mb-8 mt-12 flex items-center justify-center">
        <Gift className="mr-3 h-7 w-7 text-accent" />
        <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
          Premium Packages
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 p-8 relative ${
              product.popular 
                ? 'border-accent/40 shadow-xl shadow-accent/20' 
                : 'border-white/10'
            }`}
          >
            {product.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-accent to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-left">{product.name}</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-left">{product.description}</p>
            
            <div className="mb-8 text-left">
              <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Rs. {product.price}</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            
            <Button 
              className={`w-full mb-8 rounded-lg py-3 ${
                product.popular 
                  ? 'bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-600 text-white font-medium px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30' 
                  : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium px-6 py-3 border border-white/10 transition-all duration-300 hover:scale-105'
              }`}
            >
              Purchase Now
            </Button>
            
            <ul className="space-y-3 text-left">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <h2 className="text-3xl font-bold mb-8 mt-16 flex items-center justify-center">
        <Package className="mr-3 h-7 w-7 text-cyan-400" />
        <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          Special Bundles
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 p-8 relative ${
              bundle.popular 
                ? 'border-cyan-500/40 shadow-xl shadow-cyan-500/20' 
                : 'border-white/10'
            }`}
          >
            {bundle.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
                  Best Value
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                {bundle.icon}
              </div>
              <h3 className="text-2xl font-bold text-left">{bundle.name}</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-left">{bundle.description}</p>
            
            <div className="mb-8 text-left">
              <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Rs. {bundle.price}</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            
            <Button 
              className={`w-full mb-8 rounded-lg py-3 ${
                bundle.popular 
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700' 
                  : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium px-6 py-3 border border-white/10 transition-all duration-300 hover:scale-105'
              }`}
            >
              Purchase Now
            </Button>
            
            <div className="grid grid-cols-2 gap-3 text-left">
              {bundle.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
          <MessageSquare className="mr-3 h-7 w-7 text-cyan-400" />
          <span>Frequently Asked Questions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 hover:border-accent/30 p-6">
              <h3 className="font-semibold text-xl mb-3 text-left">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed text-left">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Store;
