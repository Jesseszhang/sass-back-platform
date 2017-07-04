<div class="page-layout-bg">
  <div class="application-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}应用</h4>
    </div>
    <loading v-ref:loading></loading>
    <div class="form-area">
      <form-area
        :before-submit="beforeSubmit"
        :success="submitSuccess"
        v-ref:form-area
        :json-data="true"
        class="application-form">
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>应用名称
            </label>
            <div class="col-sm-9">
              <input-box 
                :hidden="true" 
                query-name="id" 
                :value="params.id"></input-box>
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="name" 
                :empty="false" 
                error-message="应用名称" 
                :max-length="20"
                :show-limit="true" 
                placeholder="请输入应用名称" 
                :value="params.name"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>应用说明
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill"
                type="textarea"
                :row="2" 
                class="form-item" 
                query-name="description" 
                error-message="应用说明" 
                placeholder="请输入应用说明" 
                :empty="false"
                :show-limit="true" 
                :max-length="100" 
                :value.sync="params.description"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">应用状态</label>
            <div class="col-sm-9">
              <div class="check-box-wrap">
                <checkbox
                  :required="true"
                  :value.sync="params.status"
                  type="radio"
                  query-name="status"
                  v-ref:status-checkbox>
                  <check-ele value="1">启用</check-ele>
                  <check-ele value="0">禁用</check-ele>
                </checkbox>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
             <em class="identi">*</em>有权功能
            </label>
            <div class="col-sm-9">
              <drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择有权功能"
                query-name="resourceIdList"
                val-name ="id"
                txt-name ="name"
                :search-filter="true"
                :required="true"
                :multiple="true"
                error-message="有权功能"
                :classify="classifyOptionItems"
                :classify-option-items="allResource"
                :value.sync="params.resourceIdList"
                v-ref:resourceIdList></drop-menu>
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