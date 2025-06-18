import React from 'react';

const DayInLifeSection = () => {
  const timeSlots = [
    {
      time: "Morning",
      icon: "🌅",
      title: "Solar Awakening",
      description: "Solar panels start generating power, easing grid draw. Algae panels come to life with photosynthesis as light hits them, sucking in CO₂ from last night's generator test. Servers ramp up with daily traffic; their heat is captured and directed to algae tanks (33°C for peak productivity) and mushroom houses for cozy incubation.",
      activities: [
        "Oxygen-rich air from algae mixed into HVAC for staff",
        "Server heat warms algae bioreactors and mushroom chambers",
        "AI optimizes heat distribution based on biological needs"
      ]
    },
    {
      time: "Midday", 
      icon: "☀️",
      title: "Peak Symbiosis",
      description: "AI workload spike arrives. Grid is heavy on solar (low carbon), so AI approves increased draw. Heat rises, so warm water flows to rooftop greenhouse needing heating. Tomatoes get bright sun + extra CO₂ from flue gas. Algae growth accelerates with sun + heat + CO₂ combo, facade turns deep green providing maximum shading.",
      activities: [
        "Cooling towers barely used due to heat sharing with biological systems",
        "Greenhouse humidity adds to air, partially recaptured by condensation",
        "Dense algae culture provides building shade and cooling"
      ]
    },
    {
      time: "Afternoon",
      icon: "⛈️", 
      title: "Storm Adaptation",
      description: "Storm rolls in, solar drops, grid carbon intensity rises. AI postpones batch training jobs to avoid drawing dirty power. Heat flow to algae reduces since they won't overheat. Warm water routes to stratified thermal storage tank. Rain pours into rooftop cisterns. Cooling demand eases from rain-cooled outside air.",
      activities: [
        "Workload scheduling adapts to grid carbon intensity",
        "Thermal energy storage for later biological system use",
        "Rainwater harvesting maximizes water collection"
      ]
    },
    {
      time: "Evening",
      icon: "🌆",
      title: "Harvest Time", 
      description: "Technicians harvest oyster mushrooms that fruited in grow chambers - bounty for canteen and local farmers' market. Automated algae harvester concentrates and removes algae batch from facade loops. Part dried for biofuel processing, part fed to digester. Nutrient-rich water after algae harvest pumps to hydroponic farm as fertilizer.",
      activities: [
        "Fresh produce harvested and distributed locally",
        "Algae processing yields biofuel and biogas",
        "Circular nutrient flows between subsystems"
      ]
    },
    {
      time: "Night",
      icon: "🌙",
      title: "Energy Storage Cycle",
      description: "Outside air cools, reducing chiller usage. AI sees opportunity for heavy training with excess night wind power and full battery. Heat from intense compute partially stored in insulated water tank (50-60°C by dawn). Free nighttime wind energy stored as hot water for morning algae and greenhouse warming. Water treatment cycle processes greywater through algae ponds.",
      activities: [
        "Intensive compute workloads during clean energy abundance", 
        "Thermal energy storage using excess renewable power",
        "Nighttime water treatment using oxygen from day's photosynthesis"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            A Day in the Life
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the cyclical, adaptive dance of our regenerative data center ecosystem
          </p>
        </div>

        <div className="space-y-8">
          {timeSlots.map((slot, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Timeline connector */}
              {index < timeSlots.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-cyan-400 to-purple-400 opacity-30" />
              )}
              
              <div className="grid lg:grid-cols-4 gap-8 items-start">
                {/* Time indicator */}
                <div className="lg:col-span-1 flex items-center space-x-4">
                  <div className="text-5xl">{slot.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {slot.time}
                    </h3>
                    <h4 className="text-lg text-cyan-400 font-medium">
                      {slot.title}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {slot.description}
                  </p>
                  
                  <div className="space-y-2">
                    {slot.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-400 text-sm">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual element */}
                <div className="lg:col-span-1">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                      <p className="text-cyan-300 text-sm font-medium">
                        {index === 0 && "Photosynthesis Active"}
                        {index === 1 && "Peak Integration"}
                        {index === 2 && "Adaptive Response"}
                        {index === 3 && "Resource Cycling"}
                        {index === 4 && "Energy Banking"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 rounded-2xl border border-cyan-500/30 max-w-4xl mx-auto">
            <p className="text-cyan-300 text-lg italic leading-relaxed">
              "This cyclical, adaptive dance continues day after day. Nothing sits idle if it can be used productively: 
              when compute is light, farming activities intensify. When compute is heavy, biological systems flex to 
              absorb that output. It's truly an integrated metabolism."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayInLifeSection;