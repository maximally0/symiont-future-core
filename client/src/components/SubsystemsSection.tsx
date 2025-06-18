import React from 'react';

const SubsystemsSection = () => {
  const subsystems = [
    {
      title: "Algae Bioreactors",
      icon: "🌱",
      description: "Use microalgae to capture carbon emissions and waste heat, producing biofuels and oxygen as outputs.",
      details: [
        "Photobioreactors arranged as algae panel facades on building walls",
        "Waste heat maintains optimal temperature (~30-35°C) for algae growth",
        "CO₂ from backup generators and ambient air feeds algae cultures",
        "Harvest yields 2,000-5,000+ gallons of biodiesel per acre annually",
        "Produces oxygen as co-benefit, acting like living air filters"
      ],
      metrics: "2 acres could capture 400 tons of CO₂ per year and produce ~38,000 liters of biodiesel"
    },
    {
      title: "Vertical Farms & Fungi", 
      icon: "🍄",
      description: "Mushroom cultivation and microgreen hydroponics using server heat and CO₂-enriched air.",
      details: [
        "Mushrooms thrive at 20-25°C with server exhaust heat via heat exchangers",
        "Oyster, Shiitake, Lion's Mane grown in climate-controlled modules",
        "Hydroponic greenhouse on roof with LED lighting timed to surplus power",
        "CO₂ from mushroom respiration feeds algae bioreactors",
        "Yields comparable to 250 tons of greens annually in 25,000 sq ft"
      ],
      metrics: "5,000 sq ft farming could supply tens of tons of produce annually with zero food miles"
    },
    {
      title: "Mycelium Architecture",
      icon: "🏗️", 
      description: "Sustainable building materials that provide insulation, carbon storage, and biodegradable construction.",
      details: [
        "Mycelium panels replace traditional foam insulation (80% less water, 50% less energy)",
        "Fire-resistant, humidity-buffering, and fully compostable at end-of-life",
        "Algae-based bricks and hempcrete walls sequester carbon in building structure",
        "Double-skin facade with algae panels and passive cooling design",
        "Green roofs and constructed wetlands integrated into architecture"
      ],
      metrics: "50% replacement of concrete/steel could save thousands of tons of CO₂ in construction"
    },
    {
      title: "Water Harvesting & Reuse",
      icon: "💧",
      description: "Closed-loop water system capturing rainwater, treating wastewater, and recycling all water on-site.",
      details: [
        "1-acre roof captures ~5 million liters annually in 50cm rainfall areas",
        "Condensate recovery from air conditioning systems provides distilled water",
        "Algae-based wastewater treatment removes contaminants and nutrients",
        "Constructed wetlands and biofilters provide natural water cleaning",
        "Potential to output surplus clean water to surrounding community"
      ],
      metrics: "Could reduce water usage by 50-90% compared to traditional data centers (WUE ~0.2-0.5)"
    },
    {
      title: "AI-Orchestrated Symbiosis",
      icon: "🤖",
      description: "Digital brain synchronizing compute workloads with energy, biological, and thermal systems.",
      details: [
        "Workload scheduling aligned with renewable energy availability",
        "Dynamic heat distribution between algae tanks, greenhouses, and storage",
        "Real-time optimization of biological system productivity",
        "Predictive maintenance and resource flow management",
        "Integration with grid signals for demand response and carbon reduction"
      ],
      metrics: "AI coordination enables 24/7 adaptive resource optimization across all subsystems"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Subsystem Modules
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Five integrated systems working in symphony to create a regenerative data center ecosystem
          </p>
        </div>

        <div className="space-y-12">
          {subsystems.map((system, index) => (
            <div 
              key={index}
              className="group grid lg:grid-cols-3 gap-8 p-8 rounded-2xl border border-gray-700/50 bg-gray-900/30 hover:border-cyan-400/60 hover:bg-gray-800/50 transition-all duration-500"
            >
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-5xl">{system.icon}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {system.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {system.description}
                </p>
                <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 p-4 rounded-lg border border-cyan-500/30">
                  <p className="text-cyan-300 text-sm font-medium">
                    {system.metrics}
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">Key Features</h4>
                <div className="space-y-3">
                  {system.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsystemsSection;