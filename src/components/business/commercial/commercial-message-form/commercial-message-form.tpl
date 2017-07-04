<div class="page-layout-bg">
  <div class="commercial-message-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}系统消息</h4>
    </div>
    <loading v-ref:loading></loading>
		<div class="form-area">
      <form-area
        v-ref:form-area
        :json-data="false" 
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="commercial-message-form">
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>消息标签
            </label>
            <div class="col-sm-9">
              <input-box 
                :hidden="true" 
                query-name="ncId" 
                :value="params.ncId"></input-box>
              <drop-menu
                theme="fill"
                default-text="请选择消息标签"
                query-name="notifyLable"
                val-name ="value"
                txt-name ="label"
                :search-filter="true"
                :option-items="typelist"
                :value.sync="params.notifyLable" 
                v-ref:notifyLable></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">消息正文</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill"
                type="textarea"
                class="form-item" 
                query-name="notifyContext"
                type="textarea"
                error-message="消息正文" 
                :max-length="100"
                :row='6'
                :show-limit="true"
                placeholder="请输入消息正文" 
                :value.sync="params.notifyContext"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">通知方式</label>
            <div class="col-sm-9">
              <div class="status-wrap">
                <checkbox
                  query-name="notifyWay"
                  :read-only="discommLevel"
                  :value.sync="params.notifyWay"
                  type="checkbox"
                  v-ref:notifyWay-checkbox>
                  <check-ele value="3">弹框</check-ele>
                  <!-- <check-ele value="2">短信</check-ele> -->
                  <check-ele value="1">邮件</check-ele>
                  <check-ele value="0">站内信</check-ele>
                </checkbox>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">通知对象
            </label>
            <div class="col-sm-9">
              <drop-menu
                theme="fill"
                default-text="请选择通知对象"
                query-name="notifyTarget"
                val-name ="value"
                txt-name ="label"
                :multiple="true"
                :search-filter="true"
                :option-items="oblist"
                :value.sync="params.notifyTarget" 
                v-ref:notifyTarget></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">通知时间
            </label>
            <div class="col-sm-9">
              <!-- <data-picker
                placeholder="请选择通知时间"
                :value.sync="params.notifyTime"
                >
              </data-picker> -->
              <date-time
                query-name="notifyTime"
                no-pastTime="true"
                placeholder="请选择通知时间"
                :value.sync="params.notifyTime"
                >
              </date-time>
            </div>
          </div>
          <div class="form-group" v-if="!isEdit">
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