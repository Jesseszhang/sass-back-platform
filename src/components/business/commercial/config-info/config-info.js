const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./config-info.tpl');
require('./config-info.scss');
require('components/base/loading/loading');

module.exports = {
  name: "configInfo",
  template,
  props:{
    configParam: {
      type: Object,
      require: true,
      default: {}
    }
  },
  data() {
    return {
      params: {}
    }
  },
  ready(){
    this.params = Object.assign({}, this.params, this.configParam);
  },
  methods: {
    beforeSubmit(queryOpt, _this) {
      _this.queryOpt.commercialId = this.params.commercialId
      _this.queryOpt.dataSecret = this.params.dataSecret
      _this.queryOpt.dataSecretIv = this.params.dataSecretIv
      _this.queryOpt.sigSecret = this.params.sigSecret
      _this.queryOpt.operatorId = this.params.operatorId
      this.$refs.loading.show();
    },
    submit() {
      this.$refs.formArea.setAction(apiPath.insertOrUpdateOperatorGsm).submit()
    },
    submitSuccess(res) {
      this.$refs.loading.hide();
      if (res.code === 0) {
        tip('编辑成功')
      } else {
        tip(res.message)
      }
    }
  }
}