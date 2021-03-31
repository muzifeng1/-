<template>
  <div id="shopcar">
    <div>
      <shopcar></shopcar>
    </div>
  </div>
</template>

<script>
import Shopcar from "../../components/shopcar/shopcar";
export default {
  components: {
    Shopcar,
  },
  data() {
    return {
      
    };
  },
  mounted() {
  },
 
  methods: {
    
  },
 
};
</script>

<style lang="scss" scoped>
#shopcar {
  width: 100%;
  height: 100%;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
