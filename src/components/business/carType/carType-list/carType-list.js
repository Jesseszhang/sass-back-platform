  const apiPath = require('../../../../service/requestPath.js');
  const tip = require('../../../../common/components/base/pop/tip');
  const ajax = require('appUtil/ajaxHttp');
  const template = require('./carType-list.tpl');
  const commonMixin = require('../../../mixin/commonMixin');
  require('./carType-list.scss');
  
  export default {
    name: "carType",
    template,
    mixins: [commonMixin],
    data() {
      return {
        thItems: ["序号", "车型", "车系", "品牌名称", "操作"],
        thLength: 5,
        url: apiPath.getCarTypeUrl,
        carTypeAddBtn: false,
        carTypeEditBtn: false
      }
    },
    
    methods: {
      fetchQuery({ queryOpt }) {
        this.$refs.tableData.query(queryOpt).fetch();
      }
    }
  }