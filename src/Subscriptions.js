import React from 'react';
import './Subscriptions.css';

const Subscriptions = ({ onBack }) => {
  const transactions = [
    { name: 'Netflix', amount: '649' },
    { name: 'Spotify Premium', amount: '119' },
    { name: 'YouTube Premium', amount: '129' },
    { name: 'ChatGPT Plus', amount: '1899' },
    { name: 'Apple iCloud (50 GB)', amount: '75' },
    { name: 'Canva Pro', amount: '499' },
    { name: 'Adobe Lightroom Mobile', amount: '170' },
    { name: 'Hotstar Premium', amount: '299' },
  ];

  const totalAmount = transactions.reduce((sum, item) => sum + parseInt(item.amount, 0), 0);

  return (
    <div className="subscriptions-container">
      <div className="subscriptions-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="search-bar-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <input type="text" placeholder="Pay by name or phone number" className="search-input-expenses" />
        </div>
      </div>

      <div className="subscriptions-content">
        <div className="month-summary">
          <span className="month-text">July 2025</span>
          <span className="total-amount">₹ {totalAmount.toLocaleString()}</span>
        </div>

        <div className="expenses-title-section">
          <h2 className="expenses-title">App Subscriptions</h2>
          <img src="/Img-assets/Iconsax/Linear/iconsax-dollar-square.svg" alt="Subscriptions Icon" className="subscriptions-icon" />
        </div>

        <div className="transaction-list">
          {transactions.map((item, index) => (
            <div className="transaction-item" key={index}>
              <span className="transaction-name">{item.name}</span>
              <span className="transaction-amount">Rs.{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
