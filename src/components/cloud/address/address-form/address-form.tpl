<div class="page-layout-bg">
  <div class="address-form-wrap">
    <div class="stage-header">
      <h4>{{ isEdit ? '编辑' : '新增' }}地址</h4>
    </div>
    <loading v-ref:loading></loading>
    <div class="form-area">
      <form-area
        :before-submit="beforeSubmit"
        :success="submitSuccess"
        v-ref:form-area
        :json-data="true"
        class="address-form">
        <div class="form-horizontal">
          <input-box 
            :hidden="true" 
            query-name="id" 
            :value.sync="params.id"></input-box>
          <div class="inline-wrap" v-for="item in urlArr">
            <div class="form-group">
              <label class="col-sm-2 control-label">
                <em class="identi">*</em>url</label>
              <div class="col-sm-9">
                <input-box 
                  theme="fill" 
                  class="form-item" 
                  query-name="url" 
                  :empty="false" 
                  error-message="url"  
                  placeholder="请输入url" 
                  :value.sync="item.url"></input-box>
              </div>
              <div class="options-wrap">
                <span class="add-url option" @click="addUrl" v-if="params.type === 1">
                  <img src="../../../../assets/add.png" alt="">
                </span>
                <span class="subtract-url option" v-if="urlArr.length > 1" @click="subtractUrl($index)">
                  <img src="../../../../assets/subtracts.png" alt="">
                </span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">
              <em class="identi">*</em>名称
            </label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="name" 
                :empty="false" 
                error-message="名称" 
                :max-length="20" 
                :show-limit="true" 
                placeholder="请输入名称" 
                :value.sync="params.name"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">说明</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="description" 
                type="textarea" 
                :row='2'
                placeholder="请输入说明" 
                :value.sync="params.description"></input-box>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">状态</label>
            <div class="col-sm-9">
              <div class="check-box-wrap">
                <checkbox
                  :required="true"
                  :value.sync="params.status"
                  query-name="status"
                  type="radio"
                  v-ref:status-checkbox>
                  <check-ele value="0">控制访问权限</check-ele>
                  <check-ele value="1">不控制访问权限</check-ele>
                  <check-ele value="2">禁止访问</check-ele>
                </checkbox>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">地址类型</label>
            <div class="col-sm-9">
              <div class="check-box-wrap">
                <div class="type-check">
                  <checkbox
                    :required="true"
                    :value.sync="params.type"
                    type="radio"
                    query-name="type"
                    :read-only="isEdit"
                    v-ref:type-checkbox>
                    <check-ele value="0">主地址</check-ele>
                    <check-ele value="1">从地址</check-ele>
                  </checkbox>
                </div>
                <span class="tips" v-show="isEdit">（编辑状态不可更改主从地址状态）</span>
              </div>
            </div>
          </div>
          <div class="form-group" v-if="params.type === 1">
            <label class="col-sm-2 control-label">
             <em class="identi">*</em>子地址所属主地址
            </label>
            <div class="col-sm-9">
              <drop-menu
                theme="fill" 
                class="form-item" 
                default-text="请选择子地址所属主地址"
                query-name="resourceAddrId"
                error-message="子地址所属主地址"
                val-name ="value"
                txt-name ="label"
                :search-filter="true"
                :required="true"
                :empty="false"
                :value.sync="params.resourceAddrId"
                :option-items="mainUrl" 
                v-ref:resourceAddrId></drop-menu>
            </div>
          </div>
          <div class="form-group" v-if="params.type === 1">
            <label class="col-sm-2 control-label">按钮标识</label>
            <div class="col-sm-9">
              <input-box 
                theme="fill" 
                class="form-item" 
                query-name="btnId" 
                placeholder="请输入名称" 
                :value.sync="params.btnId"></input-box>
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