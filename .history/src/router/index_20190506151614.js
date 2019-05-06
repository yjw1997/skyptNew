import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import {MyTaskRoute} from './Backstage/MySpace/MyTask'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ].concat(MyTaskRoute)
})
