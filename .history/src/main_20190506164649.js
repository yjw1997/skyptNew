// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview' // 导入组件库
import 'iview/dist/styles/iview.css' // 导入样式
import { Http } from './https/https'
import store from './store'  // 引入store

Vue.use(iView)
Vue.config.productionTip = false
window.$https = Http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  
  components: { App },
  template: '<App/>'
})
