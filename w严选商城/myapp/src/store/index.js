import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import vuexPersist from "vuex-persist";

export default new Vuex.Store({
  state: {
    user: '',
    shopcar: [],
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    outLogin(state) {
      state.user = '';
    },
    crateShopCar(state, i) {
      var flag = false;
      if (state.shopcar.length == 0) {
        Vue.set(i, 'num', 1)
        Vue.set(i, 'checked', false)
        state.shopcar.push(i)
      } else {
        state.shopcar.forEach(item => {
          if (item.id == i.id) {
            item.checked = false
            item.num++
            flag = true
          }
        })
        if (flag == false) {
          Vue.set(i, 'num', 1)
          Vue.set(i, 'checked', false)
          state.shopcar.push(i)
        }
      }
    },
    jian(state, i) {
      state.shopcar.forEach(item => {
        if (item.id == i.id) {
          if (item.num > 1) {
            item.num--
          }
        }
      })
    },
    jia(state, i) {
      state.shopcar.forEach(item => {
        if (item.id == i.id) {
          if (item.num >= 1) {
            item.num++
          }
        }
      })
    }
  },
  actions: {},
  modules: {},
  getters: {

  },
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
})