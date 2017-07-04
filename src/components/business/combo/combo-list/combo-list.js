  const apiPath = require('../../../../service/requestPath.js');
  const tip = require('../../../../common/components/base/pop/tip');
  const ajax = require('appUtil/ajaxHttp');
  const template = require('./combo-list.tpl');
  const commonMixin = require('../../../mixin/commonMixin');
  require('./combo-list.scss');
  
  export default {
    name: "comboList",
    template,
    mixins: [commonMixin],
    data() {
      return {
        thItems: ["序号", "套餐名称", "套餐价格（元/年）", "创建时间", "操作"],
        thLength: 5,
        url: apiPath.comboListUrl
      }
    },
    
    methods: {
      fetchQuery({ queryOpt }) {
        this.$refs.tableData.query(queryOpt).fetch();
      }
    }
  }