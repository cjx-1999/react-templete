import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme, Button } from 'antd';
import router from './router';
import { useDispatch, useSelector } from 'react-redux';
import { switchDark } from './store/common';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/es/calendar/locale/en_US';
function App() {
  // state
  const commonStore = useSelector(state => state.common);
  //hooks
  // const dispatch = useDispatch();
  return (
    <>
      <ConfigProvider locale={enUS} theme={{ algorithm: commonStore.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </>
  );
}
export default App;
