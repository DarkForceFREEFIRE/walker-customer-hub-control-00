import React, { useState } from 'react';
import { Download, FileDown, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

type PublicDownload = {
  id: string;
  name: string;
  description: string | null;
  download_link: string;
  file_size: string | null;
  display_order: number;
  created_at: string;
};

type DownloadProgress = {
  [key: string]: {
    progress: number;
    isDownloading: boolean;
    isComplete: boolean;
  };
};

const DownloadCenter = () => {
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress>({});

  const { data: downloads, isLoading, error } = useQuery({
    queryKey: ['publicDownloads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('public_downloads')
        .select('*')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as PublicDownload[];
    }
  });

  const handleDownload = async (item: PublicDownload) => {
    try {
      // Initialize download state
      setDownloadProgress(prev => ({
        ...prev,
        [item.id]: { progress: 0, isDownloading: true, isComplete: false }
      }));

      toast.info(`Starting download: ${item.name}`);

      // Fetch the file with progress tracking
      const response = await fetch(item.download_link);
      
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
      const filename = item.download_link.split('/').pop() || `${item.name}.file`;
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

      toast.success(`Download complete: ${item.name}`);

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

  const renderSkeletonCard = () => (
    <div className="download-card p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <div className="flex-1">
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-12 w-full" />
    </div>
  );

  return (
    <PageLayout
      title="Download Center"
      subtitle="Get the latest files and resources"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {isLoading ? (
          Array(3).fill(0).map((_, index) => <div key={index}>{renderSkeletonCard()}</div>)
        ) : error ? (
          <div className="md:col-span-2 lg:col-span-3 download-card p-8 text-center">
            <p className="text-destructive">Could not load downloads. Please try again later.</p>
          </div>
        ) : (!downloads || downloads.length === 0) ? (
          <div className="md:col-span-2 lg:col-span-3 download-card p-12 text-center">
            <FileDown className="mx-auto h-16 w-16 mb-6 text-muted-foreground/50" />
            <h3 className="text-2xl font-semibold mb-3">No Downloads Available</h3>
            <p className="text-muted-foreground">Check back soon for new files!</p>
          </div>
        ) : (
          downloads.map((item) => {
            const progress = downloadProgress[item.id];
            const isDownloading = progress?.isDownloading || false;
            const isComplete = progress?.isComplete || false;

            return (
              <div key={item.id} className="download-card p-6 flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    {isComplete ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                      <FileDown className="h-6 w-6 text-accent" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold truncate">{item.name}</h3>
                    {item.file_size && (
                      <p className="text-xs text-muted-foreground">{item.file_size}</p>
                    )}
                  </div>
                </div>

                {item.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 grow">
                    {item.description}
                  </p>
                )}

                {isDownloading && progress && (
                  <div className="mb-4">
                    <Progress value={progress.progress} showValue size="md" />
                  </div>
                )}

                <Button
                  onClick={() => handleDownload(item)}
                  disabled={isDownloading}
                  className="w-full mt-auto modern-button"
                >
                  {isDownloading ? (
                    <>Downloading...</>
                  ) : isComplete ? (
                    <>
                      <CheckCircle2 size={18} className="mr-2" />
                      Complete
                    </>
                  ) : (
                    <>
                      <Download size={18} className="mr-2" />
                      Download
                    </>
                  )}
                </Button>
              </div>
            );
          })
        )}
      </div>
    </PageLayout>
  );
};

export default DownloadCenter;
