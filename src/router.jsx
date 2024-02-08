import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
];
