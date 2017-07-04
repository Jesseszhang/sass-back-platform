import store from '../../vuex/store'
const template = require('./nav-header.tpl');
const ajax = require('appUtil/ajaxHttp');
require('./nav-header.scss');

export default {
  name: 'HeaderLayout',
  template
  data() {
    return {}
  },

  vuex: {
    getters: {
      crumbs: state => state.crumbs
    }
  },
  store,

  components: {}
}