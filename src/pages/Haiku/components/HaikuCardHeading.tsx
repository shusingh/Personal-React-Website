import React from 'react';

interface HaikuCardHeadingProps {
  heading: string;
}

const HaikuCardHeading: React.FC<HaikuCardHeadingProps> = ({ heading }) => {
  return (
    <div className="bg-[#c1e899]">
      <h3 className="text-gray-900 dark:text-gray-900 my-0">{heading}</h3>
    </div>
  );
};

export default HaikuCardHeading;
