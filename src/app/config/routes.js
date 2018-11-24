import React from 'react';
import Home from 'views/home';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
];

export default routes;
