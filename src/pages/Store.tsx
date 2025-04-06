
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';

const products = [
  {
    id: 1,
    name: 'Supreme Package',
    description: 'Full access to all Walker Regedits features with priority support.',
    price: '39.99',
    popular: true,
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
    price: '19.99',
    popular: false,
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
    price: '9.99',
    popular: false,
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

const Store = () => {
  return (
    <PageLayout title="Store" subtitle="Choose the perfect package for your needs">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className={`border relative overflow-hidden ${
              product.popular 
                ? 'border-walker-DEFAULT shadow-lg shadow-walker-DEFAULT/20' 
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
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <Button 
                className={`w-full mb-6 ${
                  product.popular 
                    ? 'bg-walker-DEFAULT hover:bg-walker-hover' 
                    : 'bg-gray-700 hover:bg-gray-600'
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

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
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
            <div key={index} className="bg-walker-dark/50 border border-white/5 rounded-lg p-6">
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
