  const operateService = require('../../operateService');
  const apiPath = require('../../../../service/requestPath.js');
  const tip = require('../../../../common/components/base/pop/tip');
  const ajax = require('appUtil/ajaxHttp');
  const template = require('./commercial-list.tpl');
  const commonMixin = require('../../../mixin/commonMixin');
  require('./commercial-list.scss');

  export default {
    name: "commercialList",
    template,
    mixins: [commonMixin],
    data() {
      return {
        thItems: ["序号", "商户号", "商户级别", "商户简称","商户类型", "行业", "类别", "联系人", "联系电话", "所属上级", "商户账号", "操作"],
        thLength: 12,
        url: apiPath.getCommercialListUrl,
        commLevelList: [
          {label: "请选择商户级别", value: null},
          {label: "集团商户", value: "1"},
          {label: "商户", value: "2"},
          {label: "子商户", value: "3"}
        ],
        commTypeList: [
          {label: "请选择商户类型", value: null},
          {label: "个人", value: "1"},
          {label: "企业", value: "2"}
        ],
        commCategoryList: [
          {label: "请选择商户类别", value: null},
          {label: "实体", value: "1"},
          {label: "虚拟", value: "2"}
        ],
        commIndustryList: [
          {label: "请选择商户行业", value: null},
          {label: "商业体", value: "1"},
          {label: "住宅", value: "2"},
          {label: "公共设施", value: "3"},
          {label: "政府机构", value: "4"},
          {label: "其他", value: "5"}
        ]
      }
    },
    methods: {
      fetchQuery({ queryValue }){
        this.$refs.tableData.query(queryValue).fetch();
      }
    }
  }