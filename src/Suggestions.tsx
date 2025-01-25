import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash} from '@fortawesome/free-solid-svg-icons';

function Suggestions() {
    return(
        <>
        

            <div className="main-headings">
                <button id="energy-saving">Energy Saving</button>
                <button id="automation">Automation</button>
                <button id="security">Security</button>
            </div>
        
    <div className="boxes">   
        <div className="energy-box">
            <p>suggetsions</p>
            <div className="sliding-boxes"> 
                <div className="suggestions-boxes">
                    <button>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>

                <div className="suggestions-boxes2">
                    <button>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                <div className="suggestions-boxes3"></div>
                    <button>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                <div className="suggestions-boxes3">
                    <button>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            
            </div>
        </div>

        <div className="auto-box">
            <p>suggetsions</p>
            <div className="sliding-boxes"> 
                <div className="suggestions-boxes"></div>
                <div className="suggestions-boxes2"></div>
                <div className="suggestions-boxes3"></div>
                <div className="suggestions-boxes3"></div>
            
            </div>
            
            
        </div>

        <div className="security-box">
            <p>suggetsions</p>
            <div className="sliding-boxes"> 
                <div className="suggestions-boxes"></div>
                <div className="suggestions-boxes2"></div>
                <div className="suggestions-boxes3"></div>
                <div className="suggestions-boxes3"></div>
            
            </div>
            
            
        </div>
    </div> 
        </>
    )
}

export default Suggestions;