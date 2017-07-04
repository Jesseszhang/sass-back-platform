const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('../../../../service/ajax');
const template = require('./operate-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
const operateService = require('../../operateService');
require('./operate-list.scss');
require('../../../../common/components/base/pop/pop');

export default {
  name: "operateList",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "icon", "运营商名称", "服务时间","服务电话", "操作"],
      thLength: 6,
      url: apiPath.getOperateListInfoUrl,
      defaultImg: require('../../../../assets/default.png'),
      deleteId: ""
    }
  },
  methods: {
    fetchQuery({ queryOpt }){
      this.$refs.tableData.query(queryOpt).fetch();
    },
    deleteOperate(id) {
      this.$set('deleteId', id)
      this.$refs.modal.show();
    },
    okcb() {
      let params = {
        operateId: this.deleteId
      }
      this.$refs.modal.hide();
      operateService.deleteOperateInfo(params).then((res) => {
        this.$refs.tableData.fetch();
      }).catch((res)=>{
        tip(res.message)
      })
    }
  }
}