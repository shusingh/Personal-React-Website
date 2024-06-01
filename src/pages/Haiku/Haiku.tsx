import React, { useState } from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs';
import { haikus } from 'src/constants/haikus';
import HaikuCard, { IHaiku } from './components/HaikuCard';
import HaikuModal from './components/HaikuPopup';

export const Haiku: React.FC = () => {
  const [selectedHaiku, setSelectedHaiku] = useState<IHaiku | null>(null);

  const handleCardClick = (haiku: IHaiku) => {
    setSelectedHaiku(haiku);
  };

  const closeModal = () => {
    setSelectedHaiku(null);
  };

  return (
    <>
      <Breadcrumbs />
      <div className="bg-white dark:bg-gray-800 p-2 mx-auto max-w-screen-lg w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {haikus.map((haikuItem, index) => {
            return (
              <React.Fragment key={index}>
                <HaikuCard
                  haikuItem={haikuItem}
                  onClick={() => handleCardClick(haikuItem)}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {selectedHaiku && (
        <HaikuModal haikuItem={selectedHaiku} onClose={closeModal} />
      )}
    </>
  );
};

export default Haiku;
