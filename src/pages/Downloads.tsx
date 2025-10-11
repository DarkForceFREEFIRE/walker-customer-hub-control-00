
import React, { useEffect, useState } from 'react';
import { Download, Clock, Package, FileText } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';
import { DownloadItem, fetchDownloadItems } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Badge } from '@/components/ui/badge';

const Downloads = () => {
  const { data: downloadItems, isLoading, error } = useQuery({
    queryKey: ['downloadItems'],
    queryFn: fetchDownloadItems
  });

  useEffect(() => {
    if (error) {
      toast.error('Failed to load download items');
      console.error('Download items error:', error);
    }
  }, [error]);

  const handleDownload = (item: DownloadItem) => {
    window.open(item.download_url, '_blank');
    toast.success(`Starting download for ${getItemTitle(item)} ${item.version}`);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  const getItemTitle = (item: DownloadItem) => {
    if (item.title) return item.title;
    switch(item.item_id) {
      case 'Panel': return 'Walker Regedits Panel';
      case 'Free Fire x86': return 'Free Fire (Optimized)';
      case 'VC_Redist': return 'Runtime Dependencies';
      default: return item.item_id;
    }
  };

  const getItemDescription = (item: DownloadItem) => {
     if (item.description) return item.description;
     switch(item.item_id) {
       case 'Panel': return 'The core Walker Regedits application for customization.';
       case 'Free Fire x86': return 'Recommended game version for compatibility and safety.';
       case 'VC_Redist': return 'Essential runtimes required by some applications.';
       default: return 'Important file for your setup.';
     }
  };

  const renderSkeletonCard = () => (
    <div className="download-card p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div>
          <Skeleton className="h-5 w-32 mb-1" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="flex justify-between items-center mb-5">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-12 w-full" />
      <div className="flex justify-between items-center mt-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-28" />
      </div>
    </div>
  );

  return (
    <PageLayout
      title="Downloads"
      subtitle="Get the latest Walker Regedits tools"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {isLoading ? (
          Array(3).fill(0).map((_, index) => <div key={index}>{renderSkeletonCard()}</div>)
        ) : error ? (
          <div className="md:col-span-2 lg:col-span-3 download-card p-8 text-center">
             <p className="text-red-400">Could not load download items. Please try again later.</p>
           </div>
        ) : (!downloadItems || downloadItems.length === 0) ? (
          <div className="md:col-span-2 lg:col-span-3 download-card p-12 text-center">
             <FileText className="mx-auto h-16 w-16 mb-6 text-muted-foreground/50" />
             <h3 className="text-2xl font-semibold mb-3">No Downloads Available</h3>
             <p className="text-muted-foreground">Check back soon for new releases and updates!</p>
           </div>
        ) : (
          downloadItems.map((item) => {
            const isPanel = item.item_id === 'Panel';

            return (
              <div
                key={item.id}
                className={`download-card p-6 relative group ${
                  isPanel ? 'border-accent/30 shadow-xl shadow-accent/10' : ''
                }`}
              >
                {isPanel && (
                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                     <div className="bg-gradient-to-r from-accent to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                       Main App
                     </div>
                   </div>
                 )}

                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur-xl">
                      {isPanel ? 
                        <Package className="h-6 w-6 text-accent" /> : 
                        <FileText className="h-6 w-6 text-muted-foreground" />
                      }
                    </div>
                    <div>
                       <h3 className="text-xl font-bold">{getItemTitle(item)}</h3>
                       <Badge variant="outline" className="text-xs mt-1 bg-accent/10 text-accent border-accent/30">
                          {item.version}
                       </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 grow leading-relaxed">
                    {getItemDescription(item)}
                  </p>

                  <div className="flex justify-between items-center text-sm mb-6 text-muted-foreground">
                    <div className="flex items-center">
                       <Download size={16} className="mr-2" />
                       Size: {item.file_size}
                    </div>
                    <div className="flex items-center">
                       <Clock size={16} className="mr-2" />
                       Updated: {formatDate(item.last_updated)}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleDownload(item)}
                    className={`w-full mt-auto rounded-2xl py-3 transition-all duration-500 ${
                      isPanel ? 'modern-button' : 'modern-button-secondary'
                    }`}
                  >
                    <Download size={18} className="mr-2" />
                    Download Now
                  </Button>

                   <div className="mt-4 pt-4 border-t border-white/8 flex justify-between items-center text-xs">
                     <span className="text-muted-foreground">
                       ID: <code className="font-mono backdrop-blur-xl bg-[rgba(0,0,0,0.2)] px-2 py-1 rounded-lg border border-white/5">{item.item_id}</code>
                     </span>
                     <Button variant="link" size="sm" className="h-auto p-0 text-accent hover:text-accent/80">
                       Release Notes
                     </Button>
                   </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </PageLayout>
  );
};

export default Downloads;
