const listTree = require ('../../listTree/listTree');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./organizeSet-detail.tpl');
require('./organizeSet-detail.scss');

export default {
  name: "organizeSetDetail",
  template,
  data() {
    return {
      params: {
        id: "",
        deptName: "",
        status: 0,
        sort: "",
        parentId: "",
        parentName: ""
      },
      currentId: ""
    }
  },

  route: {
    data(transition) {
      this.currentId = this.$route.query.id
      if (this.$route.query.id) {
        return ajax(apiPath.getOrganizeDetailUrl, {
          type: 'get',
          data: { 
            id: this.$route.query.id 
          },
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          this.$refs.loading.hide();
          this.params = Object.assign(this.params, res.data)
        }).catch((res) => {
          this.$refs.loading.hide();
          tip(res.message)
        })
      } else {
        transition.next()
      }
    },
    waitForData: true
  },

  components: {
    listTree
  },

  filters: {
    statusInfo(val) {
      if (val) {
        return "启用"
      } else {
        return "禁用"
      }
    },
    Null(val) {
      if (val == null) {
        return "暂无父节点"
      } else {
        return val
      }
    }
  }
}