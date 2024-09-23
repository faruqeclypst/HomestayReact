import React, { PropsWithChildren } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const PublicLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};