import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
          title: '一刻時光屋'
        }
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '關於 '
        }
      },
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
        meta: {
          title: '網路商店 | '
        }
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductItem.vue'),
        meta: {
          title: '網路商店 | '
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/CartView.vue'),
        meta: {
          title: '購物車 | '
        }
      },
      {
        path: 'orderinform',
        name: 'orderinform',
        component: () => import('../views/OrderInformation.vue'),
        meta: {
          title: '訂購資訊 | '
        }
      },
      {
        path: 'checkout/:id',
        name: 'checkout',
        component: () => import('../views/CheckOut.vue'),
        meta: {
          title: '確認訂單 | '
        }
      },
      // {
      //   path: 'checkpayment/:id',
      //   name: 'checkpayment',
      //   component: () => import('../views/CheckPay.vue')
      // },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('../views/FaqView.vue'),
        meta: {
          title: '常見問題 | '
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LogIn.vue')
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/AdminOrders.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/Dashboard/AdminCoupon.vue')
      },
      {
        path: 'article',
        component: () => import('../views/Dashboard/AdminArticle.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // bootstrap active
  linkActiveClass: 'active'
})

export default router
