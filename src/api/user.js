import request from '@/utils/request'

export function login (data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function register (data) {
    return request({
        url: '/user/register',
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

export function updateImage (data) {
    return request({
        url: '/user/update/image',
        method: 'post',
        data
    })
}

export function updateBalance (data) {
    return request({
        url: '/user/update/balance',
        method: 'post',
        data
    })
}

export function userTransaction () {
    return request({
        url: '/user/transaction/record',
        method: 'get'
    })
}

export function userFollow (limit, size) {
    return request({
        url: '/user/follow?limit=' + limit + '&size=' + size,
        method: 'get'
    })
}

export function isFollow (id) {
    return request({
        url: '/user/follow/' + id,
        method: 'get'
    })
}

export function follow (id) {
    return request({
        url: '/user/follow/' + id,
        method: 'post'
    })
}
