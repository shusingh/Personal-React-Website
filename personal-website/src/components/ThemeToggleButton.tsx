import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-600">
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
