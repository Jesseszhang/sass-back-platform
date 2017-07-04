<div class="page-layout-bg">
  <div class="role-set-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入角色名称搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyWord">
        <drop-menu
          default-text="请选择所属有权功能"
          query-name="platformType"
          val-name ="value"
          txt-name ="label"
          :option-items="platformTypeList" 
          v-ref:platformType></drop-menu>
        <drop-menu
          default-text="请选择状态"
          query-name="status"
          val-name ="value"
          txt-name ="label"
          :option-items="statusList" 
          v-ref:status></drop-menu>
      </search-tool>
      <btn 
        flag="/page/roleSet/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link="{ path: '/page/roleSet/Add' }"></btn>

    </div>
    
    <table-data
        :url="url"
        theme="fill"
        v-ref:table-data
        size-name="size"
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
          <table-cell>{{ trItem.name | Null }}</table-cell>
          <table-cell>{{ trItem.platformType == 0 ? '公有云后台' : 'app后台' }}</table-cell>
          <table-cell>{{ trItem.status | statusInfo }}</table-cell>
          <table-cell >
            <div class="options">
              <btn 
                type="link" 
                flag="/page/roleSet/Edit"
                type="button" 
                value="编辑"
                primary="default"
                kind="default"
                v-link="{ path: '/page/roleSet/Edit', query: { id: trItem.id} }"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>