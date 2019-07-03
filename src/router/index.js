import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/components/Recommend/Recommend'
import Ranking from '@/components/Ranking/Ranking'
import Search from '@/components/Search/Search'

Vue.use(Router)
// 注册全局组建 router-view router link
// 挂载Vue.prototype.$router || $route

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'recommond'
      }
    },
    {
      path: '/recommond',
      name: 'recommond',
      component: Recommend
    }, {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
