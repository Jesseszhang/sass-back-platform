<div class="header-layout-stage">
	<ul class="menu-box">
	  <li class="avatar menu-box-li">
	    <div 
	    	v-el:avatar 
	    	class="position-box"
	    	@click.stop="showAvatarMenu()">
	      <img src="../../../assets/default.png" />
	      <span class="tabs-name ellipsis">{{ username }}</span>
	      <icon name="caret-down"></icon>
	    </div>
	    <bubble
        v-ref:avatar-menu
        :relative="true">
	      <div @click="logout">退出登录</div>
	    </bubble>
	  </li>
	</ul>
	<div class="breadcrumb-wrap">
	  <ul class="breadcrumb">
	    <li v-for="item in crumbs">
	      <a 
	      	v-link="{ path: item.router}" 
	      	v-if="item.router">{{ item.name }}</a>
	      <template v-else>{{ item.name }}</template>
	    </li>
	  </ul>
	</div>
</div>
<pop 
	v-ref:confirm-logout-pop 
	:okcb="okcb" 
	message="确认退出登录？"></pop>