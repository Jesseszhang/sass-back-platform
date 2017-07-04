const apiPath = require('../../../service/requestPath.js');
const tip = require('../../../common/components/base/pop/tip');
const template = require('./dataCenter-list.tpl');
const commonMixin = require('../../mixin/commonMixin');
require('./dataCenter-list.scss');

export default {
  name: "userLog",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "时间", "用户", "IP","操作日志内容", "地址"],
      thLength: 6,
      url: apiPath.getSystemLogUrl
    }
  },
  methods: {
    fetchQuery({ queryOpt }) {
      this.$refs.tableData.query(queryOpt).fetch();
    }
  }
}