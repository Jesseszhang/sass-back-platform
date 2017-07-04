<div class="app-container">
  <div class="app-content">
    <aside-layout :aside="asideInfo" :indexs="indexs"></aside-layout>
    <div class="app-inner">
      <Breadcrumbs :crumbs="breadCrumbs"></Breadcrumbs>
      <div class="page-layout-content">
        <router-view :permission-btn = "permissionBtnVosCur"></router-view>
      </div>
    </div>
  </div>
</div>