<ul class="nav">
  <!-- tabItems -->
  <li class="tabs"
  	:class="{active: isActive($index)}"
  	v-for="item in items"
  	@click="select($index)">
    <a href="javascript:void(0)">
      <div class="tabs-wrap">
        <!-- <i class="font-icon fa {{item.icon}}"></i> -->
        <img :src="item.icon" alt="" class="icon-img">
        <span class="tabs-name ellipsis">{{ item.description }}</span>
      </div>
    </a>
  </li>
</ul>