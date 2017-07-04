const utils = require('../../../../../utils/utils.js');
const businessService = require('../../../businessService');
const apiPath = require('../../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../../common/components/base/pop/tip');
const template = require('./interconnection-form.tpl');
require('./interconnection-form.scss');
require('components/base/loading/loading');

export default {
  name: "interconnectionForm",
  template,
  data() {
    return {
      isEdit: false,
      params: {
        clientCommercialId: "",
        clientOperatorName: "",
        commercialList: [],
        commercialId: [],
        shortName: ""
      },
      curId: "",
      allOperator: [],
      allCommercialGsm: [],
      cachParams: {},
      isPorpIn: false
    }
  },
  route: {
    data(transition) {
      let param = {
        clientCommercialId: this.$route.query.id
      }
      if (this.$route.query.id) {
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
      this.curId = this.$route.query.id;

      if (this.curId) {
        return businessService.findROperatorGsm(param).then((res) => {
          this.params = Object.assign({}, this.params, res);
          if (res.commercialList) {
            this.params.commercialId = []
            res.commercialList.map((item) => {
              this.params.commercialId.push(item.commercialId)
            })
          }

          if (this.$route.query.id) {
            this.cachParams = Object.assign({}, this.params);
          }
        }).catch((res) => {
          tip(res.message || '系统出错，请联系客服！')
        })
      } else {
        transition.next()
      }
    }
  },

  ready() {
    this.findAllROperatorGsmList();
  },

  methods: {
    findAllROperatorGsmList() {
      businessService.findAllROperatorGsmList().then((res) => {
        this.allOperator = [{
          value: -1,
          label: "请选择客户运营商"
        }]
        res.map((item) => {
          this.allOperator.push({
            value: item.commercialId,
            label: item.shortName
          })
        });
      }).catch((res) => {
        tip(res.message || '系统出错，请联系客服！')
      })
    },
    beforeSubmit(queryOpt, _this) {
      this.allOperator.map((item) => {
        if (item.value === this.params.clientCommercialId) {
          this.params.clientOperatorName = item.label
        }
      })
      let commercialList = []
      this.allCommercialGsm.map((gsm) => {
        this.params.commercialId.map((arr) => {
          if (arr === gsm.value) {
            commercialList.push({
              commercialId: gsm.value,
              shortName: gsm.label
            })
          }
        })
      })
      _this.queryOpt.clientCommercialId = this.params.clientCommercialId
      _this.queryOpt.clientOperatorName = this.params.clientOperatorName
      _this.queryOpt.commercialList = commercialList
      this.$refs.loading.show();
    },
    submit() {
      /**
       * 新增编辑都用这个
       */
      this.$refs.formArea.setAction(apiPath.insertBatchROperatorGsm).submit()
    },
    submitSuccess(res) {
      this.$refs.loading.hide();
      if (res.code === 0) {
        let message = this.isEdit ? '编辑成功' : '新增成功'
        tip(message)
      } else {
        tip(res.message)
      }
    }
  },
  watch: {
    cachParams(val) {
      if (val) {
        this.isPorpin = true
      }
    },
    ['params.clientCommercialId'](val) {
      if (val) {
        if (this.isPorpIn) {
          this.params.commercialId = []
          this.allCommercialGsm = []
        }
        let params = {}
        params.clientCommercialId = val
        businessService.findAllCommercialGsm(params).then((res) => {
          res.map((item) => {
            this.allCommercialGsm.push({
              label: item.shortName,
              value: item.commercialId
            })
          })
        }).catch((res) => {
          tip(res.message)
        })
      }
    }
  }
}