import React from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs';
import { haikus } from 'src/constants/haikus';
import HaikuCard from './components/HaikuCard';

export const Haiku: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="bg-white dark:bg-gray-800 flex flex-col p-2 mx-auto max-w-screen-lg w-full mt-10">
        {haikus.map((haikuItem, index) => {
          const isLast = index === haikus.length - 1;
          const { title, haiku } = haikuItem;
          return (
            <>
              {isLast ? (
                <HaikuCard title={title} haiku={haiku} />
              ) : (
                <>
                  <HaikuCard title={title} haiku={haiku} />
                  <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Haiku;
