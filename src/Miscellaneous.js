import React from 'react';
import './Miscellaneous.css';

const Miscellaneous = ({ onBack }) => {
  const transactions = [
    { name: 'Movie Tickets', amount: '700' },
    { name: 'Concert Tickets', amount: '2500' },
    { name: 'Gifts', amount: '1500' },
    { name: 'Donations', amount: '1000' },
    { name: 'Pet Supplies', amount: '800' },
    { name: 'Home Repairs', amount: '3000' },
    { name: 'Laundry', amount: '400' },
    { name: 'Parking Fees', amount: '200' },
  ];

  const totalAmount = transactions.reduce((sum, item) => sum + parseInt(item.amount, 10), 0);

  return (
    <div className="miscellaneous-container">
      <div className="miscellaneous-header">
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

      <div className="miscellaneous-content">
        <div className="month-summary">
          <span className="month-text">July 2025</span>
          <span className="total-amount">₹ {totalAmount.toLocaleString()}</span>
        </div>

        <div className="expenses-title-section">
          <h2 className="expenses-title">Miscellaneous</h2>
          <img src="/Img-assets/Iconsax/Linear/iconsax-box-2.svg" alt="Miscellaneous Icon" className="miscellaneous-icon" />
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

export default Miscellaneous;
