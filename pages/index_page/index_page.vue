<template>

	<view>
			
		
			
			
			<view class="uv-demo-block__content">
				<uv-tabs :list="list1" @click="click" :current="0" 		
				:activeStyle="{
				color: '#303133',
				fontWeight: 'bold',
				transform: 'scale(1.05)'
			}">
				</uv-tabs>
			</view>
			
			
			
			
			<view style="text-align: center;">下拉随机Duang一题</view>
			
			<!--
			<view style="text-align: center;">当前是第{{now_id + 1}}题，总共有{{totol}}题</view>
			-->
				
				
				
			
				
				
				
			
		

	
	
	<view class="content">



			<text class="title" style="margin-top:40px">{{q}}</text> 
			
			  
			
		
			
			
			
			<view class="btn">
				<view>
					<button @click="charge(0)" :class="styleList[0]"> 
					<view class="rights" :style="{width:percentList[0]}"></view>{{chooseList[0]}}</button>
					
					<text :style="{opacity: is_pdis?1:0}">{{peaList[0] + "人 " + percentList[0]}}</text> 
				</view>
				
				<view>
					<button @click="charge(1)" :class=styleList[1]> 
					<view class="rights" :style="{width:percentList[1]}"></view>{{chooseList[1]}}</button>
					<text :style="{opacity: is_pdis?1:0}">{{peaList[1] + "人 " + percentList[1]}}</text> 
				</view>
					
				<view>
					<button @click="charge(2)" :class=styleList[2]> 
					<view class="rights" :style="{width:percentList[2]}"></view>{{chooseList[2]}}</button>
					<text :style="{opacity: is_pdis?1:0}">{{peaList[2] + "人 " + percentList[2]}}</text> 
					
				</view>
				
				
				<view>
					<button @click="charge(3)" :class=styleList[3]> 
					<view class="rights" :style="{width:percentList[3]}"></view>{{chooseList[3]}}</button>
					<text :style="{opacity: is_pdis?1:0}">{{peaList[3] + "人 " + percentList[3]}}</text> 
				</view>
				
				
				<view :style="{opacity: is_pdis?1:0}">
					总共作答{{total}}人,正确率为{{percentList[ans]}}
				</view>
				
				
				<view style="display: flex; margin: -10px;">
				<view class="star" style="display: flex;">
				<uv-icon v-if="is_star == false" name="star" color="#2979ff" size="28" @click="star"></uv-icon>
				<uv-icon v-if="is_star == true" name="star-fill" color="#2979ff" size="28" @click="star"></uv-icon>
				
	
				<view style="margin: 10px;">{{star_count}}</view>
		
				</view>
				
				
				<view class="heart" style="margin-left: 100px;">
				<uv-icon v-if="is_heart == false" name="heart" color="#2979ff" size="28" @click="heart"></uv-icon>
				<uv-icon v-if="is_heart == true" name="heart-fill" color="#2979ff" size="28" @click="heart"></uv-icon>
				<view style="margin: 10px;">{{heart_count}}</view>
				</view>
				
				</view>
				
				
				
				
	
			</view>
			
			<!--
			<view>
				<button @click="que()">随机Duang一题</button>
			
			</view>
			-->
			
			
			
	</view>
	
	
	<uv-list>
	

			<uv-list-item title="评论区"  @click="link_comment()" clickable link></uv-list-item>

	</uv-list>
	

	
	

	<!--
	<text style="display: inline-block;">
		<button style="margin-left:0;width: 150px;display: inline-block;" @click="pre()">上一题</button>
		<button style="margin-right:0;width: 150px;display: inline-block;" @click="next()">下一题</button>
	</text>
	!-->
	
	
	</view>

</template>

