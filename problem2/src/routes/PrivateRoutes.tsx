import { PrivateLayout } from '@/layout';
import { NotFoundView } from '@/views';
import AboutView from '@/views/About';
import MainView from '@/views/Main';
import NotImplementedView from '@/views/NotImplementedView';

const PRIVATE_ROUTES = [
  {
    element: <PrivateLayout />, 
    children: [
      {
        path: '*',
        element: <NotFoundView />,
      },
      {
        path: '/',
        element: <MainView />,
      },
      {
        path: 'about',
        element: <AboutView />,
      },
      {
        path: '/me',
        element: <NotImplementedView />,
      },
    ],
  },
];

export default PRIVATE_ROUTES;
