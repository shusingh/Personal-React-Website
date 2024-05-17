import React from 'react';
import WelcomePage from '../WelcomePage/WelcomePage';

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col mx-auto border border-gray-200 max-w-4xl min-w-[640px]">
      <WelcomePage />
    </div>
  );
};

export default Home;
