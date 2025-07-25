import './CreateAccount.css';
import { useState, useRef, useEffect } from 'react';

function CreateAccount({ onBack, onProceed }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to go to previous input
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleProceed = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 4) {
      // Handle OTP validation logic here
      onProceed();
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <div className="create-account-container">
      <div className="create-account-content">
        <div className="header-section">
          <h1 className="create-account-title">
            Create your<br />
            account
          </h1>
          <p className="create-account-subtitle">
            Track your spending and save for<br />
            what matters.
          </p>
        </div>

        <div className="otp-section">
          <h2 className="otp-title">Enter otp:</h2>
          
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="otp-input"
                inputMode="numeric"
                pattern="[0-9]*"
              />
            ))}
          </div>
        </div>

        <button 
          className={`proceed-btn ${isOtpComplete ? 'active' : ''}`}
          onClick={handleProceed}
          disabled={!isOtpComplete}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
