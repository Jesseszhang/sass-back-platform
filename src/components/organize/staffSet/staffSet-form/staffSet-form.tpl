<div class="page-layout-bg">
	<div class="staffSet-form-warp">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}员工</h4>
    </div>
		<loading v-ref:loading></loading>
      <div class="form-area">
        <form-area
          v-ref:form-area
          :json-data="true" 
          :before-submit="beforeSubmit" 
          :success="submitSuccess"
          class="staffSet-form">
      		<div class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>工号
              </label>
              <div class="col-sm-9">
      					<input-box 
                  :hidden="true" 
                  query-name="id" 
                  :value.sync="params.id"></input-box>
                <input-box 
                  theme="fill" 
                  class="form-item"
                  :read-only="disabled"
                  query-name="empNo" 
                  :empty="false"
                  regex="^[a-z0-9A-Z]{1,5}$"
                  error-message="工号"  
                  placeholder="请输入工号" 
                  :value.sync="params.empNo"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>员工名称
              </label>
              <div class="col-sm-9">
              	<input-box 
                  theme="fill" 
                  class="form-item"
                  query-name="empName" 
                  :empty="false"
                  :show-limit="true"
                  :max-length="15"
                  error-message="员工名称"  
                  placeholder="请输员工名称" 
                  :value.sync="params.empName"></input-box>
              </div>
            </div>

            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>所属部门
              </label>
              <div class="col-sm-9">
            		<drop-menu
                  theme="fill" 
                  class="form-item" 
                  default-text="请选择所属部门"
                  query-name="departmentId"
                  val-name ="value"
                  txt-name ="label"
                  :required="true"
                  error-message="所属部门"
                  :value.sync="params.departmentId"
                  :search-filter="true"
                  :option-items="departmentList" 
                  v-ref:departmentId></drop-menu>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>岗位
              </label>
              <div class="col-sm-9">
                <div class="position">
      	          <drop-menu
      	            theme="fill" 
      	            class="form-item" 
      	            default-text="请选择岗位"
      	            query-name="positionId"
      	            val-name ="value"
      	            txt-name ="label"
                    :required="true"
                    error-message="岗位"
      	            :value.sync="params.positionId"
      	            :search-filter="true"
      	            :option-items="positionList" 
      	            v-ref:positionId></drop-menu>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">邮箱</label>
              <div class="col-sm-9">
              	<input-box 
                  theme="fill" 
                  class="form-item"
                  query-name="email" 
                  error-message="邮箱"  
                  placeholder="请输入邮箱" 
                  :value.sync="params.email"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">手机号</label>
              <div class="col-sm-9">
              	<input-box 
                  theme="fill" 
                  class="form-item"
                  query-name="telephone" 
                  error-message="手机号"  
                  placeholder="请输入手机号" 
                  :value.sync="params.telephone"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">QQ</label>
              <div class="col-sm-9">
              	<input-box 
                  theme="fill" 
                  class="form-item"
                  query-name="tencentQq" 
                  error-message="QQ"  
                  placeholder="请输入QQ" 
                  :value.sync="params.tencentQq"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">岗位状态</label>
              <div class="col-sm-9">
                <div class="check-wrap">
                  <checkbox
                    :required="true"
                    :value.sync="params.status"
                    type="radio"
                    query-name="status"
                    v-ref:status-checkbox>
                    <check-ele value="0">离职</check-ele>
                    <check-ele value="1">在职</check-ele>
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