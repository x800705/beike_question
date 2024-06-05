<template>
  <view class="content">
    <ad-rewarded-video adpid="1032117052" :url-callback="urlCallback" :loadnext="true" v-slot:default="{loading, error}"  @close="onadclose">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
	
	<view>{{data}}</view>
	
  </view>
</template>

<script>
export default {
  data() {
    return {
      urlCallback: {
        userId: 'testuser',
        extra: 'testdata'
      },
	  data:"123",
    }
  },
  
    methods: {
      onadclose(e) {
        const detail = e.detail
        // 用户点击了【关闭广告】按钮
        if (detail && detail.isEnded) {
          // 正常播放结束
          // 这里应该联网给予用户激励。且这段代码应该做安全保护，详见下文中的“安全注意”
		  
		  uniCloud.callFunction({
		      name: "uniAD",
			  data:{is_get:1},
			  success: (res) => {
				  uni.showToast({  
				      title: '成功',  
				      icon: 'success',  
				      duration: 2000  
				  });
				  
			  	this.data = res.data
			  }
		      
		  }),
		  
		  
		
		  
		  
		  
          console.log("onadclose " + detail.isEnded);
		  
        } else {
          // 播放中途退出
          console.log("onadclose " + detail.isEnded);
		  
        }
      }
    }
}
</script>
