import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import { MyTaskRoute } from './Backstage/MySpace/MyTask'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ].concat(MyTaskRoute)
  // .concat()
})
