<template lang="html">
  <div class="bigData clearfix">
    <div class="left">
      <div class="left-row left-row-first clearfix">
        <div class="left-row-col">
          <!--统计概况 S-->
          <count-overview></count-overview>
          <!--统计概况 E-->
        </div>
        <div class="left-row-col">
          <!--告警 S-->
          <alarm></alarm>
          <!--告警 E-->
        </div>
      </div>
      <div class="left-row left-row-last">
        <!--充电概况 S-->
          <charge-overview></charge-overview>
        <!--充电概况 E-->
      </div>
    </div>
    <div class="mid">
    
        <!--地图 S-->        
        <map-overview v-show="showMapOverView" :city-code.sync="cityCode" :map-name.sync="mapName" :show-map-over-view.sync="showMapOverView" :location.sync="location"></map-overview>
        <!--地图 E--> 
        <map-detail v-if="showMapDetail" :city-code="cityCode" :map-name="mapName" :show-map-detail.sync="showMapDetail" :location.sync="location"></map-detail>

    </div>
    <div class="right">
      <div class="right-row right-row-first">
        <!--充电桩 S-->            
        <charging-pile></charging-pile>
        <!--充电桩 E--> 
      </div>
      <div class="right-row right-row-last">
        <!--车辆 S-->            
          <car></car>
          <!--车辆 E-->
      </div>
    </div>
    <!--div id="main" style="width: 100%;height: 100%;"></div-->
</font>
</svg>
  </div>
</template>

<style lang="scss" scope>
  .bigData {
    background-image: linear-gradient(-180deg, #1C305A 1%, #133E59 100%);
    width: 2669px;
    height: 100%;
    overflow-x: auto;
    .left {
      float: left;
      width: 896px;
      .left-row {
        padding-left: 30px;
        padding-right: 20px;
      }
      .left-row-first {
        height: 487px;
        .left-row-col {
          float: left;
          width: 407px;
          height: 100%;
          &:first-child {
            margin-right: 32px;
          }
        }
      }
      .left-row-last {
        height: 513px;
        padding-bottom: 25px;
      }
    }
    .mid {
      float: left;
      width: 877px;
      height: 1000px;
    }
    .right {
      float: left;
      width: 896px;
      .right-row {
        padding-left: 19px;
        padding-right: 32px;
      }
      .right-row-first {
        height: 487px;
      }
      .right-row-last {
        height: 513px;
        padding-bottom: 25px;
      }
      
    }
  }
</style>

<script>
// const car = require('./../car/car');
require('./../utils/filter.js');
import car from './../car/car';
import alarm from './../alarm/alarm';
import countOverview from './../countOverview/countOverview';
import chargeOverview from './../chargeOverview/chargeOverview';
import chargingPile from './../chargingPile/chargingPile';
import mapOverview from './../mapOverview/mapOverview';
import mapDetail from './../mapDetail/mapDetail';


export default {
  name: "layout",
  data() {
    return {
      showMapOverView: true,
      showMapDetail: false,
      location: [],
      mapName: '',
      cityCode: ''
    }
  },
  ready() {
    //  var myChart = echarts.init(document.getElementById('main'));

    //     // 指定图表的配置项和数据
    //     var option = {
    //         title: {
    //             text: 'ECharts 入门示例'
    //         },
    //         tooltip: {},
    //         legend: {
    //             data:['销量']
    //         },
    //         xAxis: {
    //             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //         },
    //         yAxis: {},
    //         series: [{
    //             name: '销量',
    //             type: 'bar',
    //             data: [5, 20, 36, 10, 10, 20]
    //         }]
    //     };

    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
  },
  methods: {

  },
  components: {
    car,
    countOverview,
    alarm,
    chargeOverview,
    mapOverview,
    mapDetail,
    chargingPile
  },
  watch: {
    showMapOverView: function(val, oldVal) {
      this.showMapDetail = val ? false : true;
    },
    showMapDetail: function(val, oldVal) {
      this.showMapOverView = val ? false : true;
    }
  }
};
</script>
