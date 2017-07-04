const template = require('../menu-list.tpl');
const commonMixin = require('../../../../mixin/commonMixin');
const ajax = require('../../../../../service/ajax')
const apiPath = require('../../../../../service/requestPath.js');
const tip = require('../../../../../common/components/base/pop/tip');
require('../menu-list.scss');

module.exports = {
  template,
  mixins: [commonMixin],
  data() {
    return {
      curType: "",
      url: apiPath.getMenuListUrl,
      list: [],
      addPath: "",
      editPath: "",
      hideBtn: true
    }
  },
  route: {
    data(transition) {
      if (this.$route.rank === 'one') {
        this.hideBtn = true
      } else {
        this.hideBtn = false
      }
      transition.next();
    }
  },
  /**
   * [ready description] 不推荐使用 computed
   * @return {[type]} [description]
   */
  ready() {
    let type = this.$route.type
    if (type === 'back') {
      this.addPath = "/page/backstage/menu/add"
      this.editPath = "/page/backstage/menu/update"
      this.curType = 0;
    } else if (type === 'front') {
      this.addPath = "/page/menu/add"
      this.editPath = "/page/menu/update"
      this.curType = 0;
    } else if (type === 'app') {
      this.addPath = "/page/appBack/menu/add"
      this.editPath = "/page/appBack/menu/update"
      this.curType = 1;
    }
    this.getMenu()
  },
  methods: {
    getMenu() {
      ajax(this.url, {
        data: {
          platformType: this.curType
        }
      }).then((res)=> {
        this.$set('list',res.data)
      }).catch((res)=> {
        tip(res.message)
      })
    }
  },
  computed: {
    showList(){
      return this.list.length != 0;
    }
  },
  events: {
    getMenu(){
      this.getMenu();
    }
  }
}