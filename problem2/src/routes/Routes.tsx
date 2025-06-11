import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PUBLIC_ROUTES from './PublicRoutes';

const routesPublic = createBrowserRouter(PUBLIC_ROUTES);

const Routes = () => {
  return <RouterProvider router={routesPublic} />;
};
export default Routes;
