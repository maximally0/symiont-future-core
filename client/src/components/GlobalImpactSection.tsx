import React from 'react';

const GlobalImpactSection = () => {
  const impactMetrics = [
    {
      category: "Energy & Carbon",
      icon: "⚡",
      stats: [
        { metric: "1,050 TWh", description: "Projected global data center energy use by 2026" },
        { metric: "400+ tons CO₂", description: "Captured annually per 2-acre algae system" },
        { metric: "10,000+ gallons", description: "Biodiesel produced per acre-year from algae" },
        { metric: "50-90%", description: "Reduction in construction carbon via biomaterials" }
      ]
    },
    {
      category: "Water Conservation", 
      icon: "💧",
      stats: [
        { metric: "3-5M gallons", description: "Daily water use of large conventional data centers" },
        { metric: "50-90%", description: "Water usage reduction with SYMBIONT systems" },
        { metric: "5M liters", description: "Annual rainwater harvest potential per acre roof" },
        { metric: "0.2-0.5", description: "Target Water Usage Effectiveness (WUE)" }
      ]
    },
    {
      category: "Food Production",
      icon: "🌱", 
      stats: [
        { metric: "250 tons", description: "Annual greens production in 25,000 sq ft vertical farm" },
        { metric: "Zero miles", description: "Food transportation distance from facility" },
        { metric: "90% less", description: "Water use compared to traditional farming" },
        { metric: "1000+ ppm CO₂", description: "Enhanced greenhouse atmosphere for plant growth" }
      ]
    },
    {
      category: "Economic Benefits",
      icon: "💰",
      stats: [
        { metric: "Thousands of tons", description: "CO₂ savings from 50% concrete/steel replacement" },
        { metric: "Community jobs", description: "Urban farming and biotechnology positions" },
        { metric: "Local food supply", description: "Fresh produce for surrounding communities" },
        { metric: "Energy resilience", description: "Reduced grid dependency and peak demand" }
      ]
    }
  ];

  const globalScenarios = [
    {
      region: "India (Tier-2 Cities)",
      challenge: "High heat, monsoons, grid instability, growing tech sector",
      solution: "Monsoon water harvesting, heat-tolerant algae, community skill development",
      impact: "Sustainable growth model for emerging tech hubs like Jaipur, Pune, Lucknow"
    },
    {
      region: "Middle East (UAE, Saudi, Qatar)",
      challenge: "Extreme heat, water scarcity, fossil fuel dependence", 
      solution: "Desalination integration, shade-providing algae, drought-tolerant crops",
      impact: "Enable computing expansion without resource strain in mega-projects like NEOM"
    },
    {
      region: "Virginia (Data Center Capital)",
      challenge: "46% of state electricity by 2030, water stress, community pushback",
      solution: "Grid stabilization, aquifer protection, community benefit programs",
      impact: "Transform from resource burden to community asset and environmental leader"
    },
    {
      region: "Northern Europe", 
      challenge: "Cold climate, limited growing season, district heating needs",
      solution: "Waste heat for public buildings, year-round food production, aquaponics",
      impact: "Food security and heating efficiency for sustainable Nordic cities"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-900/20 via-gray-900 to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Global Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transforming data centers from resource consumers to regenerative community assets worldwide
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactMetrics.map((category, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-gray-700/50 bg-gray-900/30 hover:border-green-400/60 hover:bg-green-500/10 transition-all duration-500"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {stat.metric}
                    </div>
                    <div className="text-gray-400 text-sm leading-tight">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Scenarios */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Regional Transformation Scenarios
            </h3>
            <p className="text-lg text-gray-400">
              How SYMBIONT addresses unique challenges across different global markets
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {globalScenarios.map((scenario, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-500"
              >
                <h4 className="text-xl font-bold text-white mb-3">{scenario.region}</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-red-400 font-medium text-sm mb-2">Challenge</h5>
                    <p className="text-gray-300 text-sm">{scenario.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-cyan-400 font-medium text-sm mb-2">SYMBIONT Solution</h5>
                    <p className="text-gray-300 text-sm">{scenario.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-green-400 font-medium text-sm mb-2">Regional Impact</h5>
                    <p className="text-gray-300 text-sm">{scenario.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-green-500/30 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              The Future We're Building
            </h3>
            <p className="text-green-300 text-lg leading-relaxed mb-6">
              By 2030, SYMBIONT data centers could transform the industry from a sustainability liability 
              into a regenerative force. Instead of competing with communities for resources, these facilities 
              become net contributors — producing clean energy, fresh water, local food, and even improving air quality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Microsoft's goal to be carbon negative by 2030 isn't just about offsets and efficiency. 
              It's about fundamentally reimagining infrastructure as living systems that heal the planet 
              while powering the AI revolution. SYMBIONT makes this vision reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;