
import React from 'react';

const VisionSection = () => {
  // Core subsystems list - Edit these items to change the subsystems
  const subsystems = [
    { name: "Algae Bioreactors", desc: "Convert waste heat and captured CO₂ into biofuels and oxygen" },
    { name: "Vertical Farms & Fungi", desc: "Mushrooms and microgreens using server heat and CO₂-enriched air" }, 
    { name: "Mycelium Insulation", desc: "Biodegradable, carbon-storing construction materials" },
    { name: "Water Harvesting & Reuse", desc: "Closed-loop oasis treating and recycling all water on-site" },
    { name: "AI-Orchestrated Symbiosis", desc: "Digital brain synchronizing energy, biological and thermal systems" }
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
              In a SYMBIONT data center, every "waste" stream (heat, CO₂, water, even server chassis at end-of-life) 
              is an input for another subsystem. The data center becomes symbiotic with nature and community.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This is not a single magic bullet – it's a symphony of innovations working in concert. The design is 
              biomimetic (inspired by how ecosystems reuse everything) and circular by design.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 p-6 rounded-lg border border-cyan-500/30">
              <p className="text-cyan-300 italic">
                "Think of a SYMBIONT data center like a giant tree: it has a metabolism and symbiotic relationships, 
                shades and cools its environment, bears fruit via the greenhouse, and provides habitat – all while 
                processing data."
              </p>
            </div>
          </div>
          
          {/* Right Side: Core Subsystems - Edit the subsystems array above to modify these items */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Core Subsystems</h3>
            <div className="space-y-4">
              {subsystems.map((system, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-lg bg-gray-900/30 border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full group-hover:animate-pulse" />
                    <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                      {system.name}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm ml-7 group-hover:text-gray-300 transition-colors">
                    {system.desc}
                  </p>
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
