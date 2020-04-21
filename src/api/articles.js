import request from '@/utils/request'

export function listThree (id) {
    return request({
        url: '/articles/listThree?id=' + id,
        method: 'get'
    })
}

export function detail (id) {
    return request({
        url: '/articles/detail?id=' + id,
        method: 'get'
    })
}

export function page () {
    return request({
        url: '/articles/listAllForTen',
        method: 'get'
    })
}
