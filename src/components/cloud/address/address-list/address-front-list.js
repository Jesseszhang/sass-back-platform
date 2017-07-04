const apiPath = require('../../../../service/requestPath.js');
const addressListMixin = require('./address-list-mixin/address-list-mixin');

export default {
  mixins: [addressListMixin],
  data() {
    return {
      url: apiPath.getFrontAddressListUrl,
      queryOpt: {
      	platformType: 0,
      	type: 0
      }
    }
  }
}