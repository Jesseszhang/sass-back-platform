<div class="page-layout-bg">
  <div class="account-set-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入帐号/姓名/岗位搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="searchKey">
        <drop-menu
          default-text="请选择部门"
          query-name="departmentId"
          val-name ="value"
          txt-name ="label"
          :search-filter="true"
          :option-items="departmentList" 
          v-ref:departmentId></drop-menu>
        <drop-menu
          default-text="请选择状态"
          query-name="status"
          val-name ="value"
          txt-name ="label"
          :option-items="statusList" 
          v-ref:status></drop-menu>
      </search-tool>
      <btn 
        flag="/page/accountSet/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link= "{ path: '/page/accountSet/Add' }"></btn>

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
          <table-cell>{{ $index + 1 + ($refs.tableData.pageItems.current-1)*$refs.tableData.pageItems.size }}
          </table-cell>
          <table-cell>{{ trItem.username | Null }}</table-cell>
          <table-cell>{{ trItem.emp_name | Null }}</table-cell>
          <table-cell>{{ trItem.dept_name | Null }}</table-cell>
          <table-cell>{{ trItem.position_name | Null }}</table-cell>
          <table-cell>{{ trItem.role_names | Null }}</table-cell>
          <table-cell>{{ trItem.status | statusInfo }}</table-cell>
          <table-cell>{{ trItem.last_login_time | Null }}</table-cell>
          <table-cell >
            <div class="options">
              <div class="button-wrap">
                <btn 
                  flag="/page/accountSet/Edit"
                  type="link" 
                  value="编辑"
                  primary="default"
                  kind="default"
                  v-link = "{ path: '/page/accountSet/Edit', query: { id: trItem.accountId } }"></btn>
              </div>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>