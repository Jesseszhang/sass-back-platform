const listTree = require ('../../listTree/listTree');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./organizeSet-form.tpl');
require('./organizeSet-form.scss');
require('components/base/loading/loading');

export default {
  name: "organizeSetAdd",
  template,
  data() {
    return {
      params: {
        id: "",
        deptName: "",
        status: 1,
        parentId: -1,
        sort: 0
      },
      showParent: true,
      departmentList: [],
      isEdit: false
    }
  },
  ready() {
    this.params.id = this.$route.query.id || ""
    this.getOrganizeInfo()
    this.getOrganizeList()
  },
  methods: {
    getOrganizeList() {
      ajax(apiPath.getOrganizeListUrl, {
        data: { isTree : false },
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res)=> {
        if (res.code === 0) {
          this.$refs.loading.hide()
          this.departmentList.push({
            label: '请选择上级节点',
            value: -1
          })
          res.data.map((item) => {
            let option = {}
            option.value = item.id
            option.label = item.deptName
            option.parentId = item.parentId
            this.departmentList.push(option)
          })
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    getOrganizeInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(apiPath.getOrganizeDetailUrl, {
          data: { id : this.$route.query.id },
          async: false,
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          if (res.code === 0) {
            this.$refs.loading.hide()
            this.params = Object.assign(this.params, res.data)
            if (!this.params.parentId) {
              if (!this.$route.query.parentId) {
                this.params.parentId = -1
              }
            }
          }
        }).catch((res) => {
          tip(res.message)
        })
      } else {
        if (this.$route.query.parentId) {
          this.params.parentId = parseInt(this.$route.query.parentId)
        }
        this.isEdit = false
      }
    },
    beforeSubmit(queryOpt, _this) {
      if (!this.params.parentId) {
        _this.queryOpt.parentId = 0
      }
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateOrganizeUrl : apiPath.addNewOrganizeUrl;
      this.$refs.formArea.setAction(submitUrl).submit()
    },
    submitSuccess(res) {
      this.$refs.loading.hide();
      if (res.code === 0) {
        this.$dispatch('featchList')
        let message = this.isEdit ? '修改成功' : '新增成功'
        tip(message)
      } else {
        tip(res.message)
      }
    }
  },
  components: {
    listTree
  }
}