import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className="flex p-2">
      <NavLink
        to="/"
        className="text-gray-600 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-300 no-underline"
      >
        Home
      </NavLink>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center">
            <span className="mx-2 text-gray-600 dark:text-gray-200">/</span>
            {isLast ? (
              <span className="text-gray-400">
                {capitalizeFirstLetter(value)}
              </span>
            ) : (
              <NavLink
                to={to}
                className="text-gray-600 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-300 no-underline"
              >
                {capitalizeFirstLetter(value)}
              </NavLink>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
