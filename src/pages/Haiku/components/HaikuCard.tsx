import React from 'react';

export interface IHaiku {
  title: string;
  haiku: string;
}

interface HaikuCardProps {
  haikuItem: IHaiku;
  onClick: () => void;
}

const HaikuCard: React.FC<HaikuCardProps> = ({ haikuItem, onClick }) => {
  const { title, haiku } = haikuItem;
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">{haiku}</p>
    </div>
  );
};

export default HaikuCard;
