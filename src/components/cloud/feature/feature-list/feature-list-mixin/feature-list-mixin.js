const template = require('../feature-list.tpl');
const commonMixin = require('../../../../mixin/commonMixin');
require('../feature-list.scss');

module.exports = {
  template,
  mixins: [commonMixin],
  data() {
    return {
      front: false,
      addPath: "",
      editPath: "",
      curType: ""
    }
  },
  /**
   * [ready description] 不推荐使用 computed
   * @return {[type]} [description]
   */
  ready() {
    let type = this.$route.type
    if (type === 'back') {
      this.addPath = "/page/backstage/feature/add"
      this.editPath = "/page/backstage/feature/update"
      this.curType = 0;
    } else if (type === 'front') {
      this.front = true
      this.addPath = "/page/feature/add"
      this.editPath = "/page/feature/update"
      this.curType = 0;
    } else if (type === 'app') {
      this.addPath = "/page/appBack/feature/add"
      this.editPath = "/page/appBack/feature/update"
      this.curType = 1;
    }
  },

  methods: {
    fetchQuery({ queryValue }) {
      let platformType = {
        platformType: this.curType
      }
      let queryParams = Object.assign(queryValue, platformType)
      this.$refs.tableData.query(queryParams).fetch();
    }
  }
}