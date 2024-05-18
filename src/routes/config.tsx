import {
  RouteObject,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import { ROUTE_URLS } from '../constants/urlConstants';

const appRoutes: RouteObject[] = [
  { path: ROUTE_URLS.HOME, element: <Home /> },
  { path: ROUTE_URLS.ABOUT, element: <About /> },
];

export const AppRoutes = () => {
  const router = createHashRouter(appRoutes);
  return <RouterProvider router={router} />;
};
