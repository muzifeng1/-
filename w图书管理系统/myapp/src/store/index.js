import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: 'red',
    mylist: [],
    mylist2:[],
  },
  mutations: {
    colorchange(state, colors) {
      state.colors = colors
    },
    mylist2change(state,obj){
      if(obj.type==='add'){
        state.mylist2.push(obj.data)
        console.log(state.mylist2);
        
      }if(obj.type==='del'){
        state.mylist2.splice(obj.index,1)
      }
      
    },
    mylistdel(state,index){
      state.mylist.splice(index,1)
    },
    mylistchange(state, obj) {
      let flag = false
      state.mylist.forEach(item => {
        if (item.name == obj.name) {
          alert('书架中已有此书')
          flag = true
        }
      })
      if (!flag) {
        state.mylist.unshift(obj)
        alert('加入成功')
      }

    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [persist()]
})
