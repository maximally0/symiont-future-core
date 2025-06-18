
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Edit these titles */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Real Problem
          </h2>
          <p className="text-xl text-gray-400">
            Why today's data centers are failing us.
          </p>
        </div>
        
        {/* Problem Cards Grid - Edit card content below */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Energy Card - Edit content here */}
          <div className="group p-8 rounded-2xl border border-red-500/30 bg-red-500/5 hover:border-red-400/60 hover:bg-red-500/10 transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4 text-red-400">⚡</div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">Energy</h3>
              <p className="text-gray-300 leading-relaxed">
                AI workloads demand 7-8× more power than typical data tasks. By 2026, data centers could consume 1,050 TWh globally — ranking 5th among countries between Japan and Russia.
              </p>
            </div>
          </div>
          
          {/* Water Card - Edit content here */}
          <div className="group p-8 rounded-2xl border border-blue-500/30 bg-blue-500/5 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4 text-blue-400">💧</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Water</h3>
              <p className="text-gray-300 leading-relaxed">
                Large facilities consume 3-5 million gallons daily for cooling — equivalent to a city of 30,000-50,000 people. Arizona and Virginia face water shortages due to data center demand.
              </p>
            </div>
          </div>
          
          {/* Emissions Card - Edit content here */}
          <div className="group p-8 rounded-2xl border border-orange-500/30 bg-orange-500/5 hover:border-orange-400/60 hover:bg-orange-500/10 transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-400">🌫️</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Emissions</h3>
              <p className="text-gray-300 leading-relaxed">
                Almost all electricity becomes waste heat dumped to atmosphere. Virginia's data centers could reach 46% of state electricity by 2030, forcing reliance on fossil fuel peaker plants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
