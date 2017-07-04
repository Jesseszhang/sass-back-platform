<div class="page-layout-bg">
  <div class="carType-form-wrap">
  	<div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}车型</h4>
    </div>
    <loading v-ref:loading></loading>
  	<div class="form-area">
			<form-area
	      v-ref:form-area
	      :json-data="true" 
	      :before-submit="beforeSubmit" 
	      :success="submitSuccess" 
	      class="carType-form">
		  	<div class="edit-title">基本信息</div>
		    <div class="form-horizontal">
		      <div class="form-group">
		        <label class="col-sm-2 control-label">
		          <em class="identi">*</em>品牌 / 车系
		        </label>
		        <div class="col-sm-9">
		          <div class="all-select-wrap">
		            <input-box 
		              :hidden="true" 
		              query-name="id" 
		              :value.sync="params.id"></input-box>
		            <drop-menu
		              theme="fill"
		              default-text="请选择品牌"
		              query-name="brandId"
		              val-name="value"
		              txt-name="label"
		              error-message="品牌"
		              :empty="false" 
		              :required="true"
		              :search-filter="true"
		              :option-items="brandList"
		              :value.sync="params.brandId" 
		              v-ref:brandId></drop-menu>
		          </div>
		          <div class="all-select-wrap">
		            <drop-menu
		              theme="fill"
		              default-text="请选择车系"
		              query-name="seriesId"
		              val-name="value"
		              txt-name="label"
		              :required="true"
		              :empty="false" 
		              error-message="车系"
		              :search-filter="true"
		              :option-items="seriesList"
		              :value.sync="params.seriesId" 
		              v-ref:seriesId></drop-menu>
		        	</div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">
		          <em class="identi">*</em>年份
		        </label>
		        <div class="col-sm-9">
		          <div class="all-select-wrap">
		            <drop-menu
		              theme="fill"
		              default-text="请选择年份"
		              query-name="year"
		              val-name ="value"
		              txt-name ="label"
		              :required="true"
		              :search-filter="false"
		              :option-items="yearList"
		              :value.sync="params.year" 
		              v-ref:year></drop-menu>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">
		          <em class="identi">*</em>车型名称
		        </label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="typeName" 
		              error-message="车型名称" 
		              placeholder="请添加车型的完整名称, 如 '75D'" 
		              :empty="false" 
		              :value.sync="params.typeName"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">
		          <em class="identi">*</em>续航里程(km)
		        </label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="drivingKm" 
		              error-message="续航里程" 
		              placeholder="请填写总续航里程, 如 '260'" 
		              regex="^(0|[1-9][0-9]{0,8})$"
		              :empty="false" 
		              :value.sync="params.drivingKm"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">
		          <em class="identi">*</em>官方指导价(万元)
		        </label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="guidePrice" 
		              error-message="官方指导价" 
		              placeholder="请填该车型的官方指导价, 如 '35.9'" 
		              regex="(^[0-9]{0,9}([.][0-9]{1,2})?$)"
		              :empty="false" 
		              :value.sync="params.guidePrice"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">
		          <em class="identi">*</em>接口标准
		        </label>
		        <div class="col-sm-9">
		          <div class="check-box-wrap">
		            <checkbox
	                :required="true"
	                query-name="interfaceStandard" 
	                :value.sync="params.interfaceStandard"
	                type="radio"
	                v-ref:status-checkbox>
		              <check-ele value="1">国标</check-ele>
		              <check-ele value="2">欧标</check-ele>
		            </checkbox>
		          </div>
		        </div>
		      </div>
		      <div class="edit-title">基本参数</div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">厂商</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="manufacturer" 
		              error-message="厂商" 
		              placeholder="如 '比亚戴姆勒'" 
		              :value.sync="params.manufacturer"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">级别</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="carLevel" 
		              error-message="级别" 
		              placeholder="如 '中型车'" 
		              :value.sync="params.carLevel"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">发动机</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="engine" 
		              error-message="发动机" 
		              placeholder="如 '纯电动车117马力'" 
		              :value.sync="params.engine"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">变速箱</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="gearboxes" 
		              error-message="变速箱" 
		              placeholder="如 '电动车单速变速箱'" 
		              :value.sync="params.gearboxes"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">长*宽*高(mm)</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="lwh" 
		              error-message="长*宽*高(mm)" 
		              placeholder="如 '4624*1853*1630'" 
		              :value.sync="params.lwh"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">车身结构</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="bodyStructure" 
		              error-message="车身结构" 
		              placeholder="如 '4门5座3厢车'" 
		              :value.sync="params.bodyStructure"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">整车质保</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="carFullGuarantee" 
		              error-message="整车质保" 
		              placeholder="如 '三年或12万公里'" 
		              :value.sync="params.carFullGuarantee"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="edit-title">性能指标</div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">最高车速(km/h)</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="maxSpeed" 
		              error-message="最高车速(km/h)" 
		              placeholder="如 '150'" 
		              :value.sync="params.maxSpeed"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">电机功率(kw)</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="enginePower" 
		              error-message="电机功率(kw)" 
		              placeholder="如 '87'" 
		              :value.sync="params.enginePower"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">电池容量(kWh)</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="batteryCapacity" 
		              error-message="电池容量(kWh)" 
		              placeholder="如 '34.7'" 
		              :value.sync="params.batteryCapacity"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">电池组质保</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="batteryPackGuarantee" 
		              error-message="电池组质保" 
		              placeholder="如 '8年或15万公里'" 
		              :value.sync="params.batteryPackGuarantee"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">快速充电时间(h)</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="quickChargeTime" 
		              error-message="快速充电时间(h)" 
		              placeholder="如 '1'" 
		              :value.sync="params.quickChargeTime"></input-box>
		          </div>
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label">慢速充电时间(h)</label>
		        <div class="col-sm-9">
		          <div class="all-input-wrap">
		            <input-box 
		              theme="fill" 
		              class="form-item" 
		              query-name="slowChargeTime" 
		              error-message="慢速充电时间(h)" 
		              placeholder="如 '2'" 
		              :value.sync="params.slowChargeTime"></input-box>
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