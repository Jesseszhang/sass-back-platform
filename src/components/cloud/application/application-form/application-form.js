const tip = require('../../../../common/components/base/pop/tip');
const apiPath = require('../../../../service/requestPath.js');
const template = require('./application-form.tpl');
const ajax = require('appUtil/ajaxHttp');
require('./application-form.scss');

export default {
  name: "applicationForm",
  template,
  data() {
    return {
      isEdit: false,
      resourceListUrl: apiPath.getResourceListUrl,
      roleDetailUrl: apiPath.getRoleDetailUrl,
      updateRoleUrl: apiPath.getupdateRoleUrl,
      addRoleUrl: apiPath.getaddRoleUrl,
      params: {
        id: "",
        status : 1,
        resourceIdList:[]
      },
      allResource: {},
      classifyOptionItems: [],
      list: []
    }
  },
  
  ready() {
    this.getResourceList();
    this.getRoleInfo();
  },
  methods: {
    getRoleInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(this.roleDetailUrl, {
          data: {
            roleId: this.$route.query.id
          },
          async: false,
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          if (res.code === 0) {
            this.$refs.loading.hide();
            this.params = Object.assign({}, this.params, res.data, {
              resourceIdList: res.data.resourceIdList || []
            });
          }
        }).catch((res) => {
          tip(res.message)
        }) 
      } else {
        this.isEdit = false
      }
      
    },
    getResourceList() {
      ajax(this.resourceListUrl, {
        data: {
          platformType: 0
        },
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code === 0) {
          this.$refs.loading.hide();
          this.$set('list', res.data)
          let allArr = []
          res.data.map((item) => {
            this.classifyOptionItems.push({
              value: "children" + item.id,
              text: item.name
            })
            item.children.map((subItem) => {
              allArr.push({
                id: subItem.id,
                name: subItem.name
              })
            })
            this.allResource.all = allArr
            this.allResource['children' + item.id] = item.children
          })
          
        }
      }).catch((res) => {
        tip(res.message)
      });
    },
    beforeSubmit(queryOpt, _this) {
      _this.queryOpt.resourceIdList = this.params.resourceIdList
      // _this.queryOpt.createTime = this.params.createTime
      // _this.queryOpt.createBy = this.params.createBy
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? this.updateRoleUrl : this.addRoleUrl;
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