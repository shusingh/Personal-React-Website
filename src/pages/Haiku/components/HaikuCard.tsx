import React from 'react';
import { formatHaiku } from 'src/utils/haikuUtil';

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
      className="cursor-pointer p-6 bg-white border border-dashed border-gray-800 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {formatHaiku(haiku)}
      </p>
    </div>
  );
};

export default HaikuCard;
