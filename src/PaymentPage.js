import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = ({ contact, onBack }) => {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Food', 'Subscriptions', 'Travel', 'Mobile bills', 'Miscellaneous', 'Other purchases'
  ];

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
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
        <button className="pay-now-btn">Pay now</button>
      </div>
    </div>
  );
};

export default PaymentPage;
