<template>
  <div id="input">
    <div>
      <span>手机号码：</span>
      <input type="text" v-model="tel" @input="change" />
      <small v-show="flay" :class="clr">{{flg}}</small>
    </div>
    <div>
      <span>
        <b>密</b>码：
      </span>
      <input type="password" v-model="pass" @input="change1" />
      <small v-show="flay1" :class="clr1">{{flg1}}</small>
    </div>

    <div>
      <button
        :disabled="ztfl"
        :style="ztfl==false?{backgroundColor:this.$store.state.colors}:''"
        @click="routerabout"
      >登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flg: "",
      flg1: "",
      flay: false,
      flay1: false,
      tel: "",
      pass: "",
      clr: "",
      clr1: "",
      ztfl: true
    };
  },
  mounted() {},
  methods: {
    routerabout() {
      this.$router.push({
        path: "/about"
      });
    },
    change1(e) {
      let restel = /^[1][3,4,5,7,8][0-9]{9}$/;
      let respass = /^\d{6,}$/;
      if (e.target.value == "") {
        this.flay1 = false;
      } else {
        this.flay1 = true;
      }

      if (respass.test(this.pass)) {
        this.flg1 = "√";
        this.clr1 = "greed";
      } else {
        this.flg1 = "×";
        this.clr1 = "red";
      }

      if (respass.test(this.pass) && restel.test(this.tel)) {
        this.ztfl = false;
      } else {
        this.ztfl = true;
      }
    },
    change(e) {
      if (e.target.value == "") {
        this.flay = false;
      } else {
        this.flay = true;
      }

      let restel = /^[1][3,4,5,7,8][0-9]{9}$/;
      let respass = /^\d{6,}$/;
      if (restel.test(this.tel)) {
        this.flg = "√";
        this.clr = "greed";
      } else {
        this.flg = "×";
        this.clr = "red";
      }

      if (respass.test(this.pass) && restel.test(this.tel)) {
        this.ztfl = false;
      } else {
        this.ztfl = true;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
#input {
  margin-top: 8rem;
  // background: violet;
  input {
    margin-top: 2rem;
    height: 3rem;
    width: 60%;
    border-radius: 0.5rem;
    border: #ccc solid 0.1rem;
  }
  span {
    display: inline-block;
    width: 5rem;
    // background: yellow;
    text-align: right;
    b {
      display: inline-block;
      // background: lightblue;
      margin-right: 2rem;
    }
  }
  button {
    margin-top: 2rem;
    width: 40%;
    height: 2rem;
    border: #ccc solid 0.1rem;
    border-radius: 0.5rem;
    color: #fff;
    background: #ccc;
  }
  .greed {
    display: inline-block;
    width: 5%;
    height: 5%;
    border-radius: 50%;
    background: olive;
    color: #fff;
  }
  .red {
    display: inline-block;
    width: 5%;
    height: 5%;
    border-radius: 50%;
    color: #fff;
    background: red;
  }
}
</style>