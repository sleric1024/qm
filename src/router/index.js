import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/components/Recommend/Recommend'
import Ranking from '@/components/Ranking/Ranking'
import Search from '@/components/Search/Search'
import NeiD from '@/components/Recommend/NeiD'
import GangT from '@/components/Recommend/GangT'
import OuM from '@/components/Recommend/OuM'
import HanG from '@/components/Recommend/HanG'
import RiB from '@/components/Recommend/RiB'


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
      component: NeiD
    }, {
      name: 'recommoned.gangtai',
      path: '/recommond/gangtai',
      component: GangT
    }, {
      name: 'recommoned.oumei',
      path: '/recommond/oumei',
      component: OuM
    }, {
      name: 'recommoned.hanguo',
      path: '/recommond/hanguo',
      component: HanG
    }, {
      name: 'recommoned.riben',
      path: '/recommond/riben',
      component: RiB
    }
  ]
})
