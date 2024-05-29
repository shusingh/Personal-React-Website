import React from 'react';
import HaikuCardHeading from './HaikuCardHeading';

interface HaikuCardProps {
  title: string;
  haiku: string;
}

const HaikuCard: React.FC<HaikuCardProps> = ({ title, haiku }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <HaikuCardHeading heading={title} />
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
          {haiku}
        </p>
      </div>
    </div>
  );
};

export default HaikuCard;
