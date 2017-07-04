const apiPath = require('../../../../service/requestPath.js');
const { time } = require('../../../../utils/utils.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./combo-form.tpl');
require('./combo-form.scss');
require('components/base/loading/loading');

export default {
  name: "comboForm",
  template,
  data() {
    return {
      isEdit: false,
      params: {
        id: null,
        name: "",
        deviceAmount: "",
        price: "",
        remark: "",
        createTime: "",
        updateTime: ""
      },
      ranklist: [{
        label: '请选择套餐级别',
        value: -1
      },{
        label: '免费版',
        value: 1
      },{
        label: '商务版',
        value: 2
      },{
        label: '专业版',
        value: 3
      }],
      readonly: false
    }
  },
  ready() {
    this.params.id = this.$route.query.id || ""
    this.getFeatureDetail()
  },
  methods: {
    getFeatureDetail() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(apiPath.comboDetailUrl, {
          type: 'get',
          data: {
            id: this.$route.query.id
          },
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          this.$refs.loading.hide();
          if (res.code === 0) {
            this.params = Object.assign(this.params, res.data)
          } else {
            tip(res.message || '系统出错，请联系客服！')
          }
        }).catch((res) => {
          tip(res.message || '系统出错，请联系客服！')
        }) 
      } else {
        this.isEdit = false
      }
    },
    beforeSubmit(queryOpt, _this) {
      // debugger
      let curTime = new Date()
      _this.queryOpt.createTime = time(curTime, 'yyyy-MM-dd HH:mm:ss')
      _this.queryOpt.updateTime = this.params.updateTime
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.comboUpdateUrl : apiPath.comboAddUrl;
      this.$refs.formArea.setAction(submitUrl).submit()
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
    ["params.name"](val) {
      if (val === 1) {
        this.params.deviceAmount = 1,
        this.readonly = true;
      } else if (val === 2) {
        this.params.deviceAmount = 10;
        this.readonly = false;
      } else if (val === 3) {
        this.params.deviceAmount = 50;
        this.readonly = false;
      } else {
        this.readonly = false;
      }
    }
  }
}