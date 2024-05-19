import React from 'react';
import WelcomePage from '../WelcomePage/WelcomePage';

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col mx-auto p-4 max-w-screen-lg w-full">
      <WelcomePage />
    </div>
  );
};

export default Home;
