<div class="home-page-wrap">
  <div class="bg-top"></div>
  <div class="bg-bottom"></div>
  <div class="login-wrap">
    <div class="center-wrap">
      <div class="logo">
        <img src="../../../assets/ic_logo.png" class="logo-icon" alt="">
        <p class="stake">公有云后台</p>
        <p>全面解决大型运营商</p>
        <p>充电站运营管理问题</p>
      </div>
      <div class="login">
        <p class="title">登 录</p>
        <input type="text" class="form-control" placeholder="请输入账号" v-model="params.username">
        <input type="password" class="form-control" placeholder="请输入密码" v-model="params.password">
        <div class="form-inline">
          <input 
            type="text" 
            class="form-control" 
            placeholder="验证码" 
            v-model="params.code" 
            @keyup.enter="login" 
            @focus="changeCode">
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