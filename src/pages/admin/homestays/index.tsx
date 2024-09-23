import React from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { HomestayList } from '../../../components/admin/homestay/HomestayList';
import { Button } from '../../../components/common/Button';
import { useHomestay } from '../../../hooks/useHomestay';
import { homestayService } from '../../../services/homestayService';

const HomestaysPage: React.FC = () => {
  const { homestays, loading, refetch } = useHomestay();

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this homestay?')) {
      try {
        await homestayService.delete(id);
        refetch();
      } catch (error) {
        console.error('Error deleting homestay:', error);
      }
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Homestays</h1>
        <Link to="/admin/homestays/create">
          <Button>Add New Homestay</Button>
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <HomestayList homestays={homestays} onDelete={handleDelete} />
      )}
    </AdminLayout>
  );
};

export default HomestaysPage;