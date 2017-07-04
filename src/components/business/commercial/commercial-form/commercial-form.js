require('../../../../common/lib/data-picker/data-picker');
const businessService = require('../../businessService');
const apiPath = require('../../../../service/requestPath.js');
const requestPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./commercial-form.tpl');
require('./commercial-form.scss');
require('../../../../common/components/base/loading/loading');
require('../../../../common/components/common/date-time/date-time')

module.exports = {
  name: "commercialForm",
  template,
  data() {
    return {
      step: 1,
      isEdit: false,
      uploadImg: apiPath.uploadFileUrl,
      dateConfig:{ format: 'yyyy-mm-dd', minView: 'month'},
      companyTypeList: [
        {
          "value": -1,
          "label": "请选择公司类型"
        },
        {
          "value": 1,
          "label": "自营"
        },
        {
          "value": 2,
          "label": "加盟"
        },
        {
          "value": 3,
          "label": "第三方"
        }
      ],
      commLevelList:[
        {
          "value": -1,
          "label": "请选择商户级别"
        },
        {
          "value": 1,
          "label": "集团商户"
        },
        {
          "value": 2,
          "label": "商户"
        },
        {
          "value": 3,
          "label": "子商户"
        }
      ],
      commTypeList:[
        {
          "value": -1,
          "label": "请选择商户类型"
        },
        {
          "value": 1,
          "label": "个人"
        },
        {
          "value": 2,
          "label": "企业"
        }
      ],
      commClassList:[
        {
          "value": -1,
          "label": "请选择商户类别"
        },
        {
          "value": 1,
          "label": "实体"
        },
        {
          "value": 2,
          "label": "虚拟"
        }
      ],
      commJobList:[
        {
          "value": -1,
          "label": "请选择商户行业"
        },
        {
          "value": 1,
          "label": "商业体"
        },
        {
          "value": 2,
          "label": "住宅"
        },
        {
          "value": 3,
          "label": "公共设施"
        },
        {
          "value": 4,
          "label": "政府机构"
        },
        {
          "value": 5,
          "label": "其他"
        }
      ],
      params: {
        businessLicence: "",
        registrationTime: "",
        registrationAmount: "",
        companyType: null,
        operateBaseInfoId: null,
        operateType: [],
        commIcon: "",
        businessType: 0,
        commLevel: -1,
        pid: null,
        commCategory: -1, 
        commName: "",
        commType: "",
        areaId: -1,
        cityId: -1,
        code: "",
        detail: "", 
        legalPerson: "",
        license: "",
        provinceId: -1,
        contacts: "", 
        email: "",
        phone: "",
        servicePhone: "",
        commIndustry: -1,
        shortName: "",
        commLogo: ""
      }, 
      provinceList: [],
      cityList: [],
      areaList: [],
      commPidList: [],
      allArea: [],
      districtsList: [],
      curCityList:[],
      id: "",
      operateList: [],
      operateListCache: [],
      originOperateList: [],
      commIconArr: [],
      businessLicenceIconArr:[],
      commLogoArr: [],
      isPorpin: false,
      cachParams: {}
    }
  },
  computed: {
    discommLevel() {
      return this.params.commLevel === 3
    },
    discommType() {
      return this.params.commType === 1
    }
  },
  ready() {
    this.getAllArr();
    this.getCommericalInfo();
    this.commIconFun()
    this.businessLicenceIconFun()
    this.commLogoFun()

  },
  methods: {
    commIconFun() {
      if (this.isEdit) {
        this.commIconArr = [{
          url: this.params.commIcon
        }]
      } else {
        this.commIconArr = []
      }
    },
    businessLicenceIconFun() {
      if (this.isEdit) {
        this.businessLicenceIconArr = [{
          url: this.params.businessLicence
        }]
      } else {
        this.businessLicenceIconArr = []
      }
    },
    commLogoFun() {
      if (this.isEdit) {
        this.commLogoArr = [{
          url: this.params.commLogo
        }]
      } else {
        this.commLogoArr = []
      }
    },
    getAllArr() {
      let sassallArea = JSON.parse(window.sessionStorage.getItem('sassallArea'))
      if (sassallArea) {
        this.$set('allArea', sassallArea)
        this.getProv(sassallArea)
        this.getOperateList()
      } else {
        this.getOperateList()
        this.getAllArea();
      }
      
    },
    getAllArea() {
      ajax(apiPath.getAllAreaUrl, {
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code === 0) {
          this.$refs.loading.hide();
          this.$set('allArea', res.data);
          this.getProv(res.data);
          window.sessionStorage.setItem('sassallArea', JSON.stringify(res.data));
        }
      }).catch((res) => {
        tip(res.message)
      });
    },
    getOperateList() {
      ajax(apiPath.getOperateListUrl, {
        async: false,
        data: {
          id: this.$route.query.id
        },
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code === 0) {
          this.$refs.loading.hide();
          let curOperate = [{
            label: "请选择运营商",
            value: -1
          }];
          res.data.map((item) => {
            curOperate.push({
              label: item.operateName ? item.operateName : '--',
              value: item.id
            })
          })
          this.$set('originOperateList', res.data)
          this.$set('operateList', curOperate);
          this.$set('operateListCache', curOperate);
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    getCommericalInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(apiPath.getCommercialDetailUrl, {
          data: {
            id: this.$route.query.id
          },
          async: false,
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          if (res.code === 0) {
            this.params = Object.assign({}, this.params, res.data)
            this.params.businessType = parseInt(res.data.businessType, 10)
            this.params.provinceId = this.params.provinceId !== null ? parseInt(this.params.provinceId, 10) : null;
            this.params.areaId = this.params.areaId !== null ? parseInt(this.params.areaId, 10) : null;
            this.params.cityId = this.params.cityId !== null ? parseInt(this.params.cityId, 10) : null;
            this.commIconArr = [{
              url: res.data.commIcon
            }]
            if (res.data.businessLicence !== "") {
              this.businessLicenceIconArr = [{
                url: res.data.businessLicence
              }]
            } else {
              this.businessLicenceIconArr = []
            }
            if (res.data.commLogo !== "") {
              this.commLogoArr = [{
                url: res.data.commLogo
              }]
            } else {
              this.commLogoArr = []
            }
            this.getFormProv(this.allArea)
            this.getFormCity(res.data.provinceId)
            this.getFormArea(res.data.cityId)
            /**
             * [if description] 兼容
             * @param  {[type]} this.params.operateType [description]
             * @return {[type]}                             [description]
             */
            if (this.params.operateType == 0) {
              this.params.operateType = [0]
            } else if (this.params.operateType == 1) {
              this.params.operateType = [1]
            } else {
              this.params.operateType = [0, 1]
            }
            if (this.$route.query.id) {
              this.cachParams = Object.assign({}, this.params);
            }
          }
        }).catch((res) => {
          tip(res.message)
        }) 
      } else {
        this.getProv(this.allArea)
        this.getCity(this.params.provinceId)
        this.getArea(this.params.cityId)
        this.isPorpin = true
        this.isEdit = false
      }
    },
    getProv(arr){
      this.provinceList = [{
        label: "请选择省",
        value: -1,
        citys: []
      }]
      this.getFormProv(arr)
    },
    getFormProv(arr) {
      arr.map((item) => {
        this.provinceList.push({
          label: item.pname,
          value: item.id,
          citys: item.citys
        })
      });
    },
    getCity(val){
      this.params.cityId = -1;
      this.params.areaId = -1;
      this.cityList = [{
        label: "请选择市",
        value: -1,
        districts: []
      }];
      this.areaList = [{
        label: "请选择区",
        value: -1
      }];
      this.getFormCity(val)
    },
    getFormCity(val) {
      this.provinceList.map((item) => {
        if (item.value == val ) {
          item.citys.map((item) => {
            this.cityList.push({
              label: item.cname,
              value: item.id,
              districts: item.districts
            })
          });
        }
      })
    },
    getArea(val){
      this.params.areaId = -1;
      this.areaList = [{
        label: "请选择区",
        value: -1
      }];
      this.getFormArea(val)
    },
    getFormArea(val) {
      this.cityList.map((item) => {
        if (item.value == val ) {
          item.districts.map((item) => {
            this.areaList.push({
              label: item.dname,
              value: item.id
            })
          });
        }
      })
    },
    stepOption(){
      if (this.$refs.formBaseArea.verify()) {
        this.$refs.formBaseArea._initFormData()
        this.step = 2
      }
    },
    backStep() {
      this.step = 1
    },
    submit() {
      if (this.$refs.formCommArea.verify()) {
        if (!this.params.registrationTime && this.params.businessType === 1) {
          tip('请选择成立日期')
          return false;
        }
        let params = {}
        this.$refs.formCommArea._initFormData()
        // console.log(this.$refs.formCommArea)
        // console.log(this.$refs.formCommArea.queryOpt)
        // console.log(this.$refs.formBaseArea.queryOpt)
        params = Object.assign({}, this.params, this.$refs.formCommArea.queryOpt, this.$refs.formBaseArea.queryOpt)
        if (this.params.commLevel === 1) {
          this.params.pid = null
        }
        let operateType = this.params.operateType
        let curoperateType = ""
        if (operateType.length === 1 && operateType[0] === 0) {
          curoperateType = 0
        } else if (operateType.length === 1 && operateType[0] === 1) {
          curoperateType = 1
        } else if (operateType.length === 2) {
          curoperateType = 2
        } else {
          curoperateType = ""
        }
        params.operateType = curoperateType
        this.$refs.loading.show();
        let url = ""
        if (this.isEdit) {
          url = 'updateCommercial'
        } else {
          url = 'addCommercial'
        }
        businessService[url](params).then((data) => { 
          this.$refs.loading.hide();
          let message = this.isEdit ? '编辑成功' : '新增成功'
          tip(message)
        }).catch((res)=>{
          this.$refs.loading.hide();
          tip(res.message)
        })
      }
    }
  },
  watch: {
    cachParams(val) {
      if (val) {
        this.isPorpin = true
      }
    },
    ['params.operateBaseInfoId'](val) {
      if (val) {
        if (this.isPorpin) {
          this.originOperateList.map((item) => {
            if (item.id == val) {
              this.params.shortName = item.shortName
              this.params.commName = item.operateName
              this.params.servicePhone = item.servicePhone
              this.params.commIcon = item.icon
              if (item.icon !== "") {
                this.commIconArr = [{
                  url: item.icon
                }]  
              } else {
                this.commIconArr = [] 
              }
            }
          })
        }
      }
    },
    ['params.provinceId'](val) {
      if (val) {
        if (this.isPorpin) {
          this.getCity(val)
        }
      }
    },
    ['params.cityId'](val) {
      if (val) {
        if (this.isPorpin) {
          this.getArea(val)
        }
      }
    },
    ['params.commType'](val) {
      if (this.isPorpin) {
        if (val == 1) {
          this.params.commIndustry = -1;
          this.params.operateBaseInfoId = -1
          this.operateList = [
            {
              value: -1,
              label: '个人运营商'
            }
          ]
        } else {
          this.params.operateBaseInfoId = -1
          this.operateList = this.operateListCache;
        }
      }
      
    },
    ["params.commLevel"](val) {
      if (val && val !== "" && val !== 1) {
        if (this.isPorpin) {
          this.params.pid = null
        }
        let params = {
          commLevel: val
        }
        this.$refs.loading.show();
        businessService.getSelectCommList(params).then((res) => {
          this.$refs.loading.hide();
          this.commPidList = [{
            label: "请选择所属集团商户",
            value: -1
          }]
          res.map((item) => {
            this.commPidList.push({
              label: item.shortName || '--',
              value: parseInt(item.id)
            })
          })
        }).catch((res) => {
          tip(res.message)
        })
      } 
      if (val === 3) {
        this.params.operateType = [1];
      }
    }
  }
}