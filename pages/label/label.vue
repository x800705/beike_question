<template>  
  <view>  
		<view class="uv-demo-block__content">
			<uv-tabs :list="list1" @click="click" :current="3" 		:activeStyle="{
			color: '#303133',
			fontWeight: 'bold',
			transform: 'scale(1.05)'
    	}">
			</uv-tabs>
		</view>
			
			
  </view>  
</template>  
  
<script>  
export default {  
  data() {  
    return {  
	list1: [{
		name: '关注',
	}, {
		name: '推荐',
	}, {
		name: '电影'
	}, {
		name: '科技'
	}, {
		name: '音乐'
	}, {
		name: '美食'
	}, {
		name: '文化'
	}, {
		name: '财经'
	}, {
		name: '手工'
	}],
    };  
  },  
  methods: {  
    swiperChange(e) {  
      this.currentNavIndex = e.detail.current; // 更新当前选中的导航栏索引  
      // 根据索引更新页面内容区域的显示  
    },
	
	click(a){
		console.log(a)
	}
  }  
};  
</script>  
  
<style>  
.swiper-container {  
  /* swiper 样式设置 */  
  height: 50px; /* 根据需要设置导航栏的高度 */  
  /* 其他样式 */  
}  
.nav-bar {  
  /* 导航栏的样式设置 */  
  display: flex;  
  align-items: center;  
  justify-content: center;  
  /* 其他样式 */  
}  
</style>