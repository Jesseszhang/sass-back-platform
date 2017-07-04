<div class="page-layout-bg">
  <div class="operate-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入运营商名称搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="operateName">
      </search-tool>
      <btn 
        flag="/page/operateList/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link = "{ path: '/page/operateList/Add' }"></btn>
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
          <table-cell><img :src="trItem.icon || defaultImg" class="operateList-icon" alt=""></table-cell>
          <table-cell>{{ trItem.operateName | Null }}</table-cell>
          <table-cell>{{ trItem.serviceTime | Null }}</table-cell>
          <table-cell>{{ trItem.servicePhone | Null }}</table-cell>
          <table-cell >
            <div class="options-wrap options">
              <btn 
                flag="/page/operateList/Edit"
                type="link" 
                value="编辑"
                class="v-after"
                primary="default"
                kind="default" 
                v-link = "{ path: '/page/operateList/Edit', query: { id: trItem.id } }"></btn>
              <btn 
                flag="/page/operateList/Edit"
                type="link" 
                value="删除"
                class="v-after"
                primary="default"
                kind="default" 
                @click="deleteOperate(trItem.id)"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
    <pop v-ref:modal :okcb="okcb">
      <div slot="body">确认该运营商删除？</div>
    </pop>
  </div>
</div>