import {
  RouteObject,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import { ROUTE_URLS } from '../constants/urlConstants';

export const appRoutes: RouteObject[] = [
  { path: ROUTE_URLS.HOME, element: <Home /> },
  { path: ROUTE_URLS.ABOUT, element: <About /> },
];
