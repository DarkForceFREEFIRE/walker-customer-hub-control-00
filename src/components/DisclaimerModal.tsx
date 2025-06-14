
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield } from 'lucide-react';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('walker-disclaimer-accepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('walker-disclaimer-accepted', 'true');
    setIsOpen(false);
  };

  const handleViewTerms = () => {
    window.open('/terms', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-amber-500/20 rounded-xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="h-6 w-6 text-amber-400" />
            <DialogTitle className="text-xl font-bold text-amber-400">
              Important Notice
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-300 text-left">
            Please read this important information before using Walker Regedits
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="bg-black/20 border border-white/10 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-blue-400" />
              <h4 className="font-semibold text-blue-400">PC Optimization Tool</h4>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Walker Regedits is an independent PC optimization software designed for system performance enhancement. 
              This tool is not affiliated with any gaming platforms or third-party services.
            </p>
          </div>
          
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>This software is intended for private, personal use only</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>Always create a system backup before using optimization tools</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>Users assume full responsibility for any system changes</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>The software is provided "as is" without warranties</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-red-900/20 border border-red-500/20 rounded-xl">
            <p className="text-red-400 text-sm font-medium">
              By proceeding, you acknowledge that you understand the risks and agree to our Terms of Service.
            </p>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={handleViewTerms}
            className="border-gray-500 text-gray-300 hover:bg-gray-800 rounded-xl"
          >
            View Full Terms
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl"
          >
            I Understand & Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
