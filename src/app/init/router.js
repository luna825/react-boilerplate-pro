import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import map from 'lodash/map';
import routes from '../config/routes';

const Router = () => (
  <BrowserRouter>
    <div>
      {map(routes, (route, index) => (
        <Route key={index} {...route} />
      ))}
    </div>
  </BrowserRouter>
);

export default Router;
