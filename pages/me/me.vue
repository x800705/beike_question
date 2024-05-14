<template>

	<view v-if="this.$store.state.isLoggedIn == false">
		<h2 style="text-align: center;">登录注册</h2>
		<uv-input placeholder="请输入用户名" border="surround" v-model="id"  style="width: 200px; margin:10px auto"></uv-input>
		<uv-input placeholder="请输入密码" border="surround" v-model="pwd"  style="width: 200px; margin:10px auto"></uv-input>
		
		<uv-button type="success" style="width:300px;margin:10px auto" @click="submit">登录/注册</uv-button>
		未注册的用户，自动注册
	</view>
	
	<view v-else>
		<image src="../../img/123.png" class="bg_pic"></image>

		<view>
		<image class="cir_pic"src="../../img/123.png"></image>
	
		</view>
		
		<view>东辉行动</view>
		
		<uni-list class="list" @click="aaa()" >
			

		<uni-list-item title="123123" clickable class="test"></uni-list-item>
		
			
		</uni-list>
		
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
					sessionStorage.setItem('is_log', 'true');  
				}
				
				console.log(this.$store.state.isLoggedIn)
				
				
				
				
				
				
				
			},
			logout(){
				sessionStorage.setItem('is_log', 'false');  
				this.$store.state.isLoggedIn = false
			}
		}
	}
</script>

<style>
.bg_pic{
	height:100px;
	width:100%;
	filter:blur(5px)
}

.cir_pic{
	width:80px;
	height:80px;
	border-radius: 50%;  

	position: absolute;
	top:20px
	
}

.list .test{
	margin:20px 0
}


</style>
