const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./roleSet-form.tpl');
require('./roleSet-form.scss');
require('components/base/loading/loading');
require('components/base/checkbox/checkbox');

export default {
  name: "roleSetForm",
  template,
  data() {
    return {
      isEdit: false,
      params: {
        id: "",
        index: 0,
        name: "",
        status: 1,
        platformType: 0,
        role:{
          id: "",
          name: "",
          status: 1,
          platformType: 0
        },
        resourceIds: []
      },
      roleList: [],
      approleList: [],
      resourceAppClassifyOptionItems: [],
      resourceBackClassifyOptionItems: [],
      classifyOptionItems: [],
      allAppResource: {},
      allBackResource: {},
      allResource: {}
    }
  },
  ready() {
    this.params.id = this.$route.query.id || ""
    this.getRoleSetInfo();
    this.getAllArr()
  },
  methods: {
    getAllArr() {
      ajax(apiPath.resourceTreeUrl, {
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
        this.roleList = []
        if (res.code === 0) {
          this.roleList = res.data
          let curArr = []
          res.data.map((item) => {
            item.children.map((subItem) => {
              this.resourceBackClassifyOptionItems.push({
                value: "children" + subItem.id,
                text: subItem.name
              })
              if (subItem.children) {
                subItem.children.map((sub) => {
                  curArr.push({
                    id: sub.id,
                    name: sub.name
                  })
                })
              } 
              this.allBackResource.all = curArr
              this.allBackResource['children' + subItem.id] = subItem.children ? subItem.children : []
              this.$set('allResource', this.allBackResource)
              this.$set('classifyOptionItems', this.resourceBackClassifyOptionItems)
            })
          })
        } else {
          tip(res.message || "系统出错，请联系客服！")
        }
      }).catch((res) => {
        tip(res.message)
      })
      ajax(apiPath.appresourceTreeUrl, {
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
        this.approleList = []
        if (res.code === 0) {
          let allArr = []
          res.data[0].children.map((item) => {
            this.resourceAppClassifyOptionItems.push({
              value: "children" + item.id,
              text: item.name
            })
           item.children && item.children.map((subItem) => {
              allArr.push({
                id: subItem.id,
                name: subItem.name
              })
            })
            this.allAppResource.all = allArr
            this.allAppResource['children' + item.id] = item.children
          })
        } else {
          tip(res.message || "系统出错，请联系客服！")
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    getRoleSetInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(apiPath.getRoleDetailInfoUrl, {
          type: 'get',
          data: {
            id: this.$route.query.id
          },
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          this.$refs.loading.hide();
          if (res.code === 0) {
            this.params.index = res.data.platformType
            let { id, name, status } = res.data
            this.$set('params.role',{ id, name, status })
            this.params.id = this.params.role.id
            this.params.name = this.params.role.name
            this.params.status = this.params.role.status
            res.data.resourceRoleList.forEach((item) => {
              this.params.resourceIds.push(item.resourceId)
            })
          } else {
            tip(res.message || "系统出错，请联系客服！")
          }
        }).catch((res) => {
          tip(res.message)
        })
      } else {
        this.isEdit = false
      }
    },
    beforeSubmit(queryOpt, _this) {
      let curRole = {}
      curRole.platformType = this.params.index
      curRole.status = this.params.status
      curRole.name = this.params.name
      curRole.id = this.params.id
      _this.queryOpt.role = curRole
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateRoleUrl : apiPath.addNewRoleUrl;
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
  },
  watch: {
    ["params.index"](val) {
      if (val === 0) {
        this.$set('allResource', this.allBackResource)
        this.$set('classifyOptionItems', this.resourceBackClassifyOptionItems)
      } else if (val === 1) {
        this.$set('allResource', this.allAppResource)
        this.$set('classifyOptionItems', this.resourceAppClassifyOptionItems)
      }
    }
  }
}