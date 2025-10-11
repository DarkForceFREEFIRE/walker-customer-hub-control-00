import React, { useState, useEffect } from 'react';
import { Download, Clock, Package, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress'; // Import Progress
import { Skeleton } from '@/components/ui/skeleton';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';
import { DownloadItem, fetchDownloadItems } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Badge } from '@/components/ui/badge';

// Type for tracking download progress, copied from DownloadCenter.tsx
type DownloadProgress = {
  [key: string]: {
    progress: number;
    isDownloading: boolean;
    isComplete: boolean;
  };
};

const Downloads = () => {
  const { data: downloadItems, isLoading, error } = useQuery({
    queryKey: ['downloadItems'],
    queryFn: fetchDownloadItems
  });

  // State for tracking in-page download progress
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress>({});

  useEffect(() => {
    if (error) {
      toast.error('Failed to load download items');
      console.error('Download items error:', error);
    }
  }, [error]);

  // Direct download logic adapted from DownloadCenter.tsx
  const handleDirectDownload = async (item: DownloadItem) => {
    try {
      // Initialize download state
      setDownloadProgress(prev => ({
        ...prev,
        [item.id]: { progress: 0, isDownloading: true, isComplete: false }
      }));

      toast.info(`Starting download: ${getItemTitle(item)}`);

      // Fetch the file with progress tracking
      const response = await fetch(item.download_url);
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const contentLength = response.headers.get('content-length');
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Failed to get file reader');
      }

      const chunks: BlobPart[] = [];
      let receivedLength = 0;

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        chunks.push(value as BlobPart);
        receivedLength += value.length;
        
        // Update progress
        if (total > 0) {
          const progress = (receivedLength / total) * 100;
          setDownloadProgress(prev => ({
            ...prev,
            [item.id]: { ...prev[item.id], progress }
          }));
        }
      }

      // Combine chunks and create blob
      const blob = new Blob(chunks);
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Extract filename from URL or use item name
      const filename = item.download_url.split('/').pop() || `${getItemTitle(item)}.file`;
      link.download = filename;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup
      window.URL.revokeObjectURL(url);
      
      // Mark as complete
      setDownloadProgress(prev => ({
        ...prev,
        [item.id]: { progress: 100, isDownloading: false, isComplete: true }
      }));

      toast.success(`Download complete: ${getItemTitle(item)}`);

      // Reset after 3 seconds
      setTimeout(() => {
        setDownloadProgress(prev => {
          const newState = { ...prev };
          delete newState[item.id];
          return newState;
        });
      }, 3000);

    } catch (error) {
      console.error('Download error:', error);
      toast.error('Download failed. Please try again.');
      
      setDownloadProgress(prev => {
        const newState = { ...prev };
        delete newState[item.id];
        return newState;
      });
    }
  };
  
  // Main handler that decides which download method to use
  const handleDownloadClick = (item: DownloadItem) => {
    if (item.item_id === 'Panel') {
      handleDirectDownload(item);
    } else {
      // Original behavior for other items
      window.open(item.download_url, '_blank');
      toast.success(`Starting download for ${getItemTitle(item)} ${item.version}`);
    }
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
            
            // Get progress state for the current item
            const progress = downloadProgress[item.id];
            const isDownloading = progress?.isDownloading || false;
            const isComplete = progress?.isComplete || false;

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

                  {/* Conditionally render progress bar for the panel */}
                  {isPanel && isDownloading && progress && (
                    <div className="mb-4">
                      <Progress value={progress.progress} showValue size="md" />
                    </div>
                  )}

                  <Button
                    onClick={() => handleDownloadClick(item)}
                    disabled={isDownloading} // Disable button only when its specific item is downloading
                    className={`w-full mt-auto rounded-2xl py-3 transition-all duration-500 ${
                      isPanel ? 'modern-button' : 'modern-button-secondary'
                    }`}
                  >
                    {isPanel ? (
                      isDownloading ? (
                        <>Downloading...</>
                      ) : isComplete ? (
                        <>
                          <CheckCircle2 size={18} className="mr-2" />
                          Complete
                        </>
                      ) : (
                        <>
                          <Download size={18} className="mr-2" />
                          Download Now
                        </>
                      )
                    ) : (
                      <>
                        <Download size={18} className="mr-2" />
                        Download Now
                      </>
                    )}
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
