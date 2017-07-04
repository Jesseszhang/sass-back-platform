<div class="wrap-sendMessage">
<div class="recycled-comm">
	<section class="search-area clearfix">
		<div class="search-time-wrap">
				<div class="time-pick">
					<input class="form-control input-date"  type="text" @click.stop="open($event,'startTime')" v-model="calendar.items.startTime.value" placeholder="选择开始时间">
					<i class="fa fa-calendar fa-calendar1"></i>

					<em class='line'>-</em>

					<input class="form-control input-date" type="text" @click.stop="open($event,'endTime')" v-model="calendar.items.endTime.value" placeholder="选择结束时间">
					<i class="fa fa-calendar fa-calendar2"></i>
					
					<calendar
							:show.sync="calendar.show"
							:type="calendar.type"
							:value.sync="calendar.value"
							:x="calendar.x"
							:y="calendar.y"
							:begin.sync="calendar.begin"
							:end.sync="calendar.end"
							:range.sync="calendar.range"
							:weeks="calendar.weeks"
							:months="calendar.months"
							:sep.sync="calendar.sep"></calendar>
			</div>
			<div class="tab-items">
				<span 
					:class='{"target": timeVal===7}'
					@click="timeSet(7)"
					>最近7天</span>
				<span :class='{"target": timeVal===30}' @click="timeSet(30)">最近30天</span>
				<span :class='{"target": timeVal===0}' @click="timeSet(0)">全部</span>
			</div>
		</div>

		 <div class="search-name-wrap">
			<input-box :placeholder = "placeItem" v-on:keyup.enter = "searchData" v-ref:user-inputbox>
					<icon name="search"></icon>
			</input-box>
			<btn class="search-btn" @click = "searchData" value="查询"></btn>
		</div>
		<btn v-link="{name:policyAdd}" class="pull-right" kind="default" :value="addBtnName"></btn> 

	</section>


	<table-data
			v-if="type==3"
			theme="fill"
			v-ref:table-data
			:url="url"
			:query-opt="queryOpt"
			:th-item-sort = "thItemSort"
			v-on:sortdispatch = "sortTableCall"
			:success = "initZeroClicp"
			:th-items="thItems">
		<div slot="rowGroup">
			<table-row :data-index="$index" v-for="trItem in $refs.tableData.trItems">
				<table-cell :title='trItem["infoTit"]'><p class="points-wrap-text"><a>#{{ trItem["topicTit"] }}#</a></p></table-cell>
				<table-cell>
					<a class="zclip" data-clipboard-text="{{domain +'/#!/page/community/detailstopic/edit/'+trItem['infoId']}}" clipType="infoLink"  href="javascript:;">
						<icon name="link"></icon>
					</a>
					<a class="zclip" data-clipboard-text="{{ trItem['infoId'] }}" clipType="infoId"  href="javascript:;">
						<icon name="files-o"></icon>
					</a>
				</table-cell>
				<table-cell>{{ trItem["browseCount"] }}</table-cell>
				<table-cell>{{ trItem["state"] }}</table-cell>
				<table-cell>
					{{ trItem["startTime"]| time 'yyyy/MM/dd'}} - {{ trItem["endTime"] | time 'yyyy/MM/dd' }}
				</table-cell>
				<table-cell>
				<a href="javascript:;" @click="this.stickFn(trItem['topicId'], $index, trItem['stick'])">
					{{ trItem['stick']? '停用': '启用' }}</a><em class="aline">|</em>
					<a href="javascript:;" @click="this.showDelPop(trItem['topicId'], $index)">删除</a>
				</table-cell>
			</table-row>
		</div>
	</table-data>

	<pop type="confirm"  :okcb="deleteSure" :nocb="cancel"  v-ref:popsdelete>
		<section class="status-form" slot="body">
			<div class="row form-cont txt-cn">
				<h3>确定删除？</h3>
			</div>
		</section>
	</pop>
	
</div>
</div>