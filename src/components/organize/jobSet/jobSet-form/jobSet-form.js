const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./jobSet-form.tpl');
require('./jobSet-form.scss');
require('components/base/loading/loading');

export default {
  name: "jobSetForm",
  template,
  data() {
    return {
      params: {
        id: "",
        positionName: "",
        status: 1
      },
      isEdit: false
    }
  },
  ready() {
    this.params.id = this.$route.query.id || "";
    this.getJobSetInfo();
  },
  methods: {
    getJobSetInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(apiPath.getJobDetailUrl, {
          type: 'get',
          data: {
            positionId: this.$route.query.id
          },
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          this.$refs.loading.hide();
          if (res.code === 0) {
            this.params = Object.assign({}, this.params, res.data)
          } else {
            let message = res.message || "系统出错，请联系客服！"
            tip(message)
          }
        }).catch((res) => {
          tip(res.message)
        })
      } else {
        this.isEdit = false
      }
    },
    beforeSubmit(queryOpt, _this) {
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateJobSetInfoUrl : apiPath.saveJobSetInfoUrl;
      this.$refs.formArea.setAction(submitUrl).submit()
    },
    successSubmit(res) {
      this.$refs.loading.hide();
      if (res.code === 0) {
        let message = this.isEdit ? '编辑成功' : '新增成功'
        tip(message)
      } else {
        tip(res.message || "系统出错，请联系客服！")
      }
    }
  }
}