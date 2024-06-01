import React from 'react';

interface HaikuCardHeadingProps {
  heading: string;
}

const HaikuCardHeading: React.FC<HaikuCardHeadingProps> = ({ heading }) => {
  return (
    <div className="">
      <h3 className="text-gray-600 dark:text-gray-300 mt-4 mb-0">{heading}</h3>
    </div>
  );
};

export default HaikuCardHeading;
