<div class="page-layout-bg">
  <div class="job-set-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入岗位名称搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyWord">
      <drop-menu
        default-text="请选择状态"
        query-name="status"
        val-name ="value"
        txt-name ="label"
        :option-items="statusList" 
        v-ref:status></drop-menu>
      </search-tool>
      <btn 
        flag="/page/jobSet/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link="{ path: '/page/jobSet/Add' }"></btn>
    </div>
    
    <table-data
        :url="url"
        theme="fill"
        size-name="size"
        :size-num="10"
        :cloud-back="true" 
        :query-opt="queryOpt"
        :th-length="thLength"
        v-ref:table-data>
      <div slot="headerGroup">
        <table-row>
          <table-cell v-for="thItem in thItems">
            <span>{{ thItem }}</span>
          </table-cell>
        </table-row>
      </div>
      <div slot="rowGroup">
        <table-row v-for="trItem in $refs.tableData.trItems">
          <table-cell>{{ $index + 1 + ($refs.tableData.pageItems.current-1)*$refs.tableData.pageItems.size }}
          </table-cell>
          <table-cell>{{ trItem.positionName | Null }}</table-cell>
          <table-cell>{{ trItem.status | statusText }}</table-cell>
          <table-cell>{{ trItem.empCount | Null }}</table-cell>
          <table-cell >
            <btn 
              flag="/page/jobSet/Edit"
              type="link"
              value="编辑"
              primary="default"
              kind="default"
              v-link = "{ path: '/page/jobSet/Edit', query: { id: trItem.id} }"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>