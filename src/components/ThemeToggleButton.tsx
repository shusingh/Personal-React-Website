import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ReactComponent as Sun } from 'src/assets/images/sun.svg';
import { ReactComponent as Moon } from 'src/assets/images/moon.svg';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="focus:outline-none text-2xl transition-transform transform hover:rotate-12"
      aria-label="Toggle theme"
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      {theme === 'light' ? (
        <Moon className="text-gray-800 dark:text-white" />
      ) : (
        <Sun className="text-gray-800 dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
