const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./roleSet-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
require('./roleSet-list.scss');

export default {
  name: "roleSet",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "角色名称", "所属有权功能", "状态", "操作" ],
      thLength: 5,
      url: apiPath.getRoleListUrl,
      queryParams: {},
      roleSetAddBtn: false,
      roleSetEditBtn: false,
      statusList: [
        {label: "请选择状态", value: null},
        {label: "禁用", value: "0"},
        {label: "启用", value: "1"}
      ],
      platformTypeList: [
        {label: "请选择所属有权功能", value: null},
        {label: "公有云后台", value: "0"},
        {label: "app后台", value: "1"}
      ]
    }
  },

  methods: {
    fetchQuery({ queryValue }){
      this.$refs.tableData.query(queryValue).fetch();
    }
  }
}