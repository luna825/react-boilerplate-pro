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
    redirectPath: '/',
    component: () => <User />,
  },
];

export default routes;
