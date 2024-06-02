import { IBlogPost } from '../components/BlogPost';

const posts: IBlogPost[] = [
  {
    title: 'First Blog Post',
    description: 'This is the first blog post.',
    date: '2023-05-24',
    tags: ['React', 'JavaScript'],
    content: `# First Blog Post\n\nThis is the content of the first blog post.`,
    slug: 'first-blog-post',
  },
  // Add more blog posts here
];

export default posts;
