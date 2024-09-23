import { useState, useEffect } from 'react';
import { homestayService } from '../services/homestayService';
import { Homestay } from '../types/homestay';

export const useHomestay = () => {
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomestays();
  }, []);

  const fetchHomestays = async () => {
    setLoading(true);
    try {
      const data = await homestayService.getAll();
      setHomestays(data);
    } catch (error) {
      console.error('Error fetching homestays:', error);
    } finally {
      setLoading(false);
    }
  };

  return { homestays, loading, refetch: fetchHomestays };
};