<template>
  <div id="shopcar">
    <shopcarHeader></shopcarHeader>
    <shopcar-list :list="list" :num="num" id="content"></shopcar-list>
  </div>
</template>

<script>
import ShopcarHeader from "./shopcarHeader";
import ShopcarList from "./shopcarList.vue";
export default {
  components: {
    ShopcarHeader,
    ShopcarList,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = this.$store.state.shopcar;
  },
  computed: {
    num() {
      var price = 0;
      this.list.filter((item) => {
        if (item.checked == true) {
          price += item.minPrice * item.num;
        }
      });
      return price;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.love {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.4rem;
}
#content{
    width: 100%;
    height: 100%;
}
</style>
