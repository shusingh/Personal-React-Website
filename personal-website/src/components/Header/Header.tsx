import React from 'react';
import ThemeToggleButton from '../ThemeToggleButton';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold text-gray-600 dark:text-gray-200 mt-1">
          Shubham Singh
        </span>
      </div>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
