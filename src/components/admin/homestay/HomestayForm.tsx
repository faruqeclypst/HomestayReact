import React, { useState } from 'react';
import { Homestay } from '../../../types/homestay';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

interface HomestayFormProps {
  initialData?: Homestay;
  onSubmit: (data: Omit<Homestay, 'id'>) => Promise<void>;
}

export const HomestayForm: React.FC<HomestayFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<Homestay, 'id'>>(
    initialData || {
      name: '',
      description: '',
      price: 0,
      location: '',
      imageUrl: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
          rows={4}
        />
      </div>
      <Input
        label="Price"
        id="price"
        name="price"
        type="number"
        value={formData.price.toString()}
        onChange={handleChange}
        required
      />
      <Input
        label="Location"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <Input
        label="Image URL"
        id="imageUrl"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        required
      />
      <Button type="submit">
        {initialData ? 'Update Homestay' : 'Create Homestay'}
      </Button>
    </form>
  );
};