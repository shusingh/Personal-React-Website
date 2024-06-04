import React from 'react';
import { Link } from 'react-router-dom';
import { calculateReadingTime } from 'src/utils/blogUtil';

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  slug,
  content,
}) => {
  const readingTime = calculateReadingTime(content);

  return (
    <Link
      to={`/blog/${slug}`}
      className="cursor-pointer p-6 bg-white border border-dashed border-gray-800 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 block no-underline"
    >
      <h2 className="mb-2 mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-left no-underline">
        {title}
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-left no-underline">
        {description}
      </p>
      <div className="text-left mt-4">
        <span className="border-t border-gray-500 dark:border-gray-400 pt-2 inline-block">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {readingTime} min read
          </span>
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;