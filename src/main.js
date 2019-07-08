// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/base.css'
import Axios from 'axios'
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import store from './../store/index'

Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
