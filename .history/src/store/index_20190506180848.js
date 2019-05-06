import Vue from 'vue'
import Vuex from 'vuex'
import Backstage from './modules/Backstage'
import collection from './modules/FrontDesk'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footerStatus,
    collection
  }
})
