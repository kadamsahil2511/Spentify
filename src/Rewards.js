import React from 'react';
import './Rewards.css';

const Rewards = ({ onNavigate }) => {
  const popularRewards = [
    {
      id: 'amazon',
      title: '$50 Amazon Gift Card',
      description: 'Redeem for online shopping',
      points: '5,000',
      image: '/Img-assets/Rewards_img/img1.jpg',
    },
    {
      id: 'cashback',
      title: '$25 Cashback',
      description: 'Direct deposit to your account',
      points: '2,500',
      image: '/Img-assets/Rewards_img/img2.jpg',
    },
    {
      id: 'coffee',
      title: 'Coffee Subscription',
      description: '1 month premium coffee',
      points: '3,000',
      image: '/Img-assets/Rewards_img/img3.jpg',
    },
    {
      id: 'travel',
      title: 'Travel Voucher',
      description: '$100 for your next trip',
      points: '10,000',
      image: '/Img-assets/Rewards_img/img4.jpg',
    },
  ];

  return (
    <div className="rewards-container">
      <div className="rewards-header">
        <button className="back-button" onClick={() => onNavigate('dashboard')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="rewards-title">Rewards</h1>
      </div>

      <div className="rewards-content">
        <div className="points-summary-card">
          <p className="available-points-label">Available Points</p>
          <h2 className="points-balance">12,450</h2>
          <p className="tier-status">Silver Tier</p>
          <div className="tier-progress">
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
          </div>
          <p className="points-to-next-tier">5,550 points to Gold Tier</p>
        </div>

        <div className="rewards-filters">
          <button className="filter-button active">All Rewards</button>
          <button className="filter-button">Cashback</button>
          <button className="filter-button">Gift Cards</button>
        </div>

        <div className="limited-time-offer">
          <h3>Limited Time Offer</h3>
          <p>Redeem 10,000 points for $150 cashback - 50% bonus value!</p>
          <p className="offer-expiry">Offer ends in 3 days</p>
        </div>

        <div className="rewards-section">
          <div className="section-header">
            <h2>Popular Rewards</h2>
            <button className="view-all-button">View All</button>
          </div>
          <div className="rewards-grid">
            {popularRewards.map((reward) => (
              <div key={reward.id} className="reward-card">
                <img src={reward.image} alt={reward.title} className="reward-image" />
                <div className="reward-info">
                  <h3>{reward.title}</h3>
                  <p>{reward.description}</p>
                  <div className="reward-action">
                    <span>{reward.points} points</span>
                    <button className="redeem-button">Redeem</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
