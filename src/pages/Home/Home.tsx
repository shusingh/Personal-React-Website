import React from 'react';
import WelcomePage from 'src/pages/Home/WelcomePage/WelcomePage';

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col mx-auto p-2 max-w-screen-lg w-full mt-10">
      <WelcomePage />
    </div>
  );
};

export default Home;
