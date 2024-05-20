<template>
	<view style="z-index=2">
		<view class="list">
			<uv-list  v-for="(item,index) in comment_list" :key="index">
				<view style="padding-top: 20px;">
					<view style="color:gray;font-size: 12px;">{{item[0]}}</view>
					<view>{{item[1]}}</view>
				</view>
				
				
			</uv-list>
			

			
		
		
		
		</view>
		
		<!--评论输入框 !-->
		<view style="position: fixed; bottom:0px; width:100%;display: flex; ">
			
		<uv-input placeholder="输入评论" style="width: 80%;z-index: 10; background-color: #e3e3e3;" v-model="content" ></uv-input>
		<uv-button type="success" style="width: 20%;" @click="push_commit()">提交</uv-button>
		
			
		</view>
		
	</view>
</template>
<script>
	import api from "../../api/api.js"
	import config from "../../api/config.js"
	export default {
		data() {
			return {
				qid:"",
				user_id:"",
				content:"",
				comment_list:[],
			}
		},
		onLoad(res){
			this.user_id = sessionStorage.getItem('user_id')
			this.qid = res.qid
			
			this.get_commit()
			
		},
		methods: {
			async push_commit(){
				if(this.user_id == "") {
					config.alerts("请登录后重试")
				}
				console.log(this.content)
				var data = await api.push_comment(this.qid,this.user_id,this.content)
				if(data == "200"){
					config.success_alerts("已发送")
					this.content = ""
					//更新评论
					this.get_commit()
				}
				else{
					config.alerts("发送失败")
				}
				
				
			},
			
			async get_commit(){
				this.comment_list = await api.get_comment(this.qid)
			}
			
			
			
		}
	}
</script>

<style>
.list{
	padding-bottom:50px;

}

.uv-list-item__container{
	margin-top:50px;
}



.input-placeholder {
		color: #7A869A !important;
	}
	
	


</style>
