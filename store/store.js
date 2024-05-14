// store/index.js  
import Vue from 'vue'  
import Vuex from 'vuex'  
  
Vue.use(Vuex)  
  
export default new Vuex.Store({  
  state: {  
    // 用户登录状态  
    isLoggedIn: false,  
    // 用户信息（可选）  
    userInfo: null ,
	
	userId : null,
	
	url:"http://154.12.26.163:5000/"
  },  
  mutations: {  
    // 登录成功时调用  
    loginSuccess(state, userInfo) {  
      state.isLoggedIn = true  
      state.userInfo = userInfo  
    },  
    // 登出时调用  
    logout(state) {  
      state.isLoggedIn = false  
      state.userInfo = null  
    }  
  },  
  actions: {  
    // 异步登录逻辑（通常与后端API交互）  
    async login({ commit }, userInfo) {  
      try {  
        // 假设这里有一个向后端发送登录请求的函数  
        const response = await loginApi(userInfo)  
        if (response.success) {  
          commit('loginSuccess', response.data)  
          // 这里还可以存储token到本地存储等  
        }  
      } catch (error) {  
        // 处理错误  
        console.error(error)  
      }  
    },  
    // 登出逻辑  
    logout({ commit }) {  
      commit('logout')  
      // 这里还可以清除本地存储的token等  
    }  
  },  
  getters: {  
    isLoggedIn: state => state.isLoggedIn,  
    userInfo: state => state.userInfo  
  }  
})