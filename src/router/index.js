import Vue from 'vue'
import Router from 'vue-router'

import GoodsList from '@/views/GoodsList'  // 商品列表
import Cart from '@/views/Cart'  // 购物车列表

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',   // 购物车列表路由
      name: 'Cart',
      component: Cart
    }

  ]
})
