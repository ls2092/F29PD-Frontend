import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faPlug, faClockRotateLeft, faChartLine, faPlus, faUser, faGear } from '@fortawesome/free-solid-svg-icons';



function SideBarNav() {

    
    const navigateToPage = (hash: string) => {
        window.location.href = hash;
    };

    return (
        <>
        <div className='main'>
            <div className="logo">
                <span className="logo-text">SY<span className="highlight">N</span>C</span>
            </div>

          <div className="sidebar">
            <div className='menu-item'>
              <div>
                  <button onClick={() => navigateToPage('#Home')}>
                    <FontAwesomeIcon icon={faHome} />
                  </button>
              </div>

              <div>
                <button>
                  <FontAwesomeIcon icon={faPlug} />
                </button>
              </div>

              <div>
                <button>
                  <FontAwesomeIcon icon={faClockRotateLeft} />
                </button>
              </div>

              <div >
                <button>
                  <FontAwesomeIcon icon={faChartLine} />
                </button>
              </div>

              <div>
                <button onClick={() => navigateToPage('#Suggestions')}>
                  <FontAwesomeIcon icon={faLightbulb} />
                </button>
              </div>

              <div >
                <button onClick={() => navigateToPage('#AddDevice')}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              <div >
                <button>
                 <FontAwesomeIcon icon={faUser} />
                </button>
              </div>

              <div>
                <button onClick={() => navigateToPage('#SettingsPage')}>
                    <FontAwesomeIcon icon={faGear} />
                </button>
              </div>
            </div>
          </div>

        </div>
        </>
    );
}

export default SideBarNav;

/*import React from 'react';
import { Home, User, Clock, BarChart2, Bell, Settings, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, path: '/' },
    /*{ icon: User, path: '/profile' },*/
   /* { icon: Clock, path: '/schedule' },
    { icon: BarChart2, path: '/analytics' },
    { icon: Bell, path: '/notifications' },
    { icon: Plus, path: '/add-device' },
    { icon: Settings, path: '/settings' },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={index}
            to={item.path}
            className={`menu-item ${isActive ? 'active' : ''}`}
            
          >
            <Icon size={24} />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;*/
