// src/components/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// src/components/AdminDashboard.jsx
import '../../styles/AdminDashboard.css';


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/orders">Manage Orders</Link></li>
          <li><Link to="/admin/services">Manage Services</Link></li>
          <li><Link to="/admin/customers">Manage Customers</Link></li>
          <li><Link to="/admin/reports">View Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
