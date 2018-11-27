import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Authorized from 'utils/Authorized';
import routes from '../config/routes';

const { AuthorizedRoute } = Authorized;

const Router = () => (
  <BrowserRouter>
    <div>
      {routes.map((route) =>
        <AuthorizedRoute key={route.path} {...route} />,
      )}
    </div>
  </BrowserRouter>
);

export default Router;
