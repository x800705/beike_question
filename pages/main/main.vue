<template>
	<view>
		<!--
		<button @click="que()" class="ris">随机Duang一题</button>
		-->
		
		<view class="uv-demo-block__content">
			<uv-tabs :list="list1" @click="click" :current="3" 		:activeStyle="{
			color: '#303133',
			fontWeight: 'bold',
			transform: 'scale(1.05)'
		}">
			</uv-tabs>
		</view>
		
		<uni-list>
			
			   <uni-list v-for="(item, index) in list" :key="index">  
			      <uni-list-item :title="item[1]" :thumb="item[2]" thumb-size="lg" @click="get_list(item[0])"  clickable/>
			    </uni-list>  

			
		</uni-list>
		
			
		  
		  
	</view>
</template>

<script>
	import axios from "axios"

	
	
	export default {
		data() {
			return {
				id:"",
				url:"http://154.12.26.163:5000/",
				list:[1,2,3],
				list1: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}],
				
			}
		},
		
		async onLoad(){
			await new Promise((resolve, reject) => {
				uni.request({ 
					url : 'http://154.12.26.163:5000/getql',
					timeout:2000,
					success: (res) => {
						console.log(res.data)
						this.list = res.data
						resolve('suc');  // 千万别忘写！！！
					},
					fail(){
						uni.showToast({
						    title: '服务器繁忙，请稍后再试。。。',  
						    icon: 'none', // 可以是 'success', 'loading', 'none'  
						    duration: 1000 // 持续展示时间，单位 ms  
						});
						
					
					}
					
			
				})
			})
		},
		methods: {
			
			get_ran(){
				axios.get()
				  .then(response => {  
				    // 请求成功，处理响应数据  
				    console.log(response.data);  
					
					this.id = response.data;

					
					
				  })  
				  .catch(error => {  
				    // 请求失败，处理错误  
				    console.error('请求失败：', error);  
				  });
				  
				 
				  
				  
				  
				  
			},
			
		
			  
			
			
			
			async que(){
				
				
				await new Promise((resolve, reject) => {
					uni.request({ 
						url : 'http://154.12.26.163:5000/getr',
						timeout:2000,
						success: (res) => {
							console.log(res)
							this.id = res.data
							resolve('suc');  // 千万别忘写！！！
						},
						fail(){
							uni.showToast({
							    title: '服务器繁忙，请稍后再试。。。',  
							    icon: 'none', // 可以是 'success', 'loading', 'none'  
							    duration: 1000 // 持续展示时间，单位 ms  
							});
							
						
						}
						
				
					})
				})
						
				
				
				
				
				
	
				
	
				
				
				uni.navigateTo({
					url:'../index/index?id=' + this.id
				});
				
			},
			
			get_list(index){
				uni.navigateTo({
					url:'../index/index?id=' + index
				});
			}
		}
	}
</script>

<style>
.ris{
	   
	    height: 60px;
		width:200px;

		margin-top: 50px;
	   

}


	.right{
		background-color: greenyellow;
		color: black;
	
	}
</style>
