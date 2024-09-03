import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Nothing from './page/Nothing';
import September from './page/September';
import Rickroll from './page/Rickroll';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nothing />,
  },
  {
    path: '/ne3ObtvT3jNT7vXqqOJCHKjSznHI2hvy',
    element: <September />,
  },
  {
    path: '/rRxS7XhqfwrmJggf1NFCx2dMkU82kJIs',
    element: <Rickroll />,
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

