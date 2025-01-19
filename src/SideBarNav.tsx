import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faPlug, faClockRotateLeft, faChartLine, faPlus, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import Settings from './SettingsPage';



function SideBarNav() {

    const handleSettingsClick = () => {
        window.location.href = '/SettingsPage';
        <Settings />;
        
        
    };

    return (
        <>
            
            <div className="logo">
                <span className="logo-text">SY<span className="highlight">N</span>C</span>
            </div>

            <div className="container">

            <div className="sidebar">
             <FontAwesomeIcon icon={faHome} />
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

            <div className="sidebar">
                <FontAwesomeIcon icon={faLightbulb} />
            </div>

            <div className="sidebar">
                <FontAwesomeIcon icon={faPlus} />
            </div>

            <div className="sidebar">
                <FontAwesomeIcon icon={faUser} />
            </div>

            <div className="sidebar-settings" id="settings-button">
                <button onClick={handleSettingsClick}>
                <FontAwesomeIcon icon={faGear} />
                </button>
            </div>

            </div>
        </>
    );
}

export default SideBarNav;
