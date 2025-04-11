
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, AlertCircle, Download, Cpu, Monitor, PlayCircle } from 'lucide-react';

const GuideStep = ({ 
  number, 
  title, 
  description, 
  icon 
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: React.ReactNode 
}) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-DEFAULT/20 border border-teal-DEFAULT/30 flex items-center justify-center text-teal-DEFAULT">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-teal-DEFAULT">{icon}</span>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Guides = () => {
  return (
    <PageLayout title="User Guides" subtitle="Follow these steps to use Walker Regedits safely">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-card/50 border border-border/30 p-6 mb-8">
          <Alert className="mb-8 border-amber-500/20 bg-amber-900/10">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertTitle className="text-amber-500">Warning</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              We recommend using our recommended Free Fire APK for the best experience and to minimize ban risks.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-8">
            <GuideStep 
              number={1}
              title="Check the safety status"
              description="Check the panel safety status before use to reduce bans" 
              icon={<AlertCircle size={18} />}
            />
            
            <GuideStep 
              number={2}
              title="Download the panel"
              description="Download the panel from downloads section" 
              icon={<Download size={18} />}
            />
            
            <GuideStep 
              number={3}
              title="Open the emulator"
              description="We recommend using our recommended emulators: BlueStacks 5.12+, MSI 5.12+" 
              icon={<Monitor size={18} />}
            />
            
            <GuideStep 
              number={4}
              title="Use according to guidelines"
              description="Use our panel according to the given guidelines" 
              icon={<PlayCircle size={18} />}
            />
          </div>
          
          <Alert className="mt-8 border-teal-DEFAULT/20 bg-teal-DEFAULT/10">
            <Cpu className="h-4 w-4 text-teal-DEFAULT" />
            <AlertTitle className="text-teal-DEFAULT">System Requirements</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Minimum: 4GB RAM, 2GB free storage, Windows 10 (64-bit)<br />
              Recommended: 8GB RAM, 4GB free storage, Windows 10/11 (64-bit)
            </AlertDescription>
          </Alert>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Guides;
