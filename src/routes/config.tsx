import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import { ROUTE_URLS } from '../constants/urlConstants';
import Haiku from 'src/pages/Haiku/Haiku';
import Blog from 'src/pages/Blog/Blog';
import BlogPost from 'src/pages/Blog/components/BlogPost';

export const appRoutes: RouteObject[] = [
  { path: ROUTE_URLS.HOME, element: <Home /> },
  { path: ROUTE_URLS.ABOUT, element: <About /> },
  { path: ROUTE_URLS.HAIKU, element: <Haiku /> },
  { path: ROUTE_URLS.BLOG, element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
];
