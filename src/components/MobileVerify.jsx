import React, { useState } from 'react';
import './MobileVerify.css';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

function MobileVerify({ toggleMobile, toggleOtp }) {
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleOtp = () => {
    // Perform OTP logic here, for now, we assume OTP is successful
    toggleMobile();
    toggleOtp();
  };

  return (
    <div className="mobile-verify-overlay">
      {showSignup ? (
        <Signup />
      ) : (
        <div className="mobile-verify">
          <h3>Enter Mobile Number</h3>
          <input type="number" placeholder="Mobile Number" />
          <button onClick={handleOtp}>Proceed</button>
          
          <div className="signup-prompt">
            Don't have an account? <span onClick={handleSignupClick} className="signup-link">Sign up</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileVerify;
