<div class="page-layout-bg">
  <div class="tcuDictionary-form-wrap">
  	<div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}tcu</h4>
    </div>
    <loading v-ref:loading></loading>
  	<div class="form-area">
  		<form-area
        v-ref:form-area
        :json-data="true" 
        :value-as-url="true"
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="tcuDictionary-form">
	      <div class="form-horizontal">
	        <div class="form-horizontal">
	          <div class="form-group">
	            <label class="col-sm-2 control-label">
	              <em class="identi">*</em>型号
	            </label>
	            <div class="col-sm-9">
	            	<input-box 
	                :hidden="true" 
	                query-name="id" 
	                :value="params.id"></input-box>
	            	<input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="type" 
		              error-message="型号" 
		              placeholder="请填写型号" 
		              :empty="false" 
		              :show-limit="true"
		              :max-length="20" 
		              :value.sync="params.type"></input-box>
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">
	              <em class="identi">*</em>生产厂商
	            </label>
	            <div class="col-sm-9">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="manufacturer" 
		              error-message="生产厂商" 
		              placeholder="请填写生产厂商" 
		              :empty="false" 
		              :show-limit="true"
		              :max-length="50" 
		              :value.sync="params.manufacturer"></input-box>
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">描述</label>
	            <div class="col-sm-9">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="remark" 
		              :empty="true" 
		              type="textarea"
		              error-message="描述" 
		              :max-length="100"
		              :row='2'
		              :show-limit="true"
		              placeholder="请填写描述" 
		              :value.sync="params.remark"></input-box>
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">
	              <em class="identi">*</em>图片
	            </label>
	            <div class="col-sm-9">
		            <div class="img-upload">
		              <upload
		                type="img"
		                size="160*160"
		                query-name="imgUrl"
		                :url="uploadImg"
		                :min='1'
		                url-key="fileUrl",
		                name-key="fileUrl"
		                :upload-items="isEdit ? [{url: params.imgUrl}] : []"
		                instruction="建议上传尺寸为160*160"
		                v-ref:upload-imgUrl></upload>
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
	      </div>
    </div>
 	</div>
</div>