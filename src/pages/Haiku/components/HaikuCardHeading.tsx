import React from 'react';

interface HaikuCardHeadingProps {
  heading: string;
}

const HaikuCardHeading: React.FC<HaikuCardHeadingProps> = ({ heading }) => {
  return (
    <div className="bg-green-600 dark:bg-green-300">
      <h3 className="text-white dark:text-gray-600 my-0">{heading}</h3>
    </div>
  );
};

export default HaikuCardHeading;
