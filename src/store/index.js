import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import cerateLogger from 'vuex/dist/logger' // 在控制台下打印修改记录

Vue.use(Vuex)

// 开发模式下开启调试，检查是否是通过mutations修改state,有性能消耗，生产下不开启
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [cerateLogger()] : []
})
