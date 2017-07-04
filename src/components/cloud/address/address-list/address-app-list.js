const addressListMixin = require('./address-list-mixin/address-list-mixin');

export default {
  mixins: [addressListMixin],
  data() {
    return {
      queryOpt: {
      	platformType: 1,
      	type: 0
      }
    }
  }
}