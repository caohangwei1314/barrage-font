import request from '@/utils/request'

export function page (limit, size, orderColumn, orderDesc) {
    return request({
        url: '/anime/page?limit=' + limit + '&size=' + size + '&orderColumn=' + orderColumn + '&orderDesc=' + orderDesc,
        method: 'get'
    })
}

export function detail (id) {
    return request({
        url: '/anime/detail/' + id,
        method: 'get'
    })
}

export function recentUpdate () {
    return request({
        url: '/anime/series/recent/update',
        method: 'get'
    })
}
