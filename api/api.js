var url = "http://154.12.26.163:5000/"





export default {
	
	



login(id,pwd){


	
	var result = ""

	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "logins",
			data:{
				id:id,
				pwd:pwd
			},
			success: (res) => {
				result = res.data
				console.log("api")
				console.log(result)
				console.log("api")
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	console.log(112312323)
	console.log(web)
	
	return web
	
	

	
	
	

},
 
//增加收藏
get_star(user_id,qid){


	
	var result = ""

	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "get_star",
			data:{
				user_id:user_id,
				qid:qid
			},
			success: (res) => {
				result = res.data
				console.log("api")
				console.log(result)
				console.log("api")
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	console.log(112312323)
	console.log(web)
	
	return web
	
	

	
	
	

},

//取消收藏
drop_star(user_id,qid){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "drop_star",
			data:{
				user_id:user_id,
				qid:qid
			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},



//是否收藏
get_is_star(user_id,qid){
	
	var result = ""
	
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "is_star",
			data:{
				user_id:user_id,
				qid:qid
			},
			success: (res) => {
				result = res.data
				console.log("api")
				console.log(result)
				console.log("api")
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	console.log(112312323)
	console.log(web)
	
	return web
	
	
	
},

//根据种类获取题目
getitemr(item_id,qid){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "getitemr",
			data:{
				item_id:item_id,
				qid:qid
			},
			success: (res) => {	
				var result = res.data
				if(result == null){
					uni.showToast({
						    title: '该分类题库为空',  
							icon: 'none',  
						    duration: 2000 // 持续显示，直到手动隐藏  
					});
				}
				
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	
	return web
},

//个性化推荐
recoment(user_id,qid){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "recoment",
			data:{
				user_id:user_id,
				qid:qid
			},
			success: (res) => {	
				var result = res.data
				if(result == null){
					uni.showToast({
						    title: '该分类题库为空',  
							icon: 'none',  
						    duration: 2000 // 持续显示，直到手动隐藏  
					});
				}
				
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	
	return web
},
 

//增加收藏人数
add_star(qid){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "add_star",
			data:{
				qid:qid
			},
			success: (res) => {
				var result = res.data	
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	
	return web
},
 
 
//减少收藏人数
del_star(qid){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "del_star",
			data:{
				qid:qid
			},
			success: (res) => {
				var result = res.data	
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	
	return web
},


//获取收藏列表
get_star_list(user_id){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "get_star_list",
			data:{
				user_id:user_id
			},
			success: (res) => {
				var result = res.data	
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	
	return web
},


//点赞
add_heart(qid){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "add_heart",
			data:{
				qid:qid
			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},

//取消点赞
drop_heart(qid){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "drop_heart",
			data:{
				qid:qid
			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},


//发表评论
push_comment(qid,user_id,content){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "push_comment",
			data:{
				qid:qid,
				user_id:user_id,
				content:content
			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},



//获取评论
get_comment(qid){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "get_comment",
			data:{
				qid:qid,

			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},


//添加互动
react(get_id,push_id,qid,type){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "react",
			data:{
				get_id:get_id,
				push_id:push_id,
				qid:qid,
				type:type,

			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},

//添加评论互动
react_comment(get_id,push_id,qid,content,type){
	console.log(content)
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "react_comment",
			data:{
				get_id:get_id,
				push_id:push_id,
				qid:qid,
				content:content,
				type:type,
	
			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	
	
	
	return web
},




//获取互动
get_react(user_id){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "get_react",
			data:{
				user_id:user_id

			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},



//获取未读信息
count_react(user_id){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "count_react",
			data:{
				user_id:user_id

			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},


//设为已读
is_read(user_id){
	var web = new Promise((resolve, reject) => {
		uni.request({
			url: url + "is_read",
			data:{
				user_id:user_id

			},
			success: (res) => {
				var result = res.data
	
				
				resolve(result);  // 千万别忘写！！！
			}
		})
	})
	

	
	return web
	

},


 

}