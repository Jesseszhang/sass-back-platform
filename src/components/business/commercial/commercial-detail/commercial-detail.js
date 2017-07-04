const businessService = require('../../businessService');
const commercialForm = require('../commercial-form/commercial-form');
const configInfo = require('../config-info/config-info');
const commercialServer = require('../commercial-server/commercial-server');
const utils = require('../../../../utils/utils.js');
const operateService = require('../../operateService');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./commercial-detail.tpl');
require('./commercial-detail.scss');
require('components/base/loading/loading');

export default {
  name: "commercialDetail",
  template,
  data() {
    return {
      tabItems: [{
        value: 1,
        text: '商户信息'
      },{
        value: 2,
        text: '业务信息'
      },{
        value: 3,
        text: '配置信息'
      }],
      provinceList: [],
      cityList: [],
      areaList: [],
      groupCommList:[],
      defaultImg: require('../../../../assets/default.png'),
      isEditBase: false,
      isEditAccount: false,
      configEdit: false,
      index: 0,
      info: {
        "operateShortName": "",
        "businessLicence": "",
        "registrationAmount": "",
        "legalPerson": "",
        "registrationTime": "",
        "companyType": 0,
        "code": "",
        "servicePhone": "",
        "operateType": "",
        "businessType": "",
        "commIcon": "",
        "commLogo": "",
        "operateBaseInfoId": "",
        "merchant": {
          "userName": "",
          "password": "",
          "serviceTime": "",
          "accountNumber": 0
        },
        "merchants": "",
        "commType": null,
        "commName": "",
        "shortName": "",
        "contacts": "",
        "phone": "",
        "email": "",
        "createTime": "",
        "commCategory": null,
        "commIndustry": null,
        "license": "",
        "code": "",
        "legalPerson": "",
        "provinceId": "",
        "cityId": "",
        "areaId": "",
        "detail": ""
      },
      operateName: "",
      allArea: [],
      operateList: [],
      editDetail: {},
      merchantDetail: {
        merchant:{
          merchant: "",
          phone: "",
          email: "",
          password: ""
        }
      },
      originOperateList:[],
      operateListCache: [],
      configParams: {
        operatorId: "",
        commercialId: "",
        operatorSecret: "",
        dataSecret: "",
        contact: "",
        dataSecretIv: "",
        operatorName: "",
        operatorSecret: "",
        callback: "",
        sigSecret: ""
      }
    }
  },

  route: {
    data({to: { query: { id } } }) {
      let comParams = {
        id: this.$route.query.id
      }
      let sassallArea = JSON.parse(window.sessionStorage.getItem('sassallArea'))
      let ajaxArr = [];
      if (sassallArea) {
        ajaxArr = [
          businessService.getCommercialDetail(comParams),
          businessService.getOperateList(comParams),
          businessService.getMerchantInfo(comParams)
        ]
        this.$set('allArea', sassallArea)
      }else{
        ajaxArr = [
          businessService.getCommercialDetail(comParams),
          businessService.getOperateList(comParams),
          businessService.getAllArea(comParams),
          businessService.getMerchantInfo(comParams)
        ]
      }
      return Promise.all(ajaxArr).then((resultArr) => {
        this.$set('editDetail', resultArr[0]);
        this.editDetail.provinceId =this.editDetail.provinceId !== null ? parseInt(this.editDetail.provinceId, 10) : null;
        this.editDetail.areaId = this.editDetail.areaId !== null ? parseInt(this.editDetail.areaId, 10) : null;
        this.editDetail.cityId =this.editDetail.cityId !== null ? parseInt(this.editDetail.cityId, 10) : null;
        this.editDetail.businessType = JSON.stringify(this.editDetail.businessType)
        let curOperate = []
        resultArr[1].map((item) => {
          curOperate.push({
            label: item.operateName ? item.operateName : '--',
            value: item.id
          })
        })
        let params = {
          commLevel: this.editDetail.commLevel
        }
        businessService.getSelectCommList(params).then((res) => {
          this.groupCommList = res
        })
        this.$set('originOperateList',resultArr[1])
        this.$set('operateList', curOperate);
        this.$set('operateListCache', curOperate);
        // debugger
        this.merchantDetail = resultArr[2];
        this.configParams.operatorId = this.merchantDetail.operatorId
        if (resultArr.length === 4) {
          this.$set('allArea',resultArr[2]);
          window.sessionStorage.setItem('sassallArea', JSON.stringify(resultArr[2]));
          this.merchantDetail = resultArr[3];
          this.configParams.operatorId = this.merchantDetail.operatorId
        }
        this.getOperatorGsm();
        if (resultArr[0].merchant) {
          this.info = Object.assign(this.info, resultArr[0])
        } else {
          this.$set("info", Object.assign(resultArr[0],{
            "merchant": {
              "userName": "",
              "password": "",
              "serviceTime": "",
              "accountNumber": 0
            }
          }))
        }
        if (this.info.operateBaseInfoId != -1) {
          this.operateList.map((item) => {
            if (item.value == this.info.operateBaseInfoId) {
              this.operateName = item.label
            }
          })
        } else {
          this.operateName = '个人运营商'
        }
      })
    },
  },
  computed: {
    companyAdd(){
      if (this.info.provinceId || this.info.cityId || this.info.areaId || this.info.detail) {
        let provinceName = "" , cityName = "", areaName = "";
        if (this.info.provinceId) {
          this.allArea.map((item) => {
            if (item.id == this.info.provinceId ) {
              provinceName = item.pname;
              this.cityList = item.citys
              if (this.info.cityId) {
                this.cityList.map((item) => {
                  if (item.id == this. info.cityId) {
                    cityName = item.cname;
                    this.areaList = item.districts
                    if (this.info.areaId) {
                      this.areaList.map((item) => {
                        if (item.id == this.info.areaId) {
                          areaName = item.dname
                        }
                      })
                    }
                  }
                })
              }
            }
          })
        }
        return provinceName + cityName + areaName + this.info.detail
      } else {
        return '--'
      }
    }
  },

  methods: {
    getOperatorGsm() {
      let params = {}
      params.operatorId = this.configParams.operatorId
      businessService.getOperatorGsm(params).then((res) => {
        this.configParams = Object.assign({}, this.configParams, res)
        this.configParams.commercialId = this.$route.query.id
      })
    },
    editConfig() {
      this.configEdit = !this.configEdit
    },
    editAccount() {
      this.isEditAccount = !this.isEditAccount;
    },
    init() {
      let arr = [{
        name: "商户管理",
        router: ''
      }, {
        name: "商户列表",
        router: '/page/commercialList'
      }, {
        name: "商户详情",
        router: ''
      }]
      this.setBreadCrumbs(arr)
    }
  },
  components: {
    commercialServer,
    commercialForm,
    configInfo
  },
  filters:{
    bondAmount(val) {
      if (val) {
        return parseInt(val, 10)/100
      } else {
        return '--'
      }
    },
    groupComm(val) {
      if (val) {
        let shortName = ""
        this.groupCommList.map((item) => {
          if (item.id == val) {
            shortName = item.shortName;
          }
        })
        return shortName;
      } else {
        return '--'
      }
    },
    commLevel(val) {
      let type = ['集团商户','商户','子商户'];
      return type[parseInt(val)-1];
    },
    companyType(val) {
      let type = ['自营','加盟','第三方'];
      return type[parseInt(val)];
    },
    operateType(val) {
      let type = ['客户运营商','设备运营商','客户运营商和设备运营商'];
      return type[parseInt(val)]
    },
    isNull(val) {
      if (val == '' || val == null) {
        return '--'
      } else {
        return val
      }
    },
    rent (val) {
      if (val == '' || val == null) {
        return '--';
      } else {
        return parseInt(val, 10)/100;
      }
    },
    getNormalTime(ms) {
      if (ms == "" || ms == null) {
        return '--'
      } else {
        let date = new Date(ms);
        let localTime = {};
        localTime.Y = date.getFullYear();
        localTime.M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        localTime.D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        return localTime.Y + '-' + localTime.M + '-' + localTime.D
      }
    },
    commType(val) {
      let type = ['个人','企业','运营商','商业体'];
      return type[parseInt(val) - 1]
    },
    commCategory(val) {
      let type = ['实体','虚拟'];
      return type[parseInt(val) - 1]
    },
    commIndustry(val) {
      if (val) {
        let type = ['商业体','住宅','公共设施','政府机构','其他'];
        return type[parseInt(val) - 1]
      } else {
        return '--';
      }
    }
  },
  events: {
    cancleEdit(val){
      this.isEditBase = val
    },
    cancelServer(val){
      this.isEditAccount = val;
    }
  }
}