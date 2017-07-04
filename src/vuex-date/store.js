const Vue = require('vue');
const Vuex = require('vuex');

const common = require('./module/common');
const maintain = require('./module/maintain');
const marketing = require('./module/marketing');
const login = require('./module/login');

Vue.use(Vuex);

module.exports = new Vuex.Store({
  modules: {
    common,
    maintain,
    marketing,
    login
  }
})