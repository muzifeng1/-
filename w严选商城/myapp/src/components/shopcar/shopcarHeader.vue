<template>
  <div id="">
    <header class="border-bottom">
      <span id="out" @click="flag = 0" v-show="flag == 1">编辑</span>
      <span id="out" @click="flag = 1" v-show="flag == 0">完成</span>
      <p>购物车</p>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
        flag:false
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  span {
    width: 45%;
    font-size: 0.3rem;
    padding-left: 0.3rem;
    color: red;
  }
  p {
    font-size: 0.4rem;
    line-height: 1rem;
  }
}
</style>
