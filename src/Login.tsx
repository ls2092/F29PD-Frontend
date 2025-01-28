
import React, { useState } from 'react';
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

  const handleLogin = () => {
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

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const user = { firstName, lastName, email, password, address };
    localStorage.setItem('user', JSON.stringify(user));
    setError('');
    setIsRegistering(false);
  };

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
    </div>
  );
};

export default Login;
