import React, { useState } from 'react';
import { ChevronLeft, Plus } from 'lucide-react';

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  energyGoal: string;
  type: 'Child' | 'Adult/Elderly';
}

function Profile() {
  const [showCreateProfile, setShowCreateProfile] = useState(false);
  const [profileCreated, setProfileCreated] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    energyGoal: '',
    type: 'Adult/Elderly'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.firstName && profile.lastName && profile.email && profile.age && profile.energyGoal) {
      setProfileCreated(true);
      setShowCreateProfile(false);
      // Reset form
      setProfile({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        energyGoal: '',
        type: 'Adult/Elderly'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container">
      {!showCreateProfile ? (
        <>
          <div className="header">
            <h1 className="page-title">My Profile</h1>
          </div>

          <main className="main-content">
            {profileCreated && (
              <div className="success-message">Profile created successfully!</div>
            )}

            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-info">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop"
                    alt="Profile"
                    className="profile-avatar"
                  />
                  <div className="profile-details">
                    <h2>Bob</h2>
                    <p>bobby_bobberson@hotmail.net</p>
                  </div>
                </div>
                <div>
                  <button className="header-button">Edit Profile</button>
                  <button className="header-button" style={{ marginLeft: '1rem' }}>Logout</button>
                </div>
              </div>
            </div>

            <div className="button-group">
              <button className="button" onClick={() => setShowCreateProfile(true)}>Create Profile</button>
              <button className="button">View Analytics</button>
              <button className="button">Manage Profile's</button>
              <button className="button">View Energy Consumption</button>
              <button className="button">Manage Access</button>
              <button className="button">Historical Data</button>
            </div>
          </main>
        </>
      ) : (
        <>
          <div className="header">
            <h1 className="page-title">Create Profile</h1>
          </div>

          <main className="main-content">
            <button 
              className="back-button"
              onClick={() => setShowCreateProfile(false)}
            >
              <ChevronLeft size={20} />
              Create Profile
            </button>

            <div className="profile-card">
              <div className="profile-creation">
                <div className="profile-creation-form">
                  <form onSubmit={handleSubmit} className="profile-form">
                    <div className="profile-type-selector">
                      <button
                        type="button"
                        className={`profile-type-button ${profile.type === 'Child' ? 'active' : ''}`}
                        onClick={() => setProfile(prev => ({ ...prev, type: 'Child' }))}
                      >
                        Child
                      </button>
                      <button
                        type="button"
                        className={`profile-type-button ${profile.type === 'Adult/Elderly' ? 'active' : ''}`}
                        onClick={() => setProfile(prev => ({ ...prev, type: 'Adult/Elderly' }))}
                      >
                        Adult/Elderly
                      </button>
                    </div>

                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={profile.age}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="energyGoal">Energy Saving Goal</label>
                      <input
                        type="text"
                        id="energyGoal"
                        name="energyGoal"
                        value={profile.energyGoal}
                        onChange={handleInputChange}
                        placeholder="Enter kWh"
                        required
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button type="submit" className="button">Save</button>
                      <button 
                        type="button" 
                        className="button"
                        onClick={() => setShowCreateProfile(false)}
                        style={{ backgroundColor: '#f44336' }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>

                <div className="profile-avatar-section">
                  <div className="avatar-placeholder">
                    <Plus />
                  </div>
                  <span className="avatar-label">Select Profile Avatar</span>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default Profile;