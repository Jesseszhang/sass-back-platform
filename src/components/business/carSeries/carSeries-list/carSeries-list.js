const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./carSeries-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
require('./carSeries-list.scss');

const carSeries =  {
  name: "carSeries",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "车系名称", "品牌名称", "车系介绍", "操作"],
      thLength: 5,
      url: apiPath.getCarSeriesUrl,
      carSeriesAddBtn: false,
      carSeriesEditBtn: false,
    }
  },  

  methods: {
    fetchQuery({ queryOpt }) {
      this.$refs.tableData.query(queryOpt).fetch();
    }
  }
}

module.exports = carSeries;