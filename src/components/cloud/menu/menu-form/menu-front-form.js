const menuFormMixin = require('./menu-form-mixin/menu-form-mixin');
const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');

export default {
  mixins: [menuFormMixin],
  data() {
    return {
    	menuDetailUrl: apiPath.getMenuFrontDetailUrl,
      menuGroupUrl: apiPath.getMenuFrontGroupUrl,
      addressGroupUrl: apiPath.getMenuFrontAddressGroupUrl,
      menuAddUrl: apiPath.menuFrontAddUrl,
      menuUpdateUrl: apiPath.menuFrontUpdateUrl,
    }
  }
}