const Vue = require('vue');
module.exports = {
  GET_CHARGING_TEMPLATE_LIST(state, res) {
    Vue.set(state.chargingTemplate, 'list', res.data);
  },
  GET_CHARGING_TEMPLATE_VERSION_LIST(state, res) {
    Vue.set(state.chargingTemplate, 'versionList', res.data);
  },
  GET_CHARGING_TEMPLATE_DETAIL(state, res) {
    Vue.set(state.chargingTemplate, 'detail', res.data);
  }
}
