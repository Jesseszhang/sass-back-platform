<div>
  <div class="item panel"  v-for="item in curItem.sub">
    <div 
      href="#{{ item.id }}" 
      class="item-parent" 
      :class="{ 'collapsed': $index != curSelected }" 
      data-toggle="collapse" 
      aria-expanded="{{ $index == 0 ? 'true' : 'false' }}" 
      data-parent="#{{ item.parentId }}" 
      aria-controls="#{{ item.id }}">
      <span class="title">{{ item.description }}</span>
      <div class="arrow-wrap">
        <span class="arrow pull-right">
          <i class="fa fa-chevron-right"></i>
        </span>
      </div>
    </div>
    <ul 
      id="{{item.id}}" 
      class="item-sub collapse" 
      :class="{ 'in' : $index == curSelected }" 
      aria-expanded="{{ $index == 0 ? 'true' : 'false' }}">
      <li 
        v-link="{ path: subItem.status ? subItem.link : '', activeClass: 'current' }" 
        v-for="subItem in item.sub" 
        @click="status(subItem)">
        <a href="javascript:void(0)">
          <i class="fa fa-circle-o"></i>
          <span class="link-name">{{ subItem.description }}</span>
        </a>
      </li>
    </ul>
  </div>
</div>