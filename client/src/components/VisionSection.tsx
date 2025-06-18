
import React from 'react';

const VisionSection = () => {
  // Core subsystems list - Edit these items to change the subsystems
  const subsystems = [
    "Algae Bioreactors",
    "Mushroom & Microgreen Farms", 
    "Mycelium Architecture",
    "Water Recycling Loops",
    "AI Coordination System"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-900/20 via-gray-900 to-cyan-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Edit these titles */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Vision: The Living Data Center
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A data center that functions like a living organism — taking in nutrients and excreting byproducts that are actually valuable to other processes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Vision Description - Edit this content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Project SYMBIONT is a regenerative AI infrastructure that mimics nature. Waste heat becomes food. 
              Carbon becomes fuel. Water is recycled. Every subsystem is part of a larger metabolic loop.
            </p>
          </div>
          
          {/* Right Side: Core Subsystems - Edit the subsystems array above to modify these items */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Core Subsystems</h3>
            <div className="space-y-4">
              {subsystems.map((system, index) => (
                <div 
                  key={index}
                  className="group flex items-center space-x-4 p-4 rounded-lg bg-gray-900/30 border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full group-hover:animate-pulse" />
                  <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    {system}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
