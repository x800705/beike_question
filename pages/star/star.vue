<template>
	<view>
		<uv-list v-for="(item,index) in star_list" :key="index">
			<uv-list-item :title="item[4]" @click="toStar(index)" clickable></uv-list-item>
		</uv-list>
	</view>
</template>

<script>
	import api from "../../api/api.js"
	export default {
		async onLoad(){
			this.star_list = await api.get_star_list(sessionStorage.getItem('user_id'))
			console.log(data)
		},
		data() {
			return {
				star_list:"",
			}
		},
		methods: {
			toStar(index){
				console.log(index)
				uni.navigateTo({
					url:"../index/index?is_star=true&index=" + index
				});
			}
		}
	}
</script>

<style>

</style>
