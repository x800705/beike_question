<template>
	<view v-if="count != 0">
		<uv-list  v-for="(item,index) in react_list" :key="index">
			<view style="padding-top: 20px;">
				<view style="color:gray;font-size: 12px;display:flex" v-if="item[1] == 'heart'"> <uv-icon name="heart" size="20"> </uv-icon> {{item[0]}} 对你发布的提问点赞了</view>
				<view style="color:gray;font-size: 12px;display:flex" v-else-if="item[1] == 'star'">  <uv-icon name="star" size="20"> </uv-icon> {{item[0]}} 对你发布的提问收藏了</view>
				<view style="color:gray;font-size: 12px;display:flex" v-else-if="item[1] == 'comment'"><uv-icon name="chat" size="20"> </uv-icon> {{item[0]}} 对你发布的提问评论了 </view>
				<view>{{item[2]}}</view>
				<view v-if="item[1] == 'comment'">[评论:]  {{item[3]}}</view>
			</view>
		</uv-list>
	</view>
	
	
	
	<view v-else-if="count == 0">
		暂时没有互动
	</view>
	
	<view v-else>
		
	</view>
</template> 

<script>
	import api from "../../api/api.js"
	export default {
		data() {
			return {
				react_list:[] ,// 互动列表
				user_id:"",
				count:-1,
			}
		},
		async onLoad(){
			this.user_id = sessionStorage.getItem("user_id")
			this.react_list =  await api.get_react(this.user_id)
			console.log(this.react_list)
			this.count = this.react_list.length
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
