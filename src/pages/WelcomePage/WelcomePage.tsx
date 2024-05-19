import React from 'react';
import SocialLinks from './components/SocialLinks';
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
      <div className="w-full">
        <SocialLinks />
      </div>
    </div>
  );
};

export default WelcomePage;
