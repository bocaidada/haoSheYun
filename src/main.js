// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import scrollReveal from 'scrollreveal';
Vue.prototype.$scrollReveal = scrollReveal();

Vue.prototype.$reveal = (className,flag,direction) => {
  Vue.prototype.$scrollReveal.reveal(className, {
    // 动画的时长
    duration: 500,
    // 延迟时间
    delay: 100,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: direction,
    // 回滚的时候是否再次触发动画
    reset: flag,
    // 在移动端是否使用动画
    mobile: false,
    // 滚动的距离，单位可以用%，rem等
    distance: '120px',
    // 其他可用的动画效果
    opacity: 0.001,
    easing: 'linear',
    scale: 1,
  })
}

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
