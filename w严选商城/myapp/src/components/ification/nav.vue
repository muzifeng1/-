<template>
  <div id="nav">
    <header id="text">
      <input
        type="text"
        id="ipt"
        v-model="inputText"
        placeholder="回车搜索商品"
        @keyup.enter="Enter"
      />
    </header>
    <div id="content">
      <div id="classificationNav" class="border-right">
        <ul>
          <li @click="all">全部</li>
          <li v-for="(item, index) in nav" :key="index" @click="alone(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div id="navList">
        <div id="swiper">
          <div class="fff">
            <ul
              :style="tranLeft"
              @touchstart="touchstart"
              @touchmove="touchmove"
              @touchend="touchend"
            >
              <li v-for="(item, index) in navSwiper" :key="index">
                <img :src="item.picUrl" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div id="swiper-list">
          <ol>
            <li
              v-for="(item, index) in content"
              :key="index"
              @click="details(item)"
            >
              <img :src="item.icon" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { listList } from "../../utils/api";
export default {
  props: ["nav"],
  data() {
    return {
      navSwiper: [
        {
          picUrl: "images/01.jpg",
        },
        {
          picUrl: "images/02.png",
        },
        {
          picUrl: "images/04.jpg",
        },
        {
          picUrl: "images/05.jpg",
        },
      ],
      content: [],
      content2: [],
      tranLeft: {
        transition: "none",
        left: "-100%",
      },
      dir: "left",
      flag: true,
      touchStartPot: 0,
      inputText:''
    };
  },
  created() {},
  mounted() {
    listList().then((res) => {
      //  接收全部列表数据
      this.content = res.filter((item) => {
        return item.level == 2;
      });
      this.content2 = res.filter((item) => {
        return item.level == 2;
      });
    });
    setInterval(() => {
      this.touchend();
    }, 1000);
  },
  methods: {
    all() {// 点击全部渲染全部数据
      listList().then((res) => {
        //  接收全部列表数据
        console.log(res);
        this.content = res.filter((item) => {
          return item.level == 2;
        });
      });
    },
    alone(i) {// 点击分类渲染相应的数据
      console.log(i);
      listList().then((res) => {
        //  接收全部列表数据
        this.content = res.filter((item) => {
          if (item.type.includes(i.type)) {
            return res;
          }
        });
      });
    },
    details(i) { // 跳转当前类型的数据列表页
      this.$router.push({ path: "/details", query: { id: i.id } });
    },
    Enter(){ /// 搜索
        this.content = this.content2.filter(item=>{
            return item.name.includes(this.inputText)
        })
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
            let obj = this.navSwiper.pop();
            this.navSwiper.unshift(obj);
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
            let obj = this.navSwiper.shift();
            this.navSwiper.push(obj);
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
#nav {
  width: 100%;
  height: 100%;
  #text {
    width: 100%;
    height: 0.7rem;
    display: flex;
    align-items: center;
    #ipt {
      width: 5rem;
      height: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      background-color: #f5f5f5;
      font-size: 0.26rem;
      margin-left: 0.2rem;
      text-indent: 0.2rem;
      color: #333;
      outline: none;
    }
  }
  #content {
    width: 100%;
    height: 100%;
    display: flex;
  }
  #classificationNav {
    width: 30%;
    height: 100%;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 1rem;
        font-size: 0.26rem;
        text-align: center;
        line-height: 1rem;
        color: #333;
      }
      li:hover {
        border-left: 0.01rem orangered solid;
        color: orangered;
      }
    }
  }
  #navList {
    width: 70%;
    height: 100%;
    overflow-y: auto;
    height: calc(100% - 1rem);
    #swiper {
      width: 100%;
      height: 2.58rem;
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
          width: 400%;
          height: 100%;
          li {
            width: 25%;
            height: 100%;
            float: left;
            margin-top: 0.2rem;
            padding: 0.2rem;
            background-color: #fff;
            img {
              width: 100%;
              height: 100%;
              border-radius: 5%;
            }
          }
        }
      }
    }
    #swiper-list {
      width: 100%;
      ol {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: calc(100% / 3);
          height: 2rem;
          text-align: center;
          padding: 0.1rem;
          margin: 0.1rem 0;
          img {
            width: 100%;
          }
          p {
            width: 100%;
            font-size: 0.26rem;
          }
        }
      }
    }
  }
}
</style>
