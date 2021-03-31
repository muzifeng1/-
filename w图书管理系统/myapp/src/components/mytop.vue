<template>
  <div id="mytop" :style="{backgroundColor:this.$store.state.colors}">
    <span class="left" @click="fande">{{fanh}}</span>
    <span>{{tit}}</span>
    <span class="size" @click="tabcolor">{{name}}</span>
  </div>
</template>
<script>
export default {
  props: {
    tit: String,
    color: String,
    fanh:String
  },
  data() {
    return {
      name: ""
    };
  },
  mounted() {
    this.name = this.color;
  },
  methods: {
    fande(){
      this.$router.push({
        path:'/about'
      })
    },
    tabcolor() {
      if (this.name == "切换主题") {
        var code = "";
        var codeLength = 6;
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        for (var i = 0; i < codeLength; i++) {
          var index = Math.floor(Math.random() * 9);
          code += random[index];
        }
        this.code = code;
        console.log(this.code);

        this.$store.commit("colorchange", "#" + this.code);
      } else if (this.name == "我的书架") {
        this.$router.push({
          path: "/detail"
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
#mytop {
  width: 100vw;
  height: 3rem;
  //   background: violet;
  line-height: 3rem;
  font-weight: bolder;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  span {
    width: 33%;
  }
  .size {
    font-size: 1rem;
    color: hotpink;
    text-align: right;
  }
  .left {
    text-align: left;
    font-size: 2rem;
    color: hotpink;
  }
}
</style>