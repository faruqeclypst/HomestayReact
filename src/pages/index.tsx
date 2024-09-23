import React from 'react';
import { PublicLayout } from '../components/layout/PublicLayout';
import { Hero } from '../components/landing/Hero';
import { FeaturedHomestays } from '../components/landing/FeaturedHomestays';
import { About } from '../components/landing/About';

const HomePage: React.FC = () => {
  return (
    <PublicLayout>
      <Hero />
      <FeaturedHomestays />
      <About />
    </PublicLayout>
  );
};

export default HomePage;