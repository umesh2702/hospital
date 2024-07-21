import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-row">
        <div className="custom-footer-col">
          <h3>Contact Us:</h3>
          <p>Email: support@healthappointments.com</p>
          <p>Phone: +1-800-123-4567</p>
          <p>Address: 123 Health St, Wellness City, CA 90210</p>
        </div>
        <div className="custom-footer-col">
          <h3>Quick Links:</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#">Services</a></li>
            <li><Link to='/hospital'>Hospitals</Link></li>
            <li><a href="#">Labs</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="custom-footer-col">
          <h3>Follow Us:</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div className="custom-footer-col custom-footer-rights">
          <h6>© BookMyAppointments</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
