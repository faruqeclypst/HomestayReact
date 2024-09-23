import React from 'react';
import { AdminLayout } from '../../components/layout/AdminLayout';

const AdminDashboardPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Use the sidebar to navigate.</p>
    </AdminLayout>
  );
};

export default AdminDashboardPage;