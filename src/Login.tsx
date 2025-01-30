import React, { useState, useEffect } from 'react';
import './login.css'; // Import the CSS file
import { Eye, EyeOff } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import type { SingleValue } from 'react-select';
import axios from 'axios';
import { getNames, getCode } from 'country-list';

interface LoginProps {
  onLogin: () => void;
}

interface OptionType {
  value: string;
  label: string;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [phone, setPhone] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);
  const [countries, setCountries] = useState<{ value: string; label: string }[]>([]);
  const [loadingCities, setLoadingCities] = useState<boolean>(false);
  const [gender, setGender] = useState<string>('male');
  const [birthdate, setBirthdate] = useState<{ day: string; month: string; year: string }>({ day: '', month: '', year: '' });
  const [address, setAddress] = useState<string>('');
  const [isHouseholdView, setIsHouseholdView] = useState<boolean>(false);
  const [pin, setPin] = useState<string>('');

  useEffect(() => {
    const countryNames = getNames();
    const countryOptions = countryNames.map((name: string) => ({
      value: getCode(name),
      label: name,
    }));
    setCountries(countryOptions.sort((a: { label: string }, b: { label: string }) => a.label.localeCompare(b.label)));
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (country) {
        setLoadingCities(true);
        try {
          const response = await axios.get(
            `http://api.geonames.org/searchJSON?country=${country}&maxRows=1000&username=mu50n`
          );
          const cityOptions = response.data.geonames.map((city: { name: string }) => ({
            value: city.name,
            label: city.name,
          }));
          setCities(cityOptions);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
        setLoadingCities(false);
      }
    };
    fetchCities();
  }, [country]);

  const handleLogin = () => {
      onLogin();
  };

  const handleRegisterClick = () => {
    setIsHouseholdView(false);  // Exit household view first
    setIsRegistering(true);     // Then enter registration flow
  };

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleFinish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsRegistering(false);
    setCurrentStep(1);
  };

  const handleOtpInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (value.length === 1 && index < 4) {
      const nextSibling = document.querySelectorAll('.code-input')[index + 1] as HTMLInputElement;
      if (nextSibling) {
        nextSibling.focus();
      }
    }
  };

  const handleCountryChange = (newValue: SingleValue<OptionType>) => {
    if (newValue) {
      setCountry(newValue.value);
    }
  };

  const handleCityChange = (newValue: SingleValue<OptionType>) => {
    if (newValue) {
      // City handling logic here if needed
      console.log('Selected city:', newValue.label);
    }
  };

  // Function to determine background image based on current state
  const getBackgroundImage = () => {
    if (!isRegistering) {
      return `url('/login.png')`; // Login page
    }
    
    if (currentStep <= 2) {
      return `url('/signup.png')`; // Registration steps 1-2
    }
    
    return `url('/signup2.png')`; // Registration steps 3-5
  };

  const handleHouseholdClick = () => {
    setIsHouseholdView(true);
  };

  const handleBackToLogin = () => {
    setIsHouseholdView(false);
  };

        return (
    <div className="login-page">
      <div className="logo">Sync</div>
      <div className="login-card">
        <div className="left-side" style={{ backgroundImage: getBackgroundImage() }}>
          <div className="hero-content">
            {isRegistering ? (
              <h1 className="register-sync">
                SY<span className="orange-text">N</span>C
              </h1>
            ) : (
              <h1 className="hero-title">
                <span className="sync-text">SY<span className="orange-text">N</span>C</span>
                <span className="hero-subtitle"> your Home,<br />
                Save energy,<br />
                and live smarter.
                </span>
              </h1>
            )}
            {!isRegistering && !isHouseholdView && <button className="signup-button" onClick={handleRegisterClick}>Sign Up</button>}
          </div>
            </div>
        <div className="right-side">
          {isHouseholdView ? (
            <div className="login-form">
                <h2 className="form-title">Welcome,</h2>
              <p className="form-subtitle">Household Member</p>
              <label className="form-label">Enter your Email</label>
              <div className="email-input-container">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                  </div>
              <label className="form-label">PIN</label>
              <div className="verification-code">
                {[1, 2, 3, 4].map((_, index) => (
                      <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="code-input"
                    onChange={(e) => {
                      const newPin = pin.split('');
                      newPin[index] = e.target.value;
                      setPin(newPin.join(''));
                      if (e.target.value && index < 3) {
                        const nextInput = document.querySelectorAll('.code-input')[index + 1] as HTMLInputElement;
                        if (nextInput) nextInput.focus();
                      }
                    }}
                    value={pin[index] || ''}
                  />
                ))}
              </div>
              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
              <p className="register-link">
                Don't have an account? <span className="register-text" onClick={handleRegisterClick}>Register Now</span>
              </p>
            </div>
          ) : isRegistering ? (
            currentStep === 1 ? (
              <div className="register-section">
                <form className="login-form">
                <h2 className="form-title">Register</h2>
                <p className="form-subtitle">Join us</p>
                  <label className="form-label">Enter your Email</label>
                  <div className="email-input-container">
                    <input type="email" placeholder="Enter your Email" />
                  </div>
                  <label className="form-label">Password</label>
                    <div className="password1-input-container">
                    <input type="password" placeholder="Enter your password" />
                    <span className="password-toggle">
                      <Eye size={20} />
                      </span>
                  </div>
                  <label className="form-label">Confirm Password</label>
                    <div className="password1-input-container">
                    <input type="password" placeholder="Confirm your password" />
                    <span className="password-toggle">
                      <Eye size={20} />
                    </span>
                  </div>
                  <button className="login-btn" onClick={handleNextStep}>Next</button>
                </form>
              </div>
            ) : currentStep === 2 ? (
              <div className="register-section">
                <form className="login-form">
                <h2 className="form-title">Verify Your Email</h2>
                <p className="form-subtitle">Please Enter The Code We Sent to your email</p>
                  <div className="verification-code">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="code-input"
                        onChange={(e) => handleOtpInput(e, index)}
                        required
                      />
                    ))}
                  </div>
                  <p className="text-center">
                    I did not receive the code. <a href="#" className="link">Resend the code</a>
                  </p>
                  <button className="login-btn" onClick={handleNextStep}>Next</button>
                </form>
              </div>
            ) : currentStep === 3 ? (
              <div className="register-section">
                <form className="login-form">
                  <h2 className="form-title">Personal Details</h2>
                  <p className="form-subtitle">Fill in your personal information</p>
                  <label className="form-label">Enter your First Name</label>
                  <input type="text" placeholder="Enter your First Name" className="personal-details-input" />
                  <label className="form-label">Enter your Last Name</label>
                  <input type="text" placeholder="Enter your Last Name" className="personal-details-input" />
                  <label className="form-label">Enter Phone Number</label>
                  <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={setPhone}
                    inputStyle={{ width: '100%' }}
                    containerClass="personal-details-input"
                    specialLabel=""
                  />
                  <button className="login-btn" onClick={handleNextStep}>Next</button>
                </form>
            </div>
            ) : currentStep === 4 ? (
              <div className="register-section">
                <form className="login-form">
                  <h2 className="form-title">Additional Details</h2>
                  <p className="form-subtitle">Please provide your gender and birthdate</p>
                  <label className="form-label">Gender</label>
                  <div className="gender-options">
                    <div className="gender-option">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="male">Male</label>
          </div>
                    <div className="gender-option">
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="female">Female</label>
            </div>
                </div>
                  <label className="form-label">Birthdate</label>
                  <div className="birthdate-container">
                    <input
                      type="text"
                      placeholder="Day"
                      value={birthdate.day}
                      onChange={(e) => setBirthdate({ ...birthdate, day: e.target.value })}
                      className="birthdate-input"
                    />
                    <input
                      type="text"
                      placeholder="Month"
                      value={birthdate.month}
                      onChange={(e) => setBirthdate({ ...birthdate, month: e.target.value })}
                      className="birthdate-input"
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      value={birthdate.year}
                      onChange={(e) => setBirthdate({ ...birthdate, year: e.target.value })}
                      className="birthdate-input"
                    />
                  </div>
                  <button className="login-btn" onClick={handleNextStep}>Next</button>
                </form>
              </div>
            ) : currentStep === 5 ? (
              <div className="register-section">
                <form className="login-form">
                  <h2 className="form-title">Personal Details</h2>
                  <p className="form-subtitle">Fill in your personal information</p>
                  <label className="form-label">Country</label>
                  <Select
                    name="country"
                    options={countries}
                    placeholder="Choose your country"
                    onChange={handleCountryChange}
                    isSearchable
                    styles={{ container: (base) => ({ ...base, marginBottom: '10px' }) }}
                  />
                  <label className="form-label">City</label>
                  <Select
                    name="city"
                    options={cities}
                    placeholder={loadingCities ? 'Loading cities...' : 'Choose your city'}
                    onChange={handleCityChange}
                    isSearchable
                    isDisabled={!country || loadingCities}
                    styles={{ container: (base) => ({ ...base, marginBottom: '10px' }) }}
                  />
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="personal-details-input"
                  />
                  <button className="login-btn" onClick={handleFinish}>Finish</button>
                  </form>
              </div>
            ) : null
          ) : (
            <div className="login-form">
              <h2 className="form-title">Welcome,</h2>
              <p className="admin-login">Admin Login</p>
              <label className="form-label">Enter your Email</label>
              <div className="email-input-container">
        <input
          type="email"
                  placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
              </div>
              <label className="form-label">Password</label>
              <div className="password1-input-container">
        <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
                <span 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
              <button className="login-btn" onClick={handleLogin}>
                Login
        </button>
              <p className="register-link">
                Don't have an account? <span className="register-text" onClick={handleRegisterClick}>Register Now</span>
              </p>
              <button className="household-btn" onClick={handleHouseholdClick}>
                Part of a Household? Click Here
              </button>
      </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

