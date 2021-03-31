<template>
  <div id="topHalf">
    <div class="bg">
      <p><i class="iconfont icon-jiantou1" @click="out"></i></p>
      <div>
        <input type="text" />
        <button>兑换</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    out(){
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="scss">
#topHalf {
  width: 100%;
  .bg {
    width: 100%;
    height: 5rem;
    background: url("/images/gift.jpg") 0 0 no-repeat;
    background-size: 100%;
      position: relative;
    div {
        margin: 0 auto;
        left: 50%;
        transform: translateX(-50%);
      width: 90%;
      height: 1rem;
      position: absolute;
      bottom: 0.5rem;
      display: flex;
      justify-content: space-around;
      input {
        width: 4.5rem;
        height: 0.6rem;
        border: 1px solid #fa893d;
        outline: none;
      }
      button {
        color: #fff;
        width: 1.2rem;
        height: 0.6rem;
        background-color: #ee7c7b;
        border: none;
        outline: none;
      }
    }
    p{
      position: absolute;
      top: 0;
      left: 0.2rem;
    }
  }
}
</style>
