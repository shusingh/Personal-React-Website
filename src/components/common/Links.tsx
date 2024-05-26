import React from 'react';

interface LinkProps {
  linkText: string;
  href: string;
}

const Links: React.FC<LinkProps> = ({ linkText, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-dashed text-inherit underline-offset-4 hover:text-green-600 dark:hover:text-green-300"
    >
      {linkText}
    </a>
  );
};

export default Links;
