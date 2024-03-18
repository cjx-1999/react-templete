import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/home';
import Other from '../views/other';
import App from '@/App';
import Login from '@/views/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/other',
        element: <Other />,
      },
    ],
  },
  {
    path: '/Login',
    element: <Login />,
  },
]);

export default router;
