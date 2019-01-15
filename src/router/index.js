import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/components/Index')
const news = () => import('@/components/News')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true,   //判断是否需要做页面缓存
        hedNum: 0          //页面刷新保持相应导航高亮
      }
    },{
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        keepAlive: true,   //判断是否需要做页面缓存
        hedNum: 4          //页面刷新保持相应导航高亮
      }
    }
  ]
})
