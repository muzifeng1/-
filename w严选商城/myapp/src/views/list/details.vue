<template>
  <div id="details">
    <div id="heder">
      <i @click="out">《</i>
      <p>分类商品</p>
    </div>
    <ul>
      <li v-for="(item, index) in detailsList" :key="index" @click="listDetail(item.id)">
        <div>
          <img :src="item.pic" alt="" />
          <p>{{ item.name }}</p>
        </div>
        <p>￥{{ item.originalPrice }}元</p>
      </li>
    </ul>
    <div id="noList" v-show="flag">没有此类型商品</div>
  </div>
</template>

<script>
import { details, listDetails } from "../../utils/api";
export default {
  data() {
    return {
      detailsList: [],
      flag: false,
    };
  },
  mounted() {
    details().then((res) => {
      this.detailsList = res.filter((item) => {
        return item.categoryId == this.$route.query.id;
      });
      if (this.detailsList.length <= 0) {
        this.flag = true;
      }
    });
  },
  methods: {
    out() {
      this.$router.push({ path: "/home/list" });
    },
    listDetail(id) {
      this.$router.push({ path: "/detail", query: { id } });
    },
  },
};
</script>

<style lang="scss">
#details {
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
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      padding: 0.05rem 0.2rem;
      div {
        width: 100%;
        height: 3.52rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        p {
          width: 100%;
          height: 0.6rem;
          line-height: 0.6rem;
          color: #b69b72;
          background-color: #f0edd4;
          font-size: 0.22rem;
          position: absolute;
          bottom: 0;
        }
      }
      > p {
        line-height: 0.5rem;
        font-size: 0.26rem;
        color: red;
      }
    }
  }
  #noList {
    font-size: 0.5rem;
    color: #333;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
