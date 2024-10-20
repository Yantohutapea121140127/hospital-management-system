import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Pastikan ada file CSS untuk styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook untuk navigasi

  // Dummy credentials
  const dummyEmail = "admin";
  const dummyPassword = "admin";

  const handleLogin = () => {
    // Memeriksa kredensial
    if (email === dummyEmail && password === dummyPassword) {
      // Jika berhasil, alihkan ke dashboard
      navigate('/dashboard');
    } else {
      alert('Login failed. Invalid credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
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
        <button onClick={handleLogin} className="login-button">Login</button>
      <p className='forgot-password-link'>
        <a href='/forgot-password'>Forgot Password?</a>
      </p>
      </div>
    </div>
  );
};

export default Login;
