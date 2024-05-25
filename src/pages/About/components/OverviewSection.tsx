import React from 'react';
import HeaderText from 'src/components/common/HeaderText';
import {
  ABOUT_SECTION_HEADER_TEXT,
  ABOUT_SECTION_OVERVIEW_TEXT,
} from 'src/constants/globalConstants';

const OverviewSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-700">
      <HeaderText headerText={ABOUT_SECTION_HEADER_TEXT} />
      <p
        className="text-gray-600 dark:text-gray-200 text-left"
        dangerouslySetInnerHTML={{ __html: ABOUT_SECTION_OVERVIEW_TEXT }}
      />
    </section>
  );
};

export default OverviewSection;
