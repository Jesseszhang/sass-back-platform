const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./carBrand-form.tpl');
require('./carBrand-form.scss');
require('components/base/loading/loading');

export default {
  name: "carBrandForm",
  template,
  data() {
    return {
      uploadImg: apiPath.uploadFileUrl,
      isEdit: false,
      params: {
        id: "",
        brandName: "",
        officialSite: "",
        intro: "",
        logo: ""
      }
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
        ajax(apiPath.editCarBrandInfoUrl, {
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
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateCarBrandInfoUrl : apiPath.saveCarBrandInfoUrl;
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
  }
}