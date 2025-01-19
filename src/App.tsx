import React, { useState, useEffect } from 'react';
import SideBarNav from './SideBarNav';
import FamilyMembers from './FamilyMembers';
import EnergyConsumed from './EnergyConsumed';
import Settings from './SettingsPage';
import Suggestions from './Suggestions';

function App() {
  const [currentPage, setCurrentPage] = useState<string>(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash || '#');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '#Home':
        return(
          <>
            
            <FamilyMembers />
            <EnergyConsumed />
          </>
        );
      case '#SettingsPage':
        return <Settings />;
      case '#Suggestions':
        return <Suggestions />;
      case '#FamilyMembers':
        return <FamilyMembers />;
      case '#EnergyConsumed':
        return <EnergyConsumed />;
    }
  };

  return (
    <>
      <SideBarNav />
      {renderPage()}
    </>
  );
}

export default App;
