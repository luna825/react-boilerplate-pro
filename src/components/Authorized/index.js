import renderAuthorize from './renderAuthorize';
import Authorized from './Authorized';
import AuthorizedRoute from './AuthorizedRoute';

Authorized.AuthorizedRoute = AuthorizedRoute;

export default renderAuthorize(Authorized);
