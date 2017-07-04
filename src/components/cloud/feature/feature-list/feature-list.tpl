<div class="page-layout-bg">
  <div class="feature-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="请输入关键字搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyWord">
      </search-tool>
      <btn 
        :flag="addPath"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link = "{ path: addPath }"></btn>
    </div>
    <table-data
        theme="fill"
        v-ref:table-data
        size-name="size"
        :url="url"
        :size-num="10"
        :cloud-back="true" 
        :query-opt="queryOpt"
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
          <table-cell>{{ $index + 1 + ($refs.tableData.pageItems.current-1)*$refs.tableData.pageItems.size }}
          </table-cell>
          <table-cell v-if="!front">{{ trItem.systemName | Null }}</table-cell>
          <table-cell>{{ trItem.parentName | Null }}</table-cell>
          <table-cell>{{ trItem.name | Null }}</table-cell>
          <table-cell>{{ trItem.isShow ? '是' : '否' }}</table-cell>
          <table-cell>{{ trItem.isMenu ? '否' : '是' }}</table-cell>
          <table-cell>{{ trItem.remark | Null }}</table-cell>
          <table-cell>{{ trItem.urlName | Null }}</table-cell>
          <table-cell>{{ trItem.url | Null }}</table-cell>
          <table-cell>{{ trItem.sort | Null }}</table-cell>
          <table-cell >
            <btn 
              type="link" 
              :flag="editPath" 
              value="编辑"
              primary="default"
              kind="default"
              v-link = "{ path: editPath, query: { id: trItem.id}}"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>