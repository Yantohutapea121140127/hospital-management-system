import React, { useState } from 'react';
import './Login.css'; // Menggunakan file CSS yang sama dengan Login, jika kamu mau

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    fetch('http://localhost:5000/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Forgot Password</h2>
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="login-input"
          />
        </div>
        <button onClick={handleForgotPassword} className="login-button">Send Reset Link</button>
        <p className="forgot-password-link">
          <a href="/login">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
