const Vue = require('vue');

module.exports = {
  GET_NET_CONTROLLER_LIST(state, res) {
    Vue.set(state.netController, 'list', res.data);
    // state.netController.list.isEmpty =
    //     res.data.records.length === 0 ?
    //       true :
    //       false;
  }
}