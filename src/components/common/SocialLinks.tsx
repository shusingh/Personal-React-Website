import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex items-center">
      <div className="flex space-x-5">
        <div className="relative group">
          <a
            href="https://github.com/shusingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center"
          >
            <FontAwesomeIcon
              icon={faGithubAlt}
              className="text-gray-600 dark:text-gray-200 hover:text-blue-500"
              size="lg"
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max text-xs text-gray-600 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
              Shubham on GitHub
            </span>
          </a>
        </div>
        <div className="relative group">
          <a
            href="https://linkedin.com/in/shusingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-gray-600 dark:text-gray-200 hover:text-blue-500"
              size="lg"
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max text-xs text-gray-600 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
              Shubham on LinkedIn
            </span>
          </a>
        </div>
        <div className="relative group">
          <a
            href="mailto:ksingh.shubh@gmail.com"
            aria-label="Email"
            className="flex items-center"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-600 dark:text-gray-200 hover:text-blue-500"
              size="lg"
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max text-xs text-gray-600 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
              Email Shubham
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
