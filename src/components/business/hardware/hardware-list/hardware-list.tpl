<div class="page-layout-bg">
  <div class="hardware-list">
    <div class="tool-stage clear-fix">
      <search-tool
          placeholder="输入设备名称和运营商搜索"
          :fetch-query="fetchQuery"
          class="keyword-input"
          query-name="keyword">
        <drop-menu
          default-text="请选择额定功率"
          query-name="ratedPower"
          val-name ="value"
          txt-name ="label"
          :option-items="ratedPowerList" 
          v-ref:ratedPower></drop-menu>
        <drop-menu
          default-text="请选电桩类型"
          query-name="chargerType"
          val-name ="value"
          txt-name ="label"
          :option-items="chargerTypeList" 
          v-ref:chargerType></drop-menu>
      </search-tool>
      <btn 
        flag="/page/hardware/Add"
        type="button" 
        value="+ 新增"
        primary="default"
        class="add"
        kind="default"
        v-link = "{ path: '/page/hardware/Add' }"></btn>
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
          <table-cell>{{ $index + 1 + ($refs.tableData.pageItems.current-1)*$refs.tableData.pageItems.size }}
          </table-cell>
          <table-cell>
            <div class="img-box">
              <img :src="trItem.imgUrl | getFisrtImg" alt="" class="img">
            </div>
          </table-cell>
          <table-cell>{{ trItem.deviceName | Null }}</table-cell>
          <table-cell>{{ trItem.operateName | Null }}</table-cell>
          <table-cell>{{ trItem.ratedVoltage | ratedVoltage }}</table-cell>
          <table-cell>{{ trItem.ratedCurrent | Null }}</table-cell>
          <table-cell>{{ trItem.chargeInterfaceNum | Null }}</table-cell>
          <table-cell>{{ trItem.chargerType | chargerType }}</table-cell>
          <table-cell>{{ trItem.sinNet == 1 ? '是' : '否' }}</table-cell>
          <table-cell >
            <div class="options">
              <div class="button-wrap">
                <btn 
                  flag="/page/hardware/Edit"
                  type="link" 
                  value="编辑"
                  primary="default"
                  kind="default" 
                  v-link = "{ path: '/page/hardware/Edit', query: { id: trItem.id} }"></btn>
              </div>
            </div>
          </table-cell>
        </table-row>
      </div>
    </table-data>
  </div>
</div>