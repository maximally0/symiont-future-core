
import React from 'react';
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
      <HeroSection />
      <ProblemSection />
      <FailedSolutionsSection />
      <VisionSection />
    </div>
  );
};

export default Index;
