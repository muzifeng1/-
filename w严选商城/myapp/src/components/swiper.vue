<template>
  <div id="swiper">
    <div class="fff">
      <ul
        :style="tranLeft"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
      >
        <li v-for="(item, index) in sper" :key="index">
          <img :src="item.picUrl" alt="" />
        </li>
      </ul>
      <slot></slot>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    sper: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      tranLeft: {
        transition: "none",
        left: "-100%",
      },
      dir: "left",
      flag: true,
      touchStartPot: 0,
    };
  },
  created() {},
  mounted() {
    setInterval(() => {
      this.touchend();
    }, 1000);
  },
  methods: {
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
            let obj = this.sper.pop();
            this.sper.unshift(obj);
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
            let obj = this.sper.shift();
            this.sper.push(obj);
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

<style lang="scss" scoped>
#swiper {
  width: 100%;
  height: 7.5rem;
  overflow: hidden;
  .fff {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    ul {
      position: absolute;
      left: 0;
      bottom: 0.2rem;
      width: 300%;
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
</style>
