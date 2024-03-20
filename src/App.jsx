import { Outlet, redirect, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'home',
    key: '/',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'other',
    key: '/other',
    icon: <AppstoreOutlined />,
  },
];
function App() {
  const [current, setCurrent] = useState('/');
  const nav = useNavigate();
  const onClick = (e) => {
    nav(e.key); // 路由跳转
    setCurrent(e.key);
  };
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      redirect('/login');
    }
  })

  return (
    <>

      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <br />
      <Outlet />
    </>
  );
}
export default App;
