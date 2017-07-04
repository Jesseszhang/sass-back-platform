<li>
  <div 
    :class="['itemList', isFolder ? 'bold' : '' ]">
    <i 
      v-if="isFolder" 
      :class="['fa', open ? 'fa-chevron-down' : 'fa-chevron-right' ]" 
      @click="toggle()"></i>
    <span 
      v-if="!isFolder" 
      class="circle"></span>
    <span 
      data-id="{{ model.id }}" 
      @click="getModelId(model)">{{ model.deptName }}</span>
  </div>
  <ul 
    v-show="open" 
    v-if="isFolder">
    <item 
      class="item" 
      v-for="model in model.children" 
      :model="model"></item>
  </ul>
</li>