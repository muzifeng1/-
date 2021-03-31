<template>
	<div class="hot">
		<div class="tops">
			<myheader title="热门搜索"></myheader>
		</div>
		<div>
		<van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
			<template #action>
				<div @click="onSearch">搜索</div>
			</template>
		</van-search>
		<button @click="del">删除</button>
		<ul class="history">
			<li v-for="(item, index) in wordList" :key="index">{{item}}</li>
		</ul>

		<ul v-if="value" class="search-box">
			<li v-for="(item, index) in searchList" :key="index">{{item}}</li>
		</ul>
	</div>
	</div>
</template>

<script>
import header from '@/components/header'
export default {
	components:{myheader:header},
	data() {
		return {
			value: '',
			wordList: [],
			searchList: [],
	        originList: ['电脑办公', '女装内衣', '运动户外', '手机数码', '化妆品', '汽车用品', '酒水饮料',]
		};
	},
	created() {

		if(localStorage.wordListCopy) {
		    this.wordList = localStorage.wordListCopy.split(',') || []
		}


	},
	methods: {
		del() {
			this.wordList = []; // 清空数组
		
			localStorage.removeItem('wordListCopy')
		},
		onSearch() {
            if(!this.value) {
                alert('请输入内容')
                return
            }
			if (this.wordList.length >= 3) { // 
				this.wordList.unshift(this.value)// 从前边添加
				this.wordList.pop()  // 从后边删除
			} else {
				this.wordList.unshift(this.value)// 从前边添加
			}

			// 数据持久化 
			localStorage.wordListCopy = this.wordList

			this.$router.push({
				path: '/result',
				query: { str: this.value }
			})
		}
	},
	watch: {
		value(newValue, oldValue) {

			let arr = this.originList.filter(item => {
				return item.indexOf(newValue) > -1
			})

			this.searchList = arr;


		}
	}
};
</script>

<style lang='scss' scoped>
.hot {
	
	.history {
		padding-top: 30px;
		li {
			display: inline-block;
			padding: 0 10px;
			border: 1px solid #999;
			background: #eee;
			border-radius: 4px;
			margin: 0 10px;
		}
	}
	.search-box {
		position: absolute;
		top: 100px;
		left: 0;
		right: 0;
		background-color: #fff;
		li {
			padding: 0 10px;
			line-height: 40px;
			border-bottom: 1px solid #ccc;
		}
	}
}
</style>
