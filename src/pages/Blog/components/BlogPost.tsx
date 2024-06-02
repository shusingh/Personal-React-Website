import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../BlogPosts/posts';

export interface IBlogPost {
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  slug: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post: IBlogPost | undefined = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md my-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        {post.title}
      </h1>
      <div className="text-gray-500 dark:text-gray-500">{post.date}</div>
      <div className="text-gray-600 dark:text-gray-300 mt-4 whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
