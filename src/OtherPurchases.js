import React from 'react';
import './OtherPurchases.css';

const OtherPurchases = ({ onBack }) => {
  const transactions = [
    { name: 'Amazon Shopping', amount: '3500' },
    { name: 'Myntra Clothes', amount: '2800' },
    { name: 'Ikea Furniture', amount: '8500' },
    { name: 'Bookstore', amount: '1200' },
    { name: 'Electronics Store', amount: '15000' },
    { name: 'Pharmacy', amount: '500' },
    { name: 'Home Decor', amount: '1750' },
    { name: 'Sporting Goods', amount: '2200' },
  ];

  const totalAmount = transactions.reduce((sum, item) => sum + parseInt(item.amount, 10), 0);

  return (
    <div className="other-purchases-container">
      <div className="other-purchases-header">
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

      <div className="other-purchases-content">
        <div className="month-summary">
          <span className="month-text">July 2025</span>
          <span className="total-amount">₹ {totalAmount.toLocaleString()}</span>
        </div>

        <div className="expenses-title-section">
          <h2 className="expenses-title">Other Purchases</h2>
          <img src="/Img-assets/Iconsax/Linear/purchase.png" alt="Purchases Icon" className="purchases-icon" />
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

export default OtherPurchases;
