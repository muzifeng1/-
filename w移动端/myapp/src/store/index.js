import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persistedstate' 

Vue.use(persist) // 使用
Vue.use(Vuex)

export default new Vuex.Store({
    state: { // vuex 存数据的地方   可以类比成组件里边的data
        name: '',
        detailData: {}, // 详情页商品
        cartList: []    // 购物车商品
    },
    mutations: { // 改变数据的地方
        changeName(state, value) {
            console.log(value)
            state.name = value
        },

        changeDetailData(state, data) {
            state.detailData = data;
        },


        addCartList(state, obj) {



            if (!state.cartList.length) { // 1： 第一次添加时 数组是空的
                state.cartList.push(obj);
            } else {
                let added = false; // 变量为true时代表已经被添加过
                state.cartList.forEach(item => {
                    if (item._id === obj._id) { // 这个商品被添加过
                        item.num++
                        added = true;
                    } 
                })
                if(!added) {// 这个商品没有添加过
                    state.cartList.push(obj);
                }
            }
        },

        delCartData(state, index) { // 删除购物车里边的商品
            state.cartList.splice(index, 1);
        }
    },
    getters:{ // 可以类比计算属性
        allNum(state) {
            let result= 0;
            state.cartList.forEach(item => {
                result += item.num;
            })
            return result;
        }
    }, 
    actions: {
    },
    modules: {
    },
    plugins: [
        persist()
    ]
})
