<div class="page-layout-bg">
  <div class="userSet-wrap">
    <div class="stage-header">
      <h4>个人设置</h4>
    </div>
    <loading v-ref:loading></loading>
    <div class="form-area">
    <form-area
      :before-submit="beforeSubmit"
      :success="submitSuccess"
      v-ref:form-area
      :json-data="true"
      class="userSet-form">
      <div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>账号
          </label>
          <div class="col-sm-9">
            <p class="admin-wrap">{{ params.username }}</p>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>旧密码
          </label>
          <div class="col-sm-9">
            <input-box 
              type="password"
              theme="fill" 
              class="form-item"
              query-name="originalPassword" 
              placeholder="请输入旧密码" 
              :value.sync="params.originalPassword"></input-box>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">
           <em class="identi">*</em>新密码
          </label>
          <div class="col-sm-9">
            <input-box
              type="password" 
              theme="fill" 
              class="form-item" 
              query-name="password" 
              placeholder="请输入新密码" 
              :value.sync="params.password"></input-box>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>重复新密码
          </label>
          <div class="col-sm-9">
            <input-box 
              type="password"
              theme="fill" 
              class="form-item" 
              query-name="rePassword"  
              placeholder="请输入重复新密码" 
              :value.sync="params.rePassword"></input-box>
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
              @click="submitData"></btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>