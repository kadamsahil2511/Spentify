import React, { useState, useEffect } from 'react';
import './PaymentPage.css';

const PaymentPage = ({ contact, onBack, onPaymentSuccess }) => {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCooldown, setShowCooldown] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;
    if (showCooldown && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (showCooldown && countdown === 0) {
      proceedWithTransaction();
    }
    return () => clearTimeout(timer);
  }, [showCooldown, countdown]);

  const proceedWithTransaction = () => {
    onPaymentSuccess({
      amount,
      contact,
      category: selectedCategory,
    });
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handlePayNow = () => {
    if (amount && parseFloat(amount) > 0 && selectedCategory) {
      if (parseFloat(amount) > 10000) {
        setShowCooldown(true);
        setCountdown(30);
      } else {
        proceedWithTransaction();
      }
    } else {
      // Optional: show an error message
      alert('Please enter a valid amount and select a category.');
    }
  };

  const handleCancelTransaction = () => {
    setShowCooldown(false);
  };

  const categories = [
    'Food', 'Subscriptions', 'Travel', 'Mobile bills', 'Miscellaneous', 'Other purchases'
  ];

  return (
    <>
      {showCooldown && (
        <div className="cooldown-overlay">
          <div className="cooldown-modal">
            <h2>Are you sure?</h2>
            <p>This is a large purchase. Take a moment to think about it.</p>
            <div className="countdown-timer">{countdown}s</div>
            <p>Transaction will proceed automatically.</p>
            <button onClick={handleCancelTransaction} className="cancel-btn-cooldown">Cancel Transaction</button>
          </div>
        </div>
      )}
      <div className="payment-page-container">
        <div className="payment-page-header">
          <button className="back-btn" onClick={onBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="info-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
              <path d="M12 16V12" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="8" r="1" fill="white"/>
            </svg>
          </button>
        </div>

        <div className="payment-page-content">
          <div className="contact-details">
            <img src={contact.avatar} alt={contact.name} className="contact-avatar-large" />
            <h2 className="contact-name-large">{contact.name}</h2>
            <p className="contact-username-large">{contact.username}</p>
          </div>

          <div className="amount-input-container">
            <span className="currency-symbol">₹</span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0"
              className="amount-input"
            />
          </div>

          <div className="category-section">
            <h3 className="category-title">Category</h3>
            <div className="category-grid-payment">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="payment-page-footer">
          <button className="pay-now-btn" onClick={handlePayNow}>Pay now</button>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
