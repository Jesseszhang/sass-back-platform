<div class="menu-form-wrap">
  <loading v-ref:loading></loading>
  <div class="stage-header">
    <h4>{{ isEdit ? '编辑' : '新增' }}菜单</h4>
  </div>
  <div class="form-area">
    <form-area
      :before-submit="beforeSubmit"
      :success="submitSuccess"
      v-ref:form-area
      :json-data="true"
      :value-as-url="true"
      class="menu-form">
      <div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>名称
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
              error-message="名称" 
              :max-length="10" 
              placeholder="请输入名称" 
              :value="params.name"></input-box>
          </div>
        </div>
        <div class="form-group" v-if="showParent">
          <label class="col-sm-2 control-label">
            <em class="identi">*</em>上级节点
          </label>
          <div class="col-sm-9">
            <drop-menu
              theme="fill" 
              class="form-item" 
              default-text="请选择上级节点"
              query-name="parentId"
              val-name ="value"
              txt-name ="label"
              :required="true"
              error-message="上级节点" 
              :value.sync="params.parentId"
              :search-filter="true"
              :option-items="menuGroup" 
              v-ref:parentId></drop-menu>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">图片
          </label>
          <div class="col-sm-9">
            <upload
              type="img"
              size="260*260"
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
          <label class="col-sm-2 control-label">默认访问地址</label>
          <div class="col-sm-9 v-select">
            <drop-menu
              theme="fill" 
              class="form-item" 
              default-text="请选择默认访问地址"
              query-name="urlId"
              val-name ="value"
              txt-name ="label"
              :value.sync="params.urlId"
              :search-filter="true"
              :option-items="addressGroup" 
              v-ref:urlId></drop-menu>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">状态</label>
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