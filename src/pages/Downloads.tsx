import React, { useEffect, useState } from 'react';
import { Download, Clock, ShieldCheck, FileDown, Sun, Zap, Gift } from 'lucide-react'; // Added festive icons
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';
import { DownloadItem, fetchDownloadItems } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Helper to check if it's currently the festive season (e.g., April)
const isFestiveSeason = () => {
  const today = new Date();
  const month = today.getMonth(); // 0 = January, 3 = April
  // Let's assume the festival is primarily celebrated in April
  return month === 3;
};

const Downloads = () => {
  const { data: downloadItems, isLoading, error } = useQuery({
    queryKey: ['downloadItems'],
    queryFn: fetchDownloadItems
  });
  const [showFestiveEffects, setShowFestiveEffects] = useState(false);

  // Only show effects during the festive season (e.g., April)
  useEffect(() => {
    setShowFestiveEffects(isFestiveSeason());
  }, []);

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
    // ... (keep existing formatDate function)
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
    // ... (keep existing getItemTitle function)
    if (item.title) return item.title;
    switch(item.item_id) {
      case 'Panel': return 'Walker Regedits Panel';
      case 'Free Fire x86': return 'Free Fire';
      case 'VC_Redist': return 'Application Runtime files';
      default: return `${item.item_id.charAt(0).toUpperCase()}${item.item_id.slice(1)}`;
    }
  };

  const getItemDescription = (item: DownloadItem) => {
    // ... (keep existing getItemDescription function)
     if (item.description) return item.description;
     switch(item.item_id) {
       case 'Panel': return 'The Walker Regedits Latest Panel.';
       case 'Free Fire x86': return 'Recommended Free Fire version for extra safety.';
       case 'VC_Redist': return 'Default runtimes (Installed by default on original Windows. No need on many PC).';
       default: return 'Download this file to enhance your Walker Regedits experience.';
     }
  };

  // --- FESTIVE STYLES --- (Leverage styles similar to Dashboard)
  const festiveCardBase = showFestiveEffects
    ? "border border-yellow-600/20 shadow-lg shadow-yellow-700/10 bg-gradient-to-br from-[#2a2633]/70 to-[#1a1820]/70"
    : "border-white/5"; // Original style

  const festiveButton = showFestiveEffects
    ? "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 hover:from-yellow-600 hover:via-orange-600 hover:to-red-700 border-0 text-white shadow-lg shadow-orange-600/30 transition-all duration-300 hover:shadow-orange-600/50"
    : "bg-walker-DEFAULT hover:bg-walker-hover"; // Original style

  const festiveMetaIconColor = showFestiveEffects ? "text-orange-400/80" : "text-gray-500";
  const festiveVersionBadge = showFestiveEffects
    ? "bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 border border-yellow-500/30"
    : "bg-walker-DEFAULT/20 text-walker-DEFAULT"; // Original

  const festiveBottomSectionBg = showFestiveEffects ? "bg-gradient-to-r from-orange-900/10 via-red-900/10 to-yellow-900/10" : "bg-black/20";
  const festiveTableCardBg = showFestiveEffects
    ? "bg-gradient-to-r from-yellow-800/5 via-orange-800/5 to-red-800/5 border-orange-600/10"
    : "bg-gradient-to-r from-walker-dark to-walker-DEFAULT/10 border-white/5"; // Original
  const festiveTableHeaderBg = showFestiveEffects
    ? "bg-orange-800/20 hover:bg-orange-700/30 border-b border-orange-600/20"
    : "bg-walker-DEFAULT/5 hover:bg-walker-DEFAULT/10"; // Original
   const festiveTableRowHover = showFestiveEffects ? "hover:bg-yellow-900/30" : ""; // Add hover for festive

  const renderDownloadItems = () => {
    if (isLoading) {
      return Array(3).fill(0).map((_, index) => (
        <Card key={index} className={`${festiveCardBase} overflow-hidden`}>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Skeleton className={`h-6 w-1/3 mb-2 ${showFestiveEffects ? 'bg-yellow-800/50' : ''}`} />
              <Skeleton className={`h-4 w-2/3 mb-4 ${showFestiveEffects ? 'bg-yellow-800/30' : ''}`} />
              <div className="flex flex-wrap gap-4">
                <Skeleton className={`h-4 w-20 ${showFestiveEffects ? 'bg-yellow-800/30' : ''}`} />
                <Skeleton className={`h-4 w-32 ${showFestiveEffects ? 'bg-yellow-800/30' : ''}`} />
                <Skeleton className={`h-4 w-24 ${showFestiveEffects ? 'bg-yellow-800/30' : ''}`} />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Skeleton className={`h-10 w-32 ${showFestiveEffects ? 'bg-orange-700/50' : ''}`} />
            </div>
          </div>
        </Card>
      ));
    }

    if (!downloadItems || downloadItems.length === 0) {
      return (
        <Card className={`${festiveCardBase} p-6`}>
          <div className="text-center py-8">
            <FileDown className={`mx-auto h-12 w-12 mb-4 ${showFestiveEffects ? 'text-yellow-500/50 animate-bounce' : 'text-walker-DEFAULT/30'}`} />
            <h3 className={`text-xl font-medium mb-2 ${showFestiveEffects ? 'text-gradient-festive' : ''}`}>No downloads available</h3>
            <p className={`${showFestiveEffects ? 'text-orange-300/80' : 'text-gray-400'}`}>Check back later for new downloads!</p>
          </div>
        </Card>
      );
    }

    return downloadItems.map((item) => (
      <Card key={item.id} className={`${festiveCardBase} overflow-hidden group relative`}>
         {/* Optional: Add subtle festive sparkle */}
         {showFestiveEffects && (
            <div className="absolute top-2 right-2 text-yellow-400 opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-sparkle [animation-play-state:paused] group-hover:[animation-play-state:running]">
              <Zap size={16} />
            </div>
          )}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className={`text-xl font-bold flex items-center ${showFestiveEffects ? 'text-gradient-festive' : ''}`}>
                  {getItemTitle(item)}
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded ${festiveVersionBadge}`}>
                    {item.version}
                  </span>
                </h3>
                <p className={`mt-2 ${showFestiveEffects ? 'text-orange-300/90' : 'text-gray-400'}`}>{getItemDescription(item)}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                 {/* Using the download icon SVG */}
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`mr-1.5 ${festiveMetaIconColor}`}>
                  <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Size: {item.file_size}
              </div>
              <div className="flex items-center">
                <Clock size={16} className={`mr-1.5 ${festiveMetaIconColor}`} />
                Updated: {formatDate(item.last_updated)}
              </div>
              <div className="flex items-center">
                <ShieldCheck size={16} className={`mr-1.5 ${festiveMetaIconColor}`} />
                Required: All Users
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Button
              onClick={() => handleDownload(item)}
              className={`w-full lg:w-auto ${festiveButton}`}
            >
              <Download size={16} className="mr-2 group-hover:animate-bounce" />
              Download Now
            </Button>
          </div>
        </div>

        <div className={`border-t ${showFestiveEffects ? 'border-orange-600/10' : 'border-white/5'} ${festiveBottomSectionBg} px-6 py-3 flex justify-between items-center`}>
          <div className={`text-sm ${showFestiveEffects ? 'text-orange-300/70' : 'text-gray-400'}`}>
            File ID: <span className={`font-mono text-xs ${showFestiveEffects ? 'text-yellow-400/80' : ''}`}>{item.item_id}</span>
          </div>
          {/* Consider making release notes more prominent if available */}
          <Button variant="ghost" size="sm" className={`${showFestiveEffects ? 'text-yellow-400 hover:text-yellow-200 hover:bg-yellow-800/20' : 'text-walker-DEFAULT hover:text-walker-light'}`}>
            View Release Notes
          </Button>
        </div>
      </Card>
    ));
  };

  return (
    <PageLayout title="Downloads" subtitle="Get your festive tools and applications!">
        {/* Festive Greeting (Optional, could reuse from Dashboard or have a specific one) */}
        {showFestiveEffects && (
           <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-orange-500/30 text-center animate-fade-in">
             <p className="text-lg font-semibold text-gradient-festive animate-subtle-shimmer">
               <Gift size={20} className="inline-block mr-2 mb-1" /> Special New Year Downloads Ready!
             </p>
           </div>
        )}

      <div className="space-y-6 animate-fade-in">
        {renderDownloadItems()}

        {/* Statistics and Requirements Card */}
        <Card className={`p-6 mt-8 ${festiveTableCardBg}`}>
           {/* Optional festive icon */}
           {showFestiveEffects && <div className="absolute top-3 right-3 text-red-400 opacity-50 animate-pulse"><Sun size={18} /></div>}

          <h3 className={`text-xl font-bold mb-4 ${showFestiveEffects ? 'text-gradient-festive' : ''}`}>Download Information</h3>

          {/* Table Section */}
          <div className={`overflow-hidden rounded-md border ${showFestiveEffects ? 'border-orange-600/20' : 'border-white/10'} mb-6 shadow-inner ${showFestiveEffects ? 'shadow-orange-900/20' : 'shadow-black/20'}`}>
            <Table>
              <TableHeader>
                <TableRow className={festiveTableHeaderBg}>
                  <TableHead className={showFestiveEffects ? 'text-yellow-200/90' : ''}>File</TableHead>
                  <TableHead className={showFestiveEffects ? 'text-yellow-200/90' : ''}>Version</TableHead>
                  <TableHead className={showFestiveEffects ? 'text-yellow-200/90' : ''}>Size</TableHead>
                  <TableHead className={showFestiveEffects ? 'text-yellow-200/90' : ''}>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array(3).fill(0).map((_, index) => (
                    <TableRow key={index} className={festiveTableRowHover}>
                      <TableCell><Skeleton className={`h-4 w-32 ${showFestiveEffects ? 'bg-yellow-800/40' : ''}`} /></TableCell>
                      <TableCell><Skeleton className={`h-4 w-16 ${showFestiveEffects ? 'bg-yellow-800/40' : ''}`} /></TableCell>
                      <TableCell><Skeleton className={`h-4 w-20 ${showFestiveEffects ? 'bg-yellow-800/40' : ''}`} /></TableCell>
                      <TableCell><Skeleton className={`h-4 w-24 ${showFestiveEffects ? 'bg-yellow-800/40' : ''}`} /></TableCell>
                    </TableRow>
                  ))
                ) : downloadItems?.map(item => (
                  <TableRow key={item.id} className={festiveTableRowHover}>
                    <TableCell className={`font-medium ${showFestiveEffects ? 'text-orange-200' : ''}`}>{getItemTitle(item)}</TableCell>
                    <TableCell className={showFestiveEffects ? 'text-yellow-300/90' : ''}>{item.version}</TableCell>
                    <TableCell className={showFestiveEffects ? 'text-orange-300/80' : ''}>{item.file_size}</TableCell>
                    <TableCell className={showFestiveEffects ? 'text-orange-300/80' : ''}>{formatDate(item.last_updated)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

           {/* System Requirements Section */}
          <h3 className={`text-xl font-bold mb-4 ${showFestiveEffects ? 'text-gradient-festive' : ''}`}>System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className={`font-medium mb-2 ${showFestiveEffects ? 'text-yellow-300' : ''}`}>Minimum Requirements</h4>
              <ul className={`list-disc list-inside space-y-1 text-sm ${showFestiveEffects ? 'text-orange-300/90 marker:text-yellow-500' : 'text-gray-300'}`}>
                <li>Windows 10/11 64-bit</li>
                <li>4 GB RAM</li>
                <li>1 GB free disk space</li>
                <li>Internet connection for updates</li>
                <li>DirectX 11 compatible graphics</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium mb-2 ${showFestiveEffects ? 'text-yellow-200' : ''}`}>Recommended Requirements</h4>
              <ul className={`list-disc list-inside space-y-1 text-sm ${showFestiveEffects ? 'text-orange-200/90 marker:text-yellow-400' : 'text-gray-300'}`}>
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
