<template lang="html">
  <div class="home-page-wrap">
    <div class="login-center-wrap">
      <div class="center-wrap">
        <div class="logo">
          <img src="../../assets/ic_logo.png" class="logo-icon" alt="">
          <p class="stake">公有云后台</p>
          <p>全面解决大型运营商</p>
          <p>充电站运营管理问题</p>
        </div>
        <div class="login">
          <p class="title">登录</p>
          <input type="text" class="form-control" placeholder="请输入账号" v-model="params.username">
          <input type="password" class="form-control" placeholder="请输入密码" v-model="params.password">
          <div class="form-inline">
            <input type="text" class="form-control" placeholder="验证码" v-model="params.code" @keyup.enter="login" @focus="changeCode">
            <img :src="codeAddress" alt="" class="auth-code" @click="changeCode">
            <span class="change" @click="changeCode">换一个</span>
          </div>
          <div class="error" :class='{"hasError":hasError}'>
            <i class="icon-warn"></i>
            <span>{{ warnText }}</span>
          </div>
          <div class="submit-btn" @click="login">登录<span v-if="isSubmiting">中...</span></div>
        </div>
      </div>
      <div class="copy-right">Copyright © 2017 ChargerLink Inc. All Rights Reserved. 粤ICP备140</div>
    </div>
  </div>
</template>

<script>
var hostUrl = require('../../service/host.js');
const tip = require('../../common/components/base/pop/tip');

export default {
  name: "login",
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
</script>

<style lang="scss" scope>
@import '~bourbon/app/assets/stylesheets/bourbon';
html,body{
  width: 100%;
  height: 100%;
}
.home-page-wrap{
  width: 100%;
  height: 100%;
  background: #45536b;
  text-align: center;
  overflow: hidden;
  position: relative;
  .login-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -460px;
    margin-top: -307px;
    width: 920px;
    height: 615px;
    z-index: 10;
  }
  .login-center-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -460px;
    margin-top: -307px;
    width: 920px;
    height: 615px;
    z-index: 10;
    .center-wrap{
      width: 920px;
      height: 520px;
      border-radius: 6px;
      text-align: center;
      box-shadow: 0 0 12px rgba(0, 0, 0, .4);
      background: white;
      overflow: hidden;
      .logo{
        float: left;
        width: 392px;
        height: 100%;
        background: url("../../assets/bg_brand.png") center no-repeat;
        img{
          width: 120px;
          margin-top: 150px;
        }
        p{
          color: #999;
          font-size: 14px;
          margin-bottom: 2px;
        }
        .stake{
          font-size: 30px;
          color: #333;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
      .login{
        float: left;
        width: 528px;
        padding: 100px 125px 110px 100px;
        .error{
          margin: 10px 0;
          visibility: hidden;
          text-align: left;
          color: #e85352;
          &.hasError {
            visibility: visible;
          }
          .icon-warn{
            background: url(../../assets/ico_85.png) center no-repeat;
            width: 20px;
            height: 20px;
            margin-right: 6px;
            vertical-align: middle;
            display: inline-block;
          }
          span{
            font-size: 14px;
            vertical-align: middle;
            display: inline-block;
          }
        }
        .title{
          font-size: 18px;
          color: #333;
          text-align: left;
          margin-bottom: 44px;
        }
        input.form-control{
          &:focus{
            border-color: #a0a0a0 !important;
            outline: 0;
            box-shadow: inset 0 1px 1px hsla(0,0%,63%,.075), 0 0 2px hsla(0,0%,63%,.6) !important;
          }
          width: 100%;
          height: 35px;
          margin-bottom: 25px;
        }
        .form-inline{
          text-align: left;
          overflow: hidden;
          input{
            float: left;
            width: 125px;
            height: 35px;
            margin-right: 15px;
            margin-bottom: 0px;
            vertical-align: middle;
          }
          .auth-code{
            cursor: pointer;
            float: left;
            width: 100px;
            height: 30px;
            margin-top: 2px;
            border-radius: 3px;
            margin-right: 5px;
            vertical-align: middle;
          }
          .change{
            float: left;
            display: inline-block;
            height: 35px;
            line-height: 35px;
            margin-left: 5px;
            font-size: 14px;
            color: #999;
            cursor: pointer;
            vertical-align: middle;
          }
        }
        .errorInfo{
          font-size: 14px;
          color: red;
          text-align: left;
          margin: 10px 0;
        }
        .submit-btn{
          width: 100%;
          height: 44px;
          line-height: 44px;
          text-align: center;
          color: white;
          border-radius: 5px;
          background: #d14b4b;
          font-size: 14px;
          cursor: pointer;
          &:hover{
            background: #db2030;
          }
        }
      }
    }
    .copy-right{
      position: absolute;
      width: 100%;
      color: rgba(255, 255, 255, .2);
      font-size: 14px;
      margin-top: 80px;
    }
  }
}
</style>
