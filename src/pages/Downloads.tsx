import React, { useEffect, useState } from 'react';
import { Download, Clock, ShieldCheck, FileText, Package, Gift, Zap, Sun } from 'lucide-react'; // Added Package, Gift, Zap, Sun, FileText
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'; // Use the same Card component
import { Skeleton } from '@/components/ui/skeleton';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';
import { DownloadItem, fetchDownloadItems } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Badge } from '@/components/ui/badge'; // Import Badge for version/tags
import NewYearBanner from '@/components/NewYearBanner'; // Import the banner

// Helper to check if it's currently the festive season (e.g., April)
const isFestiveSeason = () => {
  const today = new Date();
  const month = today.getMonth(); // 0 = January, 3 = April
  return month === 3; // Assume festival in April
};

const Downloads = () => {
  const { data: downloadItems, isLoading, error } = useQuery({
    queryKey: ['downloadItems'],
    queryFn: fetchDownloadItems
  });
  const [showFestiveEffects, setShowFestiveEffects] = useState(false);

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
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    } catch (e) {
      return dateString; // Fallback
    }
  };

  // --- Title & Description Getters (keep as they are) ---
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

  // --- FESTIVE STYLES (Adopt from Store/Dashboard) ---
  const festiveGradientText = showFestiveEffects ? 'text-gradient-festive' : 'text-white'; // Example, define text-gradient-festive
  const festiveBorderPopular = showFestiveEffects ? 'border-yellow-500/40 shadow-lg shadow-yellow-600/10' : 'border-purple-500/30 shadow-lg shadow-purple-500/10'; // Highlight main item festively
  const festiveBorderNormal = showFestiveEffects ? 'border-orange-600/20' : 'border-white/5';
  const festiveButtonPopular = showFestiveEffects
    ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 hover:from-yellow-600 hover:via-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-600/30'
    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'; // Store's popular button
  const festiveButtonNormal = showFestiveEffects
    ? 'bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white shadow-md shadow-red-600/20'
    : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-white/5 text-white'; // Store's normal button

  const festiveBadgeStyle = showFestiveEffects
    ? 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30'
    : 'bg-blue-500/10 text-blue-300 border-blue-500/30'; // Example badge style

  const festiveCardBg = showFestiveEffects ? 'bg-[#1a1820]/70' : 'bg-card/80'; // Warmer festive bg

  // --- Skeleton Card (Matching new structure) ---
  const renderSkeletonCard = () => (
    <Card className={`border ${festiveBorderNormal} overflow-hidden backdrop-blur-sm`}>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Skeleton className={`h-10 w-10 rounded-full ${showFestiveEffects ? 'bg-yellow-800/50' : 'bg-muted'}`} />
          <div>
            <Skeleton className={`h-5 w-32 mb-1 ${showFestiveEffects ? 'bg-yellow-800/50' : 'bg-muted'}`} />
            <Skeleton className={`h-3 w-16 ${showFestiveEffects ? 'bg-yellow-800/30' : 'bg-muted/50'}`} />
          </div>
        </div>
        <Skeleton className={`h-4 w-full mb-2 ${showFestiveEffects ? 'bg-yellow-800/40' : 'bg-muted'}`} />
        <Skeleton className={`h-4 w-3/4 mb-4 ${showFestiveEffects ? 'bg-yellow-800/40' : 'bg-muted'}`} />
        <div className="flex justify-between items-center mb-5">
          <Skeleton className={`h-4 w-20 ${showFestiveEffects ? 'bg-yellow-800/30' : 'bg-muted/50'}`} />
          <Skeleton className={`h-4 w-24 ${showFestiveEffects ? 'bg-yellow-800/30' : 'bg-muted/50'}`} />
        </div>
        <Skeleton className={`h-10 w-full ${showFestiveEffects ? 'bg-orange-700/50' : 'bg-primary/50'}`} />
         <div className="flex justify-between items-center mt-4">
           <Skeleton className={`h-4 w-24 ${showFestiveEffects ? 'bg-yellow-800/30' : 'bg-muted/50'}`} />
           <Skeleton className={`h-8 w-28 ${showFestiveEffects ? 'bg-yellow-800/30' : 'bg-muted/50'}`} />
         </div>
      </div>
    </Card>
  );

  // --- Main Render Function ---
  return (
    <PageLayout
      title="Downloads"
      subtitle={showFestiveEffects ? "Grab your festive tools & updates!" : "Get the latest Walker Regedits tools"}
      className="relative" // Needed for absolute positioning of banner/effects
    >
      {/* Render the festive banner */}
      {showFestiveEffects && <NewYearBanner />}

      {/* Optional: Add a festive heading */}
      {showFestiveEffects && (
        <h2 className="text-2xl font-bold mb-6 mt-8 flex items-center glow-text">
          <Gift className="mr-2 h-5 w-5 text-yellow-400 animate-pulse" />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            New Year Downloads
          </span>
        </h2>
      )}

      {/* Grid layout similar to Store */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${showFestiveEffects ? 'mt-6' : 'mt-0'} animate-fade-in`}>
        {isLoading ? (
          Array(3).fill(0).map((_, index) => <div key={index}>{renderSkeletonCard()}</div>)
        ) : error ? (
          <Card className={`md:col-span-2 lg:col-span-3 p-6 text-center ${festiveBorderNormal} ${festiveCardBg}`}>
             <p className="text-red-400">Could not load download items. Please try again later.</p>
           </Card>
        ) : (!downloadItems || downloadItems.length === 0) ? (
          <Card className={`md:col-span-2 lg:col-span-3 p-10 text-center ${festiveBorderNormal} ${festiveCardBg}`}>
             <FileText className={`mx-auto h-12 w-12 mb-4 ${showFestiveEffects ? 'text-yellow-500/60 animate-bounce' : 'text-muted-foreground/50'}`} />
             <h3 className={`text-xl font-medium mb-2 ${showFestiveEffects ? festiveGradientText : ''}`}>No Downloads Available</h3>
             <p className={`${showFestiveEffects ? 'text-orange-300/80' : 'text-muted-foreground'}`}>Check back soon for new releases and updates!</p>
           </Card>
        ) : (
          downloadItems.map((item) => {
            const isPanel = item.item_id === 'Panel'; // Identify the main item for potential highlight
            const cardBorder = isPanel ? festiveBorderPopular : festiveBorderNormal;
            const buttonStyle = isPanel ? festiveButtonPopular : festiveButtonNormal;

            return (
              <Card
                key={item.id}
                className={`border relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] ${cardBorder} ${festiveCardBg} group`}
              >
                {/* Conditional "Latest" or "Main" badge */}
                {isPanel && (
                   <div className={`absolute top-0 right-0 ${showFestiveEffects ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-walker-DEFAULT'} text-white text-xs font-semibold px-3 py-1 rounded-bl shadow-md`}>
                     Main App
                   </div>
                 )}
                 {/* Optional festive sparkle */}
                 {showFestiveEffects && isPanel && (
                    <div className="absolute top-2 left-2 text-yellow-400 opacity-70 animate-sparkle">
                        <Sun size={16} />
                    </div>
                 )}
                  {showFestiveEffects && !isPanel && (
                     <div className="absolute bottom-2 right-2 text-red-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-sparkle [animation-play-state:paused] group-hover:[animation-play-state:running]">
                         <Zap size={14} />
                     </div>
                  )}

                <div className="p-6 flex flex-col h-full"> {/* Flex column for structure */}
                  {/* Header: Icon + Title + Version */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-full border ${showFestiveEffects ? 'bg-orange-900/30 border-orange-600/20' : 'bg-card/80 border-white/5'}`}>
                      {isPanel ? <Package className={`h-5 w-5 ${showFestiveEffects ? 'text-yellow-400' : 'text-primary'}`} /> : <FileText className={`h-5 w-5 ${showFestiveEffects ? 'text-orange-400' : 'text-muted-foreground'}`} />}
                    </div>
                    <div>
                       <h3 className={`text-lg font-bold ${showFestiveEffects && isPanel ? festiveGradientText : ''}`}>{getItemTitle(item)}</h3>
                       <Badge variant="outline" className={`text-xs mt-1 ${festiveBadgeStyle}`}>
                          v{item.version}
                       </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-4 grow ${showFestiveEffects ? 'text-orange-300/90' : 'text-gray-400'}`}> {/* `grow` to push button down */}
                    {getItemDescription(item)}
                  </p>

                  {/* Metadata (Size, Updated) */}
                  <div className="flex justify-between items-center text-xs mb-5 text-gray-400">
                    <div className="flex items-center">
                       <Download size={14} className={`mr-1.5 ${showFestiveEffects ? 'text-yellow-500/80' : 'text-gray-500'}`} />
                       Size: {item.file_size}
                    </div>
                    <div className="flex items-center">
                       <Clock size={14} className={`mr-1.5 ${showFestiveEffects ? 'text-yellow-500/80' : 'text-gray-500'}`} />
                       Updated: {formatDate(item.last_updated)}
                    </div>
                  </div>

                  {/* Download Button */}
                  <Button
                    onClick={() => handleDownload(item)}
                    className={`w-full mt-auto ${buttonStyle} win11-press`} // `mt-auto` pushes button to bottom
                  >
                    <Download size={16} className="mr-2" />
                    Download Now
                  </Button>

                   {/* Footer: File ID / Release Notes (Optional & Subtle) */}
                   <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs">
                     <span className={`${showFestiveEffects ? 'text-orange-400/60' : 'text-gray-500'}`}>
                       ID: <code className="font-mono bg-black/20 px-1 rounded">{item.item_id}</code>
                     </span>
                     {/* Make Release Notes less prominent if desired */}
                     <Button variant="link" size="sm" className={`h-auto p-0 ${showFestiveEffects ? 'text-yellow-500 hover:text-yellow-300' : 'text-blue-400 hover:text-blue-300'}`}>
                       Release Notes
                     </Button>
                   </div>
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Removed the old Statistics Table and System Requirements Card */}

    </PageLayout>
  );
};

export default Downloads;
