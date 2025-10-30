import React, { useState, useCallback } from 'react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LearnMorePage from './pages/LearnMorePage';
import LoginPage from './pages/LoginPage';
import LeakDetailsPage from './pages/LeakDetailsPage'; // Import the new LeakDetailsPage

type AppMode = 'landing' | 'learn-more' | 'login' | 'dashboard' | 'leak-details';

const App: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<AppMode>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Keep isLoggedIn for authentication logic

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
    setCurrentMode('dashboard'); // After login, go to dashboard
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentMode('landing'); // After logout, go to landing
  }, []);
  
  const navigateToLearnMore = useCallback(() => {
    setCurrentMode('learn-more');
    window.scrollTo(0, 0);
  }, []);

  const navigateToLanding = useCallback(() => {
    setCurrentMode('landing');
    window.scrollTo(0, 0);
  }, []);

  const navigateToLogin = useCallback(() => {
    setCurrentMode('login');
    window.scrollTo(0, 0);
  }, []);

  const navigateToLeakDetails = useCallback(() => {
    setCurrentMode('leak-details');
    window.scrollTo(0, 0);
  }, []);

  const navigateBackToDashboard = useCallback(() => {
    setCurrentMode('dashboard');
    window.scrollTo(0, 0);
  }, []);

  // Render components based on the currentMode and isLoggedIn status
  if (isLoggedIn) {
    switch (currentMode) {
      case 'leak-details':
        return <LeakDetailsPage onBackToDashboard={navigateBackToDashboard} onLogout={handleLogout} />;
      case 'dashboard':
      default: // If isLoggedIn is true but mode is not leak-details, default to dashboard
        return <Dashboard onLogout={handleLogout} onNavigateToLeakDetails={navigateToLeakDetails} />;
    }
  } else {
    // Not logged in, render public pages
    switch (currentMode) {
      case 'learn-more':
        return <LearnMorePage onBack={navigateToLanding} onLogin={handleLogin} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onBack={navigateToLanding} />;
      case 'landing':
      default:
        return <LandingPage onLogin={navigateToLogin} onNavigateToLearnMore={navigateToLearnMore} />;
    }
  }
};

export default App;