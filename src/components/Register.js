import React, { useState } from 'react';
import './Login.css'; // Menggunakan file CSS yang sama dengan Login, jika kamu mau

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Register</h2>
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="login-input"
          />
        </div>
        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className="login-input"
          />
        </div>
        <button onClick={handleRegister} className="login-button">Register</button>
        <p className="forgot-password-link">
          <a href="/login">Already have an account? Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
