<template>
	<div class="hasBottomNav">
		<keep-alive>
			<transition>
				<router-view></router-view>
			</transition>
		</keep-alive>

		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
			<van-tabbar-item icon="hot-o" to="/hot">热门搜索</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
			<van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
		};
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.hasBottomNav {
    .v-enter { 
        transform: translateX(100%);
    }
    .v-enter-active { 
        transition: all 0.5s;
        position: absolute;
        top:0px;
        width: 100%;
    }

    .v-leave-active { 
        transition: all 0.5s;
        position: absolute;
        top:0px;
        width: 100%;
    }
    .v-leave-to { 
        transform: translateX(-100%);
    }
}
</style>

