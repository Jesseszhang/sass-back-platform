<div class="page-layout-bg">
  <div class="feature-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}功能</h4>
    </div>
    <loading v-ref:loading></loading>
    <div class="form-area">
      <form-area
        :before-submit="beforeSubmit"
        :success="submitSuccess"
        :json-data="true"
        :value-as-url="true"
        v-ref:form-area
        class="feature-form">
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>功能名称
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
                error-message="功能名称"
                :show-limit="true" 
                :max-length="10" 
                placeholder="请输入功能名称" 
                :value.sync="params.name"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>功能标识
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="remark" 
                :empty="false" 
                error-message="功能标识"
                :show-limit="true"  
                :max-length="20" 
                placeholder="请输入功能标识" 
                :value.sync="params.remark"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>所属功能组
            </label>
            <div class="col-sm-9">
              <drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择所属功能组"
                query-name="parentId"
                val-name ="value"
                txt-name ="label"
                error-message="所属功能组"
                :required="true"
                :empty="false"
                :search-filter="true"
                :value.sync="params.parentId"
                :option-items="featureGroup" 
                v-ref:parentId></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">可见菜单</label>
            <div class="col-sm-9">
              <div class="check-box-wrap">
                <checkbox
                  :required="true"
                  query-name="isShow"
                  :value.sync="params.isShow"
                  type="radio"
                  v-ref:isShow-checkbox>
                  <check-ele value="1">是</check-ele>
                  <check-ele value="0">否</check-ele>
                </checkbox>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">是否菜单</label>
            <div class="col-sm-9">
              <div class="check-box-wrap">
                <checkbox
                  :required="true"
                  :value.sync="params.isMenu"
                  type="radio"
                   query-name="isMenu"
                  v-ref:isMenu-checkbox>
                  <check-ele value="0">是</check-ele>
                  <check-ele value="1">否</check-ele>
                </checkbox>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>主执行地址
            </label>
            <div class="col-sm-9 v-select">
              <drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择主执行地址"
                query-name="url"
                val-name ="value"
                txt-name ="label"
                error-message="主执行地址"
                :required="true"
                :empty="false"
                :search-filter="true"
                :value.sync="params.url"
                :option-items="addressGroup" 
                v-ref:url></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">从执行地址</label>
            <div class="col-sm-9 v-select">
              <drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择从执行地址"
                query-name="urls"
                val-name ="value"
                txt-name ="label"
                :multiple="true"
                :search-filter="true"
                :value.sync="params.urls"
                :option-items="subAddressGroup" 
                v-ref:urls></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">图片</label>
            <div class="col-sm-9">
              <upload
                type="img"
                size="160*160"
                query-name="icon"
                :url="uploadImg"
                :min='0'
                url-key="fileUrl",
                name-key="fileUrl"
                :upload-items="iconArr"
                instruction="建议上传尺寸为160*160"
                v-ref:upload-icon></upload>
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
                error-message="排序" 
                regex="(^([1-9]\d|\d)$)"
                error-message="排序" 
                placeholder="请输入排序" 
                :value.sync="params.sort"></input-box>
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