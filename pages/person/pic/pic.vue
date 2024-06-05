<template>
	<view>
		<view class="content">
			<view>原头像:<img :src="user[2]" class="cir_pic"></view>
			<button @click="update">上传图片</button>
			<view v-if="img_src != ''"> 
				<img :src="img_src" class="cir_pic">
				<uv-button type="success" @click="commit">提交</uv-button>
			</view>
			
			
			
		</view>
	</view>
</template>

<script>
	import api from "@/api/api"
	import config from "@/api/config"
	export default {
		data() {
			return {
				img_src:"",
				user_id:"",
				user:""
			}
		},
		
		async onLoad(){
			this.user_id = sessionStorage.getItem('user_id')
			this.user = await api.find_user(this.user_id)
			
			
		},
		methods: {
			update(){
				
							
							//上传图片
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
			
			async commit(){
				var code = await api.update_user_img(this.user_id,this.img_src)
				
				if(code == "200") {
					config.success_alerts("头像已上传")
					
					
				}
				
				
			}
		}
	}
</script>

<style>
.content{
	margin: 30px auto;
	width:300px;

}

.cir_pic{
	width:80px;
	height:80px;
	border-radius: 50%;  
	position: relative;

	
}

</style>
