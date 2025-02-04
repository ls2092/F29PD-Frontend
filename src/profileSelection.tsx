import React from 'react';
import './profileSelection.css'; // Import the styles
import profileImg from './profile.png';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProfileSelectionProps {
  onSelectProfile: (profile: string) => void;
}

const ProfileSelection: React.FC<ProfileSelectionProps> = ({ onSelectProfile }) => {
  const profiles = [
    { name: 'Laiba', img: profileImg}
  ]; 

  return (
    <body>
    <div className="container-s">
      
      <div className="s-cont">
        <h2 className="selection-h2">Select a Profile</h2>
      
        <div className="add-profile-container">
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          </div>
      </div>

      <div className="profile-grid">

        {profiles.map((profile) => (
          <button key={profile.name} className="selection-button" onClick={() => onSelectProfile(profile.name)}>
            <img src={profile.img} alt={profile.name} />
            <span>{profile.name}</span>
          </button>

       

        ))}
      </div>
    </div>
    
    
   
    </body>
  );
};

export default ProfileSelection;
