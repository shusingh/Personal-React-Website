import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 flex items-center">
      <p className="text-gray-600 dark:text-gray-200 mr-4">
        Social Links:
      </p>
      <div className="flex space-x-4">
        <a href="https://github.com/shusingh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} className="text-gray-600 dark:text-gray-200 hover:text-blue-500" size="lg" />
        </a>
        <a href="https://linkedin.com/in/shusingh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className="text-gray-600 dark:text-gray-200 hover:text-blue-500" size="lg" />
        </a>
        <a href="mailto:ksingh.shubh@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 dark:text-gray-200 hover:text-blue-500" size="lg" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
