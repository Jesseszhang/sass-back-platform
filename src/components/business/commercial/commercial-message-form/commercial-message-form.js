const apiPath = require('../../../../service/requestPath.js');
const utils = require('../../../../utils/utils.js');
const ajax = require('../../../../service/httpRequest.js');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./commercial-message-form.tpl');
const dataPicker = require('../../../../common/components/common/date-time/date-time');
require('./commercial-message-form.scss');
require('components/base/loading/loading');

export default {
  name: "commercialMessageForm",
  template,
  data() {
    return {
      isEdit: false,
      NotifyCommercialInfo: {},
      params: {
        id: "",
        notifyContext: "",
        notifyWay: [],
        notifyTarget: [],
        notifyTime: "",
        notifyLable: ""
      },
      typelist: [{
        label: '请选择消息标签',
        value: -1
      },{
        label: '系统维护',
        value: 2000
      },{
        label: '产品升级',
        value: 1000
      }],
      oblist: [{
        label: '全部集团商户',
        value: 1
      },{
        label: '全部商户',
        value: 2
      },{
        label: '全部子商户',
        value: 3
      }]
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
        let dataParams = {
              ncId: this.$route.query.id
            }
        ajax('get', 'notify/queryNotifyCommercialPage', dataParams).then((res) => {
          console.log(res)
          this.$refs.loading.hide();
          this.params = Object.assign(this.params, res.records[0])
          this.params.notifyWay = []
          this.params.notifyTarget = []
          res.records[0].notifyWay.split(',').map((item) => {
            this.params.notifyWay.push(parseInt(item, 10))
          })
          res.records[0].notifyTarget.split(',').map((item) => {
            this.params.notifyTarget.push(parseInt(item, 10))
          })
          this.params.notifyTime = utils.time(res.records[0].notifyTime, 'yyyy-MM-dd hh:mm')
        
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
      this.NotifyCommercialInfo = Object.assign({}, this.params)
      this.NotifyCommercialInfo.notifyWay = this.params.notifyWay.join(',')
      this.NotifyCommercialInfo.notifyTarget = this.params.notifyTarget.join(',')
      this.NotifyCommercialInfo.notifyTime = Date.parse(new Date(this.params.notifyTime))
      let subData = this.NotifyCommercialInfo
      ajax("post", 'notify/addNotifyCommercial', subData).then((res) => {
        this.$refs.loading.hide();
        tip('新增成功！')
      }).catch((res) => {
        tip(res.message || '系统出错，请联系客服！')
      }) 
    }
  },
  watch: {
    ["params.notifyLable"](val){
      if (val == 2000) {
        this.params.notifyContext = `尊敬的充电网商户：为了提供更好的服务，平台计划于${utils.time(new Date(), "yyyy-MM-dd hh:mm")} 进行维护升级，届时充电功能将受到影响，请您提前安排好相关事宜，对此带来的不便我们深感抱歉！`
      } else if (val == 1000) {
        this.params.notifyContext = `尊敬的充电网商户：为了提供更好的服务，平台计划于${utils.time(new Date(), "yyyy-MM-dd hh:mm")} 进行产品升级，届时充电功能将受到影响，请您提前安排好相关事宜，对此带来的不便我们深感抱歉！`
      } else {
        this.params.notifyContext = ""
      }
    }
  }
}