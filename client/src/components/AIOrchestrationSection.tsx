
import React from 'react';

const AIOrchestrationSection = () => {
  const aiFeatures = [
    {
      title: "Predictive Maintenance",
      icon: "🔬",
      description: "Machine vision and spectral analysis monitor system health in real-time",
      details: [
        "Algae color analysis detects contamination or nutrient deficiencies before yield drops",
        "Thermal imaging identifies cooling inefficiencies and equipment wear patterns",
        "pH, dissolved oxygen, and nutrient sensors trigger automated adjustments",
        "Predictive models forecast maintenance needs 2-4 weeks in advance",
        "Digital twin simulations test maintenance scenarios without system disruption"
      ]
    },
    {
      title: "Carbon-Aware Workload Scheduling",
      icon: "⚡",
      description: "Real-time optimization of compute tasks based on grid carbon intensity and renewable availability",
      details: [
        "Workloads automatically shift to low-carbon grid periods (wind/solar peaks)",
        "ML training jobs queue during cleanest energy hours, reducing scope 2 emissions",
        "Heat-intensive computations timed with biological system heating needs",
        "Geographic load balancing across global facilities for carbon optimization",
        "Integration with utility demand response programs for grid stabilization"
      ]
    },
    {
      title: "Biological Growth Optimization",
      icon: "🌱",
      description: "Computer vision and environmental controls maximize biological productivity",
      details: [
        "Machine vision tracks mushroom growth stages and harvesting readiness",
        "Automated nutrient dosing maintains optimal algae growth conditions",
        "LED lighting schedules adapt to plant circadian rhythms and energy availability",
        "CO₂ routing optimized between algae tanks and greenhouse environments",
        "Harvest timing coordinated with facility operations and local demand"
      ]
    },
    {
      title: "Thermal & Water Flow Management",
      icon: "🌊",
      description: "Dynamic routing of heat and water streams across interconnected systems",
      details: [
        "Heat exchangers automatically prioritize between algae, greenhouse, and storage",
        "Water quality sensors trigger treatment system activation and routing decisions",
        "Thermal storage charged during peak compute loads, discharged during biological needs",
        "Condensate recovery systems activated based on humidity and water demand forecasts",
        "Emergency cooling prioritization ensures IT loads never compromise"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            AI-Orchestrated Symbiosis
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
            The centralized AI brain that coordinates every aspect of the living data center ecosystem
          </p>
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-2xl border border-purple-500/30 max-w-5xl mx-auto">
            <p className="text-purple-300 text-lg leading-relaxed">
              Like the nervous system of a living organism, our AI orchestration layer manages the complex metabolism 
              of compute workloads, biological processes, and resource flows. Every decision optimizes for performance, 
              sustainability, and resilience across the entire symbiotic ecosystem.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {aiFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group grid lg:grid-cols-3 gap-8 p-8 rounded-2xl border border-gray-700/50 bg-gray-900/30 hover:border-purple-400/60 hover:bg-purple-500/5 transition-all duration-500"
            >
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-5xl">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="lg:col-span-2">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">AI Capabilities</h4>
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Digital Metabolism
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every 15 seconds, the AI processes thousands of sensor readings, weather forecasts, energy prices, 
              and biological metrics to make optimal decisions across the entire facility. Like a master conductor, 
              it ensures every system works in perfect harmony while maintaining enterprise-grade reliability.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-300">15s</div>
                <div className="text-gray-400 text-sm">Decision cycles</div>
              </div>
              <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/30">
                <div className="text-2xl font-bold text-cyan-300">99.9%</div>
                <div className="text-gray-400 text-sm">System uptime</div>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <div className="text-2xl font-bold text-green-300">24/7</div>
                <div className="text-gray-400 text-sm">Autonomous operation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOrchestrationSection;
