<div class="page-layout-bg">
  <div class="hardware-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}硬件词典</h4>
    </div>
    <loading v-ref:loading></loading>
		<div class="form-area">
		 	<form-area
	      v-ref:form-area
	      :json-data="true" 
	      :before-submit="beforeSubmit" 
	      :success="submitSuccess" 
	      :value-as-url="true"
	      class="hardware-form">
				<div class="form-horizontal">
					<div class="edit-title">
  	  			<span>基本信息</span>
  	  		</div>
          <div class="form-group">
						<label class="col-sm-2 control-label">
							<em class="identi">*</em>设备图片
						</label>
  					<div class="col-sm-9">
							<upload
                type="img"
                query-name="imgUrl"
                :url="uploadImg"
                :max="10"
                :min="1"
                url-key="fileUrl",
                name-key="fileUrl"
                :upload-items="imgUrlArrList"
                v-ref:upload-imgUrl></upload>
  					</div>
          </div>
          <div class="form-group">
          	<label class="col-sm-2 control-label">
          		<em class="identi">*</em>设备类型
          	</label>
          	<div class="col-sm-9">
							<div class="deviceType-wrap">
                <checkbox
                  :required="true"
                  query-name="deviceType"
                  :value.sync="params.deviceType"
                  type="radio"
                  v-ref:deviceType-checkbox>
                  <check-ele value="1">充电桩</check-ele>
                  <check-ele value="2">工业插座</check-ele>
                </checkbox>
              </div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="col-sm-2 control-label">
          		<em class="identi">*</em>型号
          	</label>
          	<div class="col-sm-9">
          		<div class="limit-width">
								<input-box 
	                :hidden="true" 
	                query-name="id" 
	                :value="params.id"></input-box>
	              <input-box 
	                theme="fill" 
	                class="form-item" 
	                query-name="deviceModel" 
	                :empty="false" 
	                error-message="型号"
	                :max-length="40"
	                :show-limit="true"
	                placeholder="如黑白屏：P1321_1，彩屏：P1321_2" 
	                :value.sync="params.deviceModel"></input-box>
	            </div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="col-sm-2 control-label">
          		<em class="identi">*</em>系列
          	</label>
          	<div class="col-sm-9">
	          	<div class="limit-width">
		          	<input-box 
	                theme="fill" 
	                class="form-item" 
	                query-name="deviceSeries" 
	                :empty="false"
	                :max-length="40"
	                :show-limit="true" 
	                error-message="系列"
	                placeholder="请输入系列" 
	                :value.sync="params.deviceSeries"></input-box>	
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="col-sm-2 control-label">
          		<em class="identi">*</em>运营商
          	</label>
          	<div class="col-sm-9">
	          	<div class="limit-width">
			          <drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择运营商"
	                query-name="operateId"
	                val-name ="value"
	                txt-name ="label"
	                :required="true"
	                error-message="运营商"
	                :min="1"
	                :value.sync="params.operateId"
	                :search-filter="true"
	                :option-items="operateList" 
	                v-ref:operateId></drop-menu>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="col-sm-2 control-label">
          		<em class="identi">*</em>生产厂商
          	</label>
          	<div class="col-sm-9">
	          	<div class="limit-width">
		          	<input-box 
	                theme="fill" 
	                class="form-item" 
	                query-name="manufacturer" 
	                :empty="false" 
	                :max-length="40"
	                :show-limit="true"
	                error-message="生产厂商"
	                placeholder="请输入生产厂商" 
	                :value.sync="params.manufacturer"></input-box>	
	          	</div>
  					</div>
          </div>
          <div class="edit-title">
  	  			<span>输出接口</span>
  	  		</div>
  	  		<div class="form-group">
  	  			<div class="out-port" v-for="item in params.currentList">
	  	  			<label class="item-label">
	          		<em class="identi">*</em>{{ $index + 1 }}
	          	</label>
	          	<div class="item-content">
		          	<div class="currentType-width">
					        <drop-menu
		                theme="fill"
		                class="form-item"
		                query-name="currentType"
		                val-name="value"
		                txt-name="label"
		                :option-items="currentTypeList"
		                :value.sync="item.currentType" 
		                v-ref:currentType></drop-menu>
		          	</div>
	  					</div>
  						<div class="item-content">
		          	<div class="powerKw-width">
			          	<input-box 
		                theme="fill" 
		                class="form-item" 
		                query-name="powerKw"
		                :empty="false" 
		                regex="^\d+(\.{0,1}\d+){0,1}$"
		                error-message="额定功率"
		                placeholder="请输入额定功率(Kw)" 
		                :value.sync="item.powerKw"></input-box>
		          	</div>
	          	</div>
	          	<div class="item-content" v-if="item.currentType === '1'">
		          	<div class="jvoltage-width">
				          <drop-menu
		                theme="fill" 
		                class="form-item" 
		                default-text="请选择额定电压(V)"
		                query-name="jvoltage"
		                val-name ="value"
		                txt-name ="label"
		                :required="item.currentType == '1'? true : false"
		                error-message="额定电压"
		                :min="1"
		                :multiple="true"
		                :value.sync="item.jvoltage"
		                :option-items="baseVoltage" 
		                v-ref:jvoltage></drop-menu>
		          	</div>
	          	</div>
	          	<div class="item-content" v-if="item.currentType === '2'">
		          	<div class="zvoltage-width">
			          	<input-box 
		                theme="fill" 
		                class="form-item" 
		                query-name="zvoltage"
		                :empty="item.currentType != '2'" 
		                regex="^\d+(\.{0,1}\d+){0,1}$"
		                error-message="额定电压(V)"
		                placeholder="请输入额定电压(V)" 
		                :value.sync="item.zvoltage"></input-box>
		          	</div>
	          	</div>
	          	<div class="item-content vertical-top" v-if="item.currentType === '1'">
		          	<div class="jcurrent-width">
				          <drop-menu
		                theme="fill" 
		                class="form-item" 
		                default-text="请选择额定电流(A)"
		                query-name="jcurrent"
		                val-name ="value"
		                txt-name ="label"
		                :required="item.currentType == '1'"
		                error-message="额定电流"
		                :min="1"
		                :multiple="true"
		                :value.sync="item.jcurrent"
		                :option-items="baseCurrent" 
		                v-ref:jcurrent></drop-menu>
		          	</div>
	          	</div>
	          	<div class="item-content" v-if="item.currentType === '2'">
		          	<div class="zcurrent-width">
			          	<input-box 
		                theme="fill" 
		                class="form-item" 
		                query-name="zcurrent"
		                :empty="item.currentType != '2'" 
		                regex="^\d+(\.{0,1}\d+){0,1}$"
		                error-message="额定电流"
		                placeholder="请输入额定电流(A)" 
		                :value.sync="item.zcurrent"></input-box>
		          	</div>
	          	</div>
	          	<div class="item-content">
		          	<div class="chargeInterface-width">
				          <drop-menu
		                theme="fill" 
		                class="form-item" 
		                default-text="请选择接口类型"
		                query-name="chargeInterface"
		                val-name ="value"
		                txt-name ="label"
		                :required="true"
		                error-message="接口类型"
		                :value.sync="item.chargeInterface"
		                :option-items="chargeInterfaceList" 
		                v-ref:chargeInterface></drop-menu>
		          	</div>
	          	</div>
	          	<div class="item-content">
		          	<div class="standard-width">
				          <drop-menu
		                theme="fill" 
		                class="form-item" 
		                default-text="请选择标准"
		                query-name="standard"
		                val-name ="value"
		                txt-name ="label"
		                :required="true"
		                error-message="标准"
		                :value.sync="item.standard"
		                :option-items="standardList" 
		                v-ref:standard></drop-menu>
		          	</div>
	          	</div>
	          	<div class="item-content">
                <span 
                	class="add-url url-option" 
                	@click="addNewCurrent" 
                	v-if="params.currentList.length < 10">
                  <img src="../../../../assets/add.png" alt="">
                </span>
                <span 
                	class="subtract-url url-option"  
                	@click="deleteCurrent($index)"
                	v-if="params.currentList.length > 1">
                  <img src="../../../../assets/subtracts.png" alt="">
                </span>
	          	</div>
  	  			</div>
          </div>
          <div class="edit-title">
  	  			<span>其他信息</span>
  	  		</div>
  	  		<div class="form-group">
          	<label class="col-sm-2 control-label">电桩类型</label>
          	<div class="col-sm-9">
	          	<div class="select-limit-width">
	          	<div class="chargerType-width" >{{ params.chargerType | chargerType }}</div>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="item-label-other">支持对接充电网</label>
          	<div class="item-content vertical-top">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="支持对接充电网"
	                query-name="sinNet"
	                val-name ="value"
	                txt-name ="label"
	                error-message="支持对接充电网"
	                :value.sync="params.sinNet"
	                :option-items="otherList" 
	                v-ref:sinNet></drop-menu>
	          	</div>
  					</div>
  					<div class="item-content vertical-top" v-if="params.sinNet === '1'">
	          	<div class="sinNetDetail-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择对接方式"
	                query-name="sinNetDetail"
	                val-name ="value"
	                txt-name ="label"
	                :multiple="true"
	                :required="true"
	                :min="1"
	                error-message="对接方式"
	                :value.sync="params.sinNetDetail"
	                :option-items="sinnetList" 
	                v-ref:sinNetDetail></drop-menu>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="col-sm-2 control-label">蓝牙</label>
          	<div class="col-sm-9">
	          	<div class="select-limit-width">
		          	<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择蓝牙"
	                query-name="sbluetooth"
	                val-name ="value"
	                txt-name ="label"
	                error-message="蓝牙"
	                :value.sync="params.sbluetooth"
	                :option-items="otherList" 
	                v-ref:sbluetooth></drop-menu>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="item-label-other">刷卡</label>
          	<div class="item-content">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择刷卡"
	                query-name="spos"
	                val-name ="value"
	                txt-name ="label"
	                error-message="刷卡"
	                :value.sync="params.spos"
	                :option-items="otherList" 
	                v-ref:spos></drop-menu>
	          	</div>
  					</div>
  					<div class="item-content" v-show="params.spos === '1'">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择刷卡"
	                query-name="sposDetail"
	                val-name ="value"
	                txt-name ="label"
	                :required="params.spos === '1'"
	                error-message="刷卡"
	                :value.sync="params.sposDetail"
	                :option-items="sposDetailList" 
	                v-ref:sposDetail></drop-menu>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="item-label-other">显示屏</label>
          	<div class="item-content">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择显示屏"
	                query-name="sscreen"
	                val-name ="value"
	                txt-name ="label"
	                :required="true"
	                error-message="显示屏"
	                :value.sync="params.sscreen"
	                :option-items="otherList" 
	                v-ref:sscreen></drop-menu>
	          	</div>
  					</div>
  					<div class="item-content" v-show="params.sscreen ==='1'">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择显示屏"
	                query-name="sscreenColorType"
	                val-name ="value"
	                txt-name ="label"
	                :required="params.sscreen ==='1'"
	                error-message="显示屏"
	                :value.sync="params.sscreenColorType"
	                :option-items="sscreenColorTypeList" 
	                v-ref:sscreenColorType></drop-menu>
	          	</div>
  					</div>
  					<div class="item-content" v-show="params.sscreen ==='1'">
	          	<div class="select-limit-width">
          			<input-box 
	                theme="fill" 
	                class="form-item" 
	                query-name="sscreenScale"
	                :max-length="5"
	                regex="^\d{0,5}$"
	                :show-limit="true"
	                error-message="尺寸"
	                placeholder="请填写尺寸(英寸)" 
	                :value.sync="params.sscreenScale"></input-box>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="item-label-other">键盘</label>
          	<div class="item-content">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择键盘"
	                query-name="skeybody"
	                val-name ="value"
	                txt-name ="label"
	                error-message="键盘"
	                :value.sync="params.skeybody"
	                :option-items="otherList" 
	                v-ref:skeybody></drop-menu>
	          	</div>
  					</div>
  					<div class="item-content" v-show="params.skeybody === '1'">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择键盘"
	                query-name="skeybodyDetail"
	                val-name ="value"
	                txt-name ="label"
	                :required="params.skeybody === '1'"
	                error-message="键盘"
	                :value.sync="params.skeybodyDetail"
	                :option-items="skeybodyDetailList" 
	                v-ref:skeybodyDetail></drop-menu>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="col-sm-2 control-label">桩端计量电量</label>
          	<div class="col-sm-9">
	          	<div class="select-limit-width">
		          	<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择桩端计量电量"
	                query-name="smeasureElec"
	                val-name ="value"
	                txt-name ="label"
	                error-message="桩端计量电量"
	                :value.sync="params.smeasureElec"
	                :option-items="otherList" 
	                v-ref:smeasureElec></drop-menu>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="col-sm-2 control-label">急停按钮</label>
          	<div class="col-sm-9">
	          	<div class="select-limit-width">
		          	<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择急停按钮"
	                query-name="semergencyStopBtn"
	                val-name ="value"
	                txt-name ="label"
	                error-message="急停按钮"
	                :value.sync="params.semergencyStopBtn"
	                :option-items="otherList" 
	                v-ref:semergencyStopBtn></drop-menu>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="item-label-other">桩端锁</label>
          	<div class="item-content">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择桩端锁"
	                query-name="slock"
	                val-name ="value"
	                txt-name ="label"
	                error-message="桩端锁"
	                :value.sync="params.slock"
	                :option-items="otherList" 
	                v-ref:slock></drop-menu>
	          	</div>
  					</div>
  					<div class="item-content" v-show="params.slock === '1'">
	          	<div class="select-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择桩端锁"
	                query-name="slockDetail"
	                val-name ="value"
	                txt-name ="label"
	                error-message="桩端锁"
	                :value.sync="params.slockDetail"
	                :option-items="slockDetailList" 
	                v-ref:slockDetail></drop-menu>
	          	</div>
  					</div>
          </div>
          <div class="form-group">
          	<label class="item-label-other">支持品牌/车型</label>
          	<div class="item-content">
	          	<div class="brand-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择品牌"
	                query-name="brands"
	                val-name ="id"
	                select-all-option-txt="全部品牌"
	                :select-all-function="true"
	                txt-name ="brandName"
	                :search-filter="true"
	                :multiple="true"
	                error-message="品牌"
	                :value.sync="params.brands"
	                :option-items="brandList" 
	                v-ref:brands></drop-menu>
	          	</div>
	          	<div class="type-limit-width">
	          		<drop-menu
	                theme="fill" 
	                class="form-item" 
	                default-text="请选择车型"
	                query-name="models"
	                val-name ="id"
	                txt-name ="typeName"
	                :search-filter="true"
	                :required="true"
	                :multiple="true"
	                error-message="车型"
	                :classify="seriesClassifyOptionItems"
	                :classify-option-items="allSeries"
	                :value.sync="params.models"
	                v-ref:models></drop-menu>
	          	</div>
          	</div>
  				</div>
  				<div class="form-group">
          	<label class="col-sm-2 control-label">备注</label>
          	<div class="col-sm-9">
	          	<div class="limit-width">
		          	<input-box 
	                theme="fill"
	                type="textarea"
	                :row="2"
	                class="form-item"
	                :max-length="100"
	                :show-limit="true"
	                error-message="备注"
	                placeholder="请输入备注" 
	                query-name="remark"
	                :value.sync="params.remark"></input-box>	
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