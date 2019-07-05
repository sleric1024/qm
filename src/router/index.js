import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/components/Recommend/Recommend'
import Ranking from '@/components/Ranking/Ranking'
import Search from '@/components/Search/Search'
import Neid from '@/components/Recommend/Neid'


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
    }, {
      name: 'recommoned.neidi',
      path: '/recommond/neidi',
      component: Neid
    }, {
      name: 'recommoned.gangtai',
      path: '/recommond/gangtai',
      component: Ranking
    }, {
      name: 'recommoned.oumei',
      path: '/recommond/oumei',
      component: Ranking
    }, {
      name: 'recommoned.hanguo',
      path: '/recommond/hanguo',
      component: Ranking
    }, {
      name: 'recommoned.riben',
      path: '/recommond/riben',
      component: Ranking
    }
  ]
})
