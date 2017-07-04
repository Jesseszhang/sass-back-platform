<div class="search-menu-input {{ theme | themeClass }}">
  <div class="input-stage clearfix">
    <div class="drop-menu-wrap">
      <drop-menu
        theme="s-drop-menu"
        :option-items="menuData"
        v-ref:sourcemenukey
        :query-name="queryName">
      </drop-menu>
    </div>
    <div class="input-wrap clearfix">
      <div class="icon-warp">
        <icon name="search"></icon>
      </div>
      <input-box
        :placeholder="placeholder"
        v-ref:sourcemenuval>
      </input-box>
    </div>
  </div>
</div>