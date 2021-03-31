<template>
  <div id="evaluate">
    <header><i class="iconfont icon-jiantou1" @click="out"></i>我的订单</header>
    <ul id="uu">
      <li
        v-for="(item, key, index) in list2"
        :key="index"
        @click="barDetails(item[0].id)"
      >
        <img :src="item[0].pic" alt="" />
        <div>
          <p>{{ item[0].goodsName }}</p>
          <p class="gray">{{ item[0].characteristic }}</p>
          <ol>
            <li>
              <span class="red">￥{{ item[0].minPrice }}</span>
              <span>低价</span>
            </li>
            <li>
              <span class="gray">￥{{ item[0].originalPrice }}</span>
              <span class="gray">原价</span>
            </li>
            <li>
              <span class="gray">{{ item[0].stores }}件</span>
              <span class="gray">销量</span>
            </li>
          </ol>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { evaluate } from "../../utils/api/index";
export default {
  data() {
    return {
      list: [],
      list2: [],
    };
  },
  mounted() {
    evaluate(this.$store.state.user.token).then((res) => {
      this.list = res.orderList;
      this.list2 = res.goodsMap;
      console.log(this.list2);
    });
  },
  methods: {
      out(){
          this.$router.go(-1)
      }
  },
};
</script>

<style lang="scss">
#evaluate {
  width: 100%;
  height: 100%;
  header{
      height: 1rem;
      position: relative;
      text-align: center;
      font-size: 0.4rem;
      line-height: 1rem;
      i{
          position: absolute;
          left: 0.4rem;
          top: 0;
      }
  }
  #uu {
    width: 100%;
    height: calc(100% - 1rem);
    overflow-y: auto;
    background-color: #fff;
    padding: 0 0.4rem;
    &::-webkit-scrollbar{
        display: none;
    }
    & > li {
      width: 100%;
      height: 2.6rem;
      display: flex;
      padding: 0.1rem 0;
      box-sizing: border-box;
      img {
        width: 2.26rem;
        height: 100%;
      }
      div {
        width: 5rem;
        height: 2.4rem;
        padding-left: 0.2rem;
        p:nth-child(1) {
          font-size: 0.3rem;
        }
        p:nth-child(2) {
          font-size: 0.24rem;
        }
        p {
          height: 20%;
        }
        ol {
          width: 100%;
          height: 40%;
          margin-top: 0.5rem;
          display: flex;
          li {
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            span {
              font-size: 0.26rem;
            }
            .red {
              color: red;
            }
            .gray {
              color: #999;
            }
          }
        }
      }
      .gray {
        color: #999;
      }
    }
  }
}
</style>
