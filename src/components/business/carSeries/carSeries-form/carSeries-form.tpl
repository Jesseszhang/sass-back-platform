<div class="page-layout-bg">
  <div class="carSeries-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}车系</h4>
    </div>
    <loading v-ref:loading></loading>
		<div class="form-area">
      <form-area
        v-ref:form-area
        :json-data="false" 
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="carSeries-form">
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>品牌
            </label>
            <div class="col-sm-9">
              <input-box 
                :hidden="true" 
                query-name="id" 
                :value="params.id"></input-box>
              <drop-menu
                theme="fill"
                default-text="请选择品牌"
                query-name="brandId"
                val-name ="value"
                txt-name ="label"
                :search-filter="true"
                :option-items="allCarBrand"
                :value.sync="params.brandId" 
                v-ref:brandId></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
             	<em class="identi">*</em>车系名称
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="name" 
                error-message="车系名称" 
                placeholder="请添加车系的完整名称, 如'Model S'" 
                :empty="false" 
                :value.sync="params.name"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">车系介绍</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="intro"
                type="textarea"
                error-message="车系介绍" 
                :max-length="100"
                :row='2'
                placeholder="字数限定在100个字以内" 
                :value.sync="params.intro"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">logo</label>
            <div class="col-sm-9">
              <upload
                type="img"
                size="160*160"
                query-name="logo"
                :url="uploadImg"
                :min='0'
                url-key="fileUrl",
                name-key="fileUrl"
                :upload-items="logoArr"
                instruction="建议上传尺寸为160*160"
                v-ref:upload-logo></upload>
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