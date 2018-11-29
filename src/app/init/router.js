import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Authorized from 'utils/Authorized';
import BasicLayout from '../../layouts/BasicLayout';
import routes from '../config/routes';

const { AuthorizedRoute } = Authorized;

const Router = () => (
  <BrowserRouter>
    <AuthorizedRoute
      authority={['user']}
      render={(props) => <BasicLayout {...props} routes={routes} />}
    />
  </BrowserRouter>
);

export default Router;
