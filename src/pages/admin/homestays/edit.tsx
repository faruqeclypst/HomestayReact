import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { HomestayForm } from '../../../components/admin/homestay/HomestayForm';
import { homestayService } from '../../../services/homestayService';
import { Homestay } from '../../../types/homestay';

const EditHomestayPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [homestay, setHomestay] = useState<Homestay | null>(null);

  useEffect(() => {
    const fetchHomestay = async () => {
      try {
        const data = await homestayService.getAll();
        const foundHomestay = data.find(h => h.id === id);
        if (foundHomestay) {
          setHomestay(foundHomestay);
        } else {
          console.error('Homestay not found');
          navigate('/admin/homestays');
        }
      } catch (error) {
        console.error('Error fetching homestay:', error);
      }
    };

    fetchHomestay();
  }, [id, navigate]);

  const handleSubmit = async (data: Omit<Homestay, 'id'>) => {
    try {
      await homestayService.update(id!, data);
      navigate('/admin/homestays');
    } catch (error) {
      console.error('Error updating homestay:', error);
    }
  };

  if (!homestay) {
    return <AdminLayout>Loading...</AdminLayout>;
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Edit Homestay</h1>
      <HomestayForm initialData={homestay} onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default EditHomestayPage;