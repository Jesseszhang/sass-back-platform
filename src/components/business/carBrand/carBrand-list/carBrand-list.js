const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./carBrand-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
require('./carBrand-list.scss');

const carBrand = {
  name: "carBrand",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "logo", "品牌名称", "官方网址", "操作"],
      thLength: 5,
      url: apiPath.getCarBrandUrl,
      carBrandAddBtn: false,
      carBrandEditBtn: false
    }
  },

  methods: {
    fetchQuery({ queryOpt }){
      this.$refs.tableData.query(queryOpt).fetch();
    }
  }
}

module.exports = carBrand;