/*import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css'

function Login() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    gender: 'male',
    birthDate: '',
    country: '',
    city: '',
    address: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showEmailVerified, setShowEmailVerified] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    switch (currentStep) {
      case 1:
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        }
        break;
      case 2:
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
        break;
      case 4:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.address) newErrors.address = 'Address is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep()) {
      return;
    }

    if (currentStep === 3) {
      // Show email verified message before proceeding
      setShowEmailVerified(true);
      setTimeout(() => {
        setShowEmailVerified(false);
        setCurrentStep(prev => prev + 1);
      }, 2000);
    } else if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(5); // Show success message
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="container">
            <div className="left-section">
              <h1 className="hero-title">
                <span>SYNC</span> your Home,<br />
                Save energy,<br />
                and live smarter.
              </h1>
              <p className="hero-subtitle">Control your home with our smart solutions</p>
              <a href="#" className="signup-button" onClick={(e) => {
                e.preventDefault();
                setCurrentStep(2);
              }}>Sign Up</a>
            </div>
            <div className="right-section">
              <div className="form-container">
                <h2 className="form-title">Welcome,</h2>
                <p className="form-subtitle">Login or sign up</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Enter your Email *</label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="Enter your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password *</label>
                    <div className="password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-input ${errors.password ? 'error' : ''}`}
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <span 
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </span>
                    </div>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                  </div>
                  <button type="submit" className="button">Login</button>
                  <p className="text-center">
                    Don't have an account? <a href="#" className="link" onClick={(e) => {
                      e.preventDefault();
                      setCurrentStep(2);
                    }}>Register Now</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="container">
            <div className="left-section">
              <h1 className="hero-title">
                <span>SYNC</span> your Home,<br />
                Save energy,<br />
                and live smarter.
              </h1>
              <p className="hero-subtitle">Control your home with our smart solutions</p>
            </div>
            <div className="right-section">
              <div className="form-container">
                <h2 className="form-title">Register</h2>
                <p className="form-subtitle">Join us</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '25%' }}></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Enter your Email *</label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="Enter your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password *</label>
                    <div className="password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-input ${errors.password ? 'error' : ''}`}
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <span 
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </span>
                    </div>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm Password *</label>
                    <div className="password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                        placeholder="Confirm your password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>
                  <button type="submit" className="button">Next</button>
                </form>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="container">
            <div className="left-section">
              <h1 className="hero-title">
                <span>SYNC</span> your Home,<br />
                Save energy,<br />
                and live smarter.
              </h1>
              <p className="hero-subtitle">Control your home with our smart solutions</p>
            </div>
            <div className="right-section">
              <div className="form-container">
                <h2 className="form-title">Verify Your Email</h2>
                <p className="form-subtitle">Please Enter The Code We Sent to your email</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '50%' }}></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="verification-code">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="code-input"
                        required
                      />
                    ))}
                  </div>
                  <p className="text-center">
                    I did not receive the code. <a href="#" className="link">Resend the code</a>
                  </p>
                  <button type="submit" className="button">Next</button>
                </form>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="container">
            <div className="left-section">
              <h1 className="hero-title">
                <span>SYNC</span> your Home,<br />
                Save energy,<br />
                and live smarter.
              </h1>
              <p className="hero-subtitle">Control your home with our smart solutions</p>
            </div>
            <div className="right-section">
              <div className="form-container">
                <h2 className="form-title">Personal Details</h2>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Enter your First Name *</label>
                    <input
                      type="text"
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="Enter your First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Enter your Last Name *</label>
                    <input
                      type="text"
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      placeholder="Enter your Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Address *</label>
                    <input
                      type="text"
                      className={`form-input ${errors.address ? 'error' : ''}`}
                      placeholder="Enter your address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.address && <span className="error-message">{errors.address}</span>}
                  </div>
                  <button type="submit" className="button">Next</button>
                </form>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            <div className="overlay">
              <div className="account-created">
                <h2>Account Created Successfully</h2>
              </div>
            </div>
            <div className="container">
              <div className="left-section">
                <h1 className="hero-title">
                  <span>SYNC</span> your Home,<br />
                  Save energy,<br />
                  and live smarter.
                </h1>
                <p className="hero-subtitle">Control your home with our smart solutions</p>
              </div>
              <div className="right-section">
                <div className="form-container">
                  <h2 className="form-title">Personal Details</h2>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '100%' }}></div>
                  </div>
                  <form>
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.firstName}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.lastName}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.address}
                        disabled
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <div className="logo">Sync</div>
      {renderStep()}
      {showEmailVerified && (
        <div className="overlay">
          <div className="email-verified">
            <h2>Email Verified Successfully</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;*/

import React, { useState, useEffect } from 'react';
import './login.css'; // Import the CSS file

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false); // For the pop-up

  // Email validation regular expression
  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('User does not exist. Please register.');
      return;
    }

    const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);
    if (email === storedEmail && password === storedPassword) {
      onLogin();
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword || !address) {
      setError('All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Store user details in localStorage
    const user = { firstName, lastName, email, password, address };
    localStorage.setItem('user', JSON.stringify(user));

    setError('');
    setIsRegistering(false);
    setShowPopup(true); // Show pop-up when account is created
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false); // Automatically hide the pop-up after 1 second
        setIsRegistering(false); // Switch back to the login form
      }, 1000); // 1 second

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [showPopup]);

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className='login-h2'>{isRegistering ? 'Register' : 'Login'}</h2>
        {error && <p className="error-message">{error}</p>}
        
        {isRegistering && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {isRegistering && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {isRegistering && (
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        )}

        <button className="login-btn" onClick={isRegistering ? handleRegister : handleLogin}>
          {isRegistering ? 'Register' : 'Login'}
        </button>

        <p
          className="switch-link"
          onClick={() => {
            setIsRegistering(!isRegistering);
            setError('');
          }}
        >
          {isRegistering
            ? 'Already have an account? Login'
            : 'Don’t have an account? Register'}
        </p>
      </div>

      {/* Pop-up for successful registration */}
      {showPopup && (
        <div className="popup-login">
          <div className="popup-content-login">
            <p>Your account has been created successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

