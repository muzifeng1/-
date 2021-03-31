<template>
    <div id='gift'>
        <top-half></top-half>
        <bottom-half></bottom-half>
        <bottom-half></bottom-half>
    </div>
</template>

<script>
import {coupons} from '../../utils/api'
import topHalf from '../../components/gift/topHalf'
import bottomHalf from '../../components/gift/bottomHalf'
export default {
    components:{
        topHalf,
        bottomHalf
    },
    data() {
        return {};
    },
    mounted() {
        coupons().then(res=>{
            console.log(res);
        })
    },
    methods: {},
    beforeRouteEnter (to, from, next) {
        next(vm=>{
            if(vm.$store.state.user.user){
                next()
            }else {
                next('/login')
            }
        })
    }
};
</script>

<style lang='scss' scoped>
    #gift{
        width: 100%;
        height: 100%;
    }
</style>
