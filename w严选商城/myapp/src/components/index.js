import Vue from 'vue';
import loading from './loading/loading.vue';

const CreateLoading = Vue.extend(loading);

const newLoading = new CreateLoading({
    el: document.createElement('div') // 给loading创造一个挂载点
})

newLoading.show = false; // 定义loading是否显示  false表示隐藏 true表示显示

const $loading = {
    show() {
        newLoading.show = true;
        document.body.appendChild(newLoading.$el);
    },
    hide() {
        newLoading.show = false;
    }
}
export default {
    install() {
        if (!Vue.$loading) {
            Vue.$loading = $loading
        }
        Vue.mixin({
            // 这是全局混入方法  意思就是给所有的组件混入一个created逻辑
            // 相当于给每一个组件添加一个$loading方法
            created() {
                this.$loading = Vue.$loading
            }
        })
    }
}