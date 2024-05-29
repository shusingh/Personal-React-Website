import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import { ROUTE_URLS } from '../constants/urlConstants';
import Haiku from 'src/pages/Haiku/Haiku';

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path={ROUTE_URLS.HOME} element={<Home />} />
          <Route path={ROUTE_URLS.ABOUT} element={<About />} />
          <Route path={ROUTE_URLS.HAIKU} element={<Haiku />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
