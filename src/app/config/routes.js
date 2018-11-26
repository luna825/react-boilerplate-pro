import React from 'react';
import Home from 'views/home';
import User from 'views/authorize';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/authorize',
    exact: true,
    authority: 'admin',
    component: () => <User />,
  },
];

export default routes;
