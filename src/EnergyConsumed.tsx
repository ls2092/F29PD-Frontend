import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff, faGreaterThan, faBell, faPenToSquare, faCircleInfo} from '@fortawesome/free-solid-svg-icons';

function EnergyConsumed() {
    return (
        <>
        <body>

       

            <div className="Header-btns">
                <h1>Hello, Bob</h1>
                <div className="btn-container">
                    <button id="bell-btn">
                        <FontAwesomeIcon icon={faBell} />
                    </button>
                    <button id="edit-btn">
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button id="info-btn">
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </button>
                </div>        
            </div>
        
            <div className="room-selector-container">
                <div>
                    <button>Living Room</button>
                </div>

                <div>
                    <button>Bedroom</button>
                </div>

                <div>
                    <button>Corridor</button>
                </div>

                <div>
                    <button>Kitchen</button>
                </div>

                <div>
                    <button>Garage</button>
                </div>

                <div>
                    <button>Play Area</button>
                </div>
                <button className="arrow-button">
                    <FontAwesomeIcon icon={faGreaterThan} />
                </button>
                
            </div>
            
            
                <div className="temp-container">
                    <h2>Temprature Control</h2>
                </div>

               
                <div className="analytics-container">
                    <h2>Enery Consumed</h2>
                </div>

            <div className="container-AH">

                <div className="air-container">
                    <h2>Air Quality</h2>
                </div>

                <div className="humidity-container">
                    <h2>Humidity</h2>
                </div>
                
            </div>
            <div className="control-devices">

                <div className="device-container">
                <   div className="content">
                        <h2>Control Devices</h2>
                        <button>
                            <FontAwesomeIcon icon={faPowerOff} />
                        </button>
                    </div>
                </div>

                <div className="device-container2">
                    <div className="content">
                        <h2>Control Devices</h2>
                        <button>
                            <FontAwesomeIcon icon={faPowerOff} />
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="family-container">
                <h2>Family Members</h2>
                <div className="btn-container">
                    <button>
                        <FontAwesomeIcon icon={faUser}/>
                        View Profile
                    </button>

                    <button>
                        <FontAwesomeIcon icon={faUser}/>
                        View Profile
                    </button>

                    <button>
                        <FontAwesomeIcon icon={faUser}/>
                        View Profile
                    </button>
                    
                </div>
            </div>
            

            </body>
        </>
    );
}

export default EnergyConsumed;
