<div class="work-platform-wrap">
	<div class="commercial-num">
		<div class="col-md-5 normal-panel">
			<div class="comm-panel">
				<div class="title">商户</div>
				<a href="javascript:void(0)" class="all-comm" v-link="{ name:'commercialList'}" >全部商户</a>
				<div class="comm-list">
					<ul>
						<li>
							<span class="name">集团商户数</span>
							<div class="num">
								{{ detail.groupNum | null }}
							</div>
						</li>
						<li>
							<span class="name">商户数</span>
							<div class="num">
								{{ detail.commNum | null }}
							</div>	
						</li>
						<li>
							<span class="name">子商户数</span>
							<div class="num">
								{{ detail.subNum | null }}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-md-4 normal-panel">
			<div class="client-panel">
				<div class="title">客户</div>
				<div class="client-list">
					<ul>
						<li>
							<span class="name">本月客户数</span>
							<div class="num">
								{{ detail.thisMonthUserNum | null }}
							</div>
						</li>
						<li>
							<span class="name">上月客户数</span>
							<div class="num">
								{{ detail.lastMonthUserNum | null }}
							</div>	
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-md-3 normal-panel">
			<div class="card-panel">
				<div class="title">卡片</div>
				<div class="card-list">
					<ul>
						<li>
							<span class="name">本月发放数</span>
							<div class="num">
								{{ detail.thisMonthCardNum | null }}
							</div>
						</li>
						<li>
							<span class="name">上月发放数</span>
							<div class="num">
								{{ detail.lastMonthCardNum | null }}
							</div>	
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="station-detail">
		<div class="col-md-12 normal-panel">
			<div class="charger-info">
				<div class="title">充电站概况</div>
				<div class="charger-list">
					<ul>
						<li>
							<span class="name">站点数</span>
							<div class="num">
								{{ detail.siteNum | null }}
							</div>
						</li>
						<li>
							<span class="name">电桩数</span>
							<div class="num">
								{{ detail.pileNum | null }}
							</div>	
						</li>
						<li>
							<span class="name">交流桩</span>
							<div class="num">
								{{ detail.exchangePileNum | null }}
							</div>	
						</li>
						<li>
							<span class="name">直流桩</span>
							<div class="num">
								{{ detail.directPileNum | null }}
							</div>	
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="charger-rank">
		<div class="col-md-12 normal-panel">
			<div class="rank-info">
				<div class="title">充电排名</div>
				<div class="echart" id="rank-echarts" v-if="!nodata"></div>
				<div class="no-echart" v-if="nodata">暂无充电排名</div>
			</div>
		</div>
	</div>
	<div class="electricity-info">
		<div class="col-md-6 normal-panel">
			<div class="electricity-panel">
				<div class="title">电量信息</div>
				<div class="electricity-list">
					<ul>
						<li>
							<span class="name">本月</span>
							<div class="num">
								{{ detail.thisMonthElectricity | tofixed }}<span class="tip">度</span>
							</div>
						</li>
						<li>
							<span class="name">上月</span>
							<div class="num">
								{{ detail.lastMonthElectricity | tofixed }}<span class="tip">度</span>
							</div>	
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-md-6 normal-panel">
			<div class="order-panel">
				<div class="title">订单信息</div>
				<div class="order-list">
					<ul>
						<li>
							<span class="name">本月</span>
							<div class="num">
								{{ detail.thisMonthPrice | tofixed }}<span class="tip">元</span>
							</div>
						</li>
						<li>
							<span class="name">上月</span>
							<div class="num">
								{{ detail.lastMonthPrice | tofixed }}<span class="tip">元</span>
							</div>	
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>