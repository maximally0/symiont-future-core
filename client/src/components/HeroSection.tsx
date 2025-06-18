
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading - Edit this text to change the project title */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          PROJECT SYMBIONT
        </h1>
        
        {/* Subheading - Edit this text to change the description */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Transform the data center from an energy sink into a regenerative node that not only powers AI but heals and feeds its environment.
        </p>
        
        {/* Attribution */}
        <div className="mt-8">
          <p className="text-cyan-400 font-medium">
            A TKS-Microsoft Research Project
          </p>
          <p className="text-gray-400 text-sm">
            By Rishul Chanana
          </p>
        </div>
        
        {/* YouTube Video Container - Replace VIDEO_ID with actual YouTube video ID */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all duration-500 hover:scale-[1.02]">
            {/* Replace "dQw4w9WgXcQ" with your actual YouTube video ID */}
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Project SYMBIONT Introduction Video"
              className="w-full h-full"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
