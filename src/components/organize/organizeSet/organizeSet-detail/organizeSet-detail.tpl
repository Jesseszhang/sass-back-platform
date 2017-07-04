<div class="organizeSetDetail-wrap">
  <div class="stage-header">
    <h4>组织机构详情</h4>
  </div>
  <div class="detail-content">
    <loading v-ref:loading></loading>
    <div class="inner">
      <div class="form-inline">
        <div class="form-group">
          <label>部门名称</label>
          <p class="form-control-static">{{ params.deptName }}</p>
        </div>
      </div>
      <div class="form-inline">
        <div class="form-group">
          <label>上级节点</label>
          <p class="form-control-static">{{ params.parentName | Null }}</p>
        </div>
      </div>
      <div class="form-inline">
        <div class="form-group">
          <label>部门状态</label>
          <p class="form-control-static">{{ params.status | statusInfo }}</p>
        </div>
      </div>
      <div class="form-inline">
        <div class="form-group">
          <label>排序</label>
          <p class="form-control-static">{{ params.sort }}</p>
        </div>
      </div>
      <div class="form-inline">
        <div class="form-group options-btns">
          <btn 
            type="button"
            class="modify" 
            value="修改"
            primary="default"
            kind="default"
            v-link="{ name: 'organizeSetEdit',  query:{ id: currentId } }"></btn>
          <btn 
            type="button" 
            class="add-dep"
            value="添加子部门"
            primary="primary"
            kind="primary"
            v-link="{ name: 'organizeSetAdd', query:{ parentId: currentId } }"></btn>
        </div>
      </div>
    </div>
  </div>
</div>