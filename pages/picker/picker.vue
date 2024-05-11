<template>
	<view>
		<uv-picker ref="picker" :columns="columns" @confirm="confirm"></uv-picker>
		<button >打开</button>
		<input placeholder="fda" @click="openPicker" v-model="place">
	</view>
</template>
<script>
	export default {
		data() {
			return {
				columns: [
					['中国', '美国', '日本']
				],
				place:""
			}
		},
		methods: {
			openPicker() {
				this.$refs.picker.open();
			},
			confirm(e) {
				console.log('confirm', e);
				this.place = e.value
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
</style>