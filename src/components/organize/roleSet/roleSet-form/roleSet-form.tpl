<div class="page-layout-bg">
  <div class="roleSet-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}角色</h4>
    </div>
  	<loading v-ref:loading></loading>
    <div class="form-area">
      <form-area
        v-ref:form-area
        :json-data="true" 
        :before-submit="beforeSubmit" 
        :success="submitSuccess"
        class="roleSet-form">
    		<div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>角色名称
            </label>
            <div class="col-sm-9">
            	<input-box 
                :hidden="true" 
                query-name="id" 
                :value.sync="params.id"></input-box>
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="name" 
                :empty="false"
                error-message="角色名称"  
                placeholder="请输入角色名称" 
                :value.sync="params.name"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">角色状态</label>
            <div class="col-sm-9">
              <div class="check-wrap">
                <checkbox
                  :required="true"
                  query-name="status" 
                  :value.sync="params.status"
                  type="radio"
                  v-ref:status-checkbox>
                  <check-ele value="0">禁用</check-ele>
                  <check-ele value="1">启用</check-ele>
                </checkbox>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>有权功能
            </label>
            <div class="col-sm-9">
              <div class="index-width">
                <checkbox
                  :required="true"
                  query-name="index" 
                  :value.sync="params.index"
                  type="radio"
                  v-ref:index-checkbox>
                  <check-ele value="0">后台设置</check-ele>
                  <check-ele value="1">App后台</check-ele>
                </checkbox>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label"></label>
            <div class="col-sm-9">
              <drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择有权功能"
                query-name="resourceIds"
                val-name ="id"
                txt-name ="name"
                :search-filter="true"
                :required="true"
                :multiple="true"
                :min="1"
                error-message="有权功能"
                :classify="classifyOptionItems"
                :classify-option-items="allResource"
                :value.sync="params.resourceIds"
                v-ref:resourceIds></drop-menu>
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
</div>