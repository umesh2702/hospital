import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MobileVerify from './components/MobileVerify';
import OtpScreen from './components/OtpScreen';
import HospitalDetailsPage from './components/Hospital/HospitalDetails';

function App() {
  const [mobile, setMobile] = useState(true);
  const [login, setLogin] = useState(false);
  const [otp, setOtp] = useState(false);

  const toggleLogin = () => setLogin(prev => !prev);
  const toggleMobile = () => setMobile(prev => !prev);
  const toggleOtp = () => setOtp(prev => !prev);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage login={login} toggleLogin={toggleLogin} mobile={mobile} setMobile={setMobile} />} />
          <Route path="/hospital/:id" element={<HospitalDetailsPage login={login} toggleLogin={toggleLogin} mobile={mobile} setMobile={setMobile} />} />
        </Routes>
        {mobile && <MobileVerify toggleMobile={toggleMobile} toggleOtp={toggleOtp} />}
        {otp && <OtpScreen toggleLogin={toggleLogin} toggleOtp={toggleOtp} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
