<template>
  <div id="bar">
    <span id="out" @click="out"> <i class="iconfont icon-jiantou1"></i> </span>
    <bargain :bargainirg="bargainirg">砍价列表</bargain>
  </div>
</template>

<script>
import { Selection } from "../../utils/api";
import bargain from "../../components/bargain";
export default {
  data() {
    return {
      bargainirg: {},
    };
  },
  components: {
    bargain,
  },
  mounted() {
    Selection().then((res) => {
      this.bargainirg = res.goodsMap;
    });
  },
  methods: {
    out() {
      this.$router.push({ path: "/home/sou" });
    },
  },
};
</script>

<style lang="scss">
#bar {
  width: 100%;
  #out {
    position: fixed;
    width: 1rem;
    text-align: center;
    left: 0;
    z-index: 20;
    line-height: 1rem;
    font-size: 0.4rem;
    margin: 0;
  }
  #bargain[data-v-5885b732] {
    margin: 0;
  }
}
</style>
