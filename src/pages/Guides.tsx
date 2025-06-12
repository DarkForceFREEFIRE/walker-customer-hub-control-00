
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Download, Monitor, PlayCircle, Shield, Clock, Zap, Users, Star } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  status 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  status: 'recommended' | 'warning' | 'info';
}) => {
  const statusColors = {
    recommended: 'bg-green-500/10 border-green-500/20 text-green-400',
    warning: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-400'
  };

  return (
    <Card className={`p-6 border transition-all duration-300 hover:scale-[1.02] ${statusColors[status]}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

const StepCard = ({ 
  number, 
  title, 
  description, 
  tips 
}: { 
  number: number; 
  title: string; 
  description: string; 
  tips?: string[];
}) => {
  return (
    <div className="relative">
      <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
          {tips && (
            <div className="space-y-2">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-blue-300">
                  <CheckCircle size={16} />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Guides = () => {
  return (
    <PageLayout title="User Guides" subtitle="Complete guide to using Walker Regedits safely and effectively">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Safety Notice */}
        <Alert className="border-amber-500/20 bg-amber-900/10 backdrop-blur-sm">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <AlertTitle className="text-amber-400 text-lg">Safety First</AlertTitle>
          <AlertDescription className="text-gray-300 mt-2">
            Always check the panel safety status before use to minimize ban risks. We recommend using our recommended Free Fire APK for the best experience.
          </AlertDescription>
        </Alert>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/20">
            <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-gray-400 text-sm">Active Users</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/20">
            <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">99.7%</div>
            <div className="text-gray-400 text-sm">Safety Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl border border-purple-500/20">
            <Clock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-xl border border-amber-500/20">
            <Star className="h-8 w-8 text-amber-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">4.9/5</div>
            <div className="text-gray-400 text-sm">User Rating</div>
          </div>
        </div>

        {/* Getting Started Steps */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Getting Started</h2>
          <div className="space-y-6">
            <StepCard 
              number={1}
              title="Check Safety Status"
              description="Before using any panel features, always verify the current safety status on your dashboard. This helps you make informed decisions about when to use specific features."
              tips={["Green status = Safe to use", "Yellow status = Use with caution", "Red status = Avoid usage"]}
            />
            
            <StepCard 
              number={2}
              title="Download Required Files"
              description="Access the downloads section to get the latest panel version and recommended APK files. Always use official downloads for maximum security."
              tips={["Download from official sources only", "Keep your panel updated", "Verify file integrity"]}
            />
            
            <StepCard 
              number={3}
              title="Setup Your Emulator"
              description="Configure your emulator with our recommended settings for optimal performance and safety. Proper setup is crucial for the best experience."
              tips={["Use BlueStacks 5.12+ or MSI 5.12+", "Enable hardware acceleration", "Allocate sufficient RAM"]}
            />
            
            <StepCard 
              number={4}
              title="Follow Usage Guidelines"
              description="Use the panel according to our safety guidelines and best practices. Responsible usage ensures account safety and optimal performance."
              tips={["Don't overuse features", "Take regular breaks", "Monitor your account status"]}
            />
          </div>
        </div>

        {/* System Requirements */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Monitor className="h-6 w-6" />}
              title="Minimum Requirements"
              description="4GB RAM, 2GB free storage, Windows 10 (64-bit), DirectX 11 compatible graphics"
              status="warning"
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6" />}
              title="Recommended Specs"
              description="8GB RAM, 4GB free storage, Windows 10/11 (64-bit), Dedicated graphics card"
              status="recommended"
            />
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Shield className="h-6 w-6" />}
              title="Account Safety"
              description="Use features moderately and follow safety guidelines to maintain account security"
              status="recommended"
            />
            <FeatureCard 
              icon={<Clock className="h-6 w-6" />}
              title="Timing Matters"
              description="Use panels during off-peak hours and avoid consecutive gaming sessions"
              status="info"
            />
            <FeatureCard 
              icon={<Download className="h-6 w-6" />}
              title="Keep Updated"
              description="Always use the latest panel version and recommended game APK"
              status="recommended"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                question: "Is it safe to use Walker Regedits?",
                answer: "Yes, when used according to our guidelines and safety recommendations. Always check the safety status before use."
              },
              {
                question: "Which emulator should I use?",
                answer: "We recommend BlueStacks 5.12+ or MSI 5.12+ for the best compatibility and performance."
              },
              {
                question: "How often should I use the features?",
                answer: "Use features moderately with breaks between sessions. Overuse increases detection risk."
              },
              {
                question: "What if I encounter issues?",
                answer: "Contact our 24/7 support team through the official channels for immediate assistance."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="font-semibold text-lg text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <Card className="p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow our comprehensive guide and join thousands of satisfied users who trust Walker Regedits for their gaming needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Download Now
              </Button>
              <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                Join Community
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Guides;
