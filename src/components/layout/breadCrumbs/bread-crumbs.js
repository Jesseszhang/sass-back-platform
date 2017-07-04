const ajax = require('appUtil/ajaxHttp');
const template = require('./bread-crumbs.tpl');
require('./bread-crumbs.scss');
require('../../../common/components/base/bubble/bubble');
require('../../../common/components/base/pop/pop');
require('../../../common/components/base/icon/icon');
const hostUrl = require('../../../service/host.js');
const alert = require('../../../common/components/base/pop/alert');

export default {
  name: 'Breadcrumbs',
  template,
  props: {
    crumbs: {
      type: Array,
      default: () => []
    }
  },
  data() {
  	return {
  		username: window.localStorage.getItem('sassUsername')
  	}
  },
  methods: {
  	showAvatarMenu() {
      this.$refs.avatarMenu.show(this.$els.avatar)
    },
  	logout() {
      this.$refs.confirmLogoutPop.show()
    },
    okcb(){
      let host = hostUrl.host
      let url =  host + "/api/account/logout"
      $.ajaxSettings.headers = { token: window.localStorage.getItem('sassToken') }
      let res = $.ajax({
        url: url,
        method: 'post',
        dataType: "json",
        contentType: 'application/json',
        success: (res) => {
          if (res.code === 0) {
            window.localStorage.removeItem('sassToken');
            window.localStorage.removeItem('sassUsername');
            this.$router.go({
              name: 'login'
            })
          }
        }
      })
    }
  }
};