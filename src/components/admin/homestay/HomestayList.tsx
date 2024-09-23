import React from 'react';
import { Link } from 'react-router-dom';
import { Homestay } from '../../../types/homestay';
import { Button } from '../../common/Button';

interface HomestayListProps {
  homestays: Homestay[];
  onDelete: (id: string) => Promise<void>;
}

export const HomestayList: React.FC<HomestayListProps> = ({ homestays, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-center">Price</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {homestays.map((homestay) => (
            <tr key={homestay.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="font-medium">{homestay.name}</div>
              </td>
              <td className="py-3 px-6 text-left">
                <div>{homestay.location}</div>
              </td>
              <td className="py-3 px-6 text-center">
                <div>${homestay.price}</div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <Link to={`/admin/homestays/edit/${homestay.id}`} className="mr-2">
                    <Button variant="secondary">Edit</Button>
                  </Link>
                  <Button variant="secondary" onClick={() => onDelete(homestay.id!)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};