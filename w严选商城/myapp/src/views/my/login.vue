<template>
  <div id="login">
    <p>登陆账号</p>
    <p>虾米-严选商城欢迎您</p>
    <p>
      <input type="text" v-model="obj.mobile" placeholder="手机号" /><i>😀</i>
    </p>
    <p>
      <input type="password" v-model="obj.pwd" placeholder="密码" /><i>😀</i>
    </p>
    <p @click="gotoLogin(obj)">登录</p>
    <p>忘记密码</p>
    <router-link to="/register">还没有注册？立即注册</router-link>
  </div>
</template>

<script>
import { login } from "../../utils/api";
export default {
  data() {
    return {
      obj: {
        mobile: "",
        pwd: null,
      },
    };
  },
  mounted() {},
  methods: {
    gotoLogin() {
      login(this.obj).then((res) => {
        console.log(res);
        if (res.token) {
          this.$store.commit("login", { user: this.obj.mobile,token:res.token });
          this.$router.push({ path: "/home/my" });
        }else {
            alert('账号密码错误')
        }
      });
    },
  },
};
</script>

<style lang="scss">
#login {
  width: 90%;
  height: 95%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 80%;
    margin-top: 0.4rem;
    color: #666;
  }
  p:nth-child(1) {
    font-size: 0.5rem;
    margin: 0.6rem 0 0.2rem;
  }
  p:nth-child(2) {
    font-size: 0.26rem;
  }
  p:nth-child(3),
  p:nth-child(4) {
    height: 1rem;
    background-color: #eee;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 0.1rem;
    input {
      padding-left: 0.2rem;
      outline: none;
      border: none;
      background-color: #eee;
    }
    i {
      position: absolute;
      right: 0.2rem;
      font-size: 0.26rem;
    }
  }
  p:nth-child(5) {
    font-size: 0.3rem;
    width: 60%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    background: linear-gradient(135deg, #e570e7 0%, #79f1fc 100%);
    border-radius: 0.1rem;
  }
  p:nth-child(6) {
    font-size: 0.24rem;
    text-align: center;
    margin: 0.6rem 0;
  }
  a {
    font-size: 0.26rem;
    color: blue;
    margin-top: 0.2rem;
    text-decoration: none;
    text-align: center;
  }
}
</style>
