<div class="page-layout-bg">
  <div class="cloud-address-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入关键字搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="roleName">
      </search-tool>
      <btn 
        flag="/page/application/add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link="{ path: '/page/application/add' }"></btn>
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
          <table-cell>{{ trItem.name | Null }}</table-cell>
          <table-cell>{{ trItem.status | applicationStatus }}</table-cell>
          <table-cell>
            <btn 
              flag="/page/application/update"
              type="link"
              kind="default"
              value="编辑"
              v-link="{ path: '/page/application/update', query:{ id: trItem.id } }" 
              class="options"></a>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</btn>