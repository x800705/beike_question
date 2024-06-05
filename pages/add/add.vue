<template>
	<view>

		<view style="margin-bottom:20px">
		<input placeholder="输入问题" v-model="que">
		</view>
		
	
		<view class="cos">
		
		<radio-group>
		<view> <input placeholder="选项A" v-model="a"> <radio @click="gans(0)" :checked="radio_array[0]"></radio> </view>
		<view> <input placeholder="选项B" v-model="b"> <radio @click="gans(1)" :checked="radio_array[1]"></radio> </view>
		<view> <input placeholder="选项C" v-model="c"> <radio @click="gans(2)" :checked="radio_array[2]"></radio> </view>
		<view> <input placeholder="选项D" v-model="d"> <radio @click="gans(3)" :checked="radio_array[3]"></radio> </view>
		</radio-group>
		

		
	

	
		
		</view>
		
		
				<uv-picker ref="picker" :columns="columns" @confirm="confirm"></uv-picker>
				
				
		
		
		<button style="margin-top: 30px; background-color: #4CD964;" @click="submit()">提交</button>
	</view>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				que:"", 
				a:"",
				b:"",
				c:"",
				d:"",
				ans:"",
				url:"http://154.12.26.163:5000/",
				radio_array : [false,false,false,false],
					columns: [
									['中国', '美国', '日本']
								]
			}
		},
		methods: {
			gans(index){
				this.ans = index;
				this.radio_array = [false,false,false,false];
				this.radio_array[index] = true;
				console.log(this.radio_array)
				
				
			},
			submit(){
				
				if(this.ans === "") {
					//alert需要更换
					//alert("还没确定正确答案")
					console.log("还没确定正确答案")
				uni.showModal({  
				    title: '错误',  
				    content: '还没确定正确答案',  
				    showCancel: false, // 是否显示取消按钮  
				    
				});
				}
				else{
					uni.request({
					    url: this.url + "add", //仅为示例，并非真实接口地址。
						timeout:2000,
						data:{
							que:this.que,
							a:this.a,
							b:this.b,
							c:this.c,
							d:this.d,
							ans:this.ans
						},
					    success: (res) => {
					      
							
							//alert("已提交")
							console.log("已提交")
							
							uni.showToast({  
							    title: '已提交',  
							    icon: 'success', // 可以是 'success', 'loading', 'none'  
							    duration: 1000 // 持续展示时间，单位 ms  
							});
					    },
						fail(){
							uni.showToast({
							    title: '服务器繁忙，请稍后再试。。。',  
							    icon: 'none', // 可以是 'success', 'loading', 'none'  
							    duration: 1000 // 持续展示时间，单位 ms  
							});
							
						
						}
					});
					
					
			
				    
					
					
					
					this.que = ""; 
					this.radio_array = [false,false,false,false];
					this.a="";
					this.b="";
					this.c="";
					this.d="";
					this.ans="";
					
					
					
				}
		
			}
		}
	}
</script>

<style>
	input{
		border: 1px solid #999999;
		border-radius: 4px;
		width:260px;
		margin: 0px auto;
		height: 40px;
	}
	
	.cos input{
		margin-top:3px;
		
	}
	
	.cos text{
		width:400px
	}
	
	radio{
		margin:auto 0;
	}
	
.cos view{
	display: flex;
}
</style>
