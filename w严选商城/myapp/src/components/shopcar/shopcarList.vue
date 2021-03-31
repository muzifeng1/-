<template>
  <div class="">
    <div class="bottom-content">
      <div class="shopcarContent">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div>
              <input
                type="checkbox"
                v-model="item.checked"
                @click="check(index)"
              />
            </div>
            <div>
              <img :src="item.pic" alt="" />
              <div>
                <p>{{ item.name }}</p>
                <p>123</p>
                <p>
                  <span>￥{{ item.minPrice }}</span>
                  <span>
                    <button @click="jian(item)">-</button>
                    <input type="text" v-model="item.num" />
                    <button @click="jia(item)">+</button>
                  </span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <shopcar-love :sifts="sifts">猜你喜欢</shopcar-love>
    </div>
    <div class="place" v-if="this.$store.state.shopcar.length >= 1">
      <div class="all">
        <input type="checkbox" v-model="ss" @click="checkAll" />
        <span>全选</span>
      </div>
      <div class="red">
        合计：￥<span>{{ num }}</span>
      </div>
      <button class="bgred">下单</button>
    </div>
  </div>
</template>

<script>
import { siftsList } from "../../utils/api/index";
import ShopcarLove from "../sift";
export default {
  components: {
    ShopcarLove,
  },
  props: {
    list: {
      type: Array,
    },
    num: {
      type: Number,
    },
  },
  data() {
    return {
      flag: 1,
      ss: false,
      nn: 0,
      list2: [],
      sifts: [],
    };
  },
  mounted() {
    siftsList().then((res) => {
      this.sifts = res;
      console.log(res);
    });
  },

  methods: {
    jian(i) {
      this.$store.commit("jian", i);
    },
    jia(i) {
      this.$store.commit("jia", i);
    },
    check(i) {
      var n = 0;
      this.list[i].checked = !this.list[i].checked;
      this.list.forEach((item) => {
        if (item.checked) {
          n++;
        }
      });
      if (n === this.list.length) {
        this.ss = true;
      } else {
        this.ss = false;
      }
    },
    checkAll() {
      this.list.forEach((item) => {
        item.checked = !this.ss;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-content {
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .shopcarContent {
    width: 100%;
    background-color: #fff;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        width: 100%;
        height: 2rem;
        padding: 0.15rem 0;
        display: flex;
        align-items: center;
        > div:nth-child(1) {
          width: 1rem;
          height: 100%;
          line-height: 100%;
          text-align: center;
        }
        > div:nth-child(2) {
          width: calc(100% - 1rem);
          height: 100%;
          display: flex;
          img {
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 0.1rem;
          }
          > div {
            width: calc(100% - 2.4rem);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p {
              width: 100%;
              font-size: 0.26rem;
              padding-left: 0.2rem;
            }
            p:nth-child(2) {
              font-size: 0.24rem;
              color: #666;
            }
            p:nth-child(3) {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              span:nth-child(1) {
                color: red;
              }
              span:nth-child(2) {
                display: flex;
                justify-content: space-around;
                margin-right: 0.2rem;
                button {
                  width: 0.5rem;
                  height: 0.5rem;
                  border: none;
                  background-color: #eee;
                  text-align: center;
                  outline: none;
                }
                input {
                  width: 0.5rem;
                  height: 0.5rem;
                  margin: 0 0.1rem;
                  border: none;
                  background-color: #eee;
                  text-align: center;
                  outline: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
.place {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
  position: fixed;
  bottom: 1rem;
  background-color: #fff;
  .all {
    width: 50%;
    display: flex;
    align-items: center;
    span {
      font-size: 0.26rem;
    }
  }
  .red {
    width: 25%;
    font-size: 0.26rem;
    color: red;
  }
  .bgred {
    width: 25%;
    height: 100%;
    background-color: #d00000;
    color: #fff;
    text-align: center;
    line-height: 100%;
    font-size: 0.26rem;
    border: none;
  }
}
.love {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.4rem;
  z-index: 9999;
}
#sift[data-v-564f6fea] {
  padding: 0 !important;
  div {
    display: none !important;
    ul{
      padding-bottom: 1rem;
    }
  }
}


</style>
