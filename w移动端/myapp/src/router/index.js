import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import hasBottomNav from '../views/hasBottomNav.vue'
import cookie from '@/utils/cookie'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'hasBottomNav',
        component: hasBottomNav,
        redirect: '/home', // 路由重定向
        children: [
            {
                path: '/home',
                name: 'home',
                component: home,
                meta: {
                    needLogin: false,
                }
            },
            {
                path: '/hot',
                name: 'hot',
                // component: hot, 
                component: () => import('../views/hot.vue'), // 路由加载
                meta: {
                    needLogin: false,
                }
            },
            {
                path: '/my',
                name: 'my',
                // component: my,
                component: () => import('../views/my.vue'), // 路由加载
                meta: {
                    needLogin: true,
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        // component: login,
        component: () => import('../views/login.vue'), // 路由加载
        meta: {
            needLogin: false,
        }
    },
    {
        path: '/detail',
        name: 'detail',
        // component: detail,
        component: () => import('../views/detail.vue'), // 路由加载
        meta: {
            needLogin: true,
        }
    },
    {
        path: '/cart',
        name: 'cart',
        // component: cart,
        component: () => import('../views/cart.vue'), // 路由加载
        meta: {
            needLogin: true,
        },
 
    }, {
        path: '/result',
        name: 'result',
        // component: result,
        component: () => import('../views/result.vue'), // 路由加载
        meta: {
            needLogin: true,
        },
 
    },

]

const router = new VueRouter({
    mode: 'history', 
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {

    if (to.meta.needLogin) { 
        if (cookie.getCookie('isLogin') === '1') { 
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }



    
})

export default router