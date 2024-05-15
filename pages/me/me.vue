<template>

	<view v-if="this.$store.state.isLoggedIn == false">
		<h2 style="text-align: center;">登录注册</h2>
		<uv-input placeholder="请输入用户名" border="surround" v-model="id"  style="width: 200px; margin:10px auto"></uv-input>
		<uv-input placeholder="请输入密码" border="surround" v-model="pwd"  style="width: 200px; margin:10px auto"></uv-input>
		
		<uv-button type="success" style="width:300px;margin:10px auto" @click="submit">登录/注册</uv-button>
		未注册的用户，自动注册
	</view>
	
	<view v-else>
		
		<image class="bg_pic"></image>

		<view class="label">
		<image class="cir_pic" src="../../img/123.png"></image>
		<span class="username">东辉行动</span>
		</view>
		
		
		<!--
		<uni-list class="list" @click="aaa()" >
			

		<uni-list-item title="123123" clickable class="test"></uni-list-item>
		
			
		</uni-list>
		
		!-->
		
	
		<uv-list>
		    <uv-list-item title="我的出题" @click="linkTo()" clickable></uv-list-item>
			<uv-list-item title="历史做题记录" clickable></uv-list-item>
			<uv-list-item title="我的收藏" @click="linkTo('../star/star')" clickable></uv-list-item>
			<uv-list-item title="我的互动" clickable></uv-list-item>
		</uv-list> 
		
		<uv-button type="error" style="width:300px;margin:10px auto" @click="logout">退出登录</uv-button>
	</view>
	
	
	
	
</template>

<script>
	import api from "../../api/api.js"
	export default {
		data() {
			return {
				id:"",
				pwd:"",
				
			}
		},
		onLoad(){
			
			console.log(this.$store.state.isLoggedIn) 

			if(sessionStorage.getItem('is_log') == 'true'){
				this.$store.state.isLoggedIn = true
			}
			
		},
		methods: {
			async submit(){ 
				// console.log(123)
				// //登录请求
				// await uni.request({
				// 	url:this.$store.state.url + "getr",
				// 	success: (res) => {
				// 		console.log(res)
				// 	}
				// })
				
				
				// console.log(123)
				
	
				
				//登录请求
				var code = await api.login(this.id,this.pwd)
				
				if(code == "1"){
					this.$store.state.isLoggedIn = true
					this.$store.state.userId = this.id
					sessionStorage.setItem('is_log', 'true');  
					sessionStorage.setItem('user_id', this.id);  
				}
				
				console.log(this.$store.state.isLoggedIn)
				
				
				
				
				
				
				
			},
			logout(){
				sessionStorage.setItem('is_log', 'false');  
				this.$store.state.isLoggedIn = false
			},
			
			
			//跳转网页
			linkTo(url){
				uni.navigateTo({
					url:url
				});
				
				
			}
		}
	}
</script>

<style>
.bg_pic{
	height:120px;
	width:100%;
	background-color: #9ACAFC;
}

.cir_pic{
	width:80px;
	height:80px;
	border-radius: 50%;  
	position: relative;
	top:0px
	
}

.list .test{
	margin:0px 0
}


.label{
	position: absolute;
	display: flex;
	top:0px;
	margin:0px 10px;
	top:20px;
}

.username{
	font-size: 30px;
	margin-left:20px;
}

</style>
