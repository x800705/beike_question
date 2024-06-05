<template>
	<view>
		<view class="content">
			<view>头像：<img :src="user[2]" class="cir_pic"> <br> </view>
			<view>用户名:{{user[0]}}</view>
			
			<view class="btn">
				<uv-button type="primary" @click="linkTo('pic/pic')">修改头像</uv-button>
				<uv-button type="error" @click="linkTo('pwd/pwd')">修改密码</uv-button>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	import api from "@/api/api"
	export default {
		data() {
			return {
				user:"",
				img_src:"",
				user_id:""
			}
		},
		
		async onShow(){
			this.user_id = sessionStorage.getItem('user_id')
			this.user = await api.find_user(this.user_id)
		
		},
		
		
		methods: {
			linkTo(url){
				uni.navigateTo({
					url:url
				});
				
				
			},
		}
	}
</script>

<style>
.content{
	margin: 30px auto;
	width:300px;
	
	
}

.content view{
	margin-top: 10px;
}

.btn{
	padding-top: 30px;
}

.cir_pic{
	width:80px;
	height:80px;
	border-radius: 50%;  
	position: relative;

	
}
</style>
