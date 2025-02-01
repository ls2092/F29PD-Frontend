import React, { useState } from 'react';

interface SetPinProps {
  onPinVerified: () => void;
}

const SetPin: React.FC<SetPinProps> = ({ onPinVerified }) => {
  const [step, setStep] = useState<'set' | 'confirm' | 'verify'>(localStorage.getItem('userPIN') ? 'verify' : 'set');
  const [pin, setPin] = useState<string>('');
  const [confirmPin, setConfirmPin] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d{0,4}$/.test(e.target.value)) setPin(e.target.value);
  };

  const handleConfirmPinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d{0,4}$/.test(e.target.value)) setConfirmPin(e.target.value);
  };

  const handleSetPin = () => {
    if (pin.length !== 4) {
      setError('PIN must be 4 digits.');
      return;
    }
    setError('');
    setStep('confirm');
  };

  const handleConfirmPin = () => {
    if (confirmPin !== pin) {
      setError('PINs do not match.');
      return;
    }
    localStorage.setItem('userPIN', pin);
    setError('');
    alert('PIN set successfully!');
    onPinVerified(); // Proceed to main app
  };

  const handleVerifyPin = () => {
    const storedPin = localStorage.getItem('userPIN');
    if (pin === storedPin) {
      alert('PIN verified! Access granted.');
      setError('');
      onPinVerified();
    } else {
      setError('Incorrect PIN.');
    }
  };

  return (
    <div className="pin-container">
      {step === 'set' && (
        <>
          <h2 className='pin-h2'>Set a 4-digit PIN</h2>
          <input className='pin-input'
            type="password"
            maxLength={4}
            value={pin}
            onChange={handlePinChange}
            placeholder="Enter PIN"
          />
          <button className="pin-btn" onClick={handleSetPin}>Next</button>
        </>
      )}

      {step === 'confirm' && (
        <>
          <h2 className='pin-h2'>Confirm your PIN</h2>
          <input
            type="password"
            maxLength={4}
            value={confirmPin}
            onChange={handleConfirmPinChange}
            placeholder="Confirm PIN"
          />
          <button className="pin-btn" onClick={handleConfirmPin}>Confirm</button>
        </>
      )}

      {step === 'verify' && (
        <>
          <h2 className='pin-h2'>Enter your PIN</h2>
          <input
            type="password"
            maxLength={4}
            value={pin}
            onChange={handlePinChange}
            placeholder="Enter PIN"
          />
          <button className="pin-btn" onClick={handleVerifyPin}>Verify</button>
        </>
      )}

      {error && <p className="error-pin">{error}</p>}
    </div>
  );
};

export default SetPin;
