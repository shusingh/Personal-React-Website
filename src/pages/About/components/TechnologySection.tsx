import React from 'react';
import HeaderText from 'src/components/common/HeaderText';
import {
  ABOUT_SECTION_TECHNOLOGY_HEADER_TEXT,
  CURRENT_TECHNOLOGIES,
  LEARNING_TECHNOLOGIES,
  LEETCODE_PROFILE_LINK,
} from 'src/constants/globalConstants';
import Technologies from './Technologies';
import Links from 'src/components/common/Links';

const TechologySection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-700">
      <HeaderText headerText={ABOUT_SECTION_TECHNOLOGY_HEADER_TEXT} />
      <div className="text-gray-600 dark:text-gray-200 text-left">
        <p>
          I am currently working with a diverse set of technologies including:
          {<Technologies technologies={CURRENT_TECHNOLOGIES} />}
        </p>
        <p>
          I am currently in the process of learning new technologies such as:
          {<Technologies technologies={LEARNING_TECHNOLOGIES} />}
        </p>
        <p>
          Additionally I have a keep interest in data structure and algorithms.
          Please check out my LeetCode profile here:{' '}
          {<Links href={LEETCODE_PROFILE_LINK} linkText="LeetCode Profile" />}.
        </p>
      </div>
    </section>
  );
};

export default TechologySection;
