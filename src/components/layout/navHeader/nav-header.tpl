<div class="header">
  <div class="breadcrumb--wrap">
    <ol class="breadcrumb">
      <li v-for="item in crumbs">
      	<a 
      		href="javascript:void(0);" 
      		v-link="{ path: item.router}" 
      		v-if="item.router">{{ item.name }}</a>
        <template v-else>{{ item.name }}</template>
      </li>
    </ol>
  </div>
</div>