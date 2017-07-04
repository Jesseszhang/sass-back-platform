<div class="config-info-wrap">
  <div class="edit-title">
    <span>编辑配置信息</span>
  </div>
  <loading v-ref:loading></loading>
	<div class="form-area">
    <form-area
      v-ref:form-area
      :json-data="true" 
      :value-as-url="true"
      :before-submit="beforeSubmit" 
      :success="submitSuccess" 
      class="config-info-form">
			<div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>组织机构代码
          </label>
          <div class="col-sm-9">
            <input-box 
              :hidden="true" 
              query-name="commercialId" 
              :value="params.commercialId"></input-box>
            <input-box 
              theme="fill" 
              class="form-item" 
              query-name="operatorId" 
              :empty="false" 
              error-message="组织机构代码"
              :show-limit="true" 
              :max-length="9" 
              placeholder="请填组织机构代码" 
              :value.sync="params.operatorId"></input-box>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>token密钥
          </label>
          <div class="col-sm-9">
            <input-box 
              theme="fill"
              class="form-item" 
              :empty="false"
              query-name="operatorSecret"
              error-message="token密钥"
              placeholder="请填写token密钥" 
              :value.sync="params.operatorSecret"></input-box>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>回调地址
          </label>
          <div class="col-sm-9">
            <input-box 
              theme="fill"
              class="form-item" 
              query-name="callback"
              :empty="false" 
              error-message="回调地址"
              placeholder="请填写回调地址" 
              :value.sync="params.callback"></input-box>
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
