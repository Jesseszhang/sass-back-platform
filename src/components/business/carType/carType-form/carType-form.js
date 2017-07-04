const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./carType-form.tpl');
require('./carType-form.scss');
require('components/base/loading/loading');

export default {
  name: "carTypeForm",
  template,
  data() {
    return {
      params: {
        id: "",
        interfaceStandard: 1,
        brandId: null,
        seriesId: null,
        year: null,
        typeName: "",
        drivingKm: "",
        guidePrice: "",
        manufacturer: "",
        carLevel: "",
        engine: "",
        gearboxes: "",
        lwh: "",
        bodyStructure: "",
        carFullGuarantee: "",
        maxSpeed: "",
        enginePower: "",
        batteryCapacity: "",
        batteryPackGuarantee: "",
        quickChargeTime: "",
        slowChargeTime: ""
      },
      brandList: [],
      seriesList: [],
      isEdit: false,
      dataCache: []
    }
  },
  route: {
    data(transition) {
      let paramId = this.$route.query.id
      if (paramId) {
        this.isEdit = true
        ajax(apiPath.editCarTypeInfoUrl, {
          type: 'get',
          data: {
            id: paramId
          },
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
            this.$refs.loading.hide();
            if (res.code === 0) {
              this.dataCache = res.data;
              this.params = Object.assign(this.params, res.data)
            } else {
              tip(res.message || '系统出错，请联系客服！')
            }
          }).catch((res) => {
            tip(res.message)
          })
      } else {
        this.isEdit = false
        transition.next()
      }
    }
  },

  ready() {
    this.params.id = this.$route.query.id || ""
    this.queryBrandRelated()
  },
  computed: {
    yearList() {
      let arr = [];
      let date = new Date()
      let year = date.getFullYear()
      for (let i = year; i > (year - 10); i--) {
        let obj = {};
        obj.label = i + "年";
        obj.value = i;
        arr.push(obj);
      }
      return arr;
    }
  },
  methods: {
    getSeriesList(val) {
      this.params.seriesId = null;
      this.brandList.forEach((item) => {
        if (val == item.value) {
          this.seriesList = [{
            label: "请选择车系",
            value: -1
          }]
         item.seriesList.map((items) => {
            this.seriesList.push({
              label: items.name,
              value: items.id
            })
          })
        }
      })
    },
    queryBrandRelated() {
      ajax(apiPath.queryBrandRelatedUrl, {
        type: 'get',
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res, err) => {
        this.$refs.loading.hide();
        if (res.code === 0) {
          this.brandList = [{
            label: "请选择品牌",
            value: -1,
            seriesList: []
          }]
          res.data.map((item) => {
            this.brandList.push({
              label: item.brandName,
              value: item.id,
              seriesList: item.seriesList
            })
          })
          this.getSeriesList(this.params.brandId)
          this.$nextTick(() => {
            this.params.seriesId = this.dataCache.seriesId
          })
        } else {
          tip(res.message || '系统出错，请联系客服！')
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    beforeSubmit(queryOpt, _this) {
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateCarTypeInfoUrl : apiPath.saveCarTypeInfoUrl
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
    ['params.brandId'](val) {
      if (val) {
        this.getSeriesList(val);
      }
    }
  }
}