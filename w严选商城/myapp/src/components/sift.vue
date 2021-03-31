<template>
  <div id="sift" route>
    <div>
      <router-link to="/siftList"><slot></slot></router-link>
    </div>
    <ul>
      <li v-for="(item, key, index) in sifts" :key="index" @click="siftDetail(item.id)">
        <img :src="item.pic" alt="" />
        <p>{{ item.name }}</p>
        <p>{{ item.characteristic }}</p>
        <p>￥{{ item.minPrice }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 接收sou父组件传递过来的数据
    sifts: {
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
    siftList() {
      this.$router.push({ path: "/siftList" });
    },
    siftDetail(id) {
      this.$router.push({ path: "/detail", query: { id } });
    },
  },
};
</script>

<style lang="scss">
#sift {
  width: 100%;
  height: 12.4rem;
  background-color: #eee;
  padding: 0.3rem 0;
  div {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color: #fff;
    font-size: 0.44rem;
    a {
      text-decoration: none;
      color: #333;
    }
  }
  ul {
    width: 100%;
    background-color: #fff;
    padding: 0 0.3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 48%;
      height: 5.4rem;
      margin-bottom: 0.1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        width: 100%;
        height: 4.32rem;
      }
      p:nth-child(2) {
        width: 3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.28rem;
      }
      p:nth-child(3) {
        font-size: 0.26rem;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p:nth-child(4) {
        font-size: 0.24rem;
        color: red;
      }
    }
  }
}
</style>
