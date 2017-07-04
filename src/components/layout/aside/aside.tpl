<div class="asideBanner">
    <!-- logo -->
    <div class="logo">
      <img src="../../../assets/chargerlink_logo.png" alt="">
    </div>
    <!-- asideTab -->
    <div class="nav scrollbar-macosx" id="nav-scroll">
      <tab-aside :items ="aside" :index="indexs[0]"></tab-aside>
    </div>
    <!-- subtabContent -->
    <div class="tab-content">
      <panel
        :class="{ hide: $index !== indexs[0] }"
        :cur-item = "aside[$index]"
        :cur-selected = "indexs[1]"
        v-for="item in aside"
        id="{{item.id}}">
      </panel>
    </div>
  </div>
  <pop 
    v-ref:modal 
    :okcb="okcb">
    <div slot="body">确认退出？</div>
  </pop>