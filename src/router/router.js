import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/index')
        },
        {
            path: '/play',
            name: 'play',
            component: () => import('@/views/play/index')
        },
        {
            path: '/timeline',
            name: 'timeline',
            component: () => import('@/views/timeline/index')
        },
        {
            path: '/articles',
            name: 'articles',
            component: () => import('@/views/articles/index')
        },
        {
            path: '/articles/detail',
            name: 'articlesDetail',
            component: () => import('@/views/articles/detail')
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('@/views/account/index'),
            children: [
                {
                    path: 'home',
                    name: 'accountHome',
                    component: () => import('@/views/account/home')
                },
                {
                    path: 'vip',
                    name: 'accountVip',
                    component: () => import('@/views/account/vip')
                },
                {
                    path: 'info',
                    name: 'accountInfo',
                    component: () => import('@/views/account/info')
                },
                {
                    path: 'avatar',
                    name: 'accountAvatar',
                    component: () => import('@/views/account/avatar')
                }
            ]
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('@/views/index/index')
        },
        {
            path: '/anime',
            name: 'anime',
            component: () => import('@/views/anime/index')
        },
        {
            path: '/history',
            name: 'history',
            component: () => import('@/views/history/index')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index')
        }
    ]
})
