const template = require('./application-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
const apiPath = require('../../../../service/requestPath.js');
require('./application-list.scss');

module.exports = {
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "公有云应用", "状态", "操作" ],
      thLength: 4,
      url: apiPath.getApplicationListUrl
    }
  },
  methods: {
    fetchQuery({ queryValue }) {
      this.$refs.tableData.query(queryValue).fetch();
    }
  }
}