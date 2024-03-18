import { get, post } from '@/api/request';

export function getHomeList() {
    return get('/home').then(res => res.data)
}

