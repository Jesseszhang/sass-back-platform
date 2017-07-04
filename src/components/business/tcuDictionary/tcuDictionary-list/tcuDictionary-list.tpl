<div class="page-layout-bg">
  <div class="tcu-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入生产厂商/型号搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyWord">
      </search-tool>
      <btn 
        flag="/page/tcuDictionary/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link = "{ path: '/page/tcuDictionary/Add' }"></btn>
    </div>
    
    <table-data
        :url="url"
        theme="fill"
        v-ref:table-data
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
          <table-cell>{{ trItem.type | Null }}</table-cell>
          <table-cell>{{ trItem.manufacturer | Null }}</table-cell>
          <table-cell>{{ trItem.remark | Null }}</table-cell>
          <table-cell>{{ trItem.createTime | time }}</table-cell>
          <table-cell >
            <div class="options">
              <div class="button-wrap">
                <btn 
                  flag="/page/tcuDictionary/Edit"
                  type="link" 
                  value="编辑"
                  primary="default"
                  kind="default"
                  v-link = "{ path: '/page/tcuDictionary/Edit', query: { id: trItem.id } }"></btn>
              </div>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>