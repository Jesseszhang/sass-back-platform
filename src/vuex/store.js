import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/state'
import mutations from './mutation/mutation'
const common = require('../common/vuex/module/common');

Vue.use(Vuex)

let curState = Object.assign(state, common.state)

module.exports = new Vuex.Store({
  state: curState,
  mutations
})
