<div class="page-layout-bg">
  <div class="address-detail-wrap">
    <loading v-ref:loading></loading>
    <tab-panel :tab-items="tabItems">
      <panel-ele>
        <div class="stage-container">
          <div class="inline-wrap">
            <div class="form-group">
              <label class="control-label detail-name">url</label>
              <p class="form-control-static detail-url">{{ detail.url }}</p>
            </div>
          </div>
          <div class="inline-wrap">
            <div class="form-group">
              <label class="control-label">名称</label>
              <p class="form-control-static">{{ detail.name }}</p>
            </div>
          </div>
          <div class="inline-wrap">
            <div class="form-group">
              <label class="control-label">说明</label>
              <p class="form-control-static">{{ detail.description }}</p>
            </div>
          </div>
          <div class="inline-wrap">
            <div class="form-group">
              <label class="control-label">状态</label>
              <p class="form-control-static">{{ detail.status | statusFilter }}</p>
            </div>
          </div>
        </div>
      </panel-ele> 
      <panel-ele>
        <table-data
          theme="fill"
          v-ref:table-data
          :tr-items="list"
          :th-items="thItems"
          :th-length="thLength">
          <div slot="headerGroup">
            <table-row>
              <table-cell v-for="thItem in thItems">
                <span>{{ thItem }}</span>
              </table-cell>
            </table-row>
          </div>
          <div slot="rowGroup">
            <table-row v-for="trItem in $refs.tableData.trItems">
              <table-cell>{{ trItem.systemName }}</table-cell>
              <table-cell>{{ trItem.parentName }}</table-cell>
              <table-cell>{{ trItem.name }}</table-cell>
              <table-cell>{{ trItem.isShow ? '是' : '否' }}</table-cell>
              <table-cell>{{ trItem.urlName }}</table-cell>
              <table-cell>{{ trItem.url }}</table-cell>
              <table-cell>{{ trItem.sort }}</table-cell>
            </table-row>
          </div>
        </table-data>
      </panel-ele> 
    </tab-panel>    
  </div>
</div>