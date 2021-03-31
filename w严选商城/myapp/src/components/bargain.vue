<template>
  <div id="bargain">
    <div route class="border-bottom">
      <router-link to="/bar"><slot></slot></router-link>
    </div>
    <ul id="uu">
      <!-- 渲染父组件传过来的数据，只渲染下标大于2的数据 -->
      <li
        class="border-bottom"
        v-for="(item, key, index) in bargainirg"
        :key="index"
        @click="barDetails(item.id)"
      >
        <img :src="item.pic" alt="" />
        <div>
          <p>{{ item.name }}</p>
          <p class="gray">{{ item.characteristic }}</p>
          <ol>
            <li>
              <span class="red">￥{{ item.minPrice }}</span>
              <span>低价</span>
            </li>
            <li>
              <span class="gray">￥{{ item.originalPrice }}</span>
              <span class="gray">原价</span>
            </li>
            <li>
              <span class="gray">{{ item.stores }}件</span>
              <span class="gray">销量</span>
            </li>
          </ol>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { barDetail } from '../utils/api/index'
export default {
  props: {
    // 接收sou父组件传递过来的数据
    bargainirg: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    barDetails(id) {
      this.$router.push({
        name: "detail",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#bargain {
  width: 100%;
  background-color: #eee;
  margin-top: 0.2rem;
  > div {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    text-align: center;
    font-size: 0.4rem;
    line-height: 1rem;
    a {
      color: #333;
      text-decoration: none;
    }
  }
  #uu {
    width: 100%;
    height: 5.2rem;
    background-color: #fff;
    & > li {
      width: 100%;
      height: 2.6rem;
      display: flex;
      padding: 0.1rem;
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
