import ReactDOM from 'react-dom/client';
import './index.css';
import './theme.css';
import store from './store/index';
import { Provider } from 'react-redux';
// use unoCss
import 'uno.css';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
);
