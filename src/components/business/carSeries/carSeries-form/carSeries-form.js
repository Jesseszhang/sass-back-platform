const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./carSeries-form.tpl');
require('./carSeries-form.scss');
require('components/base/loading/loading');

export default {
  name: "carSeriesForm",
  template,
  data() {
    return {
      isEdit: false,
      params: {
        id: "",
        name: "",
        intro: "",
        logo: ""
      },
      uploadImg: apiPath.uploadFileUrl,
      allCarBrand: [],
      logoArr: []
    }
  },
  ready() {
    this.params.id = this.$route.query.id || ""
    this.getAllCarBrand();
    this.getCarSeriesDetail()
    this.logoFun()
  },
  methods: {
    logoFun() {
      if (this.isEdit) {
        this.logoArr = [{
          url: this.params.logo
        }]
      } else {
        this.logoArr = []
      }
    },
    getAllCarBrand() {
      this.allCarBrand.push({
        value: "",
        label: "请选择品牌"
      })
      let url = apiPath.getAllCarBrandUrl;
      ajax(url).then((res) => {
        res.data.map((item) => {
          this.allCarBrand.push({
            value: item.id,
            label: item.brandName
          })
        })
      }).catch((res) => {
        tip(res.message || '系统出错，请联系客服！')
      })
    },
    getCarSeriesDetail() {
      let url = apiPath.getCarSeriesByIdUrl
      let queryId = this.$route.query.id
      if (queryId) {
        this.isEdit = true
      } else {
        this.isEdit = false
      }
      ajax(url, {
        type: 'get',
        data: {
          id: queryId
        }
      }).then((res, err) => {
          if (res.code === 0) {
            this.params = Object.assign(this.params, res.data)
            if (res.data.logo) {
              this.logoArr = [{
                url: res.data.logo
              }]
            } else {
              this.logoArr = []
            }
          }
        }).catch((res) => {
          tip(res.message)
        })
    },
    beforeSubmit(queryOpt, _this) {
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.getUpdateCarSeriesUrl : apiPath.getSaveCarSeriesUrl
      this.$refs.formArea.setAction(submitUrl).submit()
    },
    submitSuccess(res) {
      this.$refs.loading.hide();
      if (res.code === 0) {
        let message = this.isEdit ? '编辑成功' : '新增成功'
        tip(message)
      } else {
        tip(res.message || '系统出错，请联系客服！')
      }
    }
  }
}