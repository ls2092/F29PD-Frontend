import React, { useState } from 'react';
import SideBarNav from './SideBarNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Automation = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [name, setName] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [automations, setAutomations] = useState<string[]>([]);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setError(''); // Clear error on popup toggle
  };

  const handleDayChange = (day: string) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  const handleSubmit = () => {
    if (!name || !fromTime || !toTime || selectedDays.length === 0) {
      setError('Please fill in all fields.');
      return;
    }
    setAutomations([...automations, `${name} - ${fromTime} to ${toTime} - ${selectedDays.join(', ')}`]);
    togglePopup();
  };

  const handleDelete = (index: number) => {
    setConfirmDelete(index);
  };

  const confirmDeleteAutomation = () => {
    if (confirmDelete !== null) {
      setAutomations(automations.filter((_, i) => i !== confirmDelete));
      setConfirmDelete(null);
    }
  };

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
            <button className="add-automation-button" onClick={togglePopup}>
              +
            </button>
            <div className="add-automation-text">Add an Automation</div>
          </div>
        </div>
        {automations.map((automation, index) => (
          <div key={index} className="new-automation-container">
            {automation}
            <button className="delete-button" onClick={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-button" onClick={togglePopup}>×</button>
              <h3>Add an Automation</h3>
              <form>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  From:
                  <input
                    type="time"
                    name="fromTime"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                  />
                </label>
                <label>
                  To:
                  <input
                    type="time"
                    name="toTime"
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
                  />
                </label>
                <label>
                  Days:
                  <div className="days-checkboxes">
                    <div className="day-row">
                      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                        <label key={day} className="day-label">
                          <input
                            type="checkbox"
                            name="days"
                            value={day.toLowerCase()}
                            checked={selectedDays.includes(day.toLowerCase())}
                            onChange={() => handleDayChange(day.toLowerCase())}
                          />
                          {day}
                        </label>
                      ))}
                    </div>
                  </div>
                </label>
                {error && <div className="error">{error}</div>}
                <div className="button-container">
                  <button type="button" onClick={handleSubmit}>Finish</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {confirmDelete !== null && (
          <div className="popup">
            <div className="popup-content">
              <p>Are you sure you want to delete this automation?</p>
              <div className="confirmation-buttons">
                <button onClick={confirmDeleteAutomation}>Yes</button>
                <button onClick={() => setConfirmDelete(null)}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Automation;