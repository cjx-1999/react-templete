import { message } from "ant-design-vue";
import axios from "axios";

function CreateHttp() {

    let http = axios.create({
        baseURL: 'http://192.168.10.127:3000',
        timeout: 10000
    })

    http.interceptors.request.use((config) => {
        let token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return Promise.resolve(config)
    }, (err) => {
        return Promise.reject(err)
    })

    http.interceptors.response.use((res) => {
        return Promise.resolve(res)
    }, (err) => {
        if (err.response.status == 401) {
            sessionStorage.removeItem('token');
            message.warning('密钥已经过期了');
        }
    })
    return http;
}
const http = CreateHttp();
export function get(url, params, options) {
    return http.get(url, {
        params,
        ...options
    })
}
export function post(url, data, options) {
    return http.post(url, {
        ...data,
        ...options
    })
}