<div class="page-layout-bg">
  <div class="carBrand-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}品牌</h4>
    </div>
    <loading v-ref:loading></loading>
  	<div class="form-area">
      <form-area
        v-ref:form-area
        :json-data="false"
        :value-as-url="true" 
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="carBrand-form">
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>品牌名称
            </label>
            <div class="col-sm-9">
              <input-box 
                :hidden="true" 
                query-name="id" 
                :value="params.id"></input-box>
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="brandName" 
                :empty="false" 
                error-message="正确的品牌名称" 
                :max-length="20" 
                placeholder="不超过20个字" 
                :value.sync="params.brandName"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>官方网址
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="officialSite" 
                error-message="官方网址" 
                placeholder="以(http://或https://)开头" 
                :empty="false" 
                regex="^(http|https):\/\/"
                :value.sync="params.officialSite"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">品牌简介</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="intro" 
                :empty="true" 
                type="textarea"
                error-message="正确的品牌简介" 
                :max-length="100"
                :row='2'
                placeholder="请填写品牌简介" 
                :value.sync="params.intro"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>图标
            </label>
            <div class="col-sm-9">
              <div class="img-upload">
                <upload
                  type="img"
                  size="160*160"
                  query-name="logo"
                  :url="uploadImg"
                  :min='1'
                  url-key="fileUrl",
                  name-key="fileUrl"
                  :upload-items="isEdit ? [{url: params.logo}] : []"
                  instruction="建议上传尺寸为160*160"
                  v-ref:upload-logo></upload>
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