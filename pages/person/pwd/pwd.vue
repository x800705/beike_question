<template>
	<view>
		
			<view class="content">
				 <view>
					 <uv-input placeholder="输入旧密码" v-model="old_pwd"></uv-input> 
				</view>
				
				<view> 
					 <uv-input placeholder="输入新密码" v-model="new_pwd"></uv-input> 
				</view>
				
				 <view>
				 	 <uv-input placeholder="重新输入新密码" v-model="re_new_pwd"></uv-input> 
				 </view>
				 
				 
				 <uv-button type="success"  @click="submit">提交</uv-button>
				 
			
				
			</view>
			
			
			
		
	</view>
</template>

<script>
	import api from "@/api/api"
	import config from "@/api/config"
	export default {
		data() {
			return {
				old_pwd:"",
				new_pwd:"",
				re_new_pwd:"",
				user_id:"",
			}
		},
		
		onLoad(){
			this.user_id = sessionStorage.getItem('user_id')
		},
		
		
		methods: {
			async submit(){
				if(this.new_pwd != this.re_new_pwd){
					config.alerts("两次密码不一致")
				}
				else{
					var code = await api.change_pwd(this.user_id,this.old_pwd,this.new_pwd)
					if(code == "-1"){
						config.alerts("原密码错误")
					}
					else{
						config.success_alerts("密码修改成功")
					}
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

.content view{
	padding-top: 20px;
}
</style>
