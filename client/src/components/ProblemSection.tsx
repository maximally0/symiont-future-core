
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
                Data centers now use 460+ TWh of electricity globally, projected to hit 1,050+ TWh by 2026. Most energy is wasted as heat with fossil-fueled grids.
              </p>
            </div>
          </div>
          
          {/* Water Card - Edit content here */}
          <div className="group p-8 rounded-2xl border border-blue-500/30 bg-blue-500/5 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4 text-blue-400">💧</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Water</h3>
              <p className="text-gray-300 leading-relaxed">
                They guzzle millions of gallons of water per day for cooling — the same as a city of 50,000 people. All for temperature control.
              </p>
            </div>
          </div>
          
          {/* Emissions Card - Edit content here */}
          <div className="group p-8 rounded-2xl border border-orange-500/30 bg-orange-500/5 hover:border-orange-400/60 hover:bg-orange-500/10 transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-400">🌫️</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Emissions</h3>
              <p className="text-gray-300 leading-relaxed">
                Nearly all energy is wasted as heat, with most centers relying on diesel backup generators and polluting power sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
