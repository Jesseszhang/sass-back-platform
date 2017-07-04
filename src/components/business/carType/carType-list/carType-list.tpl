<div class="page-layout-bg">
  <div class="car-type-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入车型/车系/品牌名称搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="name">
      </search-tool>
      <btn 
        flag="/page/carType/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link = "{ path: '/page/carType/Add' }"></btn>
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
          <table-cell>{{ trItem.typeName | Null }}</table-cell>
          <table-cell>{{ trItem.name | Null }}</table-cell>
          <table-cell>{{ trItem.brandName | Null }}</table-cell>
          <table-cell >
            <div class="options">
              <btn 
                flag="/page/carType/Edit"
                type="link" 
                value="编辑"
                primary="default"
                kind="default" 
                v-link = "{ path: '/page/carType/Edit', query: { id: trItem.id } }"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>