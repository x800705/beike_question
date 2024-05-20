<template>
	<view>
		<view style="">
			<h4>评论</h4>
			
			<view style="padding:10px 0px">
			<uv-list  style="padding-top: 20px;" v-for="(item,index) in comment_list" :key="index">
				
				<uv-list-item>{{item}}</uv-list-item>
	
				
				
			</uv-list>
			</view>
		
		
		
		</view>
		
		<!--评论输入框 !-->
		<view style="position: fixed; bottom:0px; width:100%;display: flex; ">
			
		<uv-input type="textarea" placeholder="输入评论" style="width: 80%;" v-model="content"></uv-input>
		<uv-button type="success" style="width: 20%;" @click="submit()">提交</uv-button>
			
		</view>
		
	</view>
</template>

<script>
	import api from "../../api/api.js"
	export default {
		data() {
			return {
				qid:"",
				comment_list : [123,132,1321,1],
				content:"",
				user_id:"",
			}
		},
		onLoad(options){
			this.qid = options.qid
			this.user_id = sessionStorage.getItem("user_id")
			//根据qid获取所有评论
			//预想 -- 用户名 头像 评论内容 
			//this.comment_list = api.get_comment(this.qid)
			
			
			
		},
		methods: {
			submit(){
				api.push_comment(this.qid,this.content)
			}
		}
	}
</script> 

<style>

</style>
