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
	
	
	
}
 

}