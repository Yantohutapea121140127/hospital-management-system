import React from 'react';
import './Dashboard.css'; // Tambahkan file CSS untuk styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Hospital Dashboard</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Patients</h3>
          <p>150</p>
        </div>
        <div className="stat-card">
          <h3>Appointments Today</h3>
          <p>20</p>
        </div>
        <div className="stat-card">
          <h3>Available Doctors</h3>
          <p>5</p>
        </div>
        <div className="stat-card">
          <h3>New Registrations</h3>
          <p>3</p>
        </div>
      </div>
      <div className="dashboard-footer">
        <p>&copy; 2024 Hospital Management System</p>
      </div>
    </div>
  );
};

export default Dashboard;
