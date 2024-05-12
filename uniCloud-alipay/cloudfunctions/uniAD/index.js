'use strict';

//var sign = ""

 async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder('utf-8').encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  //console.log(hashHex);
  return hashHex;
}






exports.main = async (event, context) => {
	
	const secret = "09647e3968d1d6b97afac7e1fde7bddba7f85565a849cde3ca3cc74bd36fd280";
	var is_value;
	
	//取数据
	if(event.is_get === 1){
		console.log("确认！")
		return {
			data:is_value
		}
	}
	
	//请求
	else{
		is_value = 0;
		//event为客户端上传的参数
		console.log('event : ', event)
		
		
		var trans_id = event.trans_id
		var sign = await sha256(secret + ":" + trans_id);
		
	
		
		//return sign
		//var sign2 = crypto.createHash('sha256')
		
		console.log(sign)
		console.log(event.sign)
	

		
		if(sign == event.sign){
			console.log("same")
			 is_value = 1
		}
		
		
		
		
		
	}
	
	return {
		data:is_value
	}
	
	
	
	

	
	//const sign2 = crypto.createHash('sha256')
	
	
	

	
	//返回数据给客户端
	//return event
};
