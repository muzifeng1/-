<template>
  <div id="app">
    <transition name="ani">
<router-view class="page"></router-view>
    </transition>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  position: relative;
}
.page {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 1;
  transform: rotate(0);
}
.ani-enter-active, .ani-leave-active {
  transition: .5s linear;
  transform-origin: center;
}

.ani-enter {
  left: 100%;
}
.ani-leave-to {
  left: -100%;
  transform: rotate(180deg);
  opacity: 0;
}

</style>
