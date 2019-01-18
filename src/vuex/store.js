import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

let store = new vuex.Store({
  state: {
    headColorNum: 0,      //头部全局控制高亮
    newsFlag: true,
    footerFlag: true,
    sendHost: 'http://api.jinkaidoor.com/v1',  //正式服务器地址
    qiNiuServer:'http://cdn.jinkaidoor.com/web' //七牛云正式服务器
  },
  mutations: {
    headColorNum: (state,params) => state.headColorNum = params,
    newsFlag: (state,params) => state.newsFlag = params,
    footerFlag: (state,params) => state.footerFlag = params,
  },
  actions: {
    newsFlag ({ commit },params) {
      commit('newsFlag',params)
    },
    headColorNum ({ commit },params) {
      commit('headColorNum',params)
    },
    footerFlag ({ commit },params) {
      commit('footerFlag',params)
    }
  }
})
export default store

