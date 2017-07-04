<div class="page-layout-bg">
  <loading v-ref:loading></loading>
  <div class="interconnection-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入客户运营商搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyWord">
      </search-tool>
      <btn 
        flag="/page/interconnection/Add"
        type="button" 
        value="+ 添加关系组"
        primary="default"
        class="add"
        kind="default"
        v-link = "{ path: '/page/interconnection/Add' }"></btn>
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
          <table-cell>{{ trItem.clientOperatorName | Null }}</table-cell>
          <table-cell><span v-for="sub in trItem.commercialList">{{ sub.shortName}} </span></table-cell>
          <table-cell >
            <div class="options-wrap options">
              <btn 
                flag="/page/interconnection/Edit"
                type="link" 
                value="编辑"
                class="v-after"
                primary="default"
                kind="default" 
                v-link = "{ path: '/page/interconnection/Edit', query: { id: trItem.clientCommercialId } }"></btn>
              <btn 
                flag="/page/interconnection/Edit"
                type="link" 
                value="删除"
                class="v-after"
                primary="default"
                kind="default" 
                @click="deleteInterconnection(trItem.clientCommercialId)"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
    <pop v-ref:modal :okcb="okcb">
      <div slot="body">确认该客户运营商删除？</div>
    </pop>
  </div>
</div>