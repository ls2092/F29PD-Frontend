import React from 'react';
import SideBarNav from './SideBarNav';

const Automation = () => {
  return (
    <div className="automation-page">
      <SideBarNav />
      <div className="automation-content">
        <h1>Automation Library</h1>
        <div className="automation-library">
          <div className="automation-container">
            {/* Content goes here */}
          </div>
          <div className="automation-container">
            {/* Content goes here */}
          </div>
          <div className="automation-container">
            {/* Content goes here */}
          </div>
          <div className="automation-container">
            {/* Content goes here */}
          </div>
        </div>
        <h2>Quick Control</h2>
        <div className="quick-control">
          <div className="quick-control-container">
            {/* Content goes here */}
          </div>
          <div className="quick-control-container">
            {/* Content goes here */}
          </div>
          <div className="add-automation-container">
            <button className="add-automation-button">Add an Automation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;