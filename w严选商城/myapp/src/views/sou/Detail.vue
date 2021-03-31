<template>
  <div id="detail">
    <div class="content">
      <div id="swiper">
        <div class="fff">
          <i class="iconfont icon-jiantou1" @click.stop="out"></i>
          <ul
            :style="tranLeft"
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend"
          >
            <li v-for="(item, index) in detailSwiper" :key="index">
              <img :src="item.pic" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div class="introduce">
        <p>{{ detailIntroduce.name }}</p>
        <p>{{ detailIntroduce.characteristic }}</p>
        <p>
          <span>低价￥{{ detailIntroduce.minPrice }}</span>
          <span>原价￥{{ detailIntroduce.originalPrice }}</span>
          <span>库存{{ detailIntroduce.minScore }}</span>
        </p>
      </div>
      <div class="evaluate">
        <p @click="yi">商品介绍</p>
        <p @click="er">商品评价</p>
      </div>
      <div v-html="content" v-show="lia == 1" class="content-introduce"></div>
      <div v-show="lia == 2" class="pl">
        <ul>
          <li v-for="(item, index) in 10" :key="index" class="border-bottom">
            <i class="iconfont icon-yonghu"></i>
            <div>
              <p>12315312 <span>好评</span></p>
              <p>系统默认好评</p>
              <p>2019-11-12 11:20:00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottomBar">
      <div>
        <i class="iconfont icon-B border-right"></i>
        <i class="iconfont icon-gouwuche border-right" @click="goToShopcar"></i>
        <i class="iconfont icon-shoucang border-right"></i>
      </div>
      <div>
        <p>立即购买</p>
        <p @click="crateShopCar">加入购物车</p>
      </div>
    </div>

  </div>
</template>

<script>
import { kjDetail, discuss } from "@/utils/api";
export default {
  data() {
    return {
      detailSwiper: [{ pic: "" }],
      detailIntroduce: {},
      content: {},
      tranLeft: {
        transition: "none",
        left: "-100%",
      },
      dir: "left",
      flag: true,
      touchStartPot: 0,
      lia: 1,
      num: 1,
    };
  },
  created() {
    kjDetail(this.$route.query.id).then((res) => {
      this.detailSwiper = res.pics;
      this.detailIntroduce = res.basicInfo;
      this.content = res.content;
    });
  },
  mounted() {
    setInterval(() => {
      this.touchend();
    }, 1000);
  },
  methods: {
    //   详情
    yi() {
      this.lia = 1;
    },
    // 评论
    er() {
      this.lia = 2;
    },
    // 返回上一层
    out() {
      this.$router.back();
    },
    crateShopCar() {
      this.$store.commit("crateShopCar", this.detailIntroduce);
    },
    goToShopcar() {
      this.$router.push({ path: "/home/shopcar" });
    },
    touchstart(e) {
      this.touchStartPot = e.touches[0].pageX;
    },
    touchmove(e) {
      if (e.touches[0].pageX - this.touchStartPot > 0) {
        this.dir = "right";
      } else {
        this.dir = "left";
      }
    },
    touchend() {
      if (this.flag) {
        this.flag = false;
        if (this.dir == "right") {
          this.tranLeft = {
            transition: "all 1s",
            left: "0",
          };
          setTimeout(() => {
            let obj = this.detailSwiper.pop();
            this.detailSwiper.unshift(obj);
            this.tranLeft = {
              transition: "none",
              left: "-100%",
            };
            this.flag = true;
          }, 1000);
        } else {
          this.tranLeft = {
            transition: "all 1s",
            left: "-200%",
          };
          setTimeout(() => {
            let obj = this.detailSwiper.shift();
            this.detailSwiper.push(obj);
            this.tranLeft = {
              transition: "none",
              left: "-100%",
            };
            this.flag = true;
          }, 1000);
        }
      }
    },
  },
};
</script>

<style lang="scss">
#detail {
  width: 100%;
  height: 100%;
  //   overflow: hidden;
  background-color: #eee;
  .content {
    width: 100%;
    height: calc(100% - 1rem);
    // height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    #swiper {
      width: 100%;
      height: 7rem;
      overflow: hidden;
      background-color: #fff;
      .fff {
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: relative;
        i {
          position: absolute;
          width: 0.5rem;
          height: 0.5rem;
          top: 0.2rem;
          left: 0.2rem;
          background-color: #999;
          z-index: 20;
          text-align: center;
          line-height: 0.5rem;
          border-radius: 50%;
        }
        ul {
          position: absolute;
          left: 0;
          bottom: 0.2rem;
          width: 500%;
          height: 100%;
          li {
            width: 7.5rem;
            height: 100%;
            float: left;
            background-color: #fff;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .introduce {
      width: 100%;
      height: 2rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 0.4rem;
      p:nth-child(1) {
        font-size: 0.3rem;
      }
      p:nth-child(2) {
        font-size: 0.24rem;
        color: #666;
      }
      p:nth-child(3) {
        font-size: 0.26rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:nth-child(1) {
          font-size: 0.3rem;
          color: red;
        }
        span:nth-child(2) {
          width: 60%;
          font-size: 0.24rem;
          color: #666;
        }
        span:nth-child(3) {
          color: #666;
        }
      }
    }
    .evaluate {
      width: 100%;
      height: 1rem;
      display: flex;
      background-color: #fff;
      margin-top: 0.2rem;
      p {
        flex: 1;
        font-size: 0.4rem;
        text-align: center;
        line-height: 1rem;
        border-top: none;
        border-left: none;
        border-right: none;
      }
      p:hover {
        border-bottom: 2px solid orangered;
      }
    }
    .content-introduce {
      width: 100%;
      height: 100%;
      font-size: 0.3rem;
      background-color: #fff;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 0.2rem;
        li {
          margin: 0.1rem 0;
        }
      }
      p {
        width: 100%;
        img {
          width: 100% !important;
          height: auto !important;
        }
      }
    }
    .pl {
      width: 100%;
      background-color: #fff;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 0.2rem;
        li {
          width: 100%;
          height: 2.24rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          i {
            width: 20%;
            font-size: 1rem;
          }
          div {
            width: 80%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p {
              font-size: 0.26rem;
            }
            p:nth-child(1) {
              span {
                background-color: rgb(110, 14, 14);
                color: #fff;
                padding: 0.1rem 0.2rem;
                border-radius: 0.1rem;
              }
            }
          }
        }
      }
    }
  }
  .bottomBar {
    width: 95%;
    height: 0.94rem;
    display: flex;
    background-color: #fff;
    box-shadow: 0 0 20px -8px;
    div:nth-child(1) {
      width: 50%;
      height: 0.94rem;
      display: flex;
      i {
        flex: 1;
        font-size: 0.5rem;
        text-align: center;
        line-height: 0.94rem;
      }
    }
    div:nth-child(2) {
      width: 50%;
      height: 0.94rem;
      display: flex;
      align-items: center;
      p {
        flex: 1;
        width: 50%;
        font-size: 0.26rem;
        text-align: center;
      }
      p:nth-child(2) {
        background-color: #b7282e;
        color: #fff;
        line-height: 0.94rem;
      }
    }
  }
  .addShopcar {
    width: 100%;
    height: 12.4rem;
    position: relative;
    bottom: 13.3rem;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.171);
 
  }
}
</style>
