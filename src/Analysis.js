import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Analysis.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = ({ onNavigate, onBack }) => {
  const transactions = [
    { category: 'Food', amount: 100 },
    { category: 'Travel', amount: 30 },
    { category: 'Food', amount: 40 },
    { category: 'Subscriptions', amount: 56 },
    { category: 'Mobile Bills', amount: 120 },
    { category: 'Other Purchases', amount: 250 },
    { category: 'Miscellaneous', amount: 75 },
  ];

  const categoryData = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  const totalExpenses = Object.values(categoryData).reduce((sum, amount) => sum + amount, 0);

  const chartData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#C9CBCF'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#C9CBCF'
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(context.parsed);
            }
            return label;
          },
        },
      },
    },
    onClick: (evt, elements) => {
      if (elements.length > 0) {
        const clickedIndex = elements[0].index;
        const category = chartData.labels[clickedIndex];
        handleCategoryClick(category);
      }
    },
  };

  const handleCategoryClick = (category) => {
    const page = category.toLowerCase().replace(' ', '') + 'expenses';
    if (page === 'mobilebillsexpenses') {
        onNavigate('mobilebills');
    } else if (page === 'otherpurchasesexpenses') {
        onNavigate('otherpurchases');
    } else if (page === 'miscellaneousexpenses') {
        onNavigate('miscellaneous');
    }
     else {
        onNavigate(page);
    }
  };

  return (
    <div className="analysis-container">
      <div className="analysis-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="header-title">Analysis</h2>
      </div>
      <div className="analysis-content">
        <div className="chart-container">
          <Pie data={chartData} options={chartOptions} />
        </div>
        <div className="breakdown-section">
          <div className="breakdown-header">
            <h3>Category Breakdown</h3>
            <span>July 2025</span>
          </div>
          <div className="total-expenses">
            <span>Total Spent</span>
            <span>₹{totalExpenses.toLocaleString()}</span>
          </div>
          <ul className="category-list">
            {Object.entries(categoryData).map(([category, amount]) => (
              <li key={category} onClick={() => handleCategoryClick(category)}>
                <span className="category-name">{category}</span>
                <span className="category-amount">₹{amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
