<template>
	<view>
		<input placeholder="输入题库名" v-model="name">
		<button @click="test">上传图片</button>
		<img :src="img_src">
		
		<button @click="submit()">提交</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img_src:"",
				name:"",
				
				
			}
		},
		methods: {
			test(){
					
					
				    uni.chooseImage({
				    	success: (chooseImageRes) => {
				    		const tempFilePaths = chooseImageRes.tempFilePaths;
							
				    		uni.uploadFile({
				    			url: 'http://154.12.26.163:5000/upload', //仅为示例，非真实的接口地址
				    			filePath: tempFilePaths[0],
				    			name: 'file',
				    			
				    			success: (uploadFileRes) => {
				    				console.log(uploadFileRes.data);
									this.img_src = "http://154.12.26.163:5000/image/" + uploadFileRes.data
									
				    			}
				    		});
				    	}
				    });

		},
		
		async submit(){
			console.log(this.name)
			if(this.name === ""){
				uni.showToast({
				    title: '请输入题库名',  
				    icon: 'none', // 可以是 'success', 'loading', 'none'  
				    duration: 1000 // 持续展示时间，单位 ms  
				});
				
				return
			}
			
			await new Promise((resolve, reject) => {
				uni.request({ 
					url:"http://154.12.26.163:5000/addlist",
					timeout:2000,
					data:{
						name:this.name,
						img_src:this.img_src
					},
					success: (res) => {
						console.log(res.data)
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
			
			
			
		
			
			
			
				uni.reLaunch({
				 
				    url : '../list/list',
				 
				    success: function (e) {
						console.log(e)
				        let page = getCurrentPages().pop();
				 
				        if (page == undefined || page == null) return;
				 
				            page.onShow();
				 
				    }
				 
				});

			
			
			
			
			
		}
	},
}
</script>

<style>
	input{
		border: 1px solid #999999;
		border-radius: 4px;
		width:260px;
		margin: 0px auto;
		height: 40px;
	},
	
	img{
		width: 200px;
		margin: 0px 100px;
	}
</style>
