import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/components/Index')
const News = () => import('@/components/News')
const About = () => import('@/components/Abouts')
const Contact = () => import('@/components/Contact')
const Technology = () => import('@/components/Technology')
const Case = () => import('@/components/Case')
const News_detail = () => import('@/components/News_detail')

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
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        keepAlive: true,   //判断是否需要做页面缓存
        hedNum: 5          //页面刷新保持相应导航高亮
      }
    },{
      path: '/case',
      name: 'Case',
      component: Case,
      meta: {
        keepAlive: true,   //判断是否需要做页面缓存
        hedNum: 4          //页面刷新保持相应导航高亮
      }
    },{
      path: '/technology',
      name: 'Technology',
      component: Technology,
      meta: {
        keepAlive: true,   //判断是否需要做页面缓存
        hedNum: 2          //页面刷新保持相应导航高亮
      }
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        keepAlive: true,   //判断是否需要做页面缓存
        hedNum: 6          //页面刷新保持相应导航高亮
      }
    },{
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        keepAlive: true,   //判断是否需要做页面缓存
        hedNum: 3          //页面刷新保持相应导航高亮
      },
      children:[
        {
          path: 'news_detail/:id',
          name: 'News_detail',
          component: News_detail,
          meta: {
            keepAlive: false,   //判断是否需要做页面缓存
            hedNum: -3          //页面刷新保持相应导航高亮
          }
        }
      ]
    }
  ]
})
