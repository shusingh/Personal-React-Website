import React from 'react';
import OverviewSection from './components/OverviewSection';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-700 flex flex-col mx-auto p-4 max-w-screen-lg w-full mt-10">
      <div className="flex flex-col items-start space-y-4 w-full">
        <div>
          <OverviewSection />
        </div>
      </div>
    </div>
  );
};

export default About;
