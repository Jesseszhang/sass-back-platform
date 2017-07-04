const template = require('../address-list.tpl');
const commonMixin = require('../../../../mixin/commonMixin');
const apiPath = require('../../../../../service/requestPath.js');
require('../address-list.scss');

module.exports = {
  template,
  mixins: [commonMixin],
  data() {
    return {
      url: apiPath.getAddressListInfoUrl,
      addPath: "",
      editPath: "",
      detailPath: "",
      thItems: ["序号", "url", "名称", "说明", "地址类型", "类型", "操作" ],
      thLength: 7,
      curType: "",
      statusList: [
        {label: "请选择访问类型", value: null},
        {label: "控制访问权限", value: "0"},
        {label: "不控制访问权限", value: "1"},
        {label: "禁止访问", value: "2"},
      ],
      typeList: [
        {label: "主地址", value: "0"},
        {label: "从地址", value: "1"}
      ],
      statusArr: ['控制访问权限', '不控制访问权限', '禁止访问'],
      typeArr: ['主地址', '从地址']
    }
  },
  /**
   * [ready description] 不推荐使用 computed
   * @return {[type]} [description]
   */
  ready() {
    let type = this.$route.type
    if (type === 'back') {
      this.addPath = "/page/backstage/address/add"
      this.editPath = "/page/backstage/address/update"
      this.detailPath = "/page/backstage/address/detail"
      this.curType = 0;
    } else if (type === 'front') {
      this.addPath = "/page/address/add"
      this.editPath = "/page/address/update"
      this.detailPath = "/page/address/detail"
      this.curType = 0;
    } else if (type === 'app') {
      this.addPath = "/page/appBack/address/add"
      this.editPath = "/page/appBack/address/update"
      this.detailPath = "/page/appBack/address/detail"
      this.curType = 1;
    }
  },

  methods: {
    fetchQuery({ queryValue }) {
      let platformType = {
        platformType: this.curType
      }
      let queryParams = Object.assign(queryValue, platformType)
      this.$refs.tableData.query(queryParams).fetch();
    }
  }
}