import { getToken } from '@/utils/token';
import { useNavigate, Navigate } from 'react-router-dom';

function TokenAuth({ children }) {
    // 对比时间戳是否超过48小时
    function isPast48Hours(timestamp) {
        // 获取当前时间戳
        const currentTimestamp = Math.floor(Date.now() / 1000);

        // 计算时间差，单位为秒
        const timeDifference = currentTimestamp - timestamp;

        // 定义48小时的秒数
        const hours48InSeconds = 1 * 60 * 60;

        // 判断时间差是否超过48小时
        return timeDifference > hours48InSeconds;
    }


    const token = getToken();
    if (token) {
        console.log(token, 'token');
        return <>
            {children}
        </>
    } else {
        return <Navigate to="/login" replace />
    }
}

export default TokenAuth;