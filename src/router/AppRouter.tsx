import { Navigate, type RouteObject, useRoutes } from 'react-router-dom';

import { pagesRoutes } from '../pages/Pages.router';

export const appRoutes: RouteObject[] = [
  ...pagesRoutes,
  {
    path: '/',
    element: <Navigate to="/page/home" replace={true} />
  }
];

export default function AppRouter() {
  return useRoutes(appRoutes);
}
