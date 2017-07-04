<div class="page-layout-bg">
  <div class="menu-all-wrap">
  	<ul class="menu col-sm-3">
      <div class="menu-wrap" v-if="showList">
        <li v-for="item in list" class="menu-item">
          <div
            :href="'#item_' + item.id"
            data-toggle="collapse"
            aria-expanded="true">
            <span class="arrow pull-left">
              <i class="fa fa-chevron-right"></i>
            </span>
            <span 
            	class="parent-name"  
            	v-link="{ path: editPath, query: { id: item.id } }">{{item.name}}</span>
          </div>
          <ul :id="'item_' + item.id" class="collapse in">
            <li v-for="item in item.children" class="menu-item">
              <span class="dot"></span>
              <a 
              	class="sub-name"
              	v-link="{ path: editPath, query: { id: item.id } }">{{item.name}}</a>
            </li>
          </ul>
        </li>
      </div>
      <p class="no-menu" v-if="!showList">暂无菜单</p>
    </ul>
    <div class="menu-content col-sm-9">
      <div class="options-all" v-if="hideBtn">
        <btn 
          :flag="addPath"
          value="添加菜单结构"
          primary="default"
          kind="default"
          type="button"
          v-link="{ path: addPath }"></btn>
      </div>
      <router-view :ref="subRouter"></router-view>
    </div>
  </div>
</div>