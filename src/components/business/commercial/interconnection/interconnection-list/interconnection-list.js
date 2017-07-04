const apiPath = require('../../../../../service/requestPath.js');
const tip = require('../../../../../common/components/base/pop/tip');
const ajax = require('../../../../../service/ajax');
const template = require('./interconnection-list.tpl');
const commonMixin = require('../../../../mixin/commonMixin');
const businessService = require('../../../businessService');
require('./interconnection-list.scss');
require('../../../../../common/components/base/pop/pop');

export default {
  name: "interconnectionList",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "客户运营商", "设备运营商", "操作"],
      thLength: 4,
      url: apiPath.getOperatorGsmListUrl,
      deleteId: ""
    }
  },
  methods: {
    fetchQuery({ queryOpt }){
      this.$refs.tableData.query(queryOpt).fetch();
    },
    deleteInterconnection(id) {
      this.$set('deleteId', id)
      this.$refs.modal.show();
    },
    okcb() {
      let params = {
        clientCommercialId: this.deleteId
      }
      ajax(apiPath.deleteROperatorGsm, {
        type: 'post',
        data: params
      }).then((res) => {
        if (res.code === 0) {
          this.$refs.modal.hide();
          this.$refs.tableData.fetch();
        }
      }).catch((res) => {
        tip(res.message)
      });
    }
  }
}