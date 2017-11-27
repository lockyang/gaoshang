// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { sync } from 'vuex-router-sync'
import './style/bootstrap.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

sync(store, router)

Vue.config.productionTip = false

let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
