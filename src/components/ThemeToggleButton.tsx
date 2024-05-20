import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

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
        <FontAwesomeIcon icon={faSun} className="text-gray-600" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="text-white -rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
