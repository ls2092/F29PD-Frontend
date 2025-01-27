import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  
export default AddDevice;
  