import './BankLinking.css';
import { useState } from 'react';

function BankLinking({ onBack }) {
  const [selectedBank, setSelectedBank] = useState('');

  const banks = [
    { id: 'sbi', name: 'SBI Bank' },
    { id: 'axis', name: 'Axis Bank' },
    { id: 'icici', name: 'ICICI Bank' }
  ];

  const handleBankSelect = (bankId) => {
    setSelectedBank(bankId);
  };

  const handleProceed = () => {
    if (selectedBank) {
      console.log('Selected bank:', selectedBank);
      // Add bank linking logic here
    }
  };

  return (
    <div className="bank-linking-container">
      <div className="bank-linking-content">
        <div className="header-section">
          <h1 className="bank-linking-title">
            Link your<br />
            bank account
          </h1>
          <p className="bank-linking-subtitle">
            We found the following bank<br />
            accounts linked to your phone<br />
            number
          </p>
        </div>

        <div className="bank-selection-section">
          <h2 className="selection-title">Select Account</h2>
          
          <div className="bank-options">
            {banks.map((bank) => (
              <button
                key={bank.id}
                className={`bank-option ${selectedBank === bank.id ? 'selected' : ''}`}
                onClick={() => handleBankSelect(bank.id)}
              >
                {bank.name}
              </button>
            ))}
          </div>
        </div>

        <button 
          className={`proceed-btn ${selectedBank ? 'active' : ''}`}
          onClick={handleProceed}
          disabled={!selectedBank}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default BankLinking;
