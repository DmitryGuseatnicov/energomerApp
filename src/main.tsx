import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import './assets/style/index.scss';
import { App } from './App/App';
import { appRoutes } from './appRoutes';
import { AboutPage } from './pages/AboutPage';
import { AmiSystemPage } from './pages/AmiSystemPage';
import { SmartElectricityMetersPage } from './pages/SmartElectricityMetersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: appRoutes.about(),
        element: <AboutPage />,
      },
      {
        path: appRoutes.amiSystem(),
        children: [
          {
            path: appRoutes.amiSystem(),
            element: <AmiSystemPage />,
          },
          {
            path: appRoutes.amiSystem(':name'),
            element: <AmiSystemPage />,
          },
        ],
      },
      {
        path: appRoutes.smartElectricityMeters(),
        children: [
          {
            path: appRoutes.smartElectricityMeters(),
            element: <SmartElectricityMetersPage />,
          },
          {
            path: appRoutes.smartElectricityMeters(':name'),
            element: <SmartElectricityMetersPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/about" replace />,
      },
    ],
  },
], {
  basename: '/energomerApp',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
