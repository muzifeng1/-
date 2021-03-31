import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/sou'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/list/list.vue')
      },
      {
        path: 'shopcar',
        name: 'shopcar',
        component: () => import('../views/shopcar/shopcar.vue')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('../views/my/my.vue')
      },
      {
        path: 'sou',
        name: 'sou',
        component: () => import('../views/sou/sou.vue'),
        children:[
          
        ]
      },
    ]
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/sou/sign.vue')
  },
  {
    path: '/gift',
    name: 'gift',
    component: () => import('../views/sou/gift.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    component: () => import('../views/sou/bar.vue')
  },{
    path: '/column',
    name: 'column',
    component: () => import('../views/sou/column.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/list/details.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/my/register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/my/login.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/sou/Detail.vue')
  },
  {
    path: '/columnDetail',
    name: 'columnDetail',
    component: () => import('../views/sou/columnDetail.vue')
  },
  {
    path: '/siftList',
    name: 'siftList',
    component: () => import('../views/sou/siftList.vue')
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: () => import('../views/my/evaluate.vue')
  }
  

]

const router = new VueRouter({
  routes
})

export default router