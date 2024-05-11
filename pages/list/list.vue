<template>
	<view>
		<view>
			<button @click="add()">添加题库</button>
		</view>
			
			<uni-list v-for="(item, index) in list" :key="index">
			   <uni-list-item :title="item[1]" :thumb="item[2]" thumb-size="lg" @click="get_list(item[0],item[1])"  clickable/>
			 </uni-list>  
				
					
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3,4]
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
			add(){
				uni.navigateTo({
					url:'../addList/addList'
				});
			},
			
			get_list(index,name){
				uni.navigateTo({
					url:'../listque/listque?id=' + index +'&name=' + name
				});
				
				
			}
		}
	}
</script>

<style>

</style>
