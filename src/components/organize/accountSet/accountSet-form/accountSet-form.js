const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./accountSet-form.tpl');
require('./accountSet-form.scss');
require('components/base/loading/loading');

export default {
  name: "accountSetForm",
  template,
  data() {
    return {
      positionList: [],
      role: [],
      extend: [],
      params: {
        id: "",
        username: "",
        status: 1,
        password: "",
        roles: [],
        resources: [],
        employeeId: null
      },
      isEdit: false,
      employeeAble: false
    }
  },
  ready() {
    this.params.id = this.$route.query.id || ""
    this.getAccountInfo();
    this.getAllArr()
  },
  methods: {
    getAccountInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        this.employeeAble = true
        ajax(apiPath.getAccountDetailUrl, {
          type: 'get',
          data: {
            accountId: this.$route.query.id
          },
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          this.$refs.loading.hide();
          if (res.code === 0) {
            this.params = Object.assign({}, this.params, res.data)
            if (res.data.resourceIds === "") {
              this.params.resources = []
            } else {
              let curRes = res.data.resourceIds.split(',') 
              curRes.map((item) => {
                this.params.resources.push(parseInt(item, 10))
              })
            }
            if (res.data.roleIds !== "") {
              let curArr = res.data.roleIds.split(',')
              curArr.map((item) => {
                this.params.roles.push(parseInt(item, 10))
              })
            } else {
              this.params.roles = []
            }
          } else {
            tip(res.message || "系统出错，请联系客服！")
          }
        }).catch((res) => {
          tip(res.message)
        })
      } else {
        this.isEdit = false
        this.employeeAble = false
        this.params.password = this.randomWord()
      }
    },
    getAllArr() {
      /**
       * [description]  这里传10000获取所有的，后台偷懒不重新写接口，以后有问题找罗超群
       * @param  {[type]}   apiPath.getStaffListUrl [description]
       * @param  {[type]}   options.type:           'get'         [description]
       * @param  {[type]}   options.async:          false         [description]
       */
      ajax(apiPath.getStaffListUrl, {
        type: 'get',
        async: false,
        data: {
          size: 10000,
          status: 1
        },
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        this.$refs.loading.hide();
        if (res.code === 0) {
          this.positionList = [{
            label: "请选择员工",
            value: -1
          }]
          res.data.records.map((item) => {
            this.positionList.push({
              label: item.empName,
              value: item.id
            })
          })
        } else {
          tip(res.message || "系统出错，请联系客服！")
        }
      }).catch((res) => {
        tip(res.message)
      })
      ajax(apiPath.getRoleListUrl, {
        type: 'get',
        async: false,
        data: {
          size: 10000,
          status: 1
        },
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        this.$refs.loading.hide();
        if (res.code === 0) {
          this.role = []
          res.data.records.forEach((item) => {
            this.role.push({
              label: item.name,
              value: item.id
            })
          })
        } else {
          tip(res.message || "系统出错，请联系客服！")
        }
      }).catch((res) => {
        tip(res.message)
      })

      ajax(apiPath.optionListUrl, {
        type: 'get',
        async: false,
        data: {
          size: 10000
        },
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        this.$refs.loading.hide();
        if (res.code === 0) {
          this.extend = []
          res.data.records.forEach((item) => {
            this.extend.push({
              label: item.name,
              value: item.id
            })
          })
        } else {
          tip(res.message || "系统出错，请联系客服！")
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    randomWord() {
      let pos='', str=''
      let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for (let i = 0; i < 8; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
      }
      return str;
    },

    beforeSubmit(queryOpt, _this) {
      _this.queryOpt.roles = this.params.roles.join(',')
      _this.queryOpt.resources = this.params.resources.join(',')
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateAccountUrl : apiPath.addNewAccountUrl;
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
    }
  }
}