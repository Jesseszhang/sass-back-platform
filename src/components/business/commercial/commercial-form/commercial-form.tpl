<div class="page-layout-bg">
  <div class="commercial-form-wrap">
    <loading v-ref:loading></loading>
    <div class="baseInfo step">
      <span class="first-step {{ step === 1 ? 'select' : '' }}">第一步：商户基本信息</span>
      <span class="arrow">></span>
      <span class="second-step {{ step === 2 ? 'select' : '' }}">第二步：公司信息</span>
    </div>
  	<div class="form-area">
      <form-area
        v-ref:form-base-area
        :json-data="true" 
        :value-as-url="true"
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="commercial-form">
  			<div class="form-horizontal">
          <div class="base-info" v-show="step === 1">
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>业务类型
              </label>
              <div class="col-sm-9">
                <div class="status-wrap">
                  <checkbox
                    :required="true"
                    query-name="businessType"
                    :value.sync="params.businessType"
                    type="radio"
                    v-ref:businessType-checkbox>
                    <check-ele value="0">充电</check-ele>
                    <check-ele value="1">租车</check-ele>
                  </checkbox>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>商户级别
              </label>
              <div class="col-sm-9">
                <div class="limit-width">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择商户级别"
                    query-name="commLevel"
                    val-name ="value"
                    txt-name ="label"
                    :required="true"
                    error-message="商户级别"
                    :value.sync="params.commLevel"
                    :search-filter="true"
                    :option-items="commLevelList" 
                    v-ref:commLevel></drop-menu>
                </div>
              </div>
            </div>
            <div class="form-group" v-if="params.commLevel === 2">
              <label class="col-sm-2 control-label">所属集团商户
              </label>
              <div class="col-sm-9">
                <div class="limit-width">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择所属集团商户"
                    query-name="pid"
                    val-name ="value"
                    txt-name ="label"
                    :required="false"
                    error-message="所属集团商户"
                    :value.sync="params.pid"
                    :search-filter="true"
                    :option-items="commPidList" 
                    v-ref:pid></drop-menu>
                </div>
              </div>
            </div>
            <div class="form-group" v-if="params.commLevel === 3">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>所属商户
              </label>
              <div class="col-sm-9">
                <div class="limit-width">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择所属商户"
                    query-name="pid"
                    val-name ="value"
                    txt-name ="label"
                    :required="params.commLevel === 3"
                    error-message="所属商户"
                    :value.sync="params.pid"
                    :search-filter="true"
                    :option-items="commPidList" 
                    v-ref:pid></drop-menu>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>商户类型
              </label>
              <div class="col-sm-9">
                <div class="limit-width">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择商户类型"
                    query-name="commType"
                    val-name ="value"
                    txt-name ="label"
                    :required="true"
                    error-message="商户类型"
                    :value.sync="params.commType"
                    :search-filter="true"
                    :option-items="commTypeList" 
                    v-ref:commType></drop-menu>
                </div>
              </div>
            </div>
            <div class="form-group commCategory">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>商户类别
              </label>
              <div class="col-sm-9">
                <div class="limit-width">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择商户类别"
                    query-name="commCategory"
                    val-name ="value"
                    txt-name ="label"
                    :required="true"
                    error-message="商户类别"
                    :value.sync="params.commCategory"
                    :search-filter="true"
                    :option-items="commClassList" 
                    v-ref:commCategory></drop-menu>
                </div>
              </div>
            </div>
            <div class="form-group commIndustry"  v-if="params.commType === 2">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>商户行业
              </label>
              <div class="col-sm-9">
                <div class="limit-width">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择商户行业"
                    query-name="commIndustry"
                    val-name ="value"
                    txt-name ="label"
                    :required="params.commType === 2"
                    error-message="商户行业"
                    :value.sync="params.commIndustry"
                    :search-filter="true"
                    :option-items="commJobList" 
                    v-ref:commIndustry></drop-menu>
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
                    query-name="operateBaseInfoId"
                    val-name ="value"
                    txt-name ="label"
                    :read-only="discommType"
                    :required="params.commType === 2"
                    error-message="运营商"
                    :value.sync="params.operateBaseInfoId"
                    :search-filter="true"
                    :option-items="operateList" 
                    v-ref:operateBaseInfoId></drop-menu>
                </div>
                <div class="limit-btn">
                  <btn 
                    type="button" 
                    value="+ 添加运营商"
                    primary="primary"
                    class="add"
                    kind="primary"
                    v-link="{ name: 'operateAdd'}"></btn>
                </div> 
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>运营方式
              </label>
              <div class="col-sm-9">
                <div class="status-wrap">
                  <checkbox
                    :required="true"
                    query-name="operateType"
                    :read-only="discommLevel"
                    error-message="运营方式"
                    :value.sync="params.operateType"
                    type="checkbox"
                    v-ref:operateType-checkbox>
                    <check-ele value="0">客户运营</check-ele>
                    <check-ele value="1">设备运营</check-ele>
                  </checkbox>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>商户全称
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="commName" 
                  :empty="false" 
                  error-message="商户全称"
                  :max-length="100"
                  :show-limit="true"
                  placeholder="请填写营业执照上的公司名称" 
                  :value.sync="params.commName"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>商户简称
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="shortName" 
                  :empty="false" 
                  error-message="商户简称"
                  :max-length="20"
                  :show-limit="true"
                  placeholder="请填写商户简称" 
                  :value.sync="params.shortName"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>联系人姓名
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="contacts" 
                  :empty="false" 
                  error-message="真实姓名"
                  :max-length="5"
                  :show-limit="true"
                  placeholder="请填写真实姓名" 
                  :value.sync="params.contacts"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>联系电话
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="phone" 
                  :empty="false" 
                  error-message="联系电话"
                  regex="^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$"
                  placeholder="请填写联系人电话" 
                  :value.sync="params.phone"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">联系人邮箱
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="email"
                  error-message="联系人邮箱"
                  placeholder="请填写企业邮箱，如无则填写个人邮箱" 
                  :value.sync="params.email"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">客服电话
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="servicePhone" 
                  error-message="客服电话"
                  placeholder="请填写客服电话" 
                  :value.sync="params.servicePhone"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">组织机构代码
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="code" 
                  error-message="组织机构代码"
                  placeholder="请填写组织机构代码" 
                  :value.sync="params.code"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">logo图片
              </label>
              <div class="col-sm-9">
                <upload
                  type="img"
                  size="160*160"
                  query-name="commLogo"
                  :url="uploadImg"
                  :min="0"
                  url-key="fileUrl",
                  name-key="fileUrl"
                  instruction="建议上传尺寸为160*160"
                  :upload-items="commLogoArr"
                  v-ref:upload-commLogo></upload>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">icon图片
              </label>
              <div class="col-sm-9">
                <upload
                  type="img"
                  size="160*160"
                  query-name="commIcon"
                  :url="uploadImg"
                  url-key="fileUrl",
                  name-key="fileUrl"
                  :min="0"
                  :success ="commIconSuccess"
                  instruction="建议上传尺寸为160*160"
                  :upload-items="commIconArr"
                  v-ref:upload-commIcon></upload>
              </div>
            </div>
            <div class="form-group">
              <div class="submit-btn-wrap">
                <btn 
                  type="button" 
                  value="下一步"
                  primary="default"
                  class="submit-btn"
                  kind="default"
                  @click="stepOption"></btn>
              </div>
            </div>
          </div>       
        </div>
      </form-area>
      <form-area
        v-ref:form-comm-area
        :json-data="true" 
        :value-as-url="true"
        :before-submit="beforeSubmit" 
        :success="submitSuccess" 
        class="commercial-form">
        <div class="form-horizontal">
          <div class="commpany-info" v-show="step === 2">
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi" v-if="params.businessType === 1">*</em>公司类型
              </label>
              <div class="col-sm-9 comm-limit">
                <drop-menu        
                  theme="fill" 
                  class="form-item" 
                  default-text="请选择公司类型"
                  query-name="companyType"
                  val-name ="value"
                  txt-name ="label"
                  :required="params.businessType === 1"
                  error-message="公司类型"
                  :value.sync="params.companyType"
                  :search-filter="true"
                  :option-items="companyTypeList" 
                  v-ref:companyType></drop-menu>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi" v-if="params.businessType === 1">*</em>公司地址
              </label>
              <div class="col-sm-9">
                <div class="limit-pro">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择省"
                    query-name="provinceId"
                    val-name ="value"
                    txt-name ="label"
                    :required="params.businessType === 1"
                    error-message="省"
                    :value.sync="params.provinceId"
                    :search-filter="true"
                    :option-items="provinceList" 
                    v-ref:provinceId></drop-menu>
                </div>
                <div class="limit-cit">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择市"
                    query-name="cityId"
                    val-name ="value"
                    txt-name ="label"
                    :required="params.businessType === 1"
                    error-message="市"
                    :value.sync="params.cityId"
                    :search-filter="true"
                    :option-items="cityList" 
                    v-ref:cityId></drop-menu>
                </div>
                <div class="limit-area">
                  <drop-menu        
                    theme="fill" 
                    class="form-item" 
                    default-text="请选择区"
                    query-name="areaId"
                    val-name ="value"
                    txt-name ="label"
                    :required="params.businessType === 1"
                    error-message="区"
                    :value.sync="params.areaId"
                    :search-filter="true"
                    :option-items="areaList" 
                    v-ref:areaId></drop-menu>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="detail"
                  :empty="params.businessType !== 1"
                  :max-length="50"
                  :show-limit="true" 
                  error-message="详细地址"
                  placeholder="请填写详细地址" 
                  :value.sync="params.detail"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi" v-if="params.businessType === 1">*</em>法人代表
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="legalPerson" 
                  error-message="法人代表"
                  :empty="params.businessType !== 1"
                  :max-length="5"
                  :show-limit="true"
                  placeholder="请填写法人代表" 
                  :value.sync="params.legalPerson"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi" v-if="params.businessType === 1">*</em>注册金额
              </label>
              <div class="col-sm-9 comm-limit">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  :empty="params.businessType !== 1"
                  query-name="registrationAmount" 
                  error-message="注册金额"
                  placeholder="请填写注册金额" 
                  :value.sync="params.registrationAmount"></input-box>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi" v-if="params.businessType === 1">*</em>成立日期
              </label>
              <div class="col-sm-9">
                <data-picker
                  :empty="params.businessType !== 1"
                  placeholder="请选择成立日期"
                  query-name="registrationTime" 
                  :value.sync="params.registrationTime"
                  >
                </data-picker>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">营业执照照片
              </label>
              <div class="col-sm-9">
                <upload
                  type="img"
                  size="160*160"
                  query-name="businessLicence"
                  :url="uploadImg"
                  url-key="fileUrl",
                  name-key="fileUrl"
                  :min="0"
                  instruction="建议上传尺寸为160*160"
                  :upload-items="businessLicenceIconArr"
                  v-ref:upload-businessLicence></upload>
              </div>
            </div>
            <div class="form-group">
              <div class="submit-btn-wrap">
                <btn 
                  type="button" 
                  value="上一步"
                  primary="default"
                  class="submit-btn"
                  kind="default"
                  @click="backStep"></btn>
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
      </form-area>
    </div>
  </div>
</div> 