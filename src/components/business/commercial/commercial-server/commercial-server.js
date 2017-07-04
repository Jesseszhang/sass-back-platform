const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./commercial-server.tpl');
require('./commercial-server.scss');
require('components/base/loading/loading');

module.exports = {
  name: "commercialServer",
  template,
  props:{
    merchantDetail: {
      type: Object,
      require: true,
      default: {}
    }
  },
  data() {
    return {
      params: {
        merchant:{
          merchant: "",
          phone: "",
          email: "",
          password: ""
        }
      }
    }
  },
  ready(){
    this.params = Object.assign({}, this.params, this.merchantDetail);
  },
  methods: {
    beforeSubmit(queryOpt, _this) {
      let merchant = {}
      merchant.merchantId = this.params.merchant.merchantId
      merchant.phone = this.params.merchant.phone
      merchant.email = this.params.merchant.email
      merchant.password = this.params.merchant.password
      merchant.merchant = this.params.merchant.merchant
      _this.queryOpt.merchant = merchant
      _this.queryOpt.merchants = this.params.merchants
      this.$refs.loading.show();
    },
    submit() {
      this.$refs.formArea.setAction(apiPath.updateMerchantInfoUrl).submit()
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