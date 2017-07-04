//register global variable
const nameSpace = require('src/common/utils/nameSpace')

nameSpace('COMMON', "componentHub")

COMMON.componentHub = {
  dropMenu: [],
  inputBox: [],
  bubble: [],
  dataPicker: [],
  breadCrumb: [],
  selectTree: [],
  btn: []
}

require('./event/event')

window.CB = {
  TOKEN: window.localStorage.getItem('sassToken'),
  BTNLIST:{},
  MENULIST: [],
  componentHub: {
    menus: null
  },
  headerLayout: {}
}

require('font-awesome-sass-loader');
require('bootstrap-loader')
require('nprogress');

require('src/common/common.js');
require('appUtil/ajaxSetting');

require('scssDir/common/reset.css');
require('scssDir/common/main.scss');
require('scssDir/common/common.scss');
require('./scss/common/btn.scss');
require('scssDir/common/box.scss');
require('scssDir/common/article.scss');
require('./scss/common/transition.scss');


