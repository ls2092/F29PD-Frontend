import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faGreaterThan, faBell, faPenToSquare, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function EnergyConsumed() {
    return (
        <>
    
        <div className="Energy-Container">

            <div className="energy">
            <span>Energy</span>
            </div>

            <div className="consumed">
            <span>Consumed</span>
            </div>
        

            <div className="Subheading">
                <h4>Summary of power consumption</h4>
            </div>

            <div className="total-container">
                <p>total</p>
            </div>

            <div className="analytics-container">
                <button>View Analytics</button>
            </div>
            
            <div className="rooms-container">
                <p>rooms</p>
            </div>

            <div className="usage-container">
                <p>Usage</p>
                <button>View More</button>
            </div>

        
           
            </div>
    
            <div className="control-device-container">
                <p>Air Conditioner</p>
                <div className="turn-on">
                    <button>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>

                <div className="AirQuality">
                    <p>Air Filter</p>
                    <div className="turn-on">
                        <button>
                            <FontAwesomeIcon icon={faPowerOff}/>
                        </button>
                    </div>
                </div>

            </div>

            <div className="bar-container">
                
                <button className="arrow-button">
                    <FontAwesomeIcon icon={faGreaterThan} />
                </button>
            </div>

            <div className="Header-btns">
                <button id="btns-right">
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <button id="btns-right">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button id="btns-right">
                    <FontAwesomeIcon icon={faCircleInfo} />
                </button>
            </div>

            <div className="Header">
                <h1>Hello, Bob</h1>
            </div>
        </>
    );
}

export default EnergyConsumed;
