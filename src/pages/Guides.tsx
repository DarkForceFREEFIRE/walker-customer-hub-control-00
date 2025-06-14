import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
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
    recommended: 'border-green-500/30 shadow-lg shadow-green-500/10',
    warning: 'border-amber-500/30 shadow-lg shadow-amber-500/10',
    info: 'border-blue-500/30 shadow-lg shadow-blue-500/10'
  };
  return <div className={`modern-card p-6 ${statusColors[status]}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>;
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
  return <div className="modern-card p-8">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          {tips && <div className="space-y-2">
              {tips.map((tip, index) => <div key={index} className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle size={16} />
                  <span>{tip}</span>
                </div>)}
            </div>}
        </div>
      </div>
    </div>;
};
const Guides = () => {
  // Get real user count from Supabase
  const {
    data: userStats
  } = useQuery({
    queryKey: ['userStats'],
    queryFn: async () => {
      const {
        count: totalUsers
      } = await supabase.from('users').select('*', {
        count: 'exact',
        head: true
      });
      const {
        count: activeUsers
      } = await supabase.from('users').select('*', {
        count: 'exact',
        head: true
      }).eq('is_banned', false);
      return {
        totalUsers: totalUsers || 0,
        activeUsers: activeUsers || 0
      };
    }
  });
  return <PageLayout title="User Guides" subtitle="Complete guide to using Walker Regedits safely and effectively">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Safety Notice */}
        <Alert className="border-amber-500/30 bg-amber-900/10 backdrop-blur-sm rounded-xl">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <AlertTitle className="text-amber-400 text-lg text-left">Safety First</AlertTitle>
          <AlertDescription className="text-muted-foreground mt-2">
            Always check the panel safety status before use to minimize ban risks. We recommend using our recommended Free Fire APK for the best experience.
          </AlertDescription>
        </Alert>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="stats-card bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/20">
            <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">{userStats?.totalUsers || 0}</div>
            <div className="text-muted-foreground text-sm">Total Users</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20">
            <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">99.7%</div>
            <div className="text-muted-foreground text-sm">Safety Rate</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-purple-500/20">
            <Clock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-muted-foreground text-sm">Support</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/20">
            <Star className="h-8 w-8 text-amber-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-muted-foreground text-sm">User Rating</div>
          </div>
        </div>

        {/* Getting Started Steps */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Getting Started</h2>
          <div className="space-y-8">
            <StepCard number={1} title="Check Safety Status" description="Before using any panel features, always verify the current safety status on your dashboard. This helps you make informed decisions about when to use specific features." tips={["Green status = Safe to use", "Yellow status = Use with caution", "Red status = Avoid usage"]} />
            
            <StepCard number={2} title="Download Required Files" description="Access the downloads section to get the latest panel version and recommended APK files. Always use official downloads for maximum security." tips={["Download from official sources only", "Keep your panel updated", "Verify file integrity"]} />
            
            <StepCard number={3} title="Setup Your Emulator" description="Configure your emulator with our recommended settings for optimal performance and safety. Proper setup is crucial for the best experience." tips={["Use BlueStacks 5.12+ or MSI 5.12+", "Enable hardware acceleration", "Allocate sufficient RAM"]} />
            
            <StepCard number={4} title="Follow Usage Guidelines" description="Use the panel according to our safety guidelines and best practices. Responsible usage ensures account safety and optimal performance." tips={["Don't overuse features", "Take regular breaks", "Monitor your account status"]} />
          </div>
        </div>

        {/* System Requirements */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard icon={<Monitor className="h-6 w-6" />} title="Minimum Requirements" description="4GB RAM, 2GB free storage, Windows 10 (64-bit), DirectX 11 compatible graphics" status="warning" />
            <FeatureCard icon={<Zap className="h-6 w-6" />} title="Recommended Specs" description="8GB RAM, 4GB free storage, Windows 10/11 (64-bit), Dedicated graphics card" status="recommended" />
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<Shield className="h-6 w-6" />} title="Account Safety" description="Use features moderately and follow safety guidelines to maintain account security" status="recommended" />
            <FeatureCard icon={<Clock className="h-6 w-6" />} title="Timing Matters" description="Use panels during off-peak hours and avoid consecutive gaming sessions" status="info" />
            <FeatureCard icon={<Download className="h-6 w-6" />} title="Keep Updated" description="Always use the latest panel version and recommended game APK" status="recommended" />
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[{
            question: "Is it safe to use Walker Regedits?",
            answer: "Yes, when used according to our guidelines and safety recommendations. Always check the safety status before use."
          }, {
            question: "Which emulator should I use?",
            answer: "We recommend BlueStacks 5.12+ or MSI 5.12+ for the best compatibility and performance."
          }, {
            question: "How often should I use the features?",
            answer: "Use features moderately with breaks between sessions. Overuse increases detection risk."
          }, {
            question: "What if I encounter issues?",
            answer: "Contact our 24/7 support team through the official channels for immediate assistance."
          }].map((faq, index) => <div key={index} className="modern-card p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>)}
          </div>
        </div>
      </div>
    </PageLayout>;
};
export default Guides;