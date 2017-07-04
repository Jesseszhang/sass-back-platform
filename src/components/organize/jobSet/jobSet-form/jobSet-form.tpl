<div class="page-layout-bg">
	<div class="jobSet-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}岗位</h4>
    </div>
		<loading v-ref:loading></loading>
    <div class="form-area">
      <form-area
        v-ref:form-area
        :json-data="true" 
        :before-submit="beforeSubmit" 
        :success="successSubmit" 
        class="jobSet-form">
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>岗位名称
            </label>
            <div class="col-sm-9">
              <input-box 
                :hidden="true" 
                query-name="id" 
                :value.sync="params.id"></input-box>
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="positionName" 
                :empty="false"
                :max-length="10"
                :show-limit="true"
                error-message="部门名称"  
                placeholder="请输入部门名称" 
                :value.sync="params.positionName"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>岗位状态
            </label>
            <div class="col-sm-9">
              <div class="check-wrap">
                <checkbox
                  :required="true"
                  query-name="status"
                  :value.sync="params.status"
                  type="radio"
                  v-ref:status-checkbox>
                  <check-ele value="1">启用</check-ele>
                  <check-ele value="0">禁用</check-ele>
                </checkbox>
              </div>
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