export default {
	
	
alerts(content){
	uni.showToast({
	    title: content,  
	    icon: 'none', // 可以是 'success', 'loading', 'none'  
	    duration: 1000 // 持续展示时间，单位 ms  
	});
},

success_alerts(content){
	uni.showToast({
	    title: content,  
	    icon: 'success', // 可以是 'success', 'loading', 'none'  
	    duration: 1000 // 持续展示时间，单位 ms  
	});
}
	
	
}