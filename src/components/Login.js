import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/static/Login.css'; 
import img from '../assets/img/logoklinik.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      
      if (response.data.token) {
        // Save token to local storage or context
        localStorage.setItem('authToken', response.data.token);
        navigate('/dashboard');
      } else {
        alert('Login failed. Invalid credentials.');
      }
    } catch (error) {
      alert('Login failed. Invalid credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={img} alt="Logo" />
      </div>
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Username" 
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
        <div className="remember-me">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <button onClick={handleLogin} className="login-button">Sign in</button>
        <p className="forgot-password-link">
          <a href="/forgot-password">Forgot password?</a>
        </p>
        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
