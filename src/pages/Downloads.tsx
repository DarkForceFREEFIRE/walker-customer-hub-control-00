
import React, { useEffect, useState } from 'react';
import { Download, Clock, ShieldCheck, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';
import { DownloadItem, fetchDownloadItems } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
    // Open the download URL in a new tab
    window.open(item.download_url, '_blank');
    toast.success(`Starting download for ${item.item_id} ${item.version}`);
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  const getItemTitle = (item: DownloadItem) => {
    if (item.title) return item.title;
    
    // Generate a title based on item_id if none provided
    switch(item.item_id) {
      case 'Panel':
        return 'Walker Regedits Panel';
      case 'Free Fire x86':
        return 'Free Fire';
      case 'VC_Redist':
        return 'Application Runtime files';
      default:
        return `${item.item_id.charAt(0).toUpperCase()}${item.item_id.slice(1)}`;
    }
  };

  const getItemDescription = (item: DownloadItem) => {
    if (item.description) return item.description;
    
    // Generate descriptions based on item_id if none provided
    switch(item.item_id) {
      case 'Panel':
        return 'The Walker Regedits Latest Panel.';
      case 'Free Fire x86':
        return 'Recommended Free Fire version for extra safety.';
      case 'VC_Redist':
        return 'Default runtimes (Installed by default on original Windows. No need on many PC).';
      default:
        return 'Download this file to enhance your Walker Regedits experience.';
    }
  };

  const renderDownloadItems = () => {
    if (isLoading) {
      return Array(3).fill(0).map((_, index) => (
        <Card key={index} className="border-white/5 overflow-hidden">
          <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Skeleton className="h-6 w-1/3 mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <div className="flex flex-wrap gap-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </Card>
      ));
    }

    if (!downloadItems || downloadItems.length === 0) {
      return (
        <Card className="border-white/5 p-6">
          <div className="text-center py-8">
            <FileDown className="mx-auto h-12 w-12 text-walker-DEFAULT/30 mb-4" />
            <h3 className="text-xl font-medium mb-2">No downloads available</h3>
            <p className="text-gray-400">Check back later for new downloads.</p>
          </div>
        </Card>
      );
    }

    return downloadItems.map((item) => (
      <Card key={item.id} className="border-white/5 overflow-hidden">
        <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold flex items-center">
                  {getItemTitle(item)}
                  <span className="ml-2 text-xs bg-walker-DEFAULT/20 text-walker-DEFAULT px-2 py-0.5 rounded">
                    {item.version}
                  </span>
                </h3>
                <p className="text-gray-400 mt-2">{getItemDescription(item)}</p>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 text-gray-500">
                  <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Size: {item.file_size}
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-1.5 text-gray-500" />
                Updated: {formatDate(item.last_updated)}
              </div>
              <div className="flex items-center">
                <ShieldCheck size={18} className="mr-1.5 text-gray-500" />
                Required: All Users
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end">
            <Button
              onClick={() => handleDownload(item)}
              className="w-full lg:w-auto bg-walker-DEFAULT hover:bg-walker-hover"
            >
              <Download size={16} className="mr-2" />
              Download
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/5 bg-black/20 px-6 py-3 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            File ID: <span className="font-mono text-xs">{item.item_id}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-walker-DEFAULT hover:text-walker-light">
            View Release Notes
          </Button>
        </div>
      </Card>
    ));
  };

  return (
    <PageLayout title="Downloads" subtitle="Download your Walker Regedits tools and applications">
      <div className="space-y-6">
        {renderDownloadItems()}

        <Card className="border-white/5 bg-gradient-to-r from-walker-dark to-walker-DEFAULT/10 p-6 mt-8">
          <h3 className="text-xl font-bold mb-4">Download Statistics</h3>
          
          <div className="overflow-hidden rounded-md border border-white/10 mb-6">
            <Table>
              <TableHeader>
                <TableRow className="bg-walker-DEFAULT/5 hover:bg-walker-DEFAULT/10">
                  <TableHead>File</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array(3).fill(0).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    </TableRow>
                  ))
                ) : downloadItems?.map(item => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{getItemTitle(item)}</TableCell>
                    <TableCell>{item.version}</TableCell>
                    <TableCell>{item.file_size}</TableCell>
                    <TableCell>{formatDate(item.last_updated)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
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
