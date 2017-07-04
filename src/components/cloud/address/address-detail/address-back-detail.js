const addressDetailMixin = require('./address-detail-mixin/address-detail-mixin');
const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');

export default {
  mixins: [addressDetailMixin],
  data() {
    return {}
  }
}