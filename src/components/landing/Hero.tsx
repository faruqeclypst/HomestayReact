import React from 'react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Homestay</h1>
        <p className="text-xl mb-8">Find your perfect home away from home</p>
        <Button variant="secondary">Explore Homestays</Button>
      </div>
    </div>
  );
};