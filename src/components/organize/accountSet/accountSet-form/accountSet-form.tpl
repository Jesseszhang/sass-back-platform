<div class="page-layout-bg">
	<div class="accountSet-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}账户</h4>
    </div>
		<loading v-ref:loading></loading>
    <div class="form-area">
    	<form-area
        v-ref:form-area
        :json-data="true" 
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="accountSet-form">
				<div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>账号
            </label>
            <div class="col-sm-9">
            	<input-box 
                :hidden="true" 
                query-name="id" 
                :value.sync="params.id"></input-box>
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="username" 
                :empty="false"
                :max-length="15"
                :read-only="isEdit"
                :show-limit="true"
                error-message="账号"  
                placeholder="请输账号" 
                :value.sync="params.username"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>密码
            </label>
            <div class="col-sm-9">
            	<input-box 
                theme="fill" 
                class="form-item" 
                query-name="password" 
                :empty="false"
                regex="[0-9A-Za-z]{8,16}$"
                error-message="密码"  
                placeholder="请输密码" 
                :value.sync="params.password"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
             <em class="identi">*</em>选择员工
            </label>
            <div class="col-sm-9">
          		<drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择员工"
                query-name="employeeId"
                val-name ="value"
                txt-name ="label"
                :required="true"
                error-message="员工"
                ready-only="employeeAble"
                :value.sync="params.employeeId"
                :search-filter="true"
                :option-items="positionList" 
                v-ref:employeeId></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>选择角色
            </label>
            <div class="col-sm-9">
            	<drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择角色"
                query-name="roles"
                val-name ="value"
                txt-name ="label"
                :required="true"
                :multiple="true"
                error-message="角色"
                :min="1"
                :value.sync="params.roles"
                :search-filter="true"
                :option-items="role" 
                v-ref:roles></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">扩展功能</label>
            <div class="col-sm-9">
            	<drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择扩展功能"
                query-name="resources"
                val-name ="value"
                txt-name ="label"
                :multiple="true"
                error-message="扩展功能"
                :value.sync="params.resources"
                :search-filter="true"
                :option-items="extend" 
                v-ref:resources></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">岗位状态</label>
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