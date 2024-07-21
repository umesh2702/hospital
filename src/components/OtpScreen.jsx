import React, { useRef } from 'react';
import './OtpScreen.css';
import { useNavigate } from 'react-router';

function OtpScreen({ toggleLogin, toggleOtp }) {
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const otp = inputRefs.current.map(input => input.value).join('');
    console.log('Entered OTP:', otp); // Replace with actual OTP verification logic

    // Implement actual OTP verification logic here

    navigate('/hospital/1');
    toggleLogin();
    toggleOtp();
  };

  return (
    <div className="otp-overlay">
      <div className="otp">
        <h3>We have sent you the code to your mobile number</h3>
        <div className="otp-inputs">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={el => inputRefs.current[index] = el}
              onChange={(e) => handleChange(e, index)}
              onFocus={(e) => e.target.select()}
              aria-label={`OTP input ${index + 1}`}
            />
          ))}
        </div>
        <button className="verify-button" onClick={handleSubmit}>VERIFY</button>
      </div>
    </div>
  );
}

export default OtpScreen;
