<template>
<div id='about'>
<mytop tit="图书商城" color="我的书架"></mytop>
<cart></cart>
 </div>
</template>
<script>
import  mytop from '@/components/mytop'
import  cart from '@/components/cart'
export default {
  components:{mytop,cart},
 data() {
   return {};
  },
   mounted() {},
 methods: {},
};
</script>
<style lang='scss' scoped>
</style>