<script>
	import axios from 'axios'
	import api from "../../api/api.js"
	export default {
		data() {
			return {
				title: 'Hello',
				q:"",
				chooseList:["","","",""], //选项选择
				styleList:["1","2","3","4"], //样式选择
				percentList:["0%","0%","0%","0%"],
				peaList:["0","0","0","0"],
				test:"123",
				qres:"",
				ans:2,
				qid:0,
				is_click : 0,
				is_pdis : 0,
				total:0,
				block:0, // block锁
				url:"http://154.12.26.163:5000/",
				que_list:[],
				now_id:0,
				totol:0,
				//url:"http://localhost:5000/"
				item_id:"-1", //类别id
				list1: [],
				is_star:false ,//是否收藏
				is_heart:false,//是否点赞
				star_count:0, // 收藏人数
				heart_count:0 ,// 点赞人数
				q_user_id:"", //出题人id
				user_id:"", //登录人id
			}
		},
		
		
		async onPullDownRefresh() {
		
			//根据种类获取题目
			var data = await api.getitemr(this.item_id)
			
			//初始化
			this.is_click = 0;
			this.is_pdis = 0;
			
			
			this.chooseList = ["","","",""]; //选项选择
			this.styleList = ["1","2","3","4"]; //样式选择
			this.peaList = ["0","0","0","0"];
			this.percentList = ["0%","0%","0%","0%"];
			
			this.chooseList = []
			this.q = ""
			
			//设置题目
			this.qid = data[0]
			this.q_user_id = data[3]
			this.q = data[4]
			this.chooseList = data.slice(5,9)	
			this.ans = data[9]
			this.star_count = data[15]
			this.heart_count = data[16]
			
			//判断是否收藏
			this.is_star = await api.get_is_star(sessionStorage.getItem("user_id"),this.qid)
			this.is_heart = false
			
			
			
	
	// 		//获取随机数
	// 		await new Promise((resolve, reject) => {
	// 				uni.request({
	// 					url:this.url + "/getitemr?item_id=" + this.item_id,
	// 					success:(res)=>{
	// 						console.log("res")
	// 						console.log(res.data)
	// 						if(res.data == null){
	// 							uni.showToast({
	// 							    title: '该分类题库为空',  
	// 								icon: 'none',  
	// 							    duration: 2000 // 持续显示，直到手动隐藏  
	// 						});
	// 					}
							
	// 						//初始化
	// 						this.is_click = 0;
	// 						this.is_pdis = 0;
							
							
	// 						this.chooseList = ["","","",""]; //选项选择
	// 						this.styleList = ["1","2","3","4"]; //样式选择
	// 						this.peaList = ["0","0","0","0"];
	// 						this.percentList = ["0%","0%","0%","0%"];
							
	// 						this.chooseList = []
	// 						this.q = ""
							
	// 						res = res.data
	// 						console.log(123123)			
	// 						console.log(res)
	// 						this.qid = res[0]
	// 						this.q = res[3]
	// 						this.chooseList = res.slice(4,8)
							
	// 						console.log(res.slice(4,8))
								
	// 						this.ans = res[8]
							
							
			
							
							
							
							
							
							
							
							
							
							uni.stopPullDownRefresh();
							
							
							
							
							
							
							
							
							
						
							// console.log(res.data[0])
							// this.qid = res.data[0]
							
							// resolve('suc');  // 千万别忘写！！！
						// }
				// 	})
					
				// })
				
				
				
			
		
			
					
			// //初始化
			// this.is_click = 0;
			// this.is_pdis = 0;
			
			
			// this.chooseList = ["","","",""]; //选项选择
			// this.styleList = ["1","2","3","4"]; //样式选择
			// this.peaList = ["0","0","0","0"];
			// this.percentList = ["0%","0%","0%","0%"];
			
			
			
			//await this.getq() // 重新更新题目
			
			//uni.stopPullDownRefresh();
		},
		
		
		async onLoad(options) {
			//this.qid = this.$route.query.id
			//获取url的id
			
			console.log(123)
			
			//获取登录人id
			this.user_id = sessionStorage.getItem('user_id');
			
		
			
			//获取item
			await new Promise((resolve, reject) => {
				
				uni.request({
					url:this.url + "/getitem",
					success:(res) =>{
					
					for(var i=0;i<res.data.length;i++){
						var temp = {
							id:res.data[i][0],
							name:res.data[i][1]
							
						}
						
						//console.log(temp)
						//console.log("love")
						//console.log(this.list1)
						this.list1.push(temp)
					}
					
					resolve('suc');  // 千万别忘写！！！
						
					}
				})
			})
		
			
			
			//获取随机数
			await new Promise((resolve, reject) => {
					uni.request({
						url:this.url + "/getitemr?item_id=" + this.item_id,
						success:(res)=>{
							console.log("res")
							console.log(res.data[0])
							this.qid = res.data[0]
							
							resolve('suc');  // 千万别忘写！！！
						}
					})
					
				})
			
			
			
			
			

			
	
			

			
			//发送请求 根据id来进行题目的渲染
			await this.getq()
			

			
		
			
			
				
			//获取渲染题目
			
		
					

			
			
			
			

			
			// axios.get(this.url + 'test?id=' + this.qid)  
			//   .then(response => {  
			//     // 请求成功，处理响应数据  
			//     console.log(response.data);  
			// 	var res = response.data[0];
				

				
			//   })  
			//   .catch(error => {  
			//     // 请求失败，处理错误  
			//     console.error('请求失败：', error);  
			//   });

		},
		methods: {
			async click(a){
				
			
				
				
				//获取对应种类
				console.log(a.id)
				this.item_id = a.id
				
				
				
				//根据种类获取题目
				var data = await api.getitemr(this.item_id)
				
				//初始化
				this.is_click = 0;
				this.is_pdis = 0;
				
				
				this.chooseList = ["","","",""]; //选项选择
				this.styleList = ["1","2","3","4"]; //样式选择
				this.peaList = ["0","0","0","0"];
				this.percentList = ["0%","0%","0%","0%"];
				
				this.chooseList = []
				this.q = ""
				
				//设置题目
				this.qid = data[0]
				this.q_user_id = data[3]
				this.q = data[4]
				this.chooseList = data.slice(5,9)	
				this.ans = data[9]
				this.star_count = data[15]
				this.heart_count = data[16]
				
				//判断是否收藏
				this.is_star = await api.get_is_star(sessionStorage.getItem("user_id"),this.qid)
				this.is_heart = false
				
				
				
				
				
				
				
				
	
				//根据随机值查询题目
				//this.getq()
				
				
			},

			
			//获取渲染问题
			async getq(){
				//获取qid
				//this.qid = this.que_list[this.now_id][0]
				
				await new Promise((resolve, reject) => {
					uni.request({ 
						url : this.url + 'test?id=' + this.qid,
						timeout:2000,
						success: (res) => {
							
							res = res.data[0]
							this.q = res[4]
							this.chooseList = res.slice(5,9)
							
							console.log(res.slice(5,9))
								
							this.ans = res[9]
							
							
				
								
							resolve('suc');  // 千万别忘写！！！
						},
						fail(){
							uni.showToast({
							    title: '服务器繁忙，请稍后再试。。。',  
							    icon: 'none', // 可以是 'success', 'loading', 'none'  
							    duration: 1000 // 持续展示时间，单位 ms  
							});
							
							resolve('reject'); 
							
							
							
							
						},
				
					})
				})
						
						
			},
			
			//获取随机数
			async getr(){
				await new Promise((resolve, reject) => {
					uni.request({ 
						url : this.url + 'getr',
						timeout:2000,
						success: (res) => {
							
							this.qid = res.data[0]
							
					
								
							resolve('suc');  // 千万别忘写！！！
						},
						fail(){
							uni.showToast({
							    title: '服务器繁忙，请稍后再试。。。',  
							    icon: 'none', // 可以是 'success', 'loading', 'none'  
							    duration: 1000 // 持续展示时间，单位 ms  
							});
							
							resolve('reject'); 
						}
						
				
					})
				})
				
				
				await this.getq()
			},
			
			//初始化
			init(){
			axios.get(this.url + 'test?id=' + this.qid)  
			  .then(response => {  
			    // 请求成功，处理响应数据  
			    console.log(response.data);  
				var res = response.data[0];
				
				this.q = res[1];
				this.chooseList = res.slice(2,6)
				
				this.ans = res[6]
				
				
			  })  
			  .catch(error => {  
			    // 请求失败，处理错误  
			    console.error('请求失败：', error);  
			  });
			},
			
			
			//点击
			async charge(index){	
				
				//如果点击，则不执行
				if(this.is_click == 1) return;
				
				console.log(index)
				console.log(this.ans)
				//判断对错
				if(index === this.ans){
					console.log(index);
					this.$set(this.styleList,index,"right")
					console.log("yes")
					console.log(this.styleList)
				}
				//错误
				else{
					this.$set(this.styleList,index,"wrong")
					
					//将正确涂成绿色
					this.$set(this.styleList,this.ans,"right")
				}
				
				
				
				//添加数据库
				//this.add_c(index)
				
				
				//var code = await axios.get(this.url +  "addc?id=" + this.qid + "&c=" + index)  
				
				//添加数据库
				await new Promise((resolve, reject) => {
					uni.request({ 
						url : this.url +  "addc?id=" + this.qid + "&c=" + index,
						success: (res) => {
							resolve('suc');  // 千万别忘写！！！
						},
				
					})
				})
				
				
				
				//获得百分比
				await this.get_p()
				
				console.log(this.styleList[1])
				
				this.is_click = 1
				
				
				
				
				
				
			},
			
			async get_p(){
				
				await new Promise((resolve, reject) => {
					uni.request({ 
						url : this.url +  'getp?id=' + this.qid,
						success: (res) => {
							this.peaList =  res.data
							resolve('suc');  // 千万别忘写！！！
						},
				
					})
				})
				
				
				await new Promise((resolve, reject) => {
					uni.request({ 
						url : this.url +  'getp?id=' + this.qid,
						success: (res) => {
							console.log(res.data);
							
							var count = 0;
							this.percentList = res.data
							
			
							
							
							for(var i=0;i<4;i++){
								count = count + res.data[i];
							}
							
							if(count == 0) return;
							
							this.total = count
							
							
							
							console.log(count)
							
							for(var i=0;i<4;i++){
								if(res.data[i] == 0) continue
								this.percentList[i] = (res.data[i] / count) * 100
								this.percentList[i] = this.percentList[i].toFixed(0)
							}
							
							for(var i=0;i<4;i++){
								this.percentList[i] += "%"
							}
							
							
							this.is_pdis = 1;
							
							console.log(this.percentList)
							
							resolve('suc');  // 千万别忘写！！！
						},
				
					})
				})
				
			
				
				
		
			},
			
			async add_c(index){
				
				
				
				//发送请求
				axios.get(this.url + + 'addc?id=' + this.qid + "&c=" + index)  
				  .then(response => {  
				    // 请求成功，处理响应数据  
				    console.log(response.data);  
	
					
					
				  })  
				  .catch(error => {  
				    // 请求失败，处理错误  
				    console.error('请求失败：', error);  
				  });
			},
			
			//重置
			async que(){
				
				var res = await axios.get(this.url + 'getr');
			
				this.qid = res.data[0]
				
		
				//初始化
				this.is_click = 0;
				this.is_pdis = 0;
				
				
				this.chooseList = ["","","",""]; //选项选择
				this.styleList = ["1","2","3","4"]; //样式选择
				this.peaList = ["0","0","0","0"];
				this.percentList = ["0%","0%","0%","0%"];
				
				

				
				this.init() // 重新更新题目
				
				
				
			},
			
			//初始化
			reset(){
				//初始化
				this.is_click = 0;
				this.is_pdis = 0;
				
				
				this.chooseList = ["","","",""]; //选项选择
				this.styleList = ["1","2","3","4"]; //样式选择
				this.peaList = ["0","0","0","0"];
				this.percentList = ["0%","0%","0%","0%"];
			},
			
			async pre(){
				if(this.now_id == 0) {
					uni.showToast({  
					    title: '已经是第一题',  
						icon: 'none',  
					    duration: 500 // 持续显示，直到手动隐藏  
					});
					
					return
				}
				
				
				this.now_id = this.now_id - 1
				
				this.reset()
				
				this.getq()
			},
			
			async next(){	
				if(this.now_id + 1 == this.totol) {
					uni.showToast({  
					    title: '已经是最后一题',  
						icon: 'none',  
					    duration: 500 // 持续显示，直到手动隐藏  
					});
					
					return
				}
				
				this.now_id = this.now_id + 1
				
				this.reset()
				
				this.getq()
			},
			
			
			
			get_ran(){
				axios.get(this.url + 'getr')
				  .then(response => {  
				    // 请求成功，处理响应数据  
				    console.log(response.data);  
					
					//this.qid = response.data[0];
					
					return response.data[0]
			
					
					
				  })  
				  .catch(error => {  
				    // 请求失败，处理错误  
				    console.error('请求失败：', error);  
				  });
				  
				  
				 
				    

				  
			},
		
			
			async get_list(){
			
				
				
				await new Promise((resolve, reject) => {
					uni.request({ 
						url:this.url + "getque?list_id=" + this.qid,
						timeout:2000,
						success: (res) => {
							
							this.que_list = res.data
							this.totol = res.data.length
							
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
			
			star(){
				
				if(sessionStorage.getItem('user_id') == ''){
				  uni.showToast({
				      title: '请登录后重试',  
				      icon: 'none', // 可以是 'success', 'loading', 'none'  
				      duration: 1000 // 持续展示时间，单位 ms  
				  });
				  return
				}
				if(this.is_star == true) {
					api.drop_star(sessionStorage.getItem('user_id'),this.qid)
					api.del_star(this.qid)
					this.is_star = false
					this.star_count = this.star_count - 1
				}
				else {
					//添加到收藏表
					api.get_star(sessionStorage.getItem('user_id'),this.qid)
					//增加收藏人数
					api.add_star(this.qid)
					//添加互动表
					api.react(this.q_user_id,this.user_id)
					
					this.is_star = true
					this.star_count = this.star_count + 1
				}
			},
			
			heart(){
				if(sessionStorage.getItem('user_id') == ''){
				  uni.showToast({
				      title: '请登录后重试',  
				      icon: 'none', // 可以是 'success', 'loading', 'none'  
				      duration: 1000 // 持续展示时间，单位 ms  
				  });
				  return
				}
				
				if(this.is_heart == true) {
					api.drop_heart(this.qid)
					this.is_heart = false
					this.heart_count = this.heart_count - 1
				}
				else {
					
					
					api.add_heart(this.qid)
					this.is_heart = true
					this.heart_count = this.heart_count + 1
				}
			},
			
			link_comment(){
				console.log(this.qid)
				uni.navigateTo({
					url:'../comment/comment?qid=' + this.qid
				});
			
			}
			
			
		    
		}
	}
</script>

<style>
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		width:400px;
	    display: flex;
	
	
	}

	.title {
		font-size: 36rpx;
		color: black;
		
		margin-bottom: 30px;
	    
	
	}
	
	.btn{
		
	}
	
	.btn view{
	 display: flex;
	 line-height: 56px;
	
	
		
	}
	
	.btn view text{
		margin-left:20px;
	}
	
	.btn button{
		width: 200px;
	    margin-bottom: 10px;
		
	}
	
	.normal{
		
	}
	
	.right{
		background-color: greenyellow;
		color: black;
	
	
	}

	.wrong{
		background-color: crimson;
		color: black;
	}
	
	.rights{
		background-color:#007AFF;
		position: absolute;
		height:46px;
		width:10%;
		border-radius:5px;
		margin-left: -13px;
		z-index: 1;
		opacity: 0.5;
		transition: 0.5s;
		
	}
	
	button{
		width:200px
	
	}
	.content-container::-webkit-scrollbar {  
	    display: none; /* 隐藏滚动条 */  
	}
	
</style>
