<div class="page-layout-bg">
  <div class="staff-set-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入姓名/岗位/工号/邮箱/手机号码/QQ搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyWord">
        <drop-menu
          default-text="请选择部门"
          query-name="departmentId"
          val-name ="value"
          txt-name ="label"
          :search-filter="true"
          :option-items="departmentList" 
          v-ref:department></drop-menu>
        </drop-menu>
        <drop-menu
          default-text="请选择状态"
          query-name="status"
          val-name ="value"
          txt-name ="label"
          :option-items="statusList" 
          v-ref:status></drop-menu>
      </search-tool>
      <btn
        flag="/page/staffSet/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link= "{ path: '/page/staffSet/Add' }"></btn>
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
          <table-cell>{{ trItem.empName | Null }}</table-cell>
          <table-cell>{{ trItem.deptName | Null }}</table-cell>
          <table-cell>{{ trItem.positionName | Null }}</table-cell>
          <table-cell>{{ trItem.empNo | Null }}</table-cell>
          <table-cell>{{ trItem.email | Null }}</table-cell>
          <table-cell>{{ trItem.telephone | Null }}</table-cell>
          <table-cell>{{ trItem.tencentQq | Null }}</table-cell>
          <table-cell>{{ trItem.status | staffInfo }}</table-cell>
          <table-cell >
            <div class="options">
              <btn
                flag="/page/staffSet/Edit"
                type="link"
                value="编辑"
                primary="default"
                kind="default" 
                v-link = "{ path: '/page/staffSet/Edit', query: { id: trItem.id} }"></btn>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>