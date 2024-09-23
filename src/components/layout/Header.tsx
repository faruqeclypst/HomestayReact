import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
// Hapus baris import Button berikut:
// import { Button } from '../common/Button';

export const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Homestay
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            {user ? (
              <li><Link to="/admin" className="hover:text-blue-600">Admin</Link></li>
            ) : (
              <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};