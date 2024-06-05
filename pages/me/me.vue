<template>

	<view v-if="this.$store.state.isLoggedIn == false">
		<h2 style="text-align: center;">登录注册</h2>
		<uv-input placeholder="请输入用户名" border="surround" v-model="id"  style="width: 200px; margin:10px auto"></uv-input>
		<uv-input type="password" placeholder="请输入密码" border="surround" v-model="pwd"  style="width: 200px; margin:10px auto"></uv-input>
		
		<uv-button type="success" style="width:300px;margin:10px auto" @click="submit">登录/注册</uv-button>
		未注册的用户，自动注册
	</view>
	
	<view v-else>
		
		<image class="bg_pic"></image>

		<view class="label">
		<image class="cir_pic" :src="user[2]"></image>
		<span class="username">{{user_name}}</span>
		</view>
		
		
		<!--
		<uni-list class="list" @click="aaa()" >
			

		<uni-list-item title="123123" clickable class="test"></uni-list-item>
		
			
		</uni-list>
		
		!-->
		
	
		<uv-list>
			<uv-list-item title="个人资料" @click="linkTo('../person/person')" clickable link></uv-list-item>
		    <uv-list-item title="我的出题" @click="linkTo('../myque/myque')" clickable link></uv-list-item>
			<!--
			<uv-list-item title="历史做题记录" clickable link></uv-list-item>
			-->
			<uv-list-item title="我的收藏" @click="linkTo('../star/star')" clickable link></uv-list-item>
			<uv-list-item title="我的互动" @click="linkToReact()" clickable link :show-badge="true" :badge="{value: this.count}"></uv-list-item>
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
				user_name:"",
				count:"", //未读信息
				user:"",
				
			}
		},
		async onShow(){
			console.log("test")
			console.log(sessionStorage.getItem('user_id'))
			this.user_name = sessionStorage.getItem('user_id')
			this.user = await api.find_user(this.user_name)
			if(sessionStorage.getItem('user_id') == '' || sessionStorage.getItem('user_id') == null){
				this.$store.state.isLoggedIn = false
			}
			else{
				this.$store.state.isLoggedIn = true
			}
			
			
			
			this.count = await api.count_react(this.user_name)
			this.count = this.count[0][0]
			console.log(this.count)
			console.log(this.$store.state.isLoggedIn) 
			this.user_name = sessionStorage.getItem('user_id')

			
			
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
					this.user_name = this.id
					this.count = await api.count_react(this.user_name)
					this.count = this.count[0][0]
				}
				
				console.log(this.$store.state.isLoggedIn)
				
				
				
				
				
				
				 
			},
			logout(){
				sessionStorage.setItem('is_log', 'false');  
				sessionStorage.setItem('user_id','')
				this.$store.state.isLoggedIn = false
			},
			
			
			//跳转网页
			linkTo(url){
				uni.navigateTo({
					url:url
				});
				
				
			},
			async linkToReact(){
				api.is_read(this.user_name)
				
				uni.navigateTo({
					url:'../react/react'
				})
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
