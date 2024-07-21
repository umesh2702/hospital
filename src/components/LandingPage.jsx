import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function LandingPage({ login, toggleLogin, mobile, setMobile }) {
  return (
    <div>
      <Navbar login={login} toggleLogin={toggleLogin} mobile={mobile} setMobile={setMobile} />
      
      <Footer />
    </div>
  );
}

export default LandingPage;
