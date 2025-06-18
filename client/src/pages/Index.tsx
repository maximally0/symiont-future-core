
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import FailedSolutionsSection from '../components/FailedSolutionsSection';
import VisionSection from '../components/VisionSection';
import SubsystemsSection from '../components/SubsystemsSection';
import DayInLifeSection from '../components/DayInLifeSection';
import DeploymentRoadmapSection from '../components/DeploymentRoadmapSection';
import GlobalImpactSection from '../components/GlobalImpactSection';
import CallToActionSection from '../components/CallToActionSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-outfit">
      <Navbar />
      <HeroSection />
      <section id="problem">
        <ProblemSection />
        <FailedSolutionsSection />
      </section>
      <section id="vision">
        <VisionSection />
      </section>
      <section id="subsystems">
        <SubsystemsSection />
      </section>
      <section id="dayinlife">
        <DayInLifeSection />
      </section>
      <section id="roadmap">
        <DeploymentRoadmapSection />
      </section>
      <section id="impact">
        <GlobalImpactSection />
      </section>
      <section id="cta">
        <CallToActionSection />
      </section>
    </div>
  );
};

export default Index;
