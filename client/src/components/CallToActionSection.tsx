import React from 'react';

const CallToActionSection = () => {
  const nextSteps = [
    {
      title: "Build the Prototype",
      description: "Fund Phase 1 Living Data Lab in Hyderabad or Austin",
      timeline: "2 years",
      investment: "Pilot facility development"
    },
    {
      title: "Partner with Microsoft",
      description: "Collaborate on Azure data center retrofits and new builds", 
      timeline: "3-4 years",
      investment: "Modular system integration"
    },
    {
      title: "Join the Movement",
      description: "Support open-source blueprint development and policy advocacy",
      timeline: "Ongoing",
      investment: "Knowledge sharing and adoption"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-violet-900/30 via-gray-900 to-cyan-900/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            Download Research
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The AI revolution needs sustainable infrastructure. Help us build data centers that regenerate rather than consume.
          </p>
        </div>

        {/* Main CTA Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Vision statement */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-8 rounded-2xl border border-violet-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Act Now?
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Data centers will consume 1,050 TWh globally by 2026 — equivalent to ranking 5th among countries. 
                  Traditional solutions aren't scaling fast enough.
                </p>
                <p>
                  SYMBIONT offers a complete paradigm shift: from resource consumer to regenerative contributor. 
                  Every waste stream becomes an input for another system.
                </p>
                <p className="text-cyan-300 font-medium">
                  The window for transformative action is now, before unsustainable patterns become locked in.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Next steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Next Steps</h3>
            {nextSteps.map((step, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-gray-700/50 bg-gray-900/30 hover:border-violet-400/60 hover:bg-violet-500/10 transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      {step.description}
                    </p>
                    <div className="flex space-x-4 text-xs">
                      <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300">
                        {step.timeline}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                        {step.investment}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact and collaboration */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Data Centers?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Join Microsoft and leading sustainability experts in building the first regenerative AI infrastructure. 
              Whether you're an investor, researcher, policymaker, or industry leader — there's a role for you in this transformation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="group p-4 rounded-lg bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30 hover:border-violet-400/60 transition-all duration-300">
                <div className="text-2xl mb-2">🏗️</div>
                <h4 className="text-white font-medium mb-2">Investors & Builders</h4>
                <p className="text-gray-400 text-sm">Fund prototype development and scale deployment</p>
              </div>
              
              <div className="group p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
                <div className="text-2xl mb-2">🔬</div>
                <h4 className="text-white font-medium mb-2">Researchers & Engineers</h4>
                <p className="text-gray-400 text-sm">Collaborate on biological and AI systems integration</p>
              </div>
              
              <div className="group p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-violet-500/10 border border-green-500/30 hover:border-green-400/60 transition-all duration-300">
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="text-white font-medium mb-2">Communities & Governments</h4>
                <p className="text-gray-400 text-sm">Shape policy and ensure equitable benefits</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-400 to-cyan-400 p-6 rounded-xl text-center mb-8">
              <h4 className="text-xl font-bold text-white mb-3">
                Download Full Research Report
              </h4>
              <p className="text-white/90 leading-relaxed mb-4">
                Access the complete technical documentation, implementation guide, and feasibility analysis.
              </p>
              <button className="bg-white text-violet-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
                Download PDF Report
              </button>
            </div>
            
            {/* Thank you and attribution */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 text-center">
              <p className="text-gray-300 mb-4 leading-relaxed">
                Thank you for reading through this comprehensive research on regenerative AI data centers. 
                This work represents months of analysis into how we can transform computing infrastructure 
                from an environmental liability into a regenerative force.
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-cyan-400 font-medium mb-2">
                  Research & Development
                </p>
                <p className="text-white font-bold mb-1">
                  Rishul Chanana
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  TKS-Microsoft Research Collaboration
                </p>
                <div className="flex justify-center space-x-6 text-sm text-gray-500">
                  <span>© 2025 Rishul Chanana</span>
                  <span>•</span>
                  <span>Project SYMBIONT</span>
                  <span>•</span>
                  <span>TKS-Microsoft Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;