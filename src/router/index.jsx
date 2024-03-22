import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from '../views/home';
import Other from '../views/other';
import Login from '@/views/login';
import Layout from '@/views/layout';
import TokenAuth from '@/views/tokenAuth';

const router = createBrowserRouter([
  {
    index: '/',
    element:
      <TokenAuth>
        <Layout />
      </TokenAuth>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/other',
        element: <Other />,
      },
    ]
  },
  {
    path: '/Login',
    element: <Login />,
  },
],
);

export default router;
