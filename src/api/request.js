import { removeToken, getToken } from "@/utils/token";
import axios from "axios";
import { redirect } from "react-router-dom";
function CreateHttp() {
    let http = axios.create({
        baseURL: 'http://localhost:3000',
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
            const token = getToken('token');
            if (token) {
                removeToken('token');W
            }
            redirect('/login',{})
        }
        return Promise.reject(err)
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

function requestRestrict(url) {
    if (url !== '/login') {
        const token = sessionStorage.getItem('token');
        return token ? true : false;
    } else {
        return true
    }
}