import React from 'react';
import './MobileBills.css';

const MobileBills = ({ onBack }) => {
  const transactions = [
    { name: 'Jio (1.5GB/day, 28 days)', amount: '239' },
    { name: 'Airtel (2GB/day, 28 days)', amount: '299' },
    { name: 'Vi (1.5GB/day, 28 days)', amount: '269' },
    { name: 'BSNL (2GB/day, 30 days)', amount: '199' },
    { name: 'Jio Postpaid Plus', amount: '399' },
    { name: 'Airtel Xstream Fiber', amount: '999' },
    { name: 'ACT Fibernet (100 Mbps)', amount: '799' },
    { name: 'JioFiber (300 Mbps)', amount: '1499' },
  ];

  const totalAmount = transactions.reduce((sum, item) => sum + parseInt(item.amount, 10), 0);

  return (
    <div className="mobile-bills-container">
      <div className="mobile-bills-header">
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

      <div className="mobile-bills-content">
        <div className="month-summary">
          <span className="month-text">July 2025</span>
          <span className="total-amount">₹ {totalAmount.toLocaleString()}</span>
        </div>

        <div className="expenses-title-section">
          <h2 className="expenses-title">Mobile Bills</h2>
          <img src="/Img-assets/Iconsax/Linear/mobile.svg" alt="Mobile Bills Icon" className="mobile-bills-icon" />
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

export default MobileBills;
