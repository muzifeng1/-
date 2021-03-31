<template>
  <div id="home">
    <router-view></router-view>
    <ul id="bottom" route class="border-top">
      <router-link to="/home/sou"
        ><i class="iconfont icon-shouye"></i> <span>首页</span></router-link
      >
      <router-link to="/home/list"
        ><i class="iconfont icon-fenlei"></i><span>分类</span></router-link
      >
      <router-link to="/home/shopcar"
        ><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link
      >
      <router-link to="/home/my"
        ><i class="iconfont icon-ziyuan54"></i><span>购物车</span></router-link
      >
      <span id="shopNum" v-show="$store.state.shopcar.length > 1">{{
        $store.state.shopcar.length
      }}</span>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  #bottom {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    a {
      width: 25%;
      font-size: 0.26rem;
      text-align: center;
      text-decoration: none;
      color: #333;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      i {
        font-size: 0.4rem;
        margin-bottom: 0.1rem;
      }
    }
    #shopNum {
      display: block;
      background-color: red;
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.3rem;
      border-radius: 50%;
      position: absolute;
      text-align: center;
      line-height: 0.4rem;
      color: #fff;
      right: 2.2rem;
      top: 0;
      z-index: 555;
    }
  }
}
</style>
