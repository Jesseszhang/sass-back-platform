const addressListMixin = require('./address-list-mixin/address-list-mixin.js');
const apiPath = require('../../../../service/requestPath.js');

export default {
  mixins: [addressListMixin],
  data() {
    return {
      queryOpt: {
      	platformType: 0,
      	type: 0
      }
    }
  }
}