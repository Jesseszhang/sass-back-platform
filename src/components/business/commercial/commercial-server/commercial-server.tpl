<div class="commercial-server-wrap">
  <div class="edit-title">
    <span>编辑登录账号</span>
  </div>
  <loading v-ref:loading></loading>
	<div class="form-area">
    <form-area
      v-ref:form-area
      :json-data="true" 
      :value-as-url="true"
      :before-submit="beforeSubmit" 
      :success="submitSuccess" 
      class="commercial-server-form">
			<div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>姓名
          </label>
          <div class="col-sm-9">
            <input-box 
              :hidden="true" 
              query-name="id" 
              :value="params.id"></input-box>
            <input-box 
              theme="fill" 
              class="form-item" 
              query-name="merchant" 
              :empty="false" 
              error-message="姓名"
              :show-limit="true" 
              :max-length="20" 
              placeholder="请填写姓名" 
              :value.sync="params.merchant.merchant"></input-box>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>密码
          </label>
          <div class="col-sm-9">
            <input-box 
              theme="fill" 
              type="password"
              class="form-item" 
              :empty="false"
              query-name="password" 
              regex="^[a-zA-Z]\w{5,17}$"
              error-message="密码"
              placeholder="请填写密码" 
              :value.sync="params.merchant.password"></input-box>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>邮箱
          </label>
          <div class="col-sm-9">
            <input-box 
              theme="fill"
              class="form-item" 
              query-name="email"
              :empty="false" 
              regex="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
              error-message="邮箱"
              placeholder="请填写邮箱" 
              :value.sync="params.merchant.email"></input-box>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>手机号
          </label>
          <div class="col-sm-9">
            <input-box 
              theme="fill"
              class="form-item" 
              query-name="phone"
              :empty="false" 
              regex="^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$"
              error-message="手机号"
              placeholder="请填写手机号" 
              :value.sync="params.merchant.phone"></input-box>
          </div>
        </div>
        <div class="form-group">
          <div class="submit-btn-wrap">
            <btn 
              type="button" 
              value="提交"
              primary="primary"
              class="submit-btn"
              kind="primary"
              @click="submit"></btn>
          </div>
        </div>
      </div>
    </form-area>
  </div>
</div>
