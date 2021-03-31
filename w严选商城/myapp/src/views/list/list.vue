<template>
  <div id="list">
      <div id="nav-box">
            <ification :nav='nav'></ification>
      </div>
  </div>
</template>

<script>
import ification from "../../components/ification/nav"
import { listList } from "../../utils/api";

export default {
  components: {
    ification,
  },
  data() {
    return {
      nav: [],
      navSwiper: [{ picUrl: "" }],
      inputText:''
    };
  },
  mounted() {
    listList().then((res) => {
      //  接收全部列表数据
      this.nav = res.filter((item) => {
            return item.level==1
      });
    });
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
#list {
  width: 100%;
  height: 100%;
  
  #nav-box{
      width: 100%;
      height: 100%;
      display: flex;
  }
}
</style>
