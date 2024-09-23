import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Homestay</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          Homestay is a platform that connects travelers with unique accommodations around the world. 
          We believe in providing authentic experiences and helping our guests feel at home wherever they go.
        </p>
      </div>
    </div>
  );
};