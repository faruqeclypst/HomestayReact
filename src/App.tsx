import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/index';
import LoginPage from './pages/login';
import AdminDashboardPage from './pages/admin/index';
import HomestaysPage from './pages/admin/homestays/index';
import CreateHomestayPage from './pages/admin/homestays/create';
import EditHomestayPage from './pages/admin/homestays/edit';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/homestays" element={<HomestaysPage />} />
          <Route path="/admin/homestays/create" element={<CreateHomestayPage />} />
          <Route path="/admin/homestays/edit/:id" element={<EditHomestayPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;