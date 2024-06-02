import React from 'react';

export const formatHaiku = (haiku: string): React.ReactNode[] => {
  return haiku.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};
