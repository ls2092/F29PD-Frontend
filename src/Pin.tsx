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
    onPinVerified();
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
    <div className="login-page">
      <div className="login-card">
        <div className="left-side">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="sync-text">SY<span className="orange-text">N</span>C</span>
            </h1>
          </div>
        </div>
        <div className="right-side">
          <div className="login-form">
            {step === 'set' && (
              <>
                <h2 className="form-title">Set Your PIN</h2>
                <p className="form-subtitle">Enter a 4-digit PIN</p>
                <div className="verification-code">
                  {[0, 1, 2, 3].map((_, index) => (
                    <input
                      key={index}
                      type="password"
                      maxLength={1}
                      className="code-input"
                      value={pin[index] || ''}
                      onChange={(e) => {
                        const newPin = pin.split('');
                        newPin[index] = e.target.value;
                        setPin(newPin.join(''));
                        if (e.target.value && index < 3) {
                          const nextInput = document.querySelectorAll('.code-input')[index + 1] as HTMLInputElement;
                          if (nextInput) nextInput.focus();
                        }
                      }}
                    />
                  ))}
                </div>
                <button className="login-btn" onClick={handleSetPin}>Next</button>
              </>
            )}

            {step === 'confirm' && (
              <>
                <h2 className="form-title">Confirm Your PIN</h2>
                <p className="form-subtitle">Re-enter your PIN</p>
                <div className="verification-code">
                  {[0, 1, 2, 3].map((_, index) => (
                    <input
                      key={index}
                      type="password"
                      maxLength={1}
                      className="code-input"
                      value={confirmPin[index] || ''}
                      onChange={(e) => {
                        const newPin = confirmPin.split('');
                        newPin[index] = e.target.value;
                        setConfirmPin(newPin.join(''));
                        if (e.target.value && index < 3) {
                          const nextInput = document.querySelectorAll('.code-input')[index + 1] as HTMLInputElement;
                          if (nextInput) nextInput.focus();
                        }
                      }}
                    />
                  ))}
                </div>
                <button className="login-btn" onClick={handleConfirmPin}>Confirm</button>
              </>
            )}

            {step === 'verify' && (
              <>
                <h2 className="form-title">Welcome,</h2>
                <p className="form-subtitle">Household Member</p>
                <p className="form-title">Enter Your PIN</p>
                <div className="verification-code">
                  {[0, 1, 2, 3].map((_, index) => (
                    <input
                      key={index}
                      type="password"
                      maxLength={1}
                      className="code-input"
                      value={pin[index] || ''}
                      onChange={(e) => {
                        const newPin = pin.split('');
                        newPin[index] = e.target.value;
                        setPin(newPin.join(''));
                        if (e.target.value && index < 3) {
                          const nextInput = document.querySelectorAll('.code-input')[index + 1] as HTMLInputElement;
                          if (nextInput) nextInput.focus();
                        }
                      }}
                    />
                  ))}
                </div>
                <button className="login-btn" onClick={handleVerifyPin}>Verify</button>
              </>
            )}

            {error && <p className="error-pin">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPin;














