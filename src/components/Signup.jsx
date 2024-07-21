import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const handleRegister = () => {
        // Perform registration logic here
        // After successful registration, navigate to '/'
        navigate('/');
    };

    return (
        <div className="signup-overlay">
            <div className="signup">
                <h3>Register</h3>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone number" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default Signup;
