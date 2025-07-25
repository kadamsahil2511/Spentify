import './PhoneNumber.css';
import { useState } from 'react';

function PhoneNumber({ onBack, onProceed }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e) => {
    // Only allow numbers and limit to 10 digits
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleProceed = () => {
    if (phoneNumber.length === 10) {
      // Handle phone number validation logic here
      onProceed();
    }
  };

  const isPhoneValid = phoneNumber.length === 10;

  return (
    <div className="phone-number-container">
      <div className="phone-number-content">
        <div className="header-section">
          <h1 className="phone-number-title">
            Create your<br />
            account
          </h1>
          <p className="phone-number-subtitle">
            Track your spending and save for<br />
            what matters.
          </p>
        </div>

        <div className="phone-input-section">
          <h2 className="input-label">Enter phone no.</h2>
          
          <div className="phone-input-container">
            <div className="country-code">+91</div>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="9876543210"
              className="phone-input"
              maxLength="10"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
        </div>

        <button 
          className={`proceed-btn ${isPhoneValid ? 'active' : ''}`}
          onClick={handleProceed}
          disabled={!isPhoneValid}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default PhoneNumber;
