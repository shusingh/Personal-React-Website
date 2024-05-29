import React from 'react';
import HeaderText from 'src/components/common/HeaderText';
import Links from 'src/components/common/Links';
import {
  ABOUT_SECTION_STUDY_HEADER_TEXT,
  INDIANA_UNIVERSITY_LINK,
  INDIANA_UNIVERSITY_TEXT,
} from 'src/constants/globalConstants';

const StudySection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <HeaderText headerText={ABOUT_SECTION_STUDY_HEADER_TEXT} />
      <p className="text-gray-600 dark:text-gray-200 text-left">
        I have completed my master's degree in Computational Science from the $
        {
          <Links
            href={INDIANA_UNIVERSITY_LINK}
            linkText={INDIANA_UNIVERSITY_TEXT}
          />
        }
        .
      </p>
    </section>
  );
};

export default StudySection;
