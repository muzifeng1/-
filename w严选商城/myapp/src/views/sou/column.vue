<template>
  <div id="column">
    <div id="heder">
      <i @click="out" class="iconfont icon-jiantou1"></i>
      <p>严选专栏</p>
    </div>
    <div id="content">
      <ul>
        <li v-for="(item, index) in seleds" :key="index" @click="columnDetail(item.id)">
          <img :src="item.pic" alt="" />
          <div>
            <p>{{ item.title }}</p>
            <p>{{ item.descript }}</p>
            <p>查看详情</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { seleds } from "../../utils/api";
export default {
  data() {
    return {
      seleds: [],
    };
  },
  mounted() {
    seleds().then((res) => {
      //  接收精选专题数据
      this.seleds = res;
    });
  },
  methods: {
    out() {
      this.$router.push({ path: "/home/sou" });
    },
    columnDetail(id) {
      this.$router.push({ path: "/columnDetail", query: { id } });
    },
  },
};
</script>

<style lang="scss">
#column {
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
  #content {
    width: 100%;
    height: calc(100% - 1rem);
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 3.68rem;
        position: relative;
        padding: 0 0.2rem;
        margin-bottom: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
        div {
          width: 100%;
          height: 80%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          align-items: center;
          p {
            font-size: 0.26rem;
            color: #fff;
          }
          p:nth-child(1) {
            font-size: 0.4rem;
            width: 70%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p:nth-child(2) {
            width: 80%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p:nth-child(3) {
            padding: 0.1rem 0.2rem;
            border: 1px solid #fff;
            border-radius: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
