import React from 'react';
import HeaderText from 'src/components/common/HeaderText';
import Links from 'src/components/common/Links';
import {
  ABOUT_SECTION_HEADER_TEXT,
  HAIKU_LINK,
  HAIKU_TEXT,
} from 'src/constants/globalConstants';

const OverviewSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <HeaderText headerText={ABOUT_SECTION_HEADER_TEXT} />
      <p className="text-gray-600 dark:text-gray-200 text-left">
        Hi! My name is Shubham Singh. I am a Software Engineer well-versed in
        writing code to create systems that are reliable and user-friendly.
        <br />
        <br />
        Welcome to my Digital Garden 🌱 where I write about different technology
        topics, <Links href={HAIKU_LINK} linkText={HAIKU_TEXT} />, and life. I
        hope you enjoy it and find something of meaning!
      </p>
    </section>
  );
};

export default OverviewSection;
