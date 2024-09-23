import React from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../../services/authService';

export const Sidebar: React.FC = () => {
  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/admin" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/homestays" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Manage Homestays
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};