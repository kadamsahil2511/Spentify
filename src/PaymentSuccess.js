import React from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = ({ onDone, transactionDetails }) => {
  if (!transactionDetails) {
    return (
      <div className="payment-success-container">
        <div className="payment-success-card">
          <h1 className="success-title">Payment Details Not Available</h1>
          <p className="success-message">Something went wrong. Please try again.</p>
          <button onClick={onDone} className="done-btn">Back to Dashboard</button>
        </div>
      </div>
    );
  }

  const { amount, contact } = transactionDetails;

  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <div className="success-icon-container">
          <svg className="success-icon" viewBox="0 0 52 52">
            <circle className="success-icon__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="success-icon__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">You have successfully paid</p>
        <p className="success-amount">₹{amount}</p>
        <p className="success-recipient">to {contact.name}</p>
        
        <div className="transaction-details">
          <div className="detail-item">
            <span className="detail-label">Paid to</span>
            <span className="detail-value">{contact.name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Username</span>
            <span className="detail-value">{contact.username}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Transaction ID</span>
            <span className="detail-value">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          </div>
        </div>

        <button onClick={onDone} className="done-btn">Done</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
