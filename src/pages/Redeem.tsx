
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';

const Redeem = () => {
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) {
      toast.error('Please enter a code');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, let's say "WALKER2025" is a valid code
      if (code.toUpperCase() === 'WALKER2025') {
        toast.success('Code redeemed successfully!');
        setCode('');
      } else {
        toast.error('Invalid or expired code');
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageLayout title="Redeem Code" subtitle="Activate your product or subscription with a code">
      <div className="max-w-lg mx-auto">
        <Card className="border border-white/5">
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Enter your code</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Enter the code you received from a purchase or promotional offer
                </p>
                <Input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="e.g. WALKER2025"
                  className="bg-walker-dark border-white/10 mb-4"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-walker-DEFAULT hover:bg-walker-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Redeeming...' : 'Redeem Code'}
                </Button>
              </div>
            </form>
          </div>
        </Card>
        
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">How to redeem your code</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Enter your unique code in the field above</li>
              <li>Click the "Redeem Code" button</li>
              <li>Your subscription or product will be activated instantly</li>
              <li>Refresh your dashboard to see the changes</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3">Where to find codes</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Purchase receipt emails</li>
              <li>Walker Regedits social media giveaways</li>
              <li>Official Discord server events</li>
              <li>Partner promotions</li>
            </ul>
          </div>
          
          <div className="bg-walker-DEFAULT/10 border border-walker-DEFAULT/20 rounded-lg p-4">
            <h3 className="flex items-center text-walker-DEFAULT font-medium mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Having issues with your code?
            </h3>
            <p className="text-sm text-gray-300">
              If your code isn't working or you're experiencing other issues, please contact our support team at support@walkerregedits.com
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Redeem;
