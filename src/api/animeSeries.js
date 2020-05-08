import request from '@/utils/request'

export function page (id, limit, size) {
    return request({
        url: '/anime/series/page?animeId=' + id + '&limit=' + limit + '&size=' + size,
        method: 'get'
    })
}

export function detail (id) {
    return request({
        url: '/anime/series/detail/' + id,
        method: 'get'
    })
}

export function timeLine () {
    return request({
        url: '/anime/series/timeline/',
        method: 'get'
    })
}
