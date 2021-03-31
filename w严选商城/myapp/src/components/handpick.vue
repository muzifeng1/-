<template>
  <div id="handpick">
    <div class="handpick">
      <p @click="column">精选专题&nbsp;&nbsp;<i class="iconfont icon-jiantou"></i></p>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in seleds" :key="index">
          <img :src="item.pic" alt="" />
          <p>{{ item.title }}</p>
          <p>{{ item.descript }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seleds: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    column() {
      this.$router.push({ path: "/column" });
    },
  },
};
</script>

<style lang="scss" scoped>
#handpick {
  width: 100%;
  height: 6.54rem;
  background-color: #eee;
  padding-top: 0.2rem;
  .handpick {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.4rem;
    background-color: #fff;
  }
  div {
    width: 100%;
    height: 5.54rem;
    overflow: auto;
    ul {
      width: 450%;
      height: 5.44rem;
      background-color: #fff;
      li {
        width: 20%;
        height: 100%;
        padding: 0 0.2rem;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        img {
          width: 100%;
          border-radius: 3%;
        }
        p:nth-child(2) {
          font-size: 0.28rem;
        }
        p:nth-child(3) {
          width: 5rem;
          font-size: 0.26rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #999;
        }
      }
    }
  }
}
</style>
