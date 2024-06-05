<template>

	
	<view>
		
		
		
		
		<view class="uv-demo-block__content label">
			<uv-tabs :list="list1" @click="click" :current="0" 		
			:activeStyle="{
			color: '#303133',
			fontWeight: 'bold',
			transform: 'scale(1.05)'
		}">
			</uv-tabs>
		</view>
		
		
		
	<view class="content">
	
	<view v-if="type == 0">
		<uv-list v-for="(item,index) in star_list" :key="index">
			<uv-list-item :title="item[4]" @click="toStar(index)" clickable></uv-list-item>
		</uv-list>
	</view>
	
	<view v-else>
		<uni-list v-for="(item, index) in star_list" :key="index" class="list">
		   
		    <view>{{item[4]}}</view>
			<view :class="item[9] === 0? 'right' : null">A:&nbsp&nbsp{{item[5]}}</view>
			<view :class="item[9] === 1? 'right' : null">B:&nbsp&nbsp{{item[6]}}</view>
			<view :class="item[9] === 2? 'right' : null">C:&nbsp&nbsp{{item[7]}}</view>
			<view :class="item[9] === 3? 'right' : null">D:&nbsp&nbsp{{item[8]}}</view>
		</uni-list>  
		
		
	</view>
	
	</view>
	
	
	
	
	</view>
</template>

<script>
	import api from "../../api/api.js"
	export default {
		async onLoad(){
			this.star_list = await api.get_star_list(sessionStorage.getItem('user_id'))
			
		},
		data() {
			return {
				star_list:"",
				type:"",
				list1:[
					{
						id:0,
						name:"刷题模式"
					},
					{
						id:1,
						name:"背题模式"
					}
				]
				
			
			}
		},
		methods: {
			toStar(index){
				console.log(index)
				uni.navigateTo({
					url:"../index/index?is_star=true&index=" + index
				});
			},
			click(e){
				console.log(e)
				this.type = e.id
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

.label{


background-color: rgb(255, 255, 255);
width:100%;
position: fixed;
top: 40px;
z-index:2
}

	
.content{
	padding-top: 40px;
}
</style>
