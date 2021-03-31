<template>
  <div id="siftList">
    <div class="siftListBox">
      <sift-list :sifts="sifts"
        ><i class="iconfont icon-jiantou1" @click="outSiftList"></i
        ><span>人气推荐</span></sift-list
      >
    </div>
  </div>
</template>

<script>
import siftList from "../../components/sift";
import { siftsList } from "../../utils/api";
export default {
  components: {
    siftList,
  },
  data() {
    return {
      sifts: [],
    };
  },
  mounted() {
    siftsList().then((res) => {
      this.sifts = res;
    });
  },
  methods: {
    outSiftList() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
#siftList {
  width: 100%;
  height: 100%;
  .siftListBox {
    width: 100%;
    overflow: auto;
    #sift {
      width: 100%;
      padding: 0 !important;
      div {
        width: 100%;
        a {
          width: 100%;
          font-size: 0.26rem;
          position: relative;
          display: block;
          i {
            position: absolute;
            left: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
