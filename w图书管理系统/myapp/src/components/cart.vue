<template>
  <div id="cart">
    <div class="sougo">
      <input type="text"  v-model="txt" placeholder="输入书名搜索" @input="change" />
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="item.id" v-if="faly">
        <div>
          <img :src="item.img" alt />
        </div>
        <div class="icon">{{item.desc| ellipsis}}</div>
        <div :style="{color:colorss}">
          <span class="left">{{item.name}}</span>
          <span class="right" :style="{backgroundColor:colorss}" @click="listadd(index)">+</span>
        </div>
      </li>
       <li v-if="faly1">
        <div>
          <img :src="lists.img" alt />
        </div>
        <div class="icon">{{lists.desc| ellipsis}}</div>
        <div :style="{color:colorss}">
          <span class="left">{{lists.name}}</span>
          <span class="right" :style="{backgroundColor:colorss}" @click="listadds">+</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      colorss: "",
      txt:'',
      lists:[],
      faly:true,
      faly1:false,

    };
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 16) {
        return value.slice(0, 16) + "...";
      }
      return value;
    }
  },
  mounted() {
    this.$axios({ url: "/data.json", methods: "get" }).then(res => {
      this.list = res.data;
      this.colorss = this.$store.state.colors;
    });
  },
  methods: {
    listadd(id) {
        this.$store.commit("mylistchange", this.list[id]); 
    },
    listadds(){
        this.$store.commit("mylistchange", this.lists); 
    },
    change(e){
      this.faly1=true
      this.faly=false

     if(this.txt===''){
       this.faly1=false
       this.faly=true
     }
      

     for (let index = 0; index < this.list.length; index++) {
       const element = this.list[index];  
      if(element.name===this.txt){
          this.lists=element
        console.log(this.lists);
        }
     }
      
    }
  }
};
</script>
<style lang='scss' scoped>
#cart {
  .sougo {
    input {
      width: 100%;
      height: 2.5rem;
      border: none;
      background: #ccc;
    }
  }
  ul {
    width: 100vw;
    li {
      width: 48%;
      margin-left: 1%;
      height: 18rem;
      font-size: 0.4rem;
      float: left;
      margin-top: 0.2rem;
      text-align: left;
      position: relative;
      img {
        width: 90%;
        height: 14rem;
      }
      .icon {
        display: inline-block;
        margin-top: 1rem;
        padding: 0 1rem;
        color: #ccc;
      }
      .left {
        font-size: 1rem;
        position: absolute;
        left: 1rem;
      }
      .right {
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        position: absolute;
        right: 2rem;
        font-size: 1rem;
        border: solid 1px;
        border-radius: 50px;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>