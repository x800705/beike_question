<template>
	<view>
		
		
		<view style="margin-bottom:20px">
			
			<input placeholder="输入问题" v-model="que[4]">
			<input placeholder="输入分区" @click="openPicker" v-model="item">
			<uv-picker ref="picker" :columns="columns" @confirm="confirm"></uv-picker>
		</view>
		
		<view class="cos">
		
			<radio-group>
				<view> <input placeholder="选项A" v-model="que[5]">
					<radio @click="gans(0)" :checked="radio_array[0]"></radio>
				</view>
				<view> <input placeholder="选项B" v-model="que[6]">
					<radio @click="gans(1)" :checked="radio_array[1]"></radio>
				</view>
				<view> <input placeholder="选项C" v-model="que[7]">
					<radio @click="gans(2)" :checked="radio_array[2]"></radio>
				</view>
				<view> <input placeholder="选项D" v-model="que[8]">
					<radio @click="gans(3)" :checked="radio_array[3]"></radio>
				</view>
			</radio-group>
		
		</view>




		<uv-picker ref="picker" :columns="columns" @confirm="confirm"></uv-picker>




		<button style="margin-top: 30px; background-color: #4CD964;" @click="submit()">提交</button>
	</view>
</template>

<script>
	import api from "@/api/api"
	export default {
		data() {
			return {

				a: "",
				b: "",
				c: "",
				d: "",
				ans: "",
				url: "http://154.12.26.163:5000/",
				radio_array: [false, false, false, false],
				columns: [],
				item_list_id:[],
				item:"",
				item_id:"",
				user_id:"",
				qid:"",
				que:"",
				item_list:[],
			}
		},
		async onLoad(e){
			this.qid = e.qid
			//根据id获取题目内容
			this.que = await api.get_que(this.qid)
			console.log(this.que)
			this.radio_array[this.que[9]] = "true"
			
			await new Promise((resolve, reject) => {
				
				uni.request({
					url:this.url + "/getitem",
					success:(res) =>{
					console.log(res.data)
					this.item_list = res.data
					var item_list = []
					for(var i=0;i<res.data.length;i++){
						console.log(res.data[i][1])
						if(res.data[i][0] != -1) {
							item_list.push(res.data[i][1])
							this.item_list_id.push(res.data[i][0])
						}
					}
					
					this.columns.push(item_list)
			
					
					
					resolve('suc');  // 千万别忘写！！！
						
					}
				})
			})
			
			
			this.item = this.item_list[this.que[1]][1]

			
			
			
		},
		methods: {
			gans(index) {
				this.ans = index;
				this.radio_array = [false, false, false, false];
				this.radio_array[index] = true;
				console.log(this.radio_array)
			
			
			},
			
			openPicker() {
				this.$refs.picker.open();
			},
			
			confirm(e){
				console.log(e.value[0])
				this.item = e.value[0]
				console.log(this.item_list_id[e.indexs[0]])
				this.item_id = this.item_list_id[e.indexs[0]]
			},
			
			async submit(){
				var code = await api.change_q(que[0],que[4],this.item_id,que[5],que[6],que[7],que[8])
			}
			
			
		}
	}
</script>

<style>
	input {
		border: 1px solid #999999;
		border-radius: 4px;
		width: 260px;
		margin: 0px auto;
		height: 40px;
	}

	.cos input {
		margin-top: 3px;

	}

	.cos text {
		width: 400px
	}

	radio {
		margin: auto 0;
	}

	.cos view {
		display: flex;
	}
</style>
