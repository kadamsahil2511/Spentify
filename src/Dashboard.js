import './Dashboard.css';
import { useState } from 'react';

function Dashboard({ onBack }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Mock user data
  const userData = {
    name: 'Aachal Devendra Gupta',
    balance: 1050000,
    cardNumber: '5671 2345 8900 1024',
    cardExpiry: '10/26',
    cvv: '234',
    bankName: 'Spentify Bank'
  };

  const payAndReceiveOptions = [
    { id: 'scan', icon: '/Img-assets/Iconsax/Linear/scanbarcode.svg', label: 'Scan QR Code' },
    { id: 'mobile', icon: '/Img-assets/Iconsax/Linear/mobile.svg', label: 'Mobile Recharge' },
    { id: 'bank', icon: '/Img-assets/Iconsax/Linear/bank.svg', label: 'Bank Transfer' },
    { id: 'bills', icon: '/Img-assets/Iconsax/Linear/book1.svg', label: 'Pay Bills' },
    { id: 'contacts', icon: '/Img-assets/Iconsax/Linear/profile.svg', label: 'Pay to Contacts' },
    { id: 'viewmore', icon: '/Img-assets/Iconsax/Linear/iconsax-3-dots-more.svg', label: 'View More' }
  ];

  const categoryOptions = [
    { id: 'food', icon: '/Img-assets/Iconsax/Linear/food.png', label: 'Food' },
    { id: 'travel', icon: '/Img-assets/Iconsax/Linear/travel.png', label: 'Travel' },
    { id: 'misc', icon: '/Img-assets/Iconsax/Linear/iconsax-box-2.svg', label: 'Miscellaneous' },
    { id: 'mobile-bills', icon: '/Img-assets/Iconsax/Linear/mobile.svg', label: 'Mobile Bills' },
    { id: 'purchases', icon: '/Img-assets/Iconsax/Linear/purchase.png', label: 'Other Purchases' },
    { id: 'subscriptions', icon: '/Img-assets/Iconsax/Linear/iconsax-dollar-square.svg', label: 'Subscriptions' }
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
  };

  const handleOptionClick = (optionId) => {
    console.log('Option clicked:', optionId);
  };

  const handleCardFlip = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const bottomNavItems = [
    { id: 'home', icon: '/Img-assets/navbar icons/home2.svg', label: 'Home', active: true },
    { id: 'activity', icon: '/Img-assets/navbar icons/activity.svg', label: 'Activity' },
    { id: 'chat', icon: '/Img-assets/navbar icons/messagetext1.svg', label: 'Chat' },
    { id: 'profile', icon: '/Img-assets/navbar icons/profile.svg', label: 'Profile' }
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input
              type="text"
              placeholder="Pay by name or phone number"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>
        <button className="notification-btn" onClick={handleNotificationClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21S18 15 18 8Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M13.73 21A2 2 0 0 1 10.27 21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Balance Section */}
        <div className="balance-section">
          <p className="balance-label">Available Balance</p>
          <h1 className="balance-amount">Rs. {userData.balance.toLocaleString()}</h1>
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          <div className={`card-container ${isCardFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
            <div className="card-inner">
              {/* Front Side */}
              <div className="debit-card card-front">
                <div className="card-header">
                  <span className="card-type">Debit Card</span>
                  <div className="card-logos">
                    <div className="mastercard-logo">
                      <div className="circle red"></div>
                      <div className="circle yellow"></div>
                    </div>
                  </div>
                </div>
                <div className="card-number">{userData.cardNumber}</div>
                <div className="card-footer">
                  <span className="cardholder-name">{userData.name}</span>
                  <span className="card-expiry">{userData.cardExpiry}</span>
                </div>
              </div>
              
              {/* Back Side */}
              <div className="debit-card card-back">
                <div className="magnetic-strip"></div>
                <div className="card-back-simple">
                  <div className="signature-panel">
                    <div className="signature-strip"></div>
                    <div className="cvv-section">
                      <span className="cvv-label">CVV</span>
                      <span className="cvv-number">{userData.cvv}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pay and Receive Section */}
        <div className="section">
          <h2 className="section-title">Pay and Receive</h2>
          <div className="pay-receive-grid">
            {payAndReceiveOptions.map((option) => (
              <button
                key={option.id}
                className="pay-receive-item"
                onClick={() => handleOptionClick(option.id)}
              >
                <img src={option.icon} alt={option.label} className="pay-receive-icon" />
                <span className="pay-receive-label">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="section">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-card">
            <div className="activity-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="rgba(139, 92, 246, 0.1)"/>
                <path d="M12 20L18 26L28 16" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Keep Track of your transactions</h3>
              <p className="activity-subtitle">New Transactions will appear here</p>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="category-grid">
          {categoryOptions.map((category) => (
            <button
              key={category.id}
              className="category-item"
              onClick={() => handleOptionClick(category.id)}
            >
              <img src={category.icon} alt={category.label} className="category-icon" />
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        {bottomNavItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${item.active ? 'active' : ''}`}
            onClick={() => handleOptionClick(item.id)}
          >
            {item.active && (
              <img 
                src="/Img-assets/navbar icons/current marker.svg" 
                alt="Current" 
                className="current-marker"
              />
            )}
            <img src={item.icon} alt={item.label} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
