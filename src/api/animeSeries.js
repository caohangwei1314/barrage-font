import request from '@/utils/request'

export function page (id, limit, size) {
    return request({
        url: '/anime/series/page?id=' + id + '&limit=' + limit + '&size=' + size,
        method: 'get'
    })
}
