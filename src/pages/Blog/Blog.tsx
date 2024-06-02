import React from 'react';
import posts from './BlogPosts/posts';
import BlogCard from './components/BlogCard';

const Blog: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Blog
      </h1>
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </div>
  );
};

export default Blog;
