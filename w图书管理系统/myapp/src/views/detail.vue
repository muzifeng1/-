<template>
  <div id="detail">
    <mytop tit="用户登录" fanh="《←"></mytop>
    <div class="box">
      <ul>
        <div :style="{backgroundColor:colorss}">
          <span class="left">正在看</span>
          <span class="right" @click="flg">〉</span>
        </div>
        <span v-if="flag">
        <li v-for="(item,index) in list" :key="item.id">
          <b>{{item.name}}</b>
          <span :style="{color:colorss}" @click="addlist2(index)">标记为已看完</span>
          <small @click="listdel(index)">删除图书</small>
        </li>
        </span>
      </ul>

      <ul>
        <div :style="{backgroundColor:colorss}">
          <span class="left">已完结</span>
          <span class="right" @click="flg1">〉</span>
        </div>
        <span v-if="flage">
        <li v-for="(item,index) in list2" :key="item.id">
          <b>{{item.name}}</b>
          <span :style="{color:colorss}" @click="hflist(index)">再看一遍</span>
          <small @click="list1del(index)">删除图书</small>
        </li>
        </span>
      </ul>
    </div>
  </div>
</template>
<script>
import mytop from "@/components/mytop";
export default {
  components: { mytop },
  data() {
    return {
      list: [],
      list2: [],
      colorss: "",
      flag:false,
      flage:false
    };
  },
  mounted() {
    this.list = this.$store.state.mylist;
    this.list2 = this.$store.state.mylist2;
    // console.log(this.list);
    this.colorss = this.$store.state.colors;
  },
  methods: {
    flg(){
        this.flag=!this.flag
    },
     flg1(){
        this.flage=!this.flage
    },
    hflist(id){
      this.$store.commit("mylistchange", this.list2[id]);
      this.$store.commit("mylist2change", {
        type: "del",
        index:id
      });
    },
    listdel(id) {
      this.$store.commit("mylistdel", id);
    },
    list1del(id) {
      this.$store.commit("mylist2change", {
        type: "del",
        index:id
      });
    },
    addlist2(index) {
      this.$store.commit("mylist2change", {
        type: "add",
        data: this.list[index]
      });
      this.$store.commit("mylistdel", index);
    }
  }
};
</script>
<style lang='scss' scoped>
#detail {
  ul {
    div {
      margin-top: 1rem;
      height: 2rem;
      color: #fff;
      line-height: 2rem;
      position: relative;
      .left {
        position: absolute;
        left: 10%;
      }
      .right {
        position: absolute;
        right: 10%;
      }
    }
    li {
      background: violet;
      height: 2rem;
      line-height: 2rem;
      position: relative;
      b {
        position: absolute;
        left: 10%;
      }
      span {
        position: absolute;
        right: 20%;
      }
      small {
        position: absolute;
        right: 0;
        color: #ccc;
      }
    }
  }
  
}
</style>