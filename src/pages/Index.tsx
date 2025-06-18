
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import FailedSolutionsSection from '../components/FailedSolutionsSection';
import VisionSection from '../components/VisionSection';

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
