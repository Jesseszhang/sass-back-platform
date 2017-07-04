const userCenterService = require('../userCenterService');
const apiPath = require('../../../service/requestPath.js');
const tip = require('../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./userSet.tpl');
const commonMixin = require('../../mixin/commonMixin');
require('./userSet.scss');

export default {
  name: "userSet",
  template,
  mixins: [commonMixin],
  data() {
    return {
      params: {
        username: window.localStorage.getItem('sassUsername'),
        password: "",
        originalPassword: "",
        rePassword: ""
      },
      validateRules: {
        originalPassword: {
          required: true,
          empty: '请输入旧密码！'
        },
        password: {
          required: true,
          empty: '请输入新密码！'
        },
        rePassword: {
          required: true,
          empty: '请输入重复新密码！'
        }
      }
    }
  },
  route: {
    data(transition) {}
  },
  methods: {
    validate() {
      let params = this.params;
      let rules = this.validateRules;
      for (let key in rules) {
        let rule = rules[key];
        let value = params[key];
        if (rule.required && !$.trim(value)) {
          tip(rule.empty)
          return false
        }
        if (value.length > 16 || value.length < 8) {
          tip('请输入8-16位密码！')
          return false
        }
      }
      if (this.params.password != this.params.rePassword) {
        tip('两次输入的密码不同！')
        return false
      }
      return true;
    },
    submitData() {
      if (this.validate()) {
        this.$refs.loading.show();
        let params = this.params
        userCenterService.setUserInfo(params).then((data) => {
          this.$refs.loading.hide();
          tip('密码修改成功')
        }).catch((res) => {
          this.$refs.loading.hide();
          tip(res.message) 
        })
      }
    }
  }
}