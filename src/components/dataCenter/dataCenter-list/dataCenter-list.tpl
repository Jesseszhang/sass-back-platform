<div class="page-layout-bg">
  <div class="user-log-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入用户/操作日志内容/地址搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyWord">
      </search-tool>
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
          <table-cell>
            {{ $index + 1 + ($refs.tableData.pageItems.current-1)*$refs.tableData.pageItems.size }}
          </table-cell>
          <table-cell>{{ trItem.createTime | Null }}</table-cell>
          <table-cell>{{ trItem.account | Null }}</table-cell>
          <table-cell>{{ trItem.clientIp | Null }}</table-cell>
          <table-cell>{{ trItem.content | Null }}</table-cell>
          <table-cell>{{ trItem.requestUrl | Null }}</table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>