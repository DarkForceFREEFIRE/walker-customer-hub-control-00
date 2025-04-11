
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, AlertCircle, Download, Cpu, Monitor, PlayCircle } from 'lucide-react';

const GuideStep = ({ 
  number, 
  title, 
  description, 
  icon,
  note
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  note?: string;
}) => {
  return (
    <div className="flex items-start gap-5 mb-8 p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-DEFAULT/10 border border-teal-DEFAULT/20 flex items-center justify-center text-teal-DEFAULT">
        <span className="text-lg font-medium">{number}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-teal-DEFAULT">{icon}</span>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
        {note && (
          <div className="mt-3 text-sm bg-black/20 px-4 py-2 rounded-lg border border-white/5">
            <span className="font-medium text-teal-DEFAULT">Note:</span> {note}
          </div>
        )}
      </div>
    </div>
  );
};

const Guides = () => {
  return (
    <PageLayout title="User Guides" subtitle="Follow these steps to use Walker Regedits safely">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-card border-white/5 p-6 mb-8">
          <Alert className="mb-8 border-amber-500/20 bg-amber-800/10">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertTitle className="text-amber-500">Warning</AlertTitle>
            <AlertDescription className="text-gray-400">
              We recommend using our recommended Free Fire APK for the best experience and to minimize ban risks.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-6">
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
              description="We also recommend to use our recommended emulators" 
              icon={<Monitor size={18} />}
              note="Emulators: BlueStacks 5.12+, MSI 5.12+"
            />
            
            <GuideStep 
              number={4}
              title="Use according to guidelines"
              description="Use our panel according to the given guidelines" 
              icon={<PlayCircle size={18} />}
            />
          </div>
          
          <Alert className="mt-8 border-teal-DEFAULT/20 bg-teal-DEFAULT/5">
            <Cpu className="h-4 w-4 text-teal-DEFAULT" />
            <AlertTitle className="text-teal-DEFAULT">System Requirements</AlertTitle>
            <AlertDescription className="text-gray-400">
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
