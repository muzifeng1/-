<template>
  <div id="sou" @scroll="toggleHeader">
    <!-- 头部隐藏组件 -->
    <headers v-show="show"></headers>
    <!-- 轮播图组件 -->
    <swiper :sper="list">
      <div id="nav" route>
        <router-link to="/sign">
          <img src="images/01.jpg" alt="" />
          <span>签到</span>
        </router-link>
        <router-link to="/gift">
          <img src="images/02.png" alt="" />
          <span>礼券</span>
        </router-link>
        <router-link to="/bar">
          <img src="images/04.jpg" alt="" />
          <span>砍价</span>
        </router-link>
        <router-link to="/column">
          <img src="images/05.jpg" alt="" />
          <span>专栏</span>
        </router-link>
      </div>
    </swiper>
    <!-- 全民砍价组件 -->
    <bargain :bargainirg="bargainirg"
      >全民砍价&nbsp;&nbsp;<i class="iconfont icon-jiantou"></i
    ></bargain>
    <!-- 精选专题组件 -->
    <div></div>
    <handpick :seleds="seleds"></handpick>
    <!-- 人气推荐组件 -->
    <sift :sifts="sifts">人气推荐&nbsp;&nbsp;<i class="iconfont icon-jiantou"></i></sift>
  </div>
</template>

<script>
// 引入请求的数据
import { getBanners, seleds, Selection } from "../../utils/api";
// 引入头部隐藏组件
import headers from "../../components/headers";
// 引入轮比图组件
import swiper from "../../components/swiper";
// 引入全民砍价组件
import bargain from "../../components/bargain";
// 引入精选专题组件
import handpick from "../../components/handpick";
// 引入人气推荐组件
import sift from "../../components/sift";
export default {
  data() {
    return {
      show: false,
      list: [{ picUrl: "" }], // 轮播图
      seleds: [], // 精选专题
      sifts: {}, // 全民砍价
      bargainirg: {},
    };
  },
  components: {
    headers,
    swiper,
    bargain,
    handpick,
    sift,
  },
  mounted() {
    getBanners().then((res) => {
      //  接收轮播图数据
      this.list = res;
    });
    seleds().then((res) => {
      //  接收精选专题数据
      this.seleds = res;
    });

    // 接收全民砍价
    Selection().then((res) => {
      let sifts2 = res.goodsMap;
      let obj = {};
      Object.keys(sifts2)
        .sort()
        .map((item, index) => {
          if (index > 2) {
            obj[item] = sifts2[item];
          }
        });
      this.bargainirg = obj;
    });
    // 接收人气推荐数据
    Selection().then((res) => {
      let sifts3 = res.goodsMap;
      let obj = {};
      Object.keys(sifts3)
        .sort()
        .map((item, index) => {
          if (index < 4) {
            obj[item] = sifts3[item];
          }
        });
      this.sifts = obj;
    });
  },
  methods: {
    toggleHeader(e) {
      if (e.target.scrollTop > 50) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#sou {
  width: 100%;
  height: calc(100% - 1rem);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #eee;
  #nav {
    width: 100%;
    height: 2.2rem;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    display: flex;
    align-items: center;
    a {
      width: 25%;
      height: 80%;
      flex: 1;
      text-align: center;
      color: #333;
      font-size: 0.4rem;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      img {
        width: 50%;
        height: 50%;
        border-radius: 25px;
      }
    }
    
  }
  #bar {
    margin-top: 0.2rem;
  }
}
#sou::-webkit-scrollbar {
  display: none;
}
</style>
