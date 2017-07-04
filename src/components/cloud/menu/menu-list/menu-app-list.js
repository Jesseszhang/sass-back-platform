const menuListMixin = require('./menu-list-mixin/menu-list-mixin.js');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('../../../../service/ajax');
const tip = require('../../../../common/components/base/pop/tip');

export default {
  mixins: [menuListMixin],
  data() {
    return {
      url: apiPath.getMenuListUrl
    }
  }
}