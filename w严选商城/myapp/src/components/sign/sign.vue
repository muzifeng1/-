<template>
  <div class="">
    <header>
      <p><i class="iconfont icon-jiantou1" @click="out"></i></p>
      <p>您的可用积分为</p>
      <p></p>
      <p>连续签到</p>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
      out(){
          this.$router.go(-1)
      }
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 6rem;
  background-color: #fefbf2;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }
  p:nth-child(1) {
    height: 1rem;
    i {
      float: left;
      line-height: 1rem;
      padding: 0 0.2rem;
    }
  }
  p:nth-child(2) {
  }
  p:nth-child(3) {
  }
  p:nth-child(4) {
  }
}
</style>
