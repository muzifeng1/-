import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/base.css'
// 引入axios
import axios from 'axios';//导入axios
Vue.prototype.$axios=axios;//让$axios函数生效

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
