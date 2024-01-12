import { createBrowserRouter } from 'react-router-dom';
import DashBoard from './components/pages/DashBoard';
import { Layout } from './components/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: '/about',
        element: <div>About</div>,
      },
      {
        path: '/services',
        element: <div>Services</div>,
      },
      {
        path: '/products',
        element: <div>Products</div>,
      },
    ],
  },
]);
