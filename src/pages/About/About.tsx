import React from 'react';
import OverviewSection from './components/OverviewSection';
import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs';
import StudySection from './components/StudySection';

const About: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="bg-white dark:bg-gray-700 flex flex-col p-2 mx-auto max-w-screen-lg w-full mt-10">
        <div className="flex flex-col items-start space-y-4 w-full">
          <div>
            <OverviewSection />
          </div>
          <div>
            <StudySection />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
