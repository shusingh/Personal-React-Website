import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  slug,
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md my-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <div className="text-gray-500 dark:text-gray-500">{date}</div>
      <Link
        to={`/blog/${slug}`}
        className="text-blue-500 dark:text-blue-400 mt-2 block"
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
