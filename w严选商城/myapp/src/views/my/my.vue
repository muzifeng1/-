<template>
  <div id="my">
    <header>
      <div id="phop"><img src="../../../public/images/01.jpg" alt=""></div>
      <div id="right">
        <p>积分：0分</p>
        <button @click="outLogin">退出登录</button>
      </div>
    </header>
    <div class="roll">
      <i class="iconfont icon-volume_icon"></i
      ><marquee behavior="scroll" direction="left"
        >新上线更稳定的付费快递查询接口</marquee
      >
    </div>
    <div class="myForm border-bottom">
      <i class="iconfont icon-dingdan"></i>
      <p>我的订单</p>
      <i class="iconfont icon-jiantou"></i>
    </div>
    <div class="stay">
      <ul>
        <li><i class="iconfont icon-daifukuan"></i>待付款</li>
        <li><i class="iconfont icon-daifahuo"></i>待发货</li>
        <li><i class="iconfont icon-daishouhuo-"></i>待收货</li>
        <router-link tag="li" router to="/evaluate"><i class="iconfont icon-daipingjia"></i>待评价</router-link>
      </ul>
    </div>
    <div class="myList">
      <ul >
        <li><i class="iconfont icon-yue"></i><span>我的余额</span></li>
        <li><i class="iconfont icon-kanjia"></i><span>我得砍价</span></li>
        <router-link tag="li" to="/gift" router><i class="iconfont icon-liquan"></i><span>我的礼券</span></router-link>
        <li><i class="iconfont icon-shoucang"></i><span>我的收藏</span></li>
        <li><i class="iconfont icon-dizhi"></i><span>我的地址</span></li>
        <li><i class="iconfont icon-B"></i><span>联系客服</span></li>
      </ul>
    </div>
    <p class="The">The work of liu tao</p>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    outLogin() {
      this.$store.commit("outLogin");
      this.$router.push({ path: "/login" });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!vm.$store.state.user == "") {
        next();
      } else {
        next("/login");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
#my {
  width: 100%;
  height: 100%;
  background-color: #eee;
  header {
    width: 100%;
    height: 3.1rem;
    background-color: #c1b18f;
    display: flex;
    align-items: center;
    #phop {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 1.5rem;
      background-color: #fff;
      font-size: 1.5rem;
      margin-left: 0.5rem;
      text-align: center;
      line-height: 1.5rem;
      font-weight: 100;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50px;
      }
    }
    #right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        line-height: 0.5rem;
        padding: 0.05rem 0.4rem 0.05rem 0.1rem;
        margin: 0.5rem 0.2rem 0.3rem 0.3rem;
        border-radius: 0.1rem;
        font-size: 0.26rem;
        background-color: #b3a078;
        color: #fff;
      }
      button {
        border: none;
        background-color: #c1b18f;
        color: #fff;
        outline: none;
      }
    }
  }
  .roll {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      color: red;
    }
    marquee {
      width: 90%;
      font-size: 0.26rem;
      color: red;
    }
  }
  .myForm {
    width: 100%;
    height: 1rem;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    i {
      width: 10%;
      text-align: center;
      font-size: 0.3rem;
    }
    p {
      width: 80%;
      font-size: 0.26rem;
    }
  }
  .stay {
    width: 100%;
    height: 1.6rem;
    background-color: #fff;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      li {
        flex: 1;
        text-align: center;
        font-size: 0.3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        i {
          font-size: 0.6rem;
          margin-bottom: 0.2rem;
        }
      }
    }
  }
  .myList {
    width: 100%;
    height: 3.4rem;
    background-color: #fff;
    margin-top: 0.2rem;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: calc(100% / 3);
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        i {
          font-size: 0.6rem;
        }
        span {
          font-size: 0.26rem;
        }
      }
    }
  }
  .The {
    width: 100%;
    font-size: 0.24rem;
    text-align: center;
  }
  .bottom {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
</style>
