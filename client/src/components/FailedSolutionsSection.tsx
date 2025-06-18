
import React from 'react';

const FailedSolutionsSection = () => {
  // Failed fixes list - Edit these items to change the content
  const failedFixes = [
    { text: "100% Renewable Energy?", subtext: "Still grid-reliant." },
    { text: "Efficient Cooling?", subtext: "Heat still wasted." },
    { text: "Biofuel Generators?", subtext: "Still polluting." },
    { text: "Green Construction?", subtext: "Doesn't fix operations." },
    { text: "Heat Recycling?", subtext: "Only works in cold cities." }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gray-950">
      {/* Cyber Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(157,0,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Edit this title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Why Half-Solutions Fail
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Problem Summary - Edit this content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Most solutions only fix one piece of the puzzle. Renewable energy doesn't solve water waste. 
              Efficient cooling doesn't reuse heat. Green building materials don't matter if operations are 
              still polluting. We don't need net-zero — we need net-positive.
            </p>
          </div>
          
          {/* Right Side: Failed Fixes List - Edit the failedFixes array above to modify these items */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-violet-400 mb-6">Failed Fixes</h3>
            {failedFixes.map((fix, index) => (
              <div 
                key={index}
                className="group p-4 rounded-lg border border-gray-700/50 bg-gray-900/30 hover:border-violet-400/60 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full group-hover:animate-pulse" />
                  <span className="text-white font-medium group-hover:text-violet-300 transition-colors">
                    {fix.text}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1 ml-5 group-hover:text-gray-300 transition-colors">
                  {fix.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FailedSolutionsSection;
