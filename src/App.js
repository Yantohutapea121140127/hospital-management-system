import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Routes>
            {/* Menambahkan route yang secara otomatis mengarahkan dari '/' ke '/login' */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login onLogin={() => { /* Fungsi login */ }} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;