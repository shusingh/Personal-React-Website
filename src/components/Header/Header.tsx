import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import HorizontalLine from '../common/HorizontalLine';
import { ROUTE_URLS } from '../../constants/urlConstants';

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center p-3 mt-5 bg-white dark:bg-gray-800">
        <NavLink
          to={ROUTE_URLS.HOME}
          className="flex items-center no-underline text-gray-600 dark:text-gray-200"
        >
          <FontAwesomeIcon
            icon={faSeedling}
            className="text-gray-600 dark:text-gray-200"
          />
          <span className="text-xl font-bold text-gray-600 dark:text-gray-200 mt-1 ml-3">
            Shubham Singh
          </span>
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink
            to={ROUTE_URLS.ABOUT}
            className={({ isActive }) =>
              `relative text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 no-underline ${isActive ? '' : ''}`
            }
          >
            About
          </NavLink>
          <ThemeToggleButton />
        </div>
      </header>
      <HorizontalLine />
    </>
  );
};

export default Header;