require('../common/components/common/table-data/table-data');
require('../common/components/common/search-tool/search-tool');
require('../common/components/base/form-area/form-area');
require('../common/components/base/input-box/input-box');
require('../common/components/base/btn/btn');
require('../common/components/base/upload/upload')
require('../common/components/common/drop-menu-input/drop-menu-input')
require('../common/components/base/checkbox/checkbox');
require('../common/components/base/drop-menu/drop-menu');
require('src/common/common.js');
require('src/common/components/lib/core.js');
require('src/common/components/lib/directive.js');
require('src/common/components/lib/filter.js');
require('src/common/components/lib/transition.js');
require('./app.scss');
require('../service/ajaxSetting.js');
import "font-awesome-sass-loader"
import store from '../vuex/store'
const tip = require('../common/components/base/pop/tip');
const commonComponent = require('comDir/components/layout/common-component/common-component');
const template = require('./app.tpl');

module.exports = {
	name: 'app',
	template,
  components: {
    commonComponent
  },
  store
}