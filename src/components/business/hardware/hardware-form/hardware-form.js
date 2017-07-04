var businessService = require('../../businessService');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./hardware-form.tpl');
require('./hardware-form.scss');
require('components/base/loading/loading');

export default {
  name: "hardwareFrom",
  template,
  data() {
    return {
      isEdit: false,
      uploadImg: apiPath.uploadFileUrl,
      allSeries: {},
      seriesClassifyOptionItems: [],
      sscreenColorTypeList: [
        {label: "彩色", value: "1"},
        {label: "黑白", value: "2"}
      ],
      skeybodyDetailList: [
        {label: "物理键盘", value: "1"},
        {label: "虚拟键盘", value: "2"}
      ],
      slockDetailList: [
        {label: "支持PIN码解锁", value: "1"},
        {label: "不支持PIN码解锁", value: "2"}
      ],
      otherList: [
        {label: "支持", value: "1"},
        {label: "不支持", value: "2"},
        {label: "未知", value: "3"}
      ],
      sposDetailList: [
        {label: "储蓄卡", value: "1"},
        {label: "鉴权卡", value: "2"}
      ],
      currentTypeList: [
        {label: "交流", value: "1"},
        {label: "直流", value: "2"}
      ],
      chargeInterfaceList: [
        {label: "枪头", value: "1"},
        {label: "插座", value: "2"}
      ],
      standardList: [
        {label: "国标", value: "1"},
        {label: "欧洲", value: "2"},
        {label: "未知", value: "3"}
      ], 
      params:{
        id: "",
        chargerTypeInfo: "交流",
        chargerType: 0,
        remark: "",
        imgUrl:[],
        deviceType: 1,
        deviceModel: "",
        operateName: "",
        deviceSeries: null,
        operateId: null,
        manufacturer: "",
        sinNet: "1",
        sinNetDetail: null,
        sbluetooth:"1",  
        spos :"1",
        sposDetail: null,
        sscreen:"1",
        sscreenScale: "",  
        sscreenColorType: null, 
        slock: "1", 
        slockDetail : null,  
        skeybody: "1", 
        skeybodyDetail: null,   
        smeasureElec: "1",
        semergencyStopBtn:"1",
        deviceName: "", 
        deviceDesc: "", 
        chargeInterfaceNum: "1",
        currentList:[
          {
            "currentType": "1", 
            "powerKw": "", 
            "jvoltage": [],
            "zvoltage": "",
            "jcurrent": [],  
            "zcurrent": "",  
            "standard": "1",
            "chargeInterface": "1"
          }
        ],
        brands: [],
        models: []
      },
      baseVoltage: [{
        label: '220',
        value: 220
      },{
        label: '380',
        value: 380
      }],
      baseCurrent: [{
        label: '10',
        value: 10
      },{
        label: '16',
        value: 16
      },{
        label: '24',
        value: 24
      },{
        label: '32',
        value: 32
      },{
        label: '63',
        value: 63
      }],
      operateList: [],
      brandList: [],
      sinnetList: [
        {label: "内置充电网盒子(1对1)", value: "1"},
        {label: "内置充电网盒子(1对多)", value: "2"},
        {label: "充电网平台对接桩", value: "3"},
        {label: "桩对接充电网平台", value: "4"}
      ],
      imgUrlArrList: [],
      cachParams: {},
      isPorpin: false
    }
  },
  ready() {
    this.params.id = this.$route.query.id || ""
    this.getAllArr()
    this.getHardwareInfo()
  },
  methods: {
    imgUrlArrFun() {
      if (this.isEdit) {
        this.imgUrlArrList = [{
          url: this.params.imgUrl
        }]
      } else {
        this.imgUrlArrList = []
      }
    },
    getAllArr() {
      ajax(apiPath.getHardWareOperateUrl, {
        data: {
          platformType: this.curType
        },
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        this.$refs.loading.hide();
        this.operateList = [{
          label: "请选择运营商",
          value: -1
        }]
        if (res.code === 0) {
          res.data.map((item) => {
            this.operateList.push({
              label: item.shortName ? item.shortName : "--", 
              value: item.id
            })
          })
        }
      }).catch((res) => {
        tip(res.message)
      });
      ajax(apiPath.getHardWareSeriesUrl, {
        data: {
          platformType: this.curType
        },
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        this.$refs.loading.hide();
        if (res.code === 0) {
          this.brandList = res.data
          res.data.map((item) => {
            this.params.brands.push(item.id)
            this.seriesClassifyOptionItems.push({
              value: "typelist" + item.id,
              text: item.brandName
            })
            let curAll = []
            item.typelist.map((subItem) => {
              curAll.push({
                typeName: subItem.typeName,
                id: subItem.id
              })
              this.params.models.push(subItem.id)
            })
            this.allSeries["all"] = curAll
            this.allSeries["typelist" + item.id] = item.typelist
          })
        }
      }).catch((res) => {
        tip(res.message)
      });
    },
    /**
     * [parseIntArr description] 将字符创数组转化为数字数组
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    parseIntArr(arr) {
      let curArr = [] 
      arr.map((item) => {
        curArr.push(parseInt(item, 10))
      })
      return curArr
    },
    getHardwareInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(apiPath.getHardWareEditInfoUrl, {
          data: {
            id: this.$route.query.id
          },
          async: false,
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          if (res.code === 0) {
            let detail = res.data
            if (detail.currentList.length) {
              detail.currentList.map((item) => {
                item.currentType = item.currentType.toString();
                item.chargeInterface = item.chargeInterface.toString();
                item.standard = item.standard.toString();
                item.jvoltage = this.parseIntArr(item.jvoltage.split(','))
                item.jcurrent = this.parseIntArr(item.jcurrent.split(','))
              })
            } else {
              detail.currentList = [{
                "currentType": '1', 
                "powerKw": null, 
                "jvoltage": [],
                "zvoltage": "",
                "jcurrent": [],  
                "zcurrent": "",  
                "standard": "1",
                "chargeInterface": "1"
              }]
            }
            if (detail.sscreen == 3) {
              detail.sscreenColorType = null
              detail.sscreenScale = ""
            }
            this.params = Object.assign({}, this.params, detail, {

              imgUrl: detail.imgUrl == "" ? [] : detail.imgUrl.split(','),

              brands: detail.brands == null ? [] : this.parseIntArr(detail.brands.split(',')),
              models: detail.models == null ? [] : this.parseIntArr(detail.models.split(',')),
              sinNetDetail: detail.sinNetDetail == null ? [] : detail.sinNetDetail.split(',')
            })

            if (this.params.imgUrl.length !== 0) {
              this.params.imgUrl.map((item) => {
                this.imgUrlArrList.push({
                  url: item
                })
              })
            } else {
              this.imgUrlArrList = []
            }
            // this.selectedBrands = detail.brands == null ? [] : detail.brands.split(',')  
            // this.selectedModels = detail.models == null ? [] : detail.models.split(',')
            // console.log(this.params.models)
            this.getSeries();
            this.cachParams = this.params

            // console.log('------')
            // console.log(this.params.models)
          }
        }).catch((res) => {
          tip(res.message)
        }) 
      } else {
        this.isEdit = false
      }
    },
    beforeSubmit(queryOpt, _this) {
      /**
       * 以下代码为兼容后台转换代码，坑爹的后台 坑爹的后台 坑爹的后台
       */
      //img
      // console.log(this.$refs.formArea)
      let curParams = Object.assign({}, this.params)
      let imgUrlArr = this.$refs.formArea.queryInfo.imgUrl
      let curImgArr = []
      imgUrlArr.map((item) => {
        curImgArr.push(item.url)
      })
      _this.queryOpt.imgUrl = curImgArr.join(',')
      //品牌/车型
      // debugger
      _this.queryOpt.brands = curParams.brands.join(',')
      _this.queryOpt.models = curParams.models.join(',')
      // ratedPower
      let ratedPower = [];
      curParams.ratedPower = curParams.currentList.map((item) => {
        ratedPower.push(item.powerKw);
      })
      _this.queryOpt.ratedPower = ratedPower.join('|')
      //获取运营商名称
      let operateName = ""
      this.operateList.map((item) => {
        if (item.value == curParams.operateId) {
          operateName = item.label
        }
      })
      _this.queryOpt.operateName = operateName;
      //sinNetDetail
      _this.queryOpt.sinNetDetail = curParams.sinNetDetail.join(',')
      //currentList
      curParams.currentList = curParams.currentList.map((item) => (Object.assign({}, item, {
        jcurrent: item.jcurrent.join(','),
        jvoltage: item.jvoltage.join(',')
      })))
      _this.queryOpt.currentList = curParams.currentList
      // 拼接
      let curType = ""
      let curTypeNum = 0
      let chargerTypeNum = 0
      let maxPower = ""
      let chargerType = ""
      let curC = []
      let curV = []

      this.params.currentList.map((item) => {
        if (item.currentType == 1) {
          curTypeNum++;
          let curjvoltage = item.jvoltage.join('|')
          let curjcurrent = item.jcurrent.join('|')
          curC.push( curjvoltage )
          curV.push( curjcurrent )
        }
        if (item.currentType == 2) {
          curC.push(item.zvoltage)
          curV.push(item.zcurrent)
        }
        if (item.chargeInterface == 1) {
          chargerTypeNum++
        }
        if (parseInt(item.powerKw, 10) > maxPower) {
          maxPower = parseInt(item.powerKw, 10)
        }
      })
      if (curTypeNum == this.params.currentList.length) {
        curType = '交流'
      } else if (curTypeNum == 0) {
        curType = '直流'
      } else {
        curType = '交直流'
      }
      if (chargerTypeNum == this.params.currentList.length) {
        chargerType = '枪头'
      } else if (chargerTypeNum == 0) {
        chargerType = '插座'
      } else {
        chargerType = '枪头插座'
      }
      _this.queryOpt.ratedVoltage = curC.join('|')
      _this.queryOpt.ratedCurrent = curV.join('|')
      _this.queryOpt.operateName = operateName
      _this.queryOpt.chargeInterfaceNum = this.params.currentList.length
      _this.queryOpt.deviceName = operateName + '-' + curType + '-' + maxPower +'Kw'+ '-' + chargerType;
      // console.log(_this.queryOpt)
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateHardwareUrl : apiPath.addNewHardwareUrl;
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
    },
    getCurrentType() {
      let curTypeNum = ""
      this.params.currentList.map((item) => {
        if (item.currentType === '1') {
          curTypeNum++;
        }
        if (curTypeNum == this.params.currentList.length) {
          this.params.chargerType = 0
          this.params.chargerTypeInfo = '交流'

        } else if (curTypeNum == 0) {
          this.params.chargerType = 1
          this.params.chargerTypeInfo = '直流'
        } else {
          this.params.chargerType = 2
          this.params.chargerTypeInfo = '交直流'
        }
      })
    },
    addNewCurrent() {
      let current = {
        "currentType": '1', 
        "powerKw": "", 
        "zvoltage": "",
        "jvoltage": [],
        "jcurrent": [],  
        "zcurrent": "",  
        "standard": "1",
        "chargeInterface": "1" 
      }
      this.params.currentList.push(current)
      this.getCurrentType()
    },
    deleteCurrent(index) {
      this.params.currentList.splice(index,1)
      this.getCurrentType()
    },
    getSeries() {
      let curAll = []
        this.seriesClassifyOptionItems = []
        this.allSeries = {
          all: []
      }
      if (this.isPorpin) {
        this.params.models = []
      }
      if (this.params.brands.length !== 0) {
        this.params.brands.map((item) => {
          this.brandList.map((subItem) => {
            if (item === subItem.id) {
              this.seriesClassifyOptionItems.push({
                value: "typelist" + subItem.id,
                text: subItem.brandName
              })
              subItem.typelist.map((subItems) => {
                curAll.push({
                  typeName: subItems.typeName,
                  id: subItems.id
                })
                if (this.isPorpin) {
                  this.params.models.push(subItems.id)
                }
              })
              this.allSeries["all"] = curAll
              this.allSeries["typelist" + subItem.id] = subItem.typelist
            }
          })
        })
      } else {
        // debugger
        this.params.models = []
        this.seriesClassifyOptionItems = []
        this.allSeries = {
          all: []
        }
      }
    }
  },

  filters: {
    chargerType(val) {
      if (val === 0 || val === 1 || val === 2) {
        let arr = ['交流','直流','交直流一体']
        return arr[parseInt(val)]
      } else {
        return '--'
      }
    }
  },

  watch: {
    cachParams(val) {
      if (val) {
        this.isPorpin = true
      }
    },
    ['params.brands'](val) {
      if (val) {
        this.getSeries();
      }
    },
    ['params.currentList']: {
      handler: function(val){
        if (val) {
          this.getCurrentType();
        }
      },
      deep: true
    }
  }
}