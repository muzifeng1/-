import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/js/rem'
import loading from './components'
Vue.use(loading)

import '../public/font_y7urdclefyi/iconfont.css'

import axios from 'axios';
Vue.prototype.$axios =axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
