import React from 'react';
import './TravelExpenses.css';

const TravelExpenses = ({ onBack }) => {
  const transactions = [
    { name: 'Uber / Ola', amount: '2400' },
    { name: 'Mumbai Local Train', amount: '400' },
    { name: 'Metro Card', amount: '600' },
    { name: 'Redbus (Intercity)', amount: '1200' },
    { name: 'Flight (1 trip avg)', amount: '5000' },
    { name: 'Fuel (Bike - monthly)', amount: '2500' },
    { name: 'Rapido (Bike taxi)', amount: '300' },
    { name: 'Hotel Stay (1 night)', amount: '2500' },
  ];

  const totalAmount = transactions.reduce((sum, item) => sum + parseInt(item.amount), 0);

  return (
    <div className="travel-expenses-container">
      <div className="travel-expenses-header">
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

      <div className="travel-expenses-content">
        <div className="month-summary">
          <span className="month-text">July 2025</span>
          <span className="total-amount">₹ {totalAmount.toLocaleString()}</span>
        </div>

        <div className="expenses-title-section">
          <h2 className="expenses-title">Travel Expenses</h2>
          <img src="/Img-assets/Iconsax/Linear/travel.png" alt="Travel Icon" className="travel-icon" />
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

export default TravelExpenses;
