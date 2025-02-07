import React, { useState } from 'react';
import './settings.css';

function Settings() {
  const [theme, setTheme] = useState('Light');
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [autoBackup, setAutoBackup] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>
      
      <section className="settings-section">
        <h2>Display and Interface Customization</h2>
        <div className="setting-item">
          <div className="setting-row">
            <span>Theme</span>
            <select 
              value={theme} 
              onChange={(e) => setTheme(e.target.value)}
              className="theme-select"
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
        </div>
      </section>

      <section className="settings-section">
        <h2>Firmware and Software Updates</h2>
        <div className="setting-item">
          <div className="setting-row">
            <span>Choose to auto-update app and device firmware when available</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={autoUpdate}
                onChange={() => setAutoUpdate(!autoUpdate)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-row">
            <span>Auto backup custom preferences before each update</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={autoBackup}
                onChange={() => setAutoBackup(!autoBackup)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </section>

      <section className="settings-section">
        <h2>Privacy and Security</h2>
        <div className="setting-item">
          <div className="setting-row">
            <span>Enable Two-Factor Authentication for app access</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </section>

      <button className="logout-button">Logout</button>
    </div>
  );
   }
  
export default Settings;
  