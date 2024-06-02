import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from 'src/routes/config';

const AppLayout: React.FC = () => {
  const routes = useRoutes(appRoutes);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{routes}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
