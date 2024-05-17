
<template>  
  <view class="container">  
    <view class="content-container">  
      <!-- 评论区内容 -->  
 
        <!-- 显示评论内容 -->  
       <view>21312312</view>
	    <view>21312312</view>
		 <view>21312312</view>
		  <view>21312312</view>
		   <view>21312312</view>
		    <view>21312312</view>
			 <view>21312312</view>
			 <view>21312312</view>
			  <view>21312312</view>
			   <view>21312312</view>
			    <view>21312312</view>
			     <view>21312312</view>
			 	 <view>21312312</view>
				 <view>21312312</view>
				  <view>21312312</view>
				   <view>21312312</view>
				    <view>21312312</view>
				     <view>21312312</view>
				 	 <view>21312312</view>
					 <view>21312312</view>
					  <view>21312312</view>
					   <view>21312312</view>
					    <view>21312312</view>
					     <view>21312312</view>
					 	 <view>21312312</view>
						 <view>21312312</view>
						  <view>21312312</view>
						   <view>21312312</view>
						    <view>21312312</view>
						     <view>21312312</view>
						 	 <view>21312312</view>
			 
      </view>  
      <!-- 其他评论内容... -->  
  
    <view class="fixed-input-container">  
      <textarea class="fixed-input" placeholder="请输入评论..."></textarea>  
      <!-- 发送按钮等 -->  
    </view>  
  </view>  
</template>  
  

  

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>  
.container {  
  display: flex;  
  flex-direction: column;  
  height: 100vh;  
}  
  
.content-container {  
  flex: 1; /* 占据剩余空间 */  
  overflow-y: auto; /* 启用垂直滚动 */  
  padding-bottom: 60px; /* 根据输入框的高度调整 */  
}  
  
.fixed-input-container {  
  position: fixed;  
  bottom: 0;  
  left: 0;  
  width: 100%;  
  background-color: white; /* 可选，确保输入框与背景色一致 */  
  /* 其他样式 */  
}  
  
.fixed-input {  
  height: 50px; /* 输入框的高度 */  
  /* 其他样式 */  
}  
</style>  