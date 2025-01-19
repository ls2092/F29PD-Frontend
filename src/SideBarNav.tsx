import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faPlug, faClockRotateLeft, faChartLine, faPlus, faUser, faGear } from '@fortawesome/free-solid-svg-icons';



function SideBarNav() {

    
    const navigateToPage = (hash: string) => {
        window.location.href = hash;
    };

    return (
        <>
            
            <div className="logo">
                <span className="logo-text">SY<span className="highlight">N</span>C</span>
            </div>

            <div className="container">

            <div className="sidebar" id="Home-btn">
                <button onClick={() => navigateToPage('#Home')}>
                    <FontAwesomeIcon icon={faHome} />
                </button>
            </div>

            <div className="sidebar">
                <FontAwesomeIcon icon={faPlug} />
            </div>

            <div className="sidebar">
                <FontAwesomeIcon icon={faClockRotateLeft} />
            </div>

            <div className="sidebar">
                <FontAwesomeIcon icon={faChartLine} />
            </div>

            <div className="sidebar" id="suggestions">
                <button onClick={() => navigateToPage('#Suggestions')}>
                <FontAwesomeIcon icon={faLightbulb} />
                </button>
            </div>

            <div className="sidebar">
                <FontAwesomeIcon icon={faPlus} />
            </div>

            <div className="sidebar">
                <FontAwesomeIcon icon={faUser} />
            </div>

            <div className="sidebar-settings" id="settings-button">
                    <button onClick={() => navigateToPage('#SettingsPage')}>
                        <FontAwesomeIcon icon={faGear} />
                    </button>
            </div>

            </div>
        </>
    );
}

export default SideBarNav;
