import React, { useState, useEffect } from 'react';
import SideBarNav from './SideBarNav';
import EnergyConsumed from './EnergyConsumed';
import Settings from './SettingsPage';
import Suggestions from './Suggestions';
import AddDevice from './AddDevice';
import Automation from './Automation';
import Info from './info';




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
        return <EnergyConsumed />;
      case '#SettingsPage':
        return <Settings />;
      case '#Suggestions':
        return <Suggestions />;
      case '#EnergyConsumed':
        return <EnergyConsumed />;
      case '#AddDevice':
        return <AddDevice />;
      case '#Automation':
        return <Automation />;
      case '#Info':
        return <Info />;
      default:
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
