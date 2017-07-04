  const apiPath = require('../../../../service/requestPath.js');
  const tip = require('../../../../common/components/base/pop/tip');
  const ajax = require('appUtil/ajaxHttp');
  const template = require('./tboxDictionary-list.tpl');
  const commonMixin = require('../../../mixin/commonMixin');
  require('./tboxDictionary-list.scss');

  export default {
    name: "tboxDictionary",
    template,
    mixins: [commonMixin],
    data() {
      return {
        thItems: ["序号", "型号", "生产厂商", "描述","创建时间", "操作"],
        thLength: 6,
        url: apiPath.getTboxListInfoUrl,
        tboxDictionaryEditBtn: true,
        tboxDictionaryAddBtn: true
      }
    },
    methods: {
      fetchQuery({ queryOpt }) {
        this.$refs.tableData.query(queryOpt).fetch();
      }
    }
  }