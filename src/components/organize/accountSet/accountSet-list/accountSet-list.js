const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./accountSet-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
require('./accountSet-list.scss');

export default {
  name: "accountSet",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "账号", "姓名", "部门", "岗位", "角色","状态","最近登录时间", "操作" ],
      thLength: 9,
      url: apiPath.getAccountListUrl,
      queryOpt: {
        departmentId: null,
        status: null
      },
      departmentList: [
        {label: "请选择部门", value: null}
      ],
      accountSetAddBtn: false,
      accountSetEditBtn: false,
      statusList: [
        {label: "请选择状态", value: null},
        {label: "禁用", value: "0"},
        {label: "启用", value: "1"}
      ]
    }
  },

  route: {
    data(transition) {
      return new Promise((resolve, reject) => {
          ajax(apiPath.getOrganizeListUrl,{
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
        }).catch((res)=>{
          tip(res.message)
        })
    }
  },

  methods: {
    fetchQuery({ queryValue }){
      this.$refs.tableData.query(queryValue).fetch();
    }
  }
}