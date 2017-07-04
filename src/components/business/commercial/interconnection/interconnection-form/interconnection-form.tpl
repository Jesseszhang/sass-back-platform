<div class="page-layout-bg">
  <div class="interconnection-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}互联互通</h4>
    </div>
    <loading v-ref:loading></loading>
  	<div class="form-area">
      <form-area
        v-ref:form-area
        :json-data="true" 
        :value-as-url="true"
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="interconnection-form">
  			<div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
            	<em class="identi">*</em>客户运营商
            </label>
  					<div class="col-sm-9">
  						<input-box 
                :hidden="true" 
                query-name="id" 
                :value="params.id"></input-box>
              <drop-menu
                theme="fill"
                default-text="请选择客户运营商"
                query-name="clientCommercialId"
                val-name ="value"
                txt-name ="label"
                :read-only="isEdit"
                :search-filter="true"
                :option-items="allOperator"
                :value.sync="params.clientCommercialId" 
                v-ref:clientCommercialId></drop-menu>
  					</div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>设备运营商
            </label>
            <div class="col-sm-9">
              <drop-menu
                theme="fill"
                default-text="请选择设备运营商"
                query-name="commercialId"
                val-name ="value"
                txt-name ="label"
                :multiple="true"
                :min="1"
                :search-filter="true"
                :option-items="allCommercialGsm"
                :value.sync="params.commercialId" 
                v-ref:commercialId></drop-menu>
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