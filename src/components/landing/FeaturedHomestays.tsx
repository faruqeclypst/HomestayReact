import React from 'react';
import { useHomestay } from '../../hooks/useHomestay';

export const FeaturedHomestays: React.FC = () => {
  const { homestays, loading } = useHomestay();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Homestays</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homestays.slice(0, 3).map((homestay) => (
            <div key={homestay.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={homestay.imageUrl} alt={homestay.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{homestay.name}</h3>
                <p className="text-gray-600 mb-2">{homestay.location}</p>
                <p className="text-blue-600 font-bold">${homestay.price} / night</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};