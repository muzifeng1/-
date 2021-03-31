<template>
  <div id="bottomHalf">
    <span>
      <div>
        <ol>
          <li>一元</li>
          <li>
            <p>满减1</p>
            <p>满0元使用</p>
          </li>
          <li><button>立即领取</button></li>
        </ol>
      </div>
      <p>领取七天内有效</p>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#bottomHalf {
  width: 100%;
  padding: 0 0.2rem;
  span {
    display: block;
    width: 100%;
    height: 2.4rem;
    background-color: #ec7877;
    border-radius: 0.1rem;
    margin: 0.2rem 0;
    div {
      height: 2.4rem - 0.66rem;
      ol {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        li{
            font-size: 0.26rem;
            color: #fff;
        }
        li:nth-child(1) {
          width: 20%;
          text-align: center;
          font-size: 0.4rem;
        }
        li:nth-child(2) {
          width: 50%;
          display: flex;
          height: 100%;
          padding: 0.3rem 0;
          flex-direction: column;
          justify-content: space-around;
        }
        li:nth-child(3) {
          width: 30%;
          text-align: center;
          button{
              background-color: #fce8e7;
              color: #d45656;
              border: none;
              outline: none;
              border-radius: 0.05rem;
          }
        }
      }
    }
    > p {
      height: 0.66rem;
      background-color: #cc7773;
      font-size: 0.3rem;
      line-height: 0.66rem;
      padding-left: 0.2rem;
      color: #fff;
        border-bottom-left-radius: 0.1rem;
        border-bottom-right-radius: 0.1rem;
    }
  }
}
</style>
