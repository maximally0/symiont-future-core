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
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-8 rounded-2xl border border-violet-500/30 max-w-4xl mx-auto">
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

        {/* Contact and collaboration */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">

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