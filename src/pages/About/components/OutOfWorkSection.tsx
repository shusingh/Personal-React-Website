import React from 'react';
import HeaderText from 'src/components/common/HeaderText';
import Links from 'src/components/common/Links';
import {
  LOFI_YOUTUBE_LINK,
  OUT_OF_WORK_HEADER_TEXT,
} from 'src/constants/globalConstants';

const OutOfWorkSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <HeaderText headerText={OUT_OF_WORK_HEADER_TEXT} />
      <div className="text-gray-600 dark:text-gray-200 text-left">
        <p>
          When I am not immersed in coding or working on personal projects, I
          love to unwind by indulging in a variety of activities. You can often
          find me reading a good book, watching anime, hiking through nature
          trails, or creating awesome{' '}
          <Links href={LOFI_YOUTUBE_LINK} linkText="lo-fi music videos" />.
          These hobbies keep me balanced and inspired.
        </p>
      </div>
    </section>
  );
};

export default OutOfWorkSection;
