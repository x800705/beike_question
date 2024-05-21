<template>
	<view>
		<uv-list  v-for="(item,index) in react_list" :key="index">
			<view style="padding-top: 20px;">
				<view style="color:gray;font-size: 12px;" v-if="item[1] == 'heart'">{{item[0]}} 对你发布的提问点赞了</view>
				<view style="color:gray;font-size: 12px;" v-else-if="item[1] == 'star'">{{item[0]}} 对你发布的提问收藏了</view>
				<view style="color:gray;font-size: 12px;" v-else-if="item[1] == 'comment'">{{item[0]}} 对你发布的提问评论了</view>
				<view>{{item[2]}}</view>
				<view v-if="item[1] == 'comment'">[评论:]  {{item[3]}}</view>
			</view>
			
			
		</uv-list>
	</view>
</template>

<script>
	import api from "../../api/api.js"
	export default {
		data() {
			return {
				react_list:[] ,// 互动列表
				user_id:"",
			}
		},
		async onLoad(){
			this.user_id = sessionStorage.getItem("user_id")
			this.react_list =  await api.get_react(this.user_id)
			console.log(this.react_list)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
