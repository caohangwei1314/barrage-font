import request from '@/utils/request'

export function login (data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function detail () {
    return request({
        url: '/user/detail',
        method: 'get'
    })
}

export function isVip () {
    return request({
        url: '/user/isVip',
        method: 'get'
    })
}
