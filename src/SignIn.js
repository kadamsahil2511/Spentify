import './SignIn.css';
import { useState } from 'react';

function SignIn({ onBack, onCreateAccount }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = () => {
    // Handle Gmail authentication logic here
  };  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
  };

  const handleCreateAccount = () => {
    onCreateAccount();
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h1 className="signin-title">Sign in</h1>
        
        <button className="google-signin-btn" onClick={handleGoogleSignIn}>
          Continue with Gmail
        </button>

        <div className="divider">
          <span className="divider-text">OR</span>
        </div>

        <form className="signin-form" onSubmit={handleSignIn}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signin-input"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signin-input"
              required
            />
          </div>

          <div className="account-options">
            <p className="create-account-text">don't have an account?</p>
            <button 
              type="button" 
              className="create-account-btn"
              onClick={handleCreateAccount}
            >
              CREATE AN ACCOUNT
            </button>
          </div>

          <button type="submit" className="signin-submit-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
