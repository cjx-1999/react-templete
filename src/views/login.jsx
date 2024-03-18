import { getToken } from '@/store/common';
import { message } from 'ant-design-vue';
import { Button, Checkbox, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Login() {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const common = useSelector(state => state.common);
    useEffect(() => {
        if (common.token && common.token.payload) {
            nav('/', { replace: true });
            message.success('登录成功');
        }
    }, [common.token, nav])
    // 表单
    const onFinish = (values) => {
        const { username, password } = values;
        dispatch(getToken(username, password));

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {

    }, [])
    return <>
        <div style={{ fontSize: '20px', margin: ' 0 50%' }}>登录</div>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名称!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"

                rules={[
                    {
                        required: true,
                        message: '请输入用户密码!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default Login;
