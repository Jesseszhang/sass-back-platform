<div class="page-layout-bg">
  <div class="commercial-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入商户号/商户简称/商户账号搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyword">
        <drop-menu
          default-text="请选择商户级别"
          query-name="commLevel"
          val-name ="value"
          txt-name ="label"
          :option-items="commLevelList" 
          v-ref:commLevel></drop-menu>
        <drop-menu
          default-text="请选择商户类型"
          query-name="commType"
          val-name ="value"
          txt-name ="label"
          :option-items="commTypeList" 
          v-ref:commType></drop-menu>
        <drop-menu
          default-text="请选择商户类别"
          query-name="commCategory"
          val-name ="value"
          txt-name ="label"
          :option-items="commCategoryList" 
          v-ref:commCategory></drop-menu>
        <drop-menu
          default-text="请选择商户行业"
          query-name="commIndustry"
          val-name ="value"
          txt-name ="label"
          :option-items="commIndustryList" 
          v-ref:commIndustry></drop-menu>
      </search-tool>
      <btn 
        flag="/page/commercialList/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link = "{ path: '/page/commercialList/Add' }"></btn>
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
          <table-cell>{{ trItem.merchants | Null}}</table-cell>
          <table-cell>{{ trItem.commLevel | commLevel }}</table-cell>
          <table-cell>{{ trItem.shortName | Null }}</table-cell>
          <table-cell>{{ trItem.commType | commType }}</table-cell>
          <table-cell>{{ trItem.commIndustry | commIndustry }}</table-cell>
          <table-cell>{{ trItem.commCategory | commCategory }}</table-cell>
          <table-cell>{{ trItem.contacts | Null }}</table-cell>
          <table-cell>{{ trItem.phone | Null }}</table-cell>
          <table-cell>{{ trItem.pname | Null }}</table-cell>
          <table-cell>{{ trItem.userName | Null }}</table-cell>
          <table-cell >
            <div class="options-wrap options">
              <btn
                type="link"
                flag="/page/commercialList/commercialDetail" 
                value="查看"
                primary="default"
                kind="default"
                class="v-after"
                v-link = "{ path: '/page/commercialList/commercialDetail', query: { id: trItem.id } }"></btn>
              <btn 
                type="link"
                flag="/page/commercialList/comAuthorize" 
                value="授权"
                primary="default"
                kind="default"
                class="v-after"
                v-link = "{ path: '/page/commercialList/comAuthorize', query: { id: trItem.id } }"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>