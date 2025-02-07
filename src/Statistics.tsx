import React, { useState, useEffect } from 'react';
import SideBarNav from './SideBarNav';

const Statistics = () => {
  const [todaysUse, setTodaysUse] = useState('');
  const [todaysCost, setTodaysCost] = useState('');

  useEffect(() => {
    // Placeholder for future data fetching logic
  }, []);

  const currentDate = new Date();
  const day = currentDate.toLocaleString('en-US', { weekday: 'short' });
  const month = currentDate.toLocaleString('en-US', { month: 'short' });
  const date = currentDate.getDate();

  return (
    <div className="statistics-page">
      <SideBarNav />
      <div className="statistics-content">
        <h1>Statistics</h1>
        <div className="statistics-container">
          <div className="date-display">
            <div className="date-row">
              <div className="date-header">
                <span>{day} {month}</span>
                <h2>{date}</h2>
              </div>
              <div className="mini-containers">
                <div className="mini-container">
                  <h3>Today's Use</h3>
                  <p>{todaysUse}</p>
                </div>
                <div className="mini-container">
                  <h3>Today's Cost</h3>
                  <p>{todaysCost}</p>
                </div>
              </div>
            </div>
            <hr className="divider" />
            <button className="real-time-button" onClick={() => alert('Real-Time Monitoring')}>Real-Time Monitoring</button>
          </div>
          <div className="overview-container">
            <h2>Overview (Unit in kWh)</h2>
            <button onClick={() => alert('View All')}>View All</button>
          </div>
          <div className="report-container">
            <h2>Energy Summary Report</h2>
            <button onClick={() => alert('View Current Usage Report')}>View Current Usage Report</button>
            <button onClick={() => alert('View Past Usage Reports')}>View Past Usage Reports</button>
          </div>
          <div className="view-selector">
            <button onClick={() => alert('Daily View')}>Daily</button>
            <button onClick={() => alert('Weekly View')}>Weekly</button>
            <button onClick={() => alert('Monthly View')}>Monthly</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics; 