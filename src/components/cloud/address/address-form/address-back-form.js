const addressFormMixin = require('./address-form-mixin/address-form-mixin');
const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');

export default {
  mixins: [addressFormMixin],
  data() {
    return {}
  }
}