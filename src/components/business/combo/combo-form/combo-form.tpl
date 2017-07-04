<div class="page-layout-bg">
  <div class="combo-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}套餐</h4>
    </div>
    <loading v-ref:loading></loading>
		<div class="form-area">
      <form-area
        v-ref:form-area
        :json-data="true" 
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="combo-form">
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>套餐名称
            </label>
            <div class="col-sm-9">
              <input-box 
                :hidden="true" 
                query-name="id" 
                :value="params.id"></input-box>
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="name" 
                error-message="套餐名称" 
                placeholder="请输入套餐名称）" 
                :empty="false" 
                :value.sync="params.name"></input-box>
              <!-- <drop-menu
                theme="fill"
                default-text="请选择套餐名称"
                query-name="name"
                val-name ="value"
                txt-name ="label"
                :required="true"
                error-message="套餐名称"
                :search-filter="true"
                :option-items="ranklist"
                :value.sync="params.name" 
                v-ref:name></drop-menu> -->
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
             	<em class="identi">*</em>枪头接入数
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="deviceAmount" 
                :read-only="readonly"
                regex="^\d+$"
                error-message="枪头接入数" 
                placeholder="请输入枪头接入数（个）" 
                :empty="false" 
                :value.sync="params.deviceAmount"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>套餐价格
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="price"
                :empty="false"
                regex="^\d+$" 
                error-message="套餐价格"
                placeholder="请输入套餐价格（元/年）" 
                :value.sync="params.price"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">套餐描述</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill"
                type="textarea"
                class="form-item" 
                query-name="remark"
                type="textarea"
                error-message="套餐描述" 
                :max-length="100"
                :row='2'
                placeholder="请输入套餐描述" 
                :value.sync="params.remark"></input-box>
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