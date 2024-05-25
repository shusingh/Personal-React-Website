import React from 'react';
import SocialLinks from '../common/SocialLinks';
import HorizontalLine from '../common/HorizontalLine';

const Footer: React.FC = () => {
  return (
    <>
      <HorizontalLine />
      <footer className="flex justify-between items-center p-4 bg-white dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Copyright © 2024 | All Rights Reserved.
        </span>
        <div className="flex items-center">
          <SocialLinks />
        </div>
      </footer>
    </>
  );
};

export default Footer;
