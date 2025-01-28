import React, { useState } from 'react';
import { ChevronLeft, Plus } from 'lucide-react';
import './profile.css';

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
    <div className="profile-page-wrapper">
      {!showCreateProfile ? (
        <>
          <div className="profile-header-section">
            <h1 className="profile-page-title">My Profile</h1>
          </div>

          <main className="profile-main-content">
            {profileCreated && (
              <div className="profile-success-message">Profile created successfully!</div>
            )}

            <div className="profile-info-card">
              <div className="profile-header-container">
                <div className="profile-user-info">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop"
                    alt="Profile"
                    className="profile-user-avatar"
                  />
                  <div className="profile-user-details">
                    <h2>Bob</h2>
                    <p>bobby_bobberson@hotmail.net</p>
                  </div>
                </div>
                <div>
                  <button className="profile-action-button">Edit Profile</button>
                  <button className="profile-action-button" style={{ marginLeft: '1rem' }}>Logout</button>
                </div>
              </div>
            </div>

            <div className="profile-button-grid">
              <button className="profile-action-button" onClick={() => setShowCreateProfile(true)}>Create Profile</button>
              <button className="profile-action-button">View Analytics</button>
              <button className="profile-action-button">Manage Profile's</button>
              <button className="profile-action-button">View Energy Consumption</button>
              <button className="profile-action-button">Manage Access</button>
              <button className="profile-action-button">Historical Data</button>
            </div>
          </main>
        </>
      ) : (
        <>
          <div className="profile-header-section">
            <h1 className="profile-page-title">Create Profile</h1>
          </div>

          <main className="profile-main-content">
            <button 
              className="profile-back-button"
              onClick={() => setShowCreateProfile(false)}
            >
              <ChevronLeft size={20} />
              Back to Profile
            </button>

            <div className="profile-info-card">
              <div className="profile-creation-layout">
                <div className="profile-form-section">
                  <form onSubmit={handleSubmit} className="profile-form-container">
                    <div className="profile-type-toggle">
                      <button
                        type="button"
                        className={`profile-type-toggle-button ${profile.type === 'Child' ? 'active' : ''}`}
                        onClick={() => setProfile(prev => ({ ...prev, type: 'Child' }))}
                      >
                        Child
                      </button>
                      <button
                        type="button"
                        className={`profile-type-toggle-button ${profile.type === 'Adult/Elderly' ? 'active' : ''}`}
                        onClick={() => setProfile(prev => ({ ...prev, type: 'Adult/Elderly' }))}
                      >
                        Adult/Elderly
                      </button>
                    </div>

                    <div className="profile-form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleInputChange}
                        className="profile-form-input"
                        required
                      />
                    </div>

                    <div className="profile-form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleInputChange}
                        className="profile-form-input"
                        required
                      />
                    </div>

                    <div className="profile-form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        className="profile-form-input"
                        required
                      />
                    </div>

                    <div className="profile-form-group">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={profile.age}
                        onChange={handleInputChange}
                        className="profile-form-input"
                        required
                      />
                    </div>

                    <div className="profile-form-group">
                      <label htmlFor="energyGoal">Energy Saving Goal</label>
                      <input
                        type="text"
                        id="energyGoal"
                        name="energyGoal"
                        value={profile.energyGoal}
                        onChange={handleInputChange}
                        className="profile-form-input"
                        placeholder="Enter kWh"
                        required
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button type="submit" className="profile-action-button">Save</button>
                      <button 
                        type="button" 
                        className="profile-action-button"
                        onClick={() => setShowCreateProfile(false)}
                        style={{ backgroundColor: '#f44336' }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>

                <div className="profile-avatar-upload">
                  <div className="profile-avatar-dropzone">
                    <Plus />
                  </div>
                  <span className="profile-avatar-label">Select Profile Avatar</span>
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