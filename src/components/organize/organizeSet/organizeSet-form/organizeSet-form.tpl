<div class="organizeSet-form-wrap">
  <div class="stage-header">
    <h4>{{ isEdit ? '编辑' : '新增' }}组织机构</h4>
  </div>
  <loading v-ref:loading></loading>
  <div class="form-content">
    <div class="sub-content-wrap">
      <loading v-ref:loading></loading>
      <form-area
        v-ref:form-area
        :json-data="true"
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="organizeSet-form">
        <div class="form-horizontal"> 
          <div class="form-group">
            <label class="col-sm-2 control-label">
             <em class="identi">*</em>部门名称
            </label>
            <div class="col-sm-9">
              <input-box 
                :hidden="true" 
                query-name="id" 
                :value.sync="params.id"></input-box>
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="deptName" 
                :empty="false"
                :max-length="20"
                error-message="部门名称"  
                placeholder="请输入部门名称" 
                :value.sync="params.deptName"></input-box>
            </div>
          </div>
          <div class="form-group" v-if="showParent">
            <label class="col-sm-2 control-label">上级节点</label>
            <div class="col-sm-9">
              <drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择上级节点"
                query-name="parentId"
                val-name ="value"
                txt-name ="label"
                :value.sync="params.parentId"
                :search-filter="true"
                :option-items="departmentList" 
                v-ref:parentId></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
             <em class="identi">*</em>岗位状态
            </label>
            <div class="col-sm-9">
              <div class="status-wrap">
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
            <label class="col-sm-2 control-label">
             <em class="identi">*</em>排序
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="sort" 
                :empty="false"
                regex="^\d{1,2}$" 
                error-message="排序数字"  
                placeholder="请输入排序数字" 
                :value.sync="params.sort"></input-box>
            </div>
          </div>
          <div class="form-group">
            <div class="submit-btn-wrap">
              <btn 
                class="submit-btn"
                type="button" 
                value="提交"
                primary="primary"
                kind="primary"
                @click="submit"></btn>
            </div>
          </div>
        </div>
      </form-area>
    </div>
  </div>
</div>  