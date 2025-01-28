/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faWifi, faWind, faLightbulb, faPlug, faMinus} from '@fortawesome/free-solid-svg-icons';

function AddDevice() {
    return (
        <>
        <body>

            <div className="add-H">
                <h1>Add New Devices</h1>
                <div className="header-btn">
                    <button>
                        <FontAwesomeIcon icon={faWifi} /> Scan for Devices
                    </button>
                </div>
            </div>
    
            <div className="add-containers">
                <div className="device-containers">
                        <div className="button-A">
                            <button id="left-btn">
                                <FontAwesomeIcon icon={faWind} />
                            </button>

                            <button id="right-btn">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>

                    <div className="text1">
                        <h3>Air Conditioner</h3>
                        <div className="del-btn">
                            <h4>Smart AC with temperature control</h4>
                            <button>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="device-containers">
                    <div className="button-A">
                        <button id="left-btn">
                            <FontAwesomeIcon icon={faLightbulb} />
                        </button>

                        <button id="right-btn">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>

                    <div className="text1">
                        <h3>Smart Light</h3>
                        <div className="del-btn">
                            <h4>Dimmable LED light bulb</h4>
                            <button>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="device-containers">
                        <div className="button-A">
                            <button id="left-btn">
                                <FontAwesomeIcon icon={faPlug} />
                            </button>

                            <button id="right-btn">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>

                    <div className="text1">
                        <h3>Smart Plug</h3>
                            <div className="del-btn">
                                <h4>Energy Monitoring power outlet</h4>
                                <button>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                            </div>
                    </div>
                </div>
                </div>

            

        <div className="instructions">
            <h2>Setup Instructions</h2>
            <ol>
                <li>Ensure your device is powered on and in pairing mode</li>
                <li>Click "Scan for Devices" to discover available devices</li>
                <li>Select your device from the list above</li>
                <li>Follow the device-specific setup instructions</li>
            </ol>
      </div>
            
        </body>
        </>
    )
  }
  
export default AddDevice;*/

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faWifi, faWind, faLightbulb, faPlug, faMinus } from "@fortawesome/free-solid-svg-icons";

function AddDevice() {
  const [devices, setDevices] = useState([
    { id: 1, name: "Air Conditioner", description: "Smart AC with temperature control", icon: faWind },
    { id: 2, name: "Smart Light", description: "Dimmable LED light bulb", icon: faLightbulb },
    { id: 3, name: "Smart Plug", description: "Energy Monitoring power outlet", icon: faPlug },
  ]);

  const [availableDevices, setAvailableDevices] = useState([
    { id: 4, name: "Smart Fan", description: "Adjustable speed fan", icon: faWind },
    { id: 5, name: "Smart Thermostat", description: "Temperature control system", icon: faLightbulb },
    { id: 6, name: "Smart Heater", description: "Portable smart heater", icon: faPlug },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [showPopUpScan, setShowPopUpScan] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleScanClick = () => {
    setShowPopUpScan(true);
  }

  const handleDeviceSelection = (device) => {
    setDevices([...devices, device]);
    setShowPopUpScan(false);
  }

  const handleDeleteClick = (device) => {
    setSelectedDevice(device);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setDevices(devices.filter((device) => device.id !== selectedDevice.id));
    setShowPopup(false);
    setSelectedDevice(null);
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
    setSelectedDevice(null);
  };

  return (
    <>
      <body>
        <div className="add-H">
          <h1>Add New Devices</h1>
          <div className="header-btn">
            <button onClick={handleScanClick}>
              <FontAwesomeIcon icon={faWifi} /> Scan for Devices
            </button>
          </div>
        </div>

        <div className="add-containers">
          {devices.map((device) => (
            <div className="device-containers" key={device.id}>
              <div className="button-A">
                <button id="left-btn">
                  <FontAwesomeIcon icon={device.icon} />
                </button>

                <button id="right-btn" onClick={handleScanClick}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              <div className="text1">
                <h3>{device.name}</h3>
                <div className="del-btn">
                  <h4>{device.description}</h4>
                  <button onClick={() => handleDeleteClick(device)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="instructions">
          <h2>Setup Instructions</h2>
          <ol>
            <li>Ensure your device is powered on and in pairing mode</li>
            <li>Click "Scan for Devices" to discover available devices</li>
            <li>Select your device from the list above</li>
            <li>Follow the device-specific setup instructions</li>
          </ol>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Do you want to delete this device?</h3>
              <p>{selectedDevice?.name}</p>
              <div className="popup-buttons">
                <button onClick={handleConfirmDelete}>Yes</button>
                <button onClick={handleCancelDelete}>No</button>
              </div>
            </div>
          </div>
        )}

        {showPopUpScan && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Select a device to add</h3>
              <div className="device-list">
                {availableDevices.map((device) => (
                  <button key={device.id} onClick={() => handleDeviceSelection(device)} className="device-btn">
                    <FontAwesomeIcon icon={device.icon} />
                    {device.name}
                  </button>
                ))}
              </div>
              <div className="popup-buttons">
                <button onClick={() => setShowPopUpScan(false)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </body>

      
    </>
  );
}

export default AddDevice;
