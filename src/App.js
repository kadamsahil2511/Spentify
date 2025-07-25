import './App.css';
import { useEffect, useState } from 'react';
import SignIn from './SignIn';
import PhoneNumber from './PhoneNumber';
import CreateAccount from './CreateAccount';
import BankLinking from './BankLinking';
import FoodExpenses from './FoodExpenses';
import TravelExpenses from './TravelExpenses';
import Subscriptions from './Subscriptions';
import MobileBills from './MobileBills';
import OtherPurchases from './OtherPurchases';
import Miscellaneous from './Miscellaneous';
import PayToContacts from './PayToContacts';
import PaymentPage from './PaymentPage';
import PaymentSuccess from './PaymentSuccess';
import Analysis from './Analysis';
import Dashboard from './Dashboard';
import Rewards from './Rewards';
import Profile from './Profile';

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState('welcome'); // 'welcome', 'signin', 'phonenumber', 'createaccount', 'banklinking', 'dashboard', 'foodexpenses', 'travelexpenses', 'subscriptions', 'mobilebills', 'otherpurchases', 'miscellaneous', 'paytocontacts', 'paymentpage', 'paymentsuccess', 'analysis'
  const [selectedContact, setSelectedContact] = useState(null);
  const [transactionDetails, setTransactionDetails] = useState(null);

  useEffect(() => {
    // Aggressive mobile fullscreen setup
    const setupMobileFullscreen = () => {
      // Function to hide address bar and go fullscreen
      const hideAddressBar = () => {
        // Force scroll to hide address bar
        window.scrollTo(0, 1);
        document.body.scrollTop = 1;
        
        // Set viewport height dynamically
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      // Function to request fullscreen
      const requestFullscreen = async () => {
        try {
          if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
            setIsFullscreen(true);
          } else if (document.documentElement.mozRequestFullScreen) {
            await document.documentElement.mozRequestFullScreen();
            setIsFullscreen(true);
          } else if (document.documentElement.webkitRequestFullscreen) {
            await document.documentElement.webkitRequestFullscreen();
            setIsFullscreen(true);
          } else if (document.documentElement.msRequestFullscreen) {
            await document.documentElement.msRequestFullscreen();
            setIsFullscreen(true);
          }
        } catch (error) {
          console.log('Fullscreen not supported or blocked:', error);
          // Fallback to address bar hiding
          hideAddressBar();
        }
      };

      // Prevent zoom on double tap
      let lastTouchEnd = 0;
      document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false);

      // Prevent pull-to-refresh and overscroll
      document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      }, { passive: false });

      document.addEventListener('touchmove', function(e) {
        // Prevent overscroll bounce
        e.preventDefault();
      }, { passive: false });

      // Prevent context menu
      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });

      // Handle viewport changes
      const handleViewportChange = () => {
        setTimeout(() => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
          hideAddressBar();
        }, 100);
      };

      // Listen for orientation and resize changes
      window.addEventListener('orientationchange', handleViewportChange);
      window.addEventListener('resize', handleViewportChange);
      window.addEventListener('load', hideAddressBar);

      // Listen for fullscreen changes
      document.addEventListener('fullscreenchange', () => {
        setIsFullscreen(!!document.fullscreenElement);
      });

      // Initial setup
      setTimeout(hideAddressBar, 100);
      
      // Try fullscreen on first touch (user gesture required)
      document.addEventListener('touchstart', requestFullscreen, { once: true });
      document.addEventListener('click', requestFullscreen, { once: true });
    };

    setupMobileFullscreen();
  }, []);

  const handleFullscreenToggle = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.log('Fullscreen toggle failed:', error);
    }
  };

  const handleGetStarted = () => {
    setCurrentPage('signin');
  };

  const handleBackToWelcome = () => {
    setCurrentPage('welcome');
  };

  const handleCreateAccount = () => {
    setCurrentPage('phonenumber');
  };

  const handleBackToSignIn = () => {
    setCurrentPage('signin');
  };

  const handlePhoneProceed = () => {
    setCurrentPage('createaccount');
  };

  const handleBackToPhoneNumber = () => {
    setCurrentPage('phonenumber');
  };

  const handleOtpProceed = () => {
    setCurrentPage('banklinking');
  };

  const handleBackToCreateAccount = () => {
    setCurrentPage('phonenumber');
  };

  const handleBankSelected = () => {
    setCurrentPage('dashboard');
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setCurrentPage('paymentpage');
  };

  const handlePaymentSuccess = (details) => {
    setTransactionDetails(details);
    setCurrentPage('paymentsuccess');
  };

  return (
    <div className="App">
      {!isFullscreen && (
        <button 
          onClick={handleFullscreenToggle}
          className="fullscreen-btn"
        >
          📱
        </button>
      )}
      
      {currentPage === 'welcome' && (
        <div className="content-container">
          <div className="text-section">
            <h1 className="main-title">
              Transform<br />
              the way you<br />
              handle money
            </h1>
            <p className="subtitle">
              Track your spending and save for<br />
              what matters.
            </p>
          </div>

          <div className="image-section">
            <img 
              src="/Img-assets/Receive Money.png" 
              alt="Money Management Illustration" 
              className="main-illustration"
            />
          </div>

          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      )}

      {currentPage === 'signin' && (
        <SignIn 
          onBack={handleBackToWelcome} 
          onCreateAccount={handleCreateAccount}
        />
      )}

      {currentPage === 'phonenumber' && (
        <PhoneNumber 
          onBack={handleBackToSignIn} 
          onProceed={handlePhoneProceed}
        />
      )}

      {currentPage === 'createaccount' && (
        <CreateAccount 
          onBack={handleBackToPhoneNumber} 
          onProceed={handleOtpProceed}
        />
      )}

      {currentPage === 'banklinking' && (
        <BankLinking 
          onBack={handleBackToCreateAccount} 
          onProceed={handleBankSelected}
        />
      )}

      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={setCurrentPage} />
      )}

      {currentPage === 'foodexpenses' && (
        <FoodExpenses onBack={() => setCurrentPage('dashboard')} />
      )}

      {currentPage === 'travelexpenses' && <TravelExpenses onBack={() => setCurrentPage('dashboard')} />}
      {currentPage === 'subscriptions' && <Subscriptions onBack={() => setCurrentPage('dashboard')} />}
      {currentPage === 'mobilebills' && <MobileBills onBack={() => setCurrentPage('dashboard')} />}
      {currentPage === 'otherpurchases' && <OtherPurchases onBack={() => setCurrentPage('dashboard')} />}
      {currentPage === 'miscellaneous' && <Miscellaneous onBack={() => setCurrentPage('dashboard')} />}
      {currentPage === 'paytocontacts' && <PayToContacts onBack={() => setCurrentPage('dashboard')} onContactSelect={handleContactSelect} />}
      {currentPage === 'paymentpage' && <PaymentPage contact={selectedContact} onBack={() => setCurrentPage('paytocontacts')} onPaymentSuccess={handlePaymentSuccess} />}
      {currentPage === 'paymentsuccess' && <PaymentSuccess transactionDetails={transactionDetails} onDone={() => setCurrentPage('dashboard')} />}
      {currentPage === 'analysis' && <Analysis onNavigate={setCurrentPage} onBack={() => setCurrentPage('dashboard')} />}
      {currentPage === 'rewards' && <Rewards onNavigate={setCurrentPage} />}
      {currentPage === 'profile' && <Profile onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;
