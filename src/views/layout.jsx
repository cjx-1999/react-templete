import { switchDark } from '@/store/common';
import { AppstoreOutlined, SwitcherOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Outlet, redirect } from 'react-router-dom';
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
    {
        label: 'switch theme',
        key: '',
        icon: <SwitcherOutlined />
    },
];
function Layout() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    //state
    const [current, setCurrent] = useState('/');
    // menu点击
    const menuClick = (e) => {
        if (e.key) {
            nav(e.key); // 路由跳转
            setCurrent(e.key);
        } else {
            dispatch(switchDark());
        }
    };
    return <>
        <Menu onClick={menuClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <br />
        <Outlet />
    </>
}

export default Layout;