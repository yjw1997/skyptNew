import Vue from 'vue'
import Vuex from 'vuex'
import footerStatus from './modules/Backstage'
import collection from './modules/'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footerStatus,
    collection
  }
})
