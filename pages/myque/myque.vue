<template>
	<view>
		<view>
			<uni-list v-for="(item, index) in que_list" :key="index" class="list">
			    <view>{{item[4]}}</view>
				<view :class="item[9] === 0? 'right' : null">A:&nbsp&nbsp{{item[5]}}</view>
				<view :class="item[9] === 1? 'right' : null">B:&nbsp&nbsp{{item[6]}}</view>
				<view :class="item[9] === 2? 'right' : null">C:&nbsp&nbsp{{item[7]}}</view>
				<view :class="item[9] === 3? 'right' : null">D:&nbsp&nbsp{{item[8]}}</view>
				<view class="btn">
				<uv-button type="primary" style="width:70px;padding-right: 5px;" @click="edit(item[0])">编辑</uv-button>
				<uv-button type="error" style="width:70px" @click="delete_it(item[0])">删除</uv-button>
				</view>
			</uni-list>  
		</view>
	</view>
</template>

<script>
	import api from "@/api/api"
	import config from "@/api/config"
	export default {
		data() {
			return {
				que_list:[],
				user_id:""
			}
		},
		async onLoad(){
			this.user_id = sessionStorage.getItem('user_id')
			this.que_list = await api.get_my_que(this.user_id)
		},
		methods: {
			async edit(id){
				uni.navigateTo({
					url:'../myque/edit_que/edit_que?qid=' + id
				})
			},
			
				async delete_it(id) {  
					uni.showModal({  
						title: "提示",  
						content: '你确定要删除?',  
						success: async (res) => { // 注意这里使用了箭头函数来保持 this 的上下文  
							if (res.confirm) {  
								// 执行确认后的操作  
								await api.delete_que(id);  
								config.success_alerts("已删除");  
								// 直接设置 this.que_list 的值  
								this.que_list = await api.get_my_que(sessionStorage.getItem('user_id'));  
								// 这里不需要使用 this.$set，因为我们已经直接设置了 this.que_list 的值  
								// 如果 this.que_list 是响应式的，Vue 会自动重新渲染相关部分  
							}  
						}  
					});  
				},
			
			
			
		}
	}
</script>

<style>
.uv-button{
	padding: 10px;
}
.btn{
	display: flex;
	width: 40px;

}

.list view{
	margin-top:15px;
	font-size: 20px;
}

.right{
	color:red
}



	

</style>
