<div class="page-layout-bg">
  <div class="car-brand-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入品牌名称搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="brandName">
      </search-tool>
      <btn 
        flag="/page/carBrand/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link="{ path: '/page/carBrand/Add' }"></btn>
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
          <table-cell>
            <img :src="trItem.logo" class="img-logo">
          </table-cell>
          <table-cell>{{ trItem.brandName | Null }}</table-cell>
          <table-cell><a href="{{trItem.officialSite}}">{{ trItem.officialSite | Null }}</a></table-cell>
          <table-cell >
            <div class="options">
              <btn 
                flag="/page/carBrand/Edit"
                type="link" 
                value="编辑"
                primary="default"
                kind="default"
                v-link="{ path: '/page/carBrand/Edit', query: { id: trItem.id } }"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>