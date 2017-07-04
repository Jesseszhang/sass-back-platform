<div class="page-layout-bg">
  <div class="comAuthorize-form-wrap">
    <div class="stage-header">
      <h4>商户授权</h4>
    </div>
    <loading v-ref:loading></loading>
		<div class="form-area">
		 	<form-area
	      v-ref:form-area
	      :json-data="true" 
	      :before-submit="beforeSubmit" 
	      :success="submitSuccess" 
	      :value-as-url="true"
	      class="comAuthorize-form">
	      <div class="form-horizontal">
	      	<div class="edit-title">
  	  			<span>基本信息</span>
  	  		</div>
  	  		<div class="form-group">
						<label class="col-sm-2 control-label">
							<em class="identi">*</em>
							<span v-if="params.commLevel == 1">集团商户号</span>
              <span v-if="params.commLevel == 2">商户号</span>
              <span v-if="params.commLevel == 3">子商户号</span>
						</label>
  					<div class="col-sm-9">
							<span 
								class="static cursor" 
								v-link="{ name: 'commercialDetail', params: { id: params.merchants } }">{{ params.merchants }}</span>
  					</div>
          </div>
          <div class="form-group">
						<label class="col-sm-2 control-label">
							<em class="identi">*</em>
							<span v-if="params.commLevel == 1">集团商户简称</span>
              <span v-if="params.commLevel == 2">商户简称</span>
              <span v-if="params.commLevel == 3">子商户简称</span>
						</label>
  					<div class="col-sm-9">
							<span class="static">{{ params.shortName }}</span>
  					</div>
          </div>
          <div class="form-group">
						<label class="col-sm-2 control-label">
							<em class="identi">*</em>服务有效期
						</label>
  					<div class="col-sm-9">
							<data-picker
	              placeholder="请选择服务有效期"
	              :value.sync="params.merchant.serviceTime"
	              >
	            </data-picker>
  					</div>
          </div>
          <div class="form-group">
						<label class="col-sm-2 control-label">
							<em class="identi">*</em>子账号数
						</label>
  					<div class="col-sm-9">
	  					<div class="account-num">
		  					<input-box 
	                theme="fill" 
	                class="form-item" 
	                query-name="accountNumber" 
	                :empty="false" 
	                error-message="子账号数"	            
	                placeholder="请输入子账号数" 
	                :value.sync="params.merchant.accountNumber"></input-box>
	  					</div>
  					</div>
          </div>
          <div class="edit-title">
  	  			<span>授权应用</span>
  	  		</div>
  	  		<div class="form-group">
						<label class="col-sm-2 control-label">
              <em class="identi">*</em>授权应用
            </label>
  					<div class="col-sm-9">
            	<drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择授权应用"
                query-name="roles"
                val-name ="id"
                txt-name ="name"
                :multiple="true"
                :min="1"
                error-message="授权应用"
                :value.sync="params.roles"
                :search-filter="true"
                :option-items="apply" 
                v-ref:roles></drop-menu>
  					</div>
          </div>
          <div class="edit-title">
            <span>套餐内容</span>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">套餐级别</label>
            <div class="col-sm-9">
              <drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择套餐级别"
                query-name="comboId"
                val-name ="id"
                txt-name ="name"
                error-message="套餐级别"
                :value.sync="params.comboId"
                :search-filter="false"
                :option-items="allcomboList" 
                v-ref:id></drop-menu>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">枪头接入数
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="gunNum" 
                :read-only="true"
                error-message="枪头接入数"              
                placeholder="请输入枪头接入数(个)" 
                :value.sync="gunNum"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">商户购买电桩数
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="showboughtChargerCount" 
                :empty="false"
                :read-only="true"
                error-message="商户购买电桩数"              
                placeholder="请输入商户购买电桩数(个)" 
                :value.sync="params.showboughtChargerCount"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">线下购买枪头数
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="boughtChargerCount" 
                :empty="false"
                error-message="线下购买枪头数"              
                placeholder="请输入线下购买枪头数(个)" 
                :value.sync="params.boughtChargerCount"></input-box>
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