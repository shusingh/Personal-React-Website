import React from 'react';
import ThemeToggleButton from '../ThemeToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faSeedling}
          className="text-gray-600 dark:text-gray-200"
        />
        <span className="text-xl font-bold text-gray-600 dark:text-gray-200 mt-1 ml-3">
          Shubham Singh
        </span>
      </div>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
