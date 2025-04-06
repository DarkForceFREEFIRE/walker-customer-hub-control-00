
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';

const Guides = () => {
  return (
    <PageLayout title="Guides" subtitle="Step-by-step instructions to get started with Walker Regedits">
      <Card className="border-white/5">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">How to Download and Run Walker Regedits</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-14 flex items-start justify-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-walker-DEFAULT text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Check Safety Status</h3>
                <p className="text-gray-300 mb-4">
                  Before downloading any Walker Regedits tools, always verify the current safety status on your Dashboard. 
                  This helps ensure you're downloading when our tools are confirmed safe to use.
                </p>
                <div className="bg-walker-DEFAULT/10 border border-walker-DEFAULT/20 rounded-md p-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-walker-DEFAULT mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-walker-DEFAULT font-medium">Important!</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    Using our tools when marked as "maintenance" or "unsafe" may result in unwanted consequences including potential bans.
                  </p>
                </div>
              </div>
            </div>
            
            <Separator className="bg-white/5" />
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-14 flex items-start justify-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-walker-DEFAULT text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Download Files</h3>
                <p className="text-gray-300 mb-4">
                  Head to the Downloads section and select the appropriate version for your subscription level. 
                  Click the download button to begin the process.
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-md p-4 mt-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    <div>
                      <p className="text-amber-400 font-medium">NOTE: Use recommended emulator</p>
                      <p className="mt-1 text-sm text-gray-300">
                        For optimal performance and compatibility, we strongly recommend using our approved 
                        emulator when running Walker Regedits tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="bg-white/5" />
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-14 flex items-start justify-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-walker-DEFAULT text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Extract Files</h3>
                <p className="text-gray-300 mb-4">
                  Once downloaded, locate the ZIP file in your downloads folder. Right-click and select "Extract All" 
                  or use a program like WinRAR or 7-Zip to extract the contents.
                </p>
                <div className="bg-walker-dark rounded-lg p-4 border border-white/10">
                  <p className="text-sm text-gray-400 mb-2 font-medium">Recommended extraction path:</p>
                  <code className="bg-black/30 px-3 py-1.5 rounded text-green-400 block overflow-x-auto">
                    C:\Walker\Regedits\
                  </code>
                </div>
              </div>
            </div>
            
            <Separator className="bg-white/5" />
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-14 flex items-start justify-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-walker-DEFAULT text-white font-bold text-lg">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Use Application</h3>
                <p className="text-gray-300 mb-4">
                  Navigate to the extracted folder and run the application as administrator for best results. 
                  The first time you run it, you may need to complete a one-time setup process.
                </p>
                <div className="bg-walker-dark rounded-lg p-4 border border-white/10 space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">For Supreme and Essential packages:</p>
                    <code className="bg-black/30 px-3 py-1.5 rounded text-green-400 block overflow-x-auto">
                      Right-click "WalkerRegedits.exe" → Run as administrator
                    </code>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">For External package:</p>
                    <code className="bg-black/30 px-3 py-1.5 rounded text-green-400 block overflow-x-auto">
                      Right-click "WalkerExternal.exe" → Run as administrator
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start border-white/10 hover:border-walker-DEFAULT hover:bg-walker-DEFAULT/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2">
                  <path d="M21 12.7599V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4H9.23997C9.72126 4 10.1789 4.19359 10.5 4.53518L12.375 6.62499L16.5 6.62499C18.9853 6.62499 21 8.63975 21 11.125C21 11.7235 21 12.7599 21 12.7599Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Troubleshooting Guide
              </Button>
              <Button variant="outline" className="justify-start border-white/10 hover:border-walker-DEFAULT hover:bg-walker-DEFAULT/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2">
                  <path d="M21 10H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 6H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 14H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 18H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Feature Documentation
              </Button>
              <Button variant="outline" className="justify-start border-white/10 hover:border-walker-DEFAULT hover:bg-walker-DEFAULT/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2">
                  <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 7L13.0328 12.7589C12.3849 13.1371 11.6151 13.1371 10.9672 12.7589L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Video Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Getting Started Guide",
              duration: "5:32",
              thumbnail: "bg-gradient-to-br from-walker-DEFAULT/70 to-blue-900/70"
            },
            {
              title: "Advanced Features Tutorial",
              duration: "8:17",
              thumbnail: "bg-gradient-to-br from-purple-800/70 to-walker-DEFAULT/70"
            },
            {
              title: "Optimizing Performance",
              duration: "6:45",
              thumbnail: "bg-gradient-to-br from-blue-900/70 to-walker-DEFAULT/70"
            }
          ].map((video, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className={`aspect-video ${video.thumbnail} flex items-center justify-center`}>
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-medium text-white">{video.title}</h3>
                <p className="text-sm text-gray-300">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Guides;
