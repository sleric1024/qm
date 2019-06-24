import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Like from '@/components/Like/Like'
import History from '@/components/History/History'
import Collect from '@/components/Collect/Collect'

Vue.use(Router)
// 注册全局组建 router-view router link
// 挂载Vue.prototype.$router || $route

export default new Router({
  routes: [
    {
      path: '/like',
      name: 'like',
      component: Like
    }, {
      path: '/history',
      name: 'history',
      component: History
    }, {
      path: '/collect',
      name: 'collect',
      component: Collect
    }
  ]
})
