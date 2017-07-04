const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./jobSet-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
require('./jobSet-list.scss');

export default {
  name: "jobSet",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "岗位名称", "状态", "人数", "操作" ],
      thLength: 5,
      url: apiPath.getJobListUrl,
      jobSetAddBtn: false,
      jobSetEditBtn: false,
      statusList: [
        {label: "请选择状态", value: ""},
        {label: "禁用", value: "0"},
        {label: "启用", value: "1"}
      ]
    }
  },
  methods: {
    fetchQuery({ queryValue }) {
      this.$refs.tableData.query(queryValue).fetch();
    }
  }
}