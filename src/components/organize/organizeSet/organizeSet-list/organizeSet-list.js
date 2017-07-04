const listTree = require ('../../listTree/listTree');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./organizeSet-list.tpl');
require('./organizeSet-list.scss');

export default {
  name: "organizeSet",
  template,
  data() {
    return {
      organizeSetDetailBtn: false,
      organizeSetAddBtn: false,
      treeData: {
        deptName: "所有部门",
        id: -1,
        children: []
      },
      showBtn: true
    }
  },

  route: {
    data(transition) {
      let types = this.$route.curtype
      if (types === 'menu') {
        this.$set('showBtn', true)
      } else {
        this.$set('showBtn', false)
      }
      this.getDepList()
    }
  },
  methods: {
    getDepList() {
      return ajax(apiPath.getOrganizeListUrl, {
        type: 'get',
        data: { "isTree": true }
      }).then((res) => {
        this.treeData.children = res.data
      }).catch((res) => {
        tip(res.message)
      })
    }
  },
  components: {
    listTree
  },
  events: {
    featchList() {
      this.getDepList()
    },
    organizateId(id) {
      this.$router.go({
        path: '/page/organizeSet/Detail',
        query: { id: id }
      })
    }
  }
}