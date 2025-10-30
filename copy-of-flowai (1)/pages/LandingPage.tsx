import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import DataVisSection from '../components/DataVisSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PhoneAppSection from '../components/PhoneAppSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

interface LandingPageProps {
  onLogin: () => void; // This now navigates to the login page
  onNavigateToLearnMore: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigateToLearnMore }) => {
  return (
    <div className="overflow-x-hidden">
      <Header onLogin={onLogin} onNavigateToLearnMore={onNavigateToLearnMore} />
      <main>
        <Hero onLogin={onLogin} onNavigateToLearnMore={onNavigateToLearnMore} />
        <FeatureSection />
        <DataVisSection />
        <HowItWorksSection />
        <PhoneAppSection />
        
        <CtaSection onLogin={onLogin} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;