const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./staffSet-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
require('./staffSet-list.scss');

export default {
  name: "staffSet",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "姓名", "部门", "岗位", "工号", "邮箱", "手机号", "QQ", "状态", "操作" ],
      thLength: 10,
      url: apiPath.getStaffListUrl,
      departmentList: [{
        label: "请选择部门", value: null
      }],
      staffSetEditBtn: false,
      staffSetAddBtn: false,
      statusList: [
        {label: "请选择状态", value: null},
        {label: "离职", value: "0"},
        {label: "在职", value: "1"}
      ]
    }
  },

  route: {
    data(transition) {
      return new Promise((resolve, reject) => {
          ajax(apiPath.getOrganizeListUrl, {
            type: 'get',
            data: { isTree: false }
          }).then((res, err) => {
              if (res.code === 0) {
                res.data.map((item)=>{
                  this.departmentList.push({
                    label: item.deptName,
                    value: item.id
                  })
                })
              } else {
                let tips = res.message || "系统出错，请联系客服！"
                tip(tips)
              }
            })
        }).catch((res) => {
          tip(res.message)
        })
    }
  },

  methods: {
    fetchQuery({ queryValue }) {
      this.$refs.tableData.query(queryValue).fetch();
    }
  }
}