import React from 'react';
import { ARROW } from 'src/constants/globalConstants';
interface TechnologiesProps {
  technologies: string[];
}
const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <ul className="text-gray-600 dark:text-gray-200 text-left text-sm grid grid-cols-3 list-none p-0">
      {technologies.map((tech) => (
        <li key={tech} className="flex items-center justify-start leading-3">
          <span className="text-green-600 dark:text-green-300 mr-2">
            {ARROW}
          </span>
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
