import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faClipboardCheck, faPills, faMoneyCheckAlt, faBuilding, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import '../assets/static/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a class="active" href="/dashboard">
            <FontAwesomeIcon icon={faHouse} /> Dashboard
            </a>
          </li>
          <li>
            <a href="/karyawan">
            <FontAwesomeIcon icon={faUsers} /> Karyawan</a>
          </li>
          <li>
            <a href="/kehadiran">
            <FontAwesomeIcon icon={faClipboardCheck} /> Kehadiran Karyawan</a>
          </li>
          <li>
            <a href="/obat">
            <FontAwesomeIcon icon={faPills} /> Obat</a>
          </li>
          <li>
            <a href="/payroll">
            <FontAwesomeIcon icon={faMoneyCheckAlt} />Payroll</a>
          </li>
          <li>
            <a href="/company">
            <FontAwesomeIcon icon={faBuilding} />Company</a>
          </li>
          <li>
            <a href="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> Log Out</a>
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
