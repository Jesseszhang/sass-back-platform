  const apiPath = require('../../../../service/requestPath.js');
  const tip = require('../../../../common/components/base/pop/tip');
  const ajax = require('../../../../service/httpRequest.js');
  const template = require('./commercial-message.tpl');
  const commonMixin = require('../../../mixin/commonMixin');
  require('./commercial-message.scss');
  
  export default {
    name: "comboList",
    template,
    mixins: [commonMixin],
    data() {
      return {
        thItems: ["序号", "消息标签", "通知方式", "通知时间", "操作"],
        thLength: 5,
        messageList: [],
        url: apiPath.queryNotifyCommercialListUrl
      }
    },
    methods: {
      fetchQuery({ queryValue }){
        this.$refs.tableData.query(queryValue).fetch();
      }
    },

    filters: {
      notifyWay(val) {
        if (val) {
          let type = ['站内信','邮件','短信','弹窗'];
          let curArr = val.split(',')
          let notifyWay = []
          curArr.map((item) => {
            if (item == 0) {
              notifyWay.push('站内信')
            } else if (item == 1) { 
              notifyWay.push('邮件')
            } else if (item == 2) { 
              notifyWay.push('短信')
            } else if (item == 3) { 
              notifyWay.push('弹窗')
            }
          })
          return notifyWay.join(',')
        }else{
          return '暂无'
        }
      }
    }
  }