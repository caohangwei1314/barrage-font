import request from '@/utils/request'

export function listThree (id) {
    return request({
        url: '/articles/listThree?id=' + id,
        method: 'get'
    })
}
