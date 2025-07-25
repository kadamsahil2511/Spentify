import React, { useState } from 'react';
import './PayToContacts.css';

const PayToContacts = ({ onContactSelect, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    { id: 1, name: 'John Doe', username: 'john@oksbi', avatar: '/Img-assets/PRofile pic.png' },
    { id: 2, name: 'Jane Smith', username: 'jane@oksbi', avatar: '/Img-assets/PRofile pic.png' },
    { id: 3, name: 'Mike Johnson', username: 'mike@oksbi', avatar: '/Img-assets/PRofile pic.png' },
    { id: 4, name: 'Emily Brown', username: 'emily@oksbi', avatar: '/Img-assets/PRofile pic.png' },
    { id: 5, name: 'Chris Lee', username: 'chris@oksbi', avatar: '/Img-assets/PRofile pic.png' },
    { id: 6, name: 'Sarah Wilson', username: 'sarah@oksbi', avatar: '/Img-assets/PRofile pic.png' },
  ];

  const Avatar = ({ name }) => {
    const initial = name ? name.charAt(0).toUpperCase() : '?';
    return (
      <div className="contact-avatar-initials">
        <span>{initial}</span>
      </div>
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pay-contacts-container">
      <div className="pay-contacts-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="header-title">Pay to Contacts</h2>
      </div>

      <div className="pay-contacts-content">
        <div className="search-bar-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <input
            type="text"
            placeholder="Search by name or username"
            className="search-input-contacts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="contact-list">
          {filteredContacts.map(contact => (
            <div className="contact-item" key={contact.id} onClick={() => onContactSelect(contact)}>
              <Avatar name={contact.name} />
              <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-username">{contact.username}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayToContacts;
