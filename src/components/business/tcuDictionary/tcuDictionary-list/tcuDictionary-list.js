  const apiPath = require('../../../../service/requestPath.js');
  const tip = require('../../../../common/components/base/pop/tip');
  const template = require('./tcuDictionary-list.tpl');
  const commonMixin = require('../../../mixin/commonMixin');
  require('./tcuDictionary-list.scss');

  export default {
    name: "tcuDictionary",
    template,
    mixins: [commonMixin],
    data() {
      return {
        thItems: ["序号", "型号", "生产厂商", "描述","创建时间", "操作"],
        thLength: 6,
        url: apiPath.getTcuListInfoUrl,
        tcuDictionaryEditBtn: true,
        tcuDictionaryAddBtn: true
      }
    },
    methods: {
      fetchQuery({ queryOpt }) {
        this.$refs.tableData.query(queryOpt).fetch();
      }
    }
  }