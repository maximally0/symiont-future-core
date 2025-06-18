import React from 'react';

const DeploymentRoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Prototype Facility",
      subtitle: "Living Data Lab",
      timeline: "2 Years",
      location: "Hyderabad, India or Austin, Texas",
      scale: "2-5 MW IT Load",
      description: "Build a pilot data center combining core subsystems on smaller scale to test the SYMBIONT concept end-to-end.",
      objectives: [
        "Test algae PBR prototypes and small vertical farm (200 m² greenhouse)",
        "Integrate mycelium-insulated admin building",
        "Measure PUE, WUE, Carbon Capture per kWh, crop yields",
        "Refine AI control algorithms in real environment",
        "Open community engagement and university partnerships"
      ],
      keyMetrics: "Proof of concept validation with measurable sustainability gains"
    },
    {
      phase: "Phase 2", 
      title: "Modular Retrofitting",
      subtitle: "Infiltrate Existing Data Centers",
      timeline: "3-4 Years",
      location: "Azure regions globally",
      scale: "Retrofit modules",
      description: "Add SYMBIONT modules to existing Microsoft data centers to test components in varied scenarios and accelerate impact.",
      objectives: [
        "Arizona facility: Add algae cooling pond and CO₂ capture systems",
        "Dublin facility: Implement heat reuse greenhouse for colder climate",
        "Quincy facility: Deploy AI workload shifting software fleet-wide",
        "Amsterdam facility: Install mycelium insulation panels",
        "Develop plug-and-play module products for industry adoption"
      ],
      keyMetrics: "Individual components validated at scale across various climates"
    },
    {
      phase: "Phase 3",
      title: "Global Blueprint", 
      subtitle: "Scale Out and Scale Up",
      timeline: "2030+",
      location: "Worldwide",
      scale: "All new facilities",
      description: "Make SYMBIONT the default approach for all new Microsoft data centers and influence industry standards.",
      objectives: [
        "Publish open-source design guide for different climate zones",
        "Create reference architectures and vendor partnerships",
        "Target Tier-2 Indian cities, MENA, Southern Europe for flagship builds",
        "Mandate 80% SYMBIONT implementation for new Azure facilities",
        "Host annual Living Data Center Summit for industry leadership"
      ],
      keyMetrics: "Industry transformation with regulatory influence and policy adoption"
    }
  ];

  const climateAdaptations = [
    {
      climate: "Hot/Arid",
      regions: "Middle East, Interior Australia",
      focus: "Passive cooling and water recycling",
      modules: "Extensive algae for cooling and carbon capture, high-efficiency greenhouse with drought-tolerant crops, desalination using waste heat"
    },
    {
      climate: "Tropical", 
      regions: "India, Southeast Asia",
      focus: "Managing monsoon rains and humidity",
      modules: "Vertical farms as dehumidifiers, algae handling monsoon growth bursts, designs avoiding excess heat"
    },
    {
      climate: "Temperate/Wet",
      regions: "Northern Europe, Pacific Northwest", 
      focus: "Heat reuse and rainwater management",
      modules: "District heating connections, large rain gardens, green roofs, modest algae for carbon capture"
    },
    {
      climate: "Cold",
      regions: "Nordics, Northern Canada",
      focus: "Aquaponics and public space heating",
      modules: "Fish farming + hydroponics, waste heat for public buildings, LED-assisted algae in winter"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Deployment Roadmap
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            From prototype to global adoption: a phased approach to transforming data center infrastructure
          </p>
        </div>

        {/* Phase Timeline */}
        <div className="space-y-12 mb-20">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Phase connector line */}
              {index < phases.length - 1 && (
                <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-violet-400 to-cyan-400 opacity-30 transform -translate-x-1/2" />
              )}
              
              <div className="grid lg:grid-cols-3 gap-8 p-8 rounded-2xl border border-violet-500/30 bg-violet-500/5 hover:border-violet-400/60 hover:bg-violet-500/10 transition-all duration-500">
                {/* Phase header */}
                <div className="lg:col-span-1">
                  <div className="text-center lg:text-left">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 text-white font-bold text-sm mb-4">
                      {phase.phase}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {phase.title}
                    </h3>
                    <h4 className="text-lg text-violet-400 font-medium mb-4">
                      {phase.subtitle}
                    </h4>
                    
                    <div className="space-y-2 text-sm text-gray-400">
                      <div><span className="font-medium">Timeline:</span> {phase.timeline}</div>
                      <div><span className="font-medium">Location:</span> {phase.location}</div>
                      <div><span className="font-medium">Scale:</span> {phase.scale}</div>
                    </div>
                  </div>
                </div>

                {/* Description and objectives */}
                <div className="lg:col-span-2">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {phase.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Objectives</h5>
                      <div className="space-y-2">
                        {phase.objectives.map((objective, objIndex) => (
                          <div key={objIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-400 text-sm leading-relaxed">{objective}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-white font-semibold mb-3">Success Metrics</h5>
                      <div className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-4 rounded-lg border border-violet-500/30">
                        <p className="text-violet-300 text-sm leading-relaxed">
                          {phase.keyMetrics}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Climate Adaptations */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Climate Zone Adaptations
            </h3>
            <p className="text-lg text-gray-400">
              Tailored SYMBIONT configurations for different global environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {climateAdaptations.map((adaptation, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-gray-700/50 bg-gray-900/30 hover:border-cyan-400/60 hover:bg-gray-800/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">{adaptation.climate}</h4>
                <p className="text-cyan-400 text-sm font-medium mb-3">{adaptation.regions}</p>
                <p className="text-gray-300 text-sm mb-4">{adaptation.focus}</p>
                <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 p-3 rounded-lg border border-cyan-500/30">
                  <p className="text-cyan-300 text-xs leading-relaxed">
                    {adaptation.modules}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentRoadmapSection;