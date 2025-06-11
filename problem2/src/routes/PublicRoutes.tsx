import { Navigate } from 'react-router-dom';
import AboutView from '@/views/About';
import { PublicLayout } from '@/layout';
import Main from '@/views/Main';

const PUBLIC_ROUTES = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/about',
        element: <AboutView />,
      }
    ],
  },
];

export default PUBLIC_ROUTES;
