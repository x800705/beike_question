<template>
	<view>
		<uv-list  v-for="(item,index) in react_list" :key="index">
			<view style="padding-top: 20px;">
				<view style="color:gray;font-size: 12px;">{{item[2]}} 对你的提问点赞了</view>
			
			</view>
			
			
		</uv-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				react_list:[] // 互动列表
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
