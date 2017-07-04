<div class="page-layout-bg">
  <div class="cloud-address-list">
    <div class="tool-stage clear-fix">
      <search-tool
        placeholder="输入关键字搜索"
        :fetch-query="fetchQuery"
        class="keyword-input"
        query-name="keyWord">
        <drop-menu
          default-text="请选择访问类型"
          query-name="status"
          val-name ="value"
          txt-name ="label"
          :option-items="statusList" 
          v-ref:status></drop-menu>
        <drop-menu
          default-text="请选择地址"
          query-name="type"
          val-name ="value"
          txt-name ="label"
          :option-items="typeList" 
          v-ref:type></drop-menu>
      </search-tool>
      <btn 
        :flag="addPath"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link="{ path: addPath }"></btn>
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
          <table-cell>
            {{ $index + 1 + ($refs.tableData.pageItems.current-1)*$refs.tableData.pageItems.size }}
          </table-cell>
          <table-cell>{{ trItem.url | Null }}</table-cell>
          <table-cell>{{ trItem.name | Null }}</table-cell>
          <table-cell>{{ trItem.description | Null}}</table-cell>
          <table-cell>{{ trItem.type | typeStatus }}</table-cell>
          <table-cell>{{ trItem.status | statusFilter }}</table-cell>
          <table-cell>
            <div class="options-wrap">
              <btn  
                :flag="detailPath"
                type="link"
                kind="default"
                value="查看"
                v-link="{ path: detailPath, query:{ id: trItem.id } }" 
                class="v-after"></btn>
              <btn 
                :flag="editPath"
                type="link"
                kind="default"
                value="编辑"
                v-link="{ path: editPath, query:{ id: trItem.id } }" 
                class="v-after"></a>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</btn>