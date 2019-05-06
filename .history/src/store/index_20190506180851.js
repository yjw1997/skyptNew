import Vue from 'vue'
import Vuex from 'vuex'
import Backstage from './modules/Backstage'
import FrontDesk from './modules/FrontDesk'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Backstage,
    collection
  }
})
