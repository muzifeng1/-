<template>
  <div id="columnDetail">
    <div id="heder">
      <i @click="out" class="iconfont icon-jiantou1"></i>
      <p>专栏详情</p>
    </div>
    <div class="content">
      <p>{{ this.columnDetail.title }}</p>
      <img :src="this.columnDetail.pic" alt="" />
      <div v-html="this.columnDetail.content" class="contentBox"></div>
    </div>
  </div>
</template>

<script>
import { jxDetail } from "../../utils/api";
export default {
  data() {
    return {
      columnDetail: {},
    };
  },
  mounted() {
    jxDetail(this.$route.query.id).then((res) => {
      this.columnDetail = res;
      console.log(res);
    });
  },
  methods: {
    out() {
      this.$router.push({ path: "/column" });
    },
  },
};
</script>

<style lang="scss">
#columnDetail {
  width: 100%;
  height: 100%;
  #heder {
    width: 100%;
    height: 1rem;
    position: relative;
    i {
      width: 1rem;
      text-align: center;
      position: absolute;
      line-height: 1rem;
      font-size: 0.26rem;
      left: 0;
    }
    p {
      text-align: center;
      line-height: 1rem;
      font-size: 0.26rem;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 1rem);
    padding: 0 0.2rem;
    overflow: auto;

    & > p {
      width: 100%;
      text-align: center;
      font-size: 0.5rem;
      color: #333;
      padding: 0.5rem;
    }
    img {
      width: 100%;
      height: auto;
    }
    .contentBox {
      width: 100%;
      p {
        width: 100%;
        text-indent: 2em;
        margin-top: 0.1rem;
        font-size: 0.3rem;
        color: #333;
        line-height: 0.6rem;
      }
    }
  }
}
</style>
