
import React from 'react';

const ReliabilitySection = () => {
  const failsafeSystems = [
    {
      system: "Thermal Management",
      icon: "🌡️",
      primaryPath: "Algae bioreactor heat exchange + thermal storage",
      failsafes: [
        "Traditional chiller backup activates within 30 seconds of algae system failure",
        "Redundant heat exchangers ensure continuous operation during maintenance",
        "Emergency thermal dump to atmosphere if all biological systems offline",
        "Digital twin predicts thermal loads 6 hours ahead for proactive adjustments"
      ],
      sla: "99.99% cooling availability with <2°C temperature variance"
    },
    {
      system: "Power & Energy",
      icon: "⚡",
      primaryPath: "Renewable energy + biological fuel generation + grid integration",
      failsafes: [
        "Battery storage provides 4-hour backup for critical IT loads",
        "Grid connection maintains traditional power availability",
        "Biodiesel generators provide extended offline operation capability",
        "AI workload shedding prioritizes mission-critical applications first"
      ],
      sla: "99.999% power reliability with automatic load balancing"
    },
    {
      system: "Water Systems",
      icon: "💧",
      primaryPath: "Closed-loop biological treatment + rainwater harvesting",
      failsafes: [
        "Municipal water connection provides backup during system maintenance",
        "Redundant filtration systems ensure continuous water quality",
        "Emergency water storage tanks maintain 7-day operational capacity",
        "Automated bypass valves isolate contaminated biological treatment loops"
      ],
      sla: "Zero water shortage risk with 3-tier backup systems"
    },
    {
      system: "IT Infrastructure",
      icon: "💻",
      primaryPath: "Standard enterprise-grade data center operations",
      failsafes: [
        "Biological systems NEVER impact core IT operations or SLAs",
        "Independent backup cooling, power, and connectivity for all servers",
        "Automated failover to traditional data center operations if needed",
        "Real-time monitoring ensures IT performance always takes priority"
      ],
      sla: "99.999% uptime with enterprise-grade performance guarantees"
    }
  ];

  const digitalTwinFeatures = [
    {
      feature: "Failure Simulation",
      description: "Test thousands of failure scenarios before deployment",
      capabilities: [
        "Algae contamination events and recovery procedures",
        "Heat exchanger failures during peak load conditions", 
        "Power grid instability and renewable energy fluctuations",
        "Extreme weather impacts on biological and IT systems"
      ]
    },
    {
      feature: "Predictive Maintenance",
      description: "AI predicts and prevents failures before they impact operations",
      capabilities: [
        "Equipment wear pattern analysis and replacement scheduling",
        "Biological system health monitoring and intervention triggers",
        "Performance degradation detection across all subsystems",
        "Optimal maintenance windows that minimize operational disruption"
      ]
    },
    {
      feature: "Safety Validation",
      description: "Enterprise-grade testing ensures mission-critical reliability",
      capabilities: [
        "Regulatory compliance verification for all safety systems",
        "Stress testing under worst-case operational scenarios",
        "Integration testing between biological and IT infrastructure",
        "Continuous safety monitoring with automated emergency responses"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Reliability & Failsafe Systems
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
            Enterprise-grade reliability with mission-resilient design ensuring biological innovation never compromises data center operations
          </p>
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-2xl border border-red-500/30 max-w-5xl mx-auto">
            <p className="text-red-300 text-lg font-medium leading-relaxed">
              SAFETY-CRITICAL PRINCIPLE: Every biological system operates with traditional backup systems ready 
              for instant failover. IT loads and enterprise SLAs are never compromised by biological innovation.
            </p>
          </div>
        </div>

        {/* Failsafe Systems */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Redundant Safety Systems</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {failsafeSystems.map((system, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-gray-700/50 bg-gray-900/30 hover:border-red-400/60 hover:bg-red-500/5 transition-all duration-500"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{system.icon}</div>
                  <h4 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                    {system.system}
                  </h4>
                </div>

                <div className="mb-4">
                  <h5 className="text-gray-200 font-medium mb-2">Primary System</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{system.primaryPath}</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-gray-200 font-medium mb-3">Failsafe Mechanisms</h5>
                  <div className="space-y-2">
                    {system.failsafes.map((failsafe, failsafeIndex) => (
                      <div key={failsafeIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">{failsafe}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-3 rounded-lg border border-red-500/30">
                  <h5 className="text-red-300 font-medium text-sm mb-1">Service Level Agreement</h5>
                  <p className="text-red-200 text-xs leading-relaxed">
                    {system.sla}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Twin Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Digital Twin Validation</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {digitalTwinFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-gray-700/50 bg-gray-900/30 hover:border-blue-400/60 hover:bg-blue-500/5 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-3">{feature.feature}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-400 text-xs leading-relaxed">{capability}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission-Resilient Summary */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700/50 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Mission-Resilient Architecture
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <div className="text-2xl font-bold text-green-300 mb-2">Zero</div>
                <div className="text-gray-400 text-sm">Compromise to IT operations</div>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <div className="text-2xl font-bold text-red-300 mb-2">3-Tier</div>
                <div className="text-gray-400 text-sm">Backup systems for every component</div>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <div className="text-2xl font-bold text-blue-300 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Digital twin monitoring</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              SYMBIONT delivers enterprise-grade reliability by treating biological systems as enhancement layers 
              over proven data center infrastructure. Every innovation is validated through extensive digital twin 
              testing before deployment, ensuring safety-critical operations never depend on experimental technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;
