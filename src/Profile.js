import React from 'react';
import './Profile.css';

const Profile = ({ onNavigate }) => {
  const paymentMethods = [
    { id: 'bank', icon: '/Img-assets/Iconsax/Linear/bank.svg', label: 'Bank account', details: '1 account' },
    { id: 'rupay', icon: '/Img-assets/Iconsax/Linear/iconsax-card.png', label: 'RuPay credit card', details: 'Pay with UPI' },
    { id: 'upi-lite', icon: '/Img-assets/Iconsax/Linear/iconsax-dollar-square.svg', label: 'UPI Lite', details: 'Pay PIN-free' },
  ];

  const settingsOptions = [
    { id: 'cards', icon: '/Img-assets/Iconsax/Linear/iconsax-card.png', label: 'Pay with credit or debit cards', sublabel: 'Contactless payments, bills, and more', action: 'Add' },
    { id: 'qr', icon: '/Img-assets/Iconsax/Linear/scanbarcode.svg', label: 'Your QR code', sublabel: 'Use to receive money from any UPI app' },
    { id: 'autopay', icon: '/Img-assets/Iconsax/Linear/iconsax-refresh-arrow-01.png', label: 'Autopay', sublabel: 'No pending requests' },
    { id: 'upi-circle', icon: '/Img-assets/Iconsax/Linear/iconsax-dollar-square.svg', label: 'UPI Circle', sublabel: 'Help people you trust make UPI payments', action: 'New', isNew: true },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button className="back-button" onClick={() => onNavigate('dashboard')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="profile-content">
        <div className="user-info-header">
          <div className="user-details">
            <h1 className="user-name">Aachal D Gupta</h1>
            <p className="upi-id">UPI ID: aachal@oksbi</p>
            <div className="upi-number-container">
              <span className="upi-number">7697935839</span>
              <span className="upi-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" /></svg>
                UPI number
              </span>
            </div>
          </div>
          <div className="profile-pic-container">
            <img src="/Img-assets/PRofile pic.png" alt="Profile" className="profile-pic" />
            <div className="qr-code-icon">
              <img src="/Img-assets/Iconsax/Linear/scanbarcode.svg" alt="QR" />
            </div>
          </div>
        </div>

        <div className="info-cards">
          <div className="info-card">
            <img src="/Img-assets/navbar icons/iconsax-enhance-prize.svg" alt="Rewards" className="info-card-icon" />
            <div className="info-card-text">
              <span className="info-card-main">₹76</span>
              <span className="info-card-sub">Rewards earned</span>
            </div>
          </div>
          <div className="info-card">
            <img src="/Img-assets/Iconsax/Linear/iconsax-profile-refer.png" alt="Refer" className="info-card-icon" />
            <div className="info-card-text">
              <span className="info-card-main">Get ₹201</span>
              <span className="info-card-sub">Refer a friend</span>
            </div>
          </div>
        </div>

        <div className="payment-setup-section">
          <div className="section-header">
            <h3>Set up payment methods 1/3</h3>
            <button className="chevron-button">&gt;</button>
          </div>
          <div className="payment-methods-grid">
            {paymentMethods.map(method => (
              <div key={method.id} className="payment-method-item">
                <div className="payment-method-icon-wrapper">
                  <img src={method.icon} alt="" className="payment-method-icon" />
                </div>
                <span className="payment-method-label">{method.label}</span>
                <span className="payment-method-details">{method.details}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="settings-list">
          {settingsOptions.map(option => (
            <div key={option.id} className="settings-item">
              <img src={option.icon} alt="" className="settings-icon" />
              <div className="settings-text">
                <span className="settings-label">{option.label}</span>
                <span className="settings-sublabel">{option.sublabel}</span>
              </div>
              {option.action && (
                <button className={`settings-action ${option.isNew ? 'new-badge' : 'add-button'}`}>
                  {option.action}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
