
import React from 'react';
import { Download, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';

const downloads = [
  {
    id: 1,
    name: 'Walker Regedits Supreme',
    version: '3.5.2',
    description: 'Our premium toolkit with advanced features for professional users.',
    size: '45.2 MB',
    lastUpdated: '2025-03-28',
    requiresSubscription: 'Supreme',
  },
  {
    id: 2,
    name: 'Walker Regedits Essential',
    version: '3.5.2',
    description: 'Core optimization package for everyday users with essential features.',
    size: '32.8 MB',
    lastUpdated: '2025-03-28',
    requiresSubscription: 'Essential or Supreme',
  },
  {
    id: 3,
    name: 'Walker Regedits External',
    version: '3.5.0',
    description: 'Basic toolkit for casual users with fundamental optimization features.',
    size: '18.5 MB',
    lastUpdated: '2025-03-15',
    requiresSubscription: 'Any',
  }
];

const Downloads = () => {
  const handleDownload = (id: number) => {
    // In a real app, this would initiate a download
    toast.success(`Starting download for ${downloads.find(d => d.id === id)?.name}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <PageLayout title="Downloads" subtitle="Download your Walker Regedits tools and applications">
      <div className="space-y-6">
        {downloads.map((download) => (
          <Card key={download.id} className="border-white/5 overflow-hidden">
            <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold flex items-center">
                      {download.name}
                      <span className="ml-2 text-xs bg-walker-DEFAULT/20 text-walker-DEFAULT px-2 py-0.5 rounded">
                        v{download.version}
                      </span>
                    </h3>
                    <p className="text-gray-400 mt-2">{download.description}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 text-gray-500">
                      <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Size: {download.size}
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-1.5 text-gray-500" />
                    Updated: {formatDate(download.lastUpdated)}
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck size={18} className="mr-1.5 text-gray-500" />
                    Required: {download.requiresSubscription}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-end">
                <Button
                  onClick={() => handleDownload(download.id)}
                  className="w-full lg:w-auto bg-walker-DEFAULT hover:bg-walker-hover"
                >
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
              </div>
            </div>
            
            <div className="border-t border-white/5 bg-black/20 px-6 py-3 flex justify-between items-center">
              <div className="text-sm text-gray-400">
                SHA-256: <span className="font-mono text-xs">fa5e2a3d78bc965f9c38228c34...</span>
              </div>
              <Button variant="ghost" size="sm" className="text-walker-DEFAULT hover:text-walker-light">
                View Release Notes
              </Button>
            </div>
          </Card>
        ))}

        <Card className="border-white/5 bg-gradient-to-r from-walker-dark to-walker-DEFAULT/10 p-6 mt-8">
          <h3 className="text-xl font-bold mb-4">System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className="font-medium mb-2">Minimum Requirements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Windows 10/11 64-bit</li>
                <li>4 GB RAM</li>
                <li>1 GB free disk space</li>
                <li>Internet connection for updates</li>
                <li>DirectX 11 compatible graphics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Recommended Requirements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Windows 10/11 64-bit (latest update)</li>
                <li>8 GB RAM</li>
                <li>2 GB free disk space (SSD recommended)</li>
                <li>Stable Internet connection</li>
                <li>DirectX 12 compatible graphics</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Downloads;
