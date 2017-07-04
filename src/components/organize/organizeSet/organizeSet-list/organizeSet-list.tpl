<div class="page-layout-bg">
  <div class="organization">
    <div class="organization-wrap">
      <div class="left-content col-sm-4">
        <list-tree
          :list-data="treeData"></list-tree>
      </div>
      <div class="col-sm-8 right-content">
        <div class="options-btn" v-if="showBtn">
          <btn 
            flag="/page/organizeSet/Add"
            type="button" 
            value="添加部门"
            primary="default"
            kind="default"
            v-link="{ path: '/page/organizeSet/Add' }" ></btn>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>