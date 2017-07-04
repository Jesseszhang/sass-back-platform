<div class="page-layout-bg">
  <div class="commercial-message-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入关键字搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="NotifyCommercialInfo">
      </search-tool>
      <btn 
        flag="/page/commercialMessage/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link="{ path: '/page/commercialMessage/Add' }"></btn>
    </div>
    
    <table-data
      :url="url"
      theme="fill"
      v-ref:table-data
      :query-opt="queryOpt"
      :th-length="thLength"
      :th-items="thItems">
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
          <table-cell>{{ trItem.notifyTitle | Null }}</table-cell>
          <table-cell>{{ trItem.notifyWay | notifyWay }}</table-cell>
          <table-cell>{{ trItem.notifyTime | time }}</table-cell>
          <table-cell >
            <div class="options">
              <btn 
                flag="/page/commercialMessage/Edit"
                type="link" 
                value="查看"
                primary="default"
                kind="default"
                v-link="{ path: '/page/commercialMessage/Edit', query: { id: trItem.ncId } }"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>