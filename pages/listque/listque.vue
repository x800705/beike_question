<template>
	<view>
		
		<view style="text-align: center; font-size: 22px;margin-bottom: 10px;">{{name}}</view>
		<button @click="test">上传Excel,批量上传</button>
		<button @click="add">上传题目</button>
		
		
			
		    <button class="btn"></button>
		</uni-file-picker>
		
		<uni-list v-for="(item, index) in que_list" :key="index" class="list">
		   
		    <view>{{item[4]}}</view>
			<view :class="item[9] === 0? 'right' : null">A:&nbsp&nbsp{{item[5]}}</view>
			<view :class="item[9] === 1? 'right' : null">B:&nbsp&nbsp{{item[6]}}</view>
			<view :class="item[9] === 2? 'right' : null">C:&nbsp&nbsp{{item[7]}}</view>
			<view :class="item[9] === 3? 'right' : null">D:&nbsp&nbsp{{item[8]}}</view>
		</uni-list>  
		 
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listid:"",
				url:"http://154.12.26.163:5000/",
				que_list:[],
				name:"",
			}
		},
		
			
		async onLoad(options){
			this.listid = options.id;
			this.name = options.name;
			console.log(this.listid)
			uni.request({ 
				
			})
			await new Promise((resolve, reject) => {
				uni.request({ 
					url:this.url + "getque?list_id=" + this.listid,  
					timeout:2000,
					success: (res) => {
						
						this.que_list = res.data
						
						
						//this.$set(this.que_list,res.data)
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
			async test(){
			
					uni.chooseFile({
						success: (chooseImageRes) => {
							const tempFilePaths = chooseImageRes.tempFilePaths;
							uni.uploadFile({
								url: 'http://154.12.26.163:5000/addexcel', //仅为示例，非真实的接口地址 
								filePath: tempFilePaths[0],
								name: 'file',
								formData:{
									list_id:this.listid
								},
								success: (uploadFileRes) => {
									console.log(uploadFileRes.data);
									
										uni.showToast({
										    title: '上传成功',  
										    icon: 'success', // 可以是 'success', 'loading', 'none'  
										    duration: 1000 // 持续展示时间，单位 ms  
										});
									
									
										uni.request({ 
											url:this.url + "getque?list_id=" + this.listid,  
											timeout:2000,
											success: (res) => {
												
												this.que_list = res.data
												
												
												//this.$set(this.que_list,res.data)
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
									
								}
							});
						}
					});
					
					
		

		
		

			},
			
			add(){
				
				uni.navigateTo({
					url:'../add/add?id=' + this.listid + '&name=' +this.name
				});
			}
			
		
		}
	}
	


</script>

<style>
.list view{
	margin-top:15px;
	font-size: 20px;
}

.right{
	color:red
}
</style>
