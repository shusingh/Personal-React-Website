import React from 'react';
import WelcomePage from '../WelcomePage/WelcomePage';

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col mx-auto min-w-[640px] p-4">
      <WelcomePage />
    </div>
  );
};

export default Home;
