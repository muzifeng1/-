<template>
	<div class="result">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<ul v-if="showList.length">
				<li v-for="item in showList" :key="item.name">
					<h3>名字： {{item.name}}</h3>
					<div>价格： {{item.price}}</div>
					<div>描述： {{item.desc}}</div>
                    <div><img :src="item.img" alt=""></div>
				</li>
			</ul>
			<div v-else>没有搜索到数据</div>
		</van-pull-refresh>
	</div>
</template>

<script>
import { Toast } from 'vant';
export default {
	data() {
		return {
			showList: [],
			list: [
				{ name: '电脑办公', price: '2346', desc: '笔记本电脑' ,img:"http://jd.itying.com/upload/Hfe1i8QDOkfVt-PuGcxCA0fs.jpg"},
                { name: '手机数码', price: '789', desc: '小米MIX2 全网通 6GB+64GB 黑色 移动联通电信4G手机 双卡双待' ,img:"http://jd.itying.com/upload/1p7ZZkChKE1orn1vNmxX0cxe.jpg"},
                { name: '酒水饮料', price: '118', desc: '水井坊 臻酿八號', img:"http://jd.itying.com/upload/18s-6j6E0lWogcW3mJ4C41iv.png"},
                { name: '化妆品', price: '198', desc: '卡姿兰（Carslan）蜗牛气垫调控霜礼盒装',img:"http://jd.itying.com/upload/egpzY5yUU59OAIC_D_SDj0oz.png" },
			],
			count: 0,
			isLoading: false,
		};
	},
	mounted() {
		let arr = this.list.filter(item => {
			return item.name.indexOf(this.$route.query.str) > -1
		})
		this.showList = arr
        
	},
	methods: {
		onRefresh() {
			setTimeout(() => {
				Toast('刷新成功');
				this.isLoading = false;
				this.count++;
			}, 5000);
		},

	},
};
</script>

<style lang='scss' scoped>
.result {
}
</style>
