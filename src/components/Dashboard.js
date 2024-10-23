import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical, faUsers, faClipboardCheck, faBriefcaseMedical, faMoneyBill, faLandmark, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/static/Dashboard.css';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("/dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <div className="sidebar-header"></div>
        <ul className="sidebar-menu">
          <li>
            <Link 
            className={activeMenu === "/dashboard" ? 'active' : ''} 
            to="/dashboard"
            onClick={() => handleMenuClick("/dashboard")}>
            <FontAwesomeIcon icon={faHouseMedical} className="fa-icon" /> Dashboard</Link>
          </li>
          <li>
            <Link
            className={activeMenu === "/karyawan" ? 'active' : ''}
            to="/karyawan"
            onClick={() => handleMenuClick("/karyawan")}>
            <FontAwesomeIcon icon={faUsers} className="fa-icon" /> Karyawan</Link>
          </li>
          <li>
            <Link
            className={activeMenu === "/kehadiran" ? 'active' : ''} 
            to="/kehadiran"
            onClick={() => handleMenuClick("/kehadiran")}>
            <FontAwesomeIcon icon={faClipboardCheck} className="fa-icon" /> Kehadiran Karyawan</Link>
          </li>
          <li>
            <Link
            className={activeMenu === "/obat" ? 'active' : ''}
            to="/obat"
            onClick={() => handleMenuClick("/obat")}>
            <FontAwesomeIcon icon={faBriefcaseMedical} className="fa-icon" /> Obat</Link>
          </li>
          <li>
            <Link
            className={activeMenu === "/payroll" ? 'active' : ''}
            to="/payroll"
            onClick={() => handleMenuClick("/payroll")}>
            <FontAwesomeIcon icon={faMoneyBill} className="fa-icon" /> Payroll</Link>
          </li>
          <li>
            <Link 
            className={activeMenu === "/company" ? 'active' : ''} 
            to="/company"
            onClick={() => handleMenuClick("/company")}>
            <FontAwesomeIcon icon={faLandmark} className="fa-icon" /> Company</Link>
          </li>
          <li>
            <Link 
            className={activeMenu === "/logout" ? 'active' : ''} 
            to="/logout"
            onClick={() => handleMenuClick("/logout")}>
            <FontAwesomeIcon icon={faSignOutAlt} className="fa-icon" /> Logout</Link>
          </li>
        </ul>
      </nav>
      
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h2>Kehadiran Karyawan</h2>
          <div className="filter-options">
            <div className="filter-year">
              <label>Tahun</label>
              <select>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div className="filter-month">
              <label>Bulan</label>
              <select>
                <option value="okt">Oktober</option>
                <option value="nov">November</option>
              </select>
            </div>
          </div>
        </header>

        <section className="employee-attendance">
          <div className="attendance-cards">
            <div className="card">
              <p>KARYAWAN 1 FARMASI</p>
              <button>Detail Profil</button>
            </div>
            <div className="card">
              <p>KARYAWAN 2 PERAWAT</p>
              <button>Detail Profil</button>
            </div>
            <div className="card">
              <p>KARYAWAN 3 ADMIN</p>
              <button>Detail Profil</button>
            </div>
            <div className="card">
              <p>KARYAWAN 4 BIDAN</p>
              <button>Detail Profil</button>
            </div>
          </div>

          <div className="attendance-list">
            <h3>List Kehadiran</h3>
            <table>
              <thead>
                <tr>
                  <th>ID Karyawan</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                  <th>Tanggal</th>
                  <th>Waktu Login</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1124</td>
                  <td>Karyawan 1</td>
                  <td>Admin</td>
                  <td>12-11-24</td>
                  <td>09:30AM</td>
                  <td><button>View</button></td>
                </tr>
                <tr>
                  <td>5273</td>
                  <td>Karyawan 2</td>
                  <td>Perawat</td>
                  <td>12-11-24</td>
                  <td>09:00AM</td>
                  <td><button>View</button></td>
                </tr>
                <tr>
                  <td>2075</td>
                  <td>Karyawan 3</td>
                  <td>Farmasi</td>
                  <td>12-11-24</td>
                  <td>08:59AM</td>
                  <td><button>View</button></td>
                </tr>
              </tbody>
            </table>

            <div className="pagination">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
