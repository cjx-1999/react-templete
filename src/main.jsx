import ReactDOM from 'react-dom/client';
import './index.css';
import './theme.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/index';
import store from './store/index';
import { Provider } from 'react-redux';
// use unoCss
import 'uno.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
  // </React.StrictMode>,
);
