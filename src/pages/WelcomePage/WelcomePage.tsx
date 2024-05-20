import React from 'react';
import SocialLinks from '../../components/common/SocialLinks';
import WelcomeHeader from './components/WelcomeHeader';
import WelcomeMessage from './components/WelcomeMessage';

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-4 w-full">
      <div className="flex justify-start items-center w-full">
        <WelcomeHeader />
      </div>
      <div className="w-full">
        <WelcomeMessage />
      </div>
      <div className="w-full flex items-center space-x-2">
        <p className="text-gray-600 dark:text-gray-200">Social Links:</p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default WelcomePage;
