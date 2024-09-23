import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { HomestayForm } from '../../../components/admin/homestay/HomestayForm';
import { homestayService } from '../../../services/homestayService';
import { Homestay } from '../../../types/homestay'; // Tambahkan impor ini

const CreateHomestayPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: Omit<Homestay, 'id'>) => {
    try {
      await homestayService.create(data);
      navigate('/admin/homestays');
    } catch (error) {
      console.error('Error creating homestay:', error);
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Create New Homestay</h1>
      <HomestayForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default CreateHomestayPage;