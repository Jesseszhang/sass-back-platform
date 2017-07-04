const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./staffSet-form.tpl');
require('./staffSet-form.scss');
require('components/base/loading/loading');

export default {
  name: "staffSetForm",
  template,
  data() {
    return {
      positionList: [],
      departmentList: [],
      params: {
        id: "",
        empName: "",
        empNo: "",
        email: "",
        telephone: "",
        tencentQq: "",
        positionId: null,
        departmentId: null,
        status: 1,
      },
      isEdit: false,
      disabled: false
    }
  },
  ready() {
    this.params.id = this.$route.query.id || ""
    this.getAllArr()
    this.getStaffInfo()
  },
  methods: {
    getAllArr() {
      ajax(apiPath.getPositionListUrl, {
        type: 'get',
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        this.$refs.loading.hide();
        if (res.code === 0) {
          this.positionList = [{
            label: "请选择岗位",
            value: -1
          }]
          res.data.forEach((item) => {
            let option = {}
            option.value = item.id
            option.label = item.positionName
            this.positionList.push(option)
          })
        } else {
          tip(res.message || "系统出错，请联系客服！")
        }
      }).catch((res) => {
        tip(res.message)
      });
      ajax(apiPath.getDepartmentUrl, {
        type: 'get',
        async: false,
        data: {
          isTree: false
        },
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code === 0) {
          this.departmentList = [{
            label: "请选择所属部门",
            value: -1
          }]
          res.data.forEach((item)=>{
            let option = {}
            option.value = item.id
            option.label = item.deptName
            this.departmentList.push(option)
          })
        } else {
          tip(res.message || "系统出错，请联系客服！")
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    getStaffInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        this.disabled = true
        ajax(apiPath.getStaffDetailUrl, {
          data: {
            employeeId: this.$route.query.id
          },
          async: false,
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          this.$refs.loading.hide();
          if (res.code === 0) {
            this.params = Object.assign({}, this.params, res.data)
          } else {
            tip(res.message || "系统出错，请联系客服！")
          }
        }).catch((res) => {
          tip(res.message)
        }) 
      } else {
        this.isEdit = false
        this.disabled = false
      }
    },
    beforeSubmit(queryOpt, _this) {
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateStaffUrl : apiPath.addNewStaff;
      this.$refs.formArea.setAction(submitUrl).submit()
    },
    submitSuccess(res) {
      this.$refs.loading.hide();
      if (res.code === 0) {
        let message = this.isEdit ? '编辑成功' : '新增成功'
        tip(message)
      } else {
        tip(res.message || "系统出错，请联系客服！")
      }
    }
  }
}