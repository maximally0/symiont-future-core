
import React from 'react';

const ClimateAdaptationSection = () => {
  const adaptations = [
    {
      region: "Tier-2 India",
      climate: "Heat + Monsoon",
      cities: "Jaipur, Pune, Lucknow, Coimbatore",
      challenges: "45°C+ summers, 3-month monsoons, grid instability",
      icon: "🌧️",
      adaptations: [
        "Monsoon water harvesting systems capture 5M+ liters during wet season",
        "Heat-tolerant Chlorella and Spirulina algae in covered bioreactors",
        "Oyster mushrooms thrive in monsoon humidity with passive ventilation",
        "Underground thermal storage buffers extreme temperature swings",
        "Community skill development programs for facility operations and maintenance"
      ],
      keyFeature: "Monsoon resilience with 6-month water independence"
    },
    {
      region: "UAE/MENA",
      climate: "Extreme Heat + Water Scarcity", 
      cities: "Dubai, Riyadh, Doha, Kuwait City",
      challenges: "50°C+ heat, <10cm annual rainfall, desalination dependence",
      icon: "🏜️",
      adaptations: [
        "Algae panels provide building shade while capturing carbon",
        "Halophilic algae species utilize brackish water and tolerate high salinity",
        "Desert-adapted mushrooms (King Oyster) in climate-controlled modules",
        "Integrated desalination using waste heat for community water supply",
        "Concentrated solar thermal storage for 24/7 renewable operation"
      ],
      keyFeature: "Net-positive water production in arid environments"
    },
    {
      region: "Northern Europe",
      climate: "Cold + Rainwater Reuse",
      cities: "Stockholm, Helsinki, Bergen, Dublin",
      challenges: "Sub-zero winters, 150+ rainy days, short growing seasons",
      icon: "❄️",
      adaptations: [
        "District heating connections warm public buildings with waste heat",
        "Year-round aquaponics with fish farming in heated greenhouse modules",
        "LED-assisted algae cultivation optimized for low-light conditions",
        "Large rain gardens and bioswales manage abundant precipitation",
        "Cold-adapted mushroom species (Shiitake, Maitake) in controlled environments"
      ],
      keyFeature: "Community heating hub with year-round food production"
    },
    {
      region: "California/Texas",
      climate: "Wildfires + Grid Stress",
      cities: "Sacramento, Austin, Phoenix, San Antonio",
      challenges: "Fire risk, rolling blackouts, extreme heat events",
      icon: "🔥",
      adaptations: [
        "Fire-resistant mycelium construction materials and defensible green spaces",
        "Battery storage provides grid stabilization during peak demand events",
        "Drought-tolerant algae systems with minimal water requirements",
        "Smart load shedding prioritizes biological systems during emergencies",
        "Air filtration through algae systems during wildfire smoke events"
      ],
      keyFeature: "Grid-resilient operation with emergency community services"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Climate Adaptation Modules
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Tailored SYMBIONT configurations optimized for diverse global environments and local challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {adaptations.map((adaptation, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-700/50 bg-gray-900/30 hover:border-green-400/60 hover:bg-green-500/5 transition-all duration-500"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{adaptation.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors">
                    {adaptation.region}
                  </h3>
                  <p className="text-green-400 font-medium">{adaptation.climate}</p>
                  <p className="text-gray-400 text-sm">{adaptation.cities}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Climate Challenges</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {adaptation.challenges}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">SYMBIONT Adaptations</h4>
                <div className="space-y-3">
                  {adaptation.adaptations.map((adapt, adaptIndex) => (
                    <div key={adaptIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{adapt}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 p-4 rounded-lg border border-green-500/30">
                <h5 className="text-green-300 font-medium text-sm mb-1">Key Innovation</h5>
                <p className="text-green-200 text-sm">
                  {adaptation.keyFeature}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700/50 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Global Deployment Strategy
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Each SYMBIONT facility is designed as a climate-adaptive organism, responding to local environmental 
              conditions while maintaining core regenerative principles. From desert oases to arctic food production 
              hubs, every deployment strengthens both digital infrastructure and community resilience.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30">
                <div className="text-lg font-bold text-blue-300">50+</div>
                <div className="text-gray-400 text-xs">Climate zones addressed</div>
              </div>
              <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/30">
                <div className="text-lg font-bold text-green-300">90%</div>
                <div className="text-gray-400 text-xs">Local adaptation rate</div>
              </div>
              <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
                <div className="text-lg font-bold text-purple-300">24/7</div>
                <div className="text-gray-400 text-xs">Climate monitoring</div>
              </div>
              <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/30">
                <div className="text-lg font-bold text-cyan-300">Zero</div>
                <div className="text-gray-400 text-xs">Environmental disruption</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateAdaptationSection;
