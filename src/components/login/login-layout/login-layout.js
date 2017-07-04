var hostUrl = require('../../../service/host.js');
const tip = require('../../../common/components/base/pop/tip');
const template = require('./login-layout.tpl');
require('./login-layout.scss');

module.exports = {
  name: "login",
  template,
  data() {
    return{
      params:{
        username: "",
        password: "",
        code: "",
        timeStamp: ""
      },
      error: "",
      warnText: "",
      hasError: false,
      isSubmiting: false,
      codeAddress: "",
      token: "",
      validateRules: {
        username: {
          required: true,
          empty: '请输入账号'
        },
        password: {
          required: true, empty: '请输入密码',
          reg: /^[^(\u4e00-\u9fa5)\s]{1,16}$/,
          error: '请输入8-16位非中文密码'
        },
        code: {
          required: true,
          empty: '请输入验证码'
        }
      }
    }
  },
  ready(){
    this.changeCode()
  },
  methods: {
    changeCode(){
      let time = new Date().getTime()
      let host = hostUrl.host
      let url =  host + "/api/account/code?timeStamp=" + time;
      this.params.timeStamp  = time
      this.codeAddress = url
    },
    validate() {
      let params = this.params;
      let rules = this.validateRules;
      for(let key in rules) {
        let rule = rules[key];
        let value = params[key];
        if(rule.required && !$.trim(value)) {
          this.hasError = true
          this.warnText =  rule.empty
          return false;
        }
        if(rule.reg && !rule.reg.test(value)) {
          this.hasError = true
          this.warnText =  rule.error
          return false;
        }
      }
      this.hasError = false
      this.warnText = ""
      return true;
    },
    login(){
      let host = hostUrl.host;
      let url =  host + "/api/account/login"
      let data = Object.assign({}, this.params)
      if(this.validate()){
        if(this.isSubmiting) return;
        let res = $.ajax({
          url: url,
          method: 'post',
          data: JSON.stringify(data),
          dataType: "json",
          contentType: 'application/json',
          beforeSend: () => {
            this.isSubmiting = true;
          },
          success: (res)=>{
            this.isSubmiting = false;
            if(res.code === 0){
              window.localStorage.setItem('sassToken', res.data.accessToken);
              window.localStorage.setItem('sassUsername', res.data.username);
              this.$router.go({
                name: 'workPlatform'
              })
            }else{
              this.changeCode()
              this.hasError = true
              this.warnText = res.message
              this.$router.go({
                name: 'login'
              })
            }
          }
        })
      }
    }
  }
}