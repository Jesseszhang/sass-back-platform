<div class="page-layout-bg">
  <div class="operate-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}运营商</h4>
    </div>
    <loading v-ref:loading></loading>
  	<div class="form-area">
      <form-area
        v-ref:form-area
        :json-data="true" 
        :value-as-url="true"
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="operate-form">
  			<div class="form-horizontal">
  				<div class="edit-title">基本信息
  	  			<span v-if="curId != -1" class="update">更新时间：{{ params.updateTime | getTime }}</span>
  	  		</div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
            	<em class="identi">*</em>运营商简称
            </label>
  					<div class="col-sm-9">
  						<input-box 
                :hidden="true" 
                query-name="operateId" 
                :value="params.operateId"></input-box>
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="shortName" 
                :empty="false" 
                error-message="运营商简称"
                :show-limit="true" 
                :max-length="20" 
                placeholder="请填写运营商简称（20字以内）" 
                :value.sync="params.shortName"></input-box>
  					</div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
            	<em class="identi">*</em>运营商名称
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="operateName" 
                :empty="false" 
                error-message="运营商名称" 
                :max-length="50" 
                :show-limit="true"
                placeholder="请填写运营商名称（50字以内）" 
                :value.sync="params.operateName"></input-box>
  					</div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">服务电话</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                regex="^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$"
                query-name="servicePhone" 
                error-message="运营商服务电话"  
                placeholder="请填写运营商服务电话" 
                :value.sync="params.servicePhone"></input-box>
  					</div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">服务时间</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="serviceTime" 
                error-message="服务时间"  
                placeholder="请填写服务时间（如7*24小时）" 
                :value.sync="params.serviceTime"></input-box>
  					</div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
            	<em class="identi">*</em>icon图片
            </label>
            <div class="col-sm-9">
              <div class="img-upload">
                <upload
                  type="img"
                  size="40*40"
                  query-name="icon"
                  :url="uploadImg"
                  :min='1'
                  url-key="fileUrl",
                  name-key="fileUrl"
                  :upload-items="isEdit ? [{url: params.icon}] : []"
                  instruction="建议上传尺寸为40*40白底图片"
                  v-ref:upload-icon></upload>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">备注</label>
            <div class="col-sm-9">
            	<input-box 
                theme="fill" 
                class="form-item" 
                query-name="remark" 
                type="textarea" 
                :row='2'
                placeholder="请填写备注信息" 
                :value.sync="params.remark"></input-box>
            </div>
          </div>
          <div class="edit-title">App信息（选填）</div>
          <div class="form-group">
            <label class="col-sm-2 control-label">App名称</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="appName"
                error-message="APP名称"  
                placeholder="请填写APP名称" 
                :value.sync="params.appName"></input-box>
  					</div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">ios链接</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="iosUrl"
                regex="^(http|https):\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$"  
                error-message="ios链接"  
                placeholder="请填写ios链接" 
                :value.sync="params.iosUrl"></input-box>
  					</div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">andriod链接</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="androidUrl"
                regex="^(http|https):\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$"  
                error-message="andriod链接"  
                placeholder="请填andriod链接" 
                :value.sync="params.androidUrl"></input-box>
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