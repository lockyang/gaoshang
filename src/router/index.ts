import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
// import Test from '../components/Test.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  fallback: false,
  routes: [{
    path: '/',
    name: 'Hello',
    component: () => import('../views/Home.vue')
  }, {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  }]
})

export default router
