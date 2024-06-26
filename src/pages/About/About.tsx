import React from 'react';
import OverviewSection from './components/OverviewSection';
import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs';
import StudySection from './components/StudySection';
import TechologySection from './components/TechnologySection';
import OutOfWorkSection from './components/OutOfWorkSection';

const About: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="bg-white dark:bg-gray-800 flex flex-col p-2 mx-auto max-w-screen-lg w-full mt-10">
        <div className="flex flex-col items-start space-y-4 w-full">
          <div>
            <OverviewSection />
          </div>
          <div>
            <StudySection />
          </div>
          <div>
            <TechologySection />
          </div>
          <div>
            <OutOfWorkSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
