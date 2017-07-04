<template>
  <div class="car">
    <div class="carTop">
      {{title}}
    </div>
    <div class="carMid">
      <div class="Mleft fl">
        <div>
          <div>
          </div>
          <div>
            <p>注册车辆(个)</p>
            <div></div>
            <p>{{carInfo.registeredCar}}</p>
          </div>
        </div>
        <div>
          <div>
            <svg width="33px" height="30px" viewBox="0 0 33 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" opacity="0.900000036">
                    <g id="数据大屏_默认" transform="translate(-1817.000000, -233.000000)" stroke="#FFFFFF" stroke-width="3">
                        <g id="ic_operation" transform="translate(1819.000000, 232.000000)">
                            <polyline id="Path-12" transform="translate(19.086980, 10.357837) rotate(45.000000) translate(-19.086980, -10.357837) " points="14.7473319 20.6293916 23.4266282 20.6663836 23.4266282 0.0492913919"></polyline>
                            <path d="M18.014285,4.19585889 C16.4785102,3.559219 14.794574,3.20785147 13.0285714,3.20785147 C5.83309012,3.20785147 0,9.04094158 0,16.2364229 C0,23.4319042 5.83309012,29.2649943 13.0285714,29.2649943 C18.1617984,29.2649943 22.6016586,26.296338 24.7249697,21.9822075" id="Oval-7"></path>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
          <div>
            <p>投运车辆(个)</p>
            <div></div>
            <p>{{carInfo.operateCar}}</p>
          </div>
        </div>
      </div>
      <div class="Mright fr">
        <div class="MRtop">
          <div class="MRTleft fl">
            <div class="fszl">
              <p class="fl">分时租赁</p>
              <p class="fr">{{carInfo.periodicLease}}</p>
            </div>
            <div class="gwyc">
              <p class="fl">公务用车</p>
              <p class="fr">{{carInfo.serviceCar}}</p>
            </div>
            <div class="wlc">
              <p class="fl">物流车</p>
              <p class="fr">{{carInfo.logisticsCar}}</p>
            </div>
            <div class="bus">
              <p class="fl">大巴</p>
              <p class="fr">{{carInfo.bus}}</p>
            </div>
            <div class="taxi">
              <p class="fl">出租车</p>
              <p class="fr">{{carInfo.tax}}</p>
            </div>
          </div>
          <div class="MRTmid fl">
            <div id="carEcharts" style="width:100%;height:100%;"></div>
          </div>
          <div class="MRTright fl">
            <div class="free">
              <p>充电</p>
              <p>{{carInfo.charging}}</p>
            </div>
            <div class="occupy">
              <p>行驶中</p>
              <p>{{carInfo.moving}}</p>
            </div>
            <div class="fault">
              <p>告警</p>
              <p>{{carInfo.waring}}</p>
            </div>
            <div class="offline">
              <p>离线</p>
              <p>{{carInfo.offline}}</p>
            </div>
          </div>
        </div>
        <div class="MRbot">
          <div class="fl">
            <p>今日行驶里程(Kw.h)</p>
            <p>{{carInfo.tripDistance}}</p>
          </div>
          <div class="fl">
            <p>今日碳减排放量(次)</p>
            <p>{{carInfo.carbonReduction}}</p>
          </div>
          <div class="fl">
            <p>今日车辆利用率</p>
            <p>{{carInfo.useRatio*100}}%</p>
          </div>
          <div class="fl">
            <p>今日车辆使用率</p>
            <p>{{carInfo.usageRatio*100}}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require("./car.scss");
import echarts from "echarts";
const { socket } =  require('./../utils/socket.js');
const ajax =  require('./../utils/ajax.js');
const url   = require('./../utils/url.js');

export default {
  name: "car",
  data() {
    return {
      title: '车辆',
      option: {
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series: [
              {
                  name:'车辆状态',
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '40%'],
                  center:["49%","43%"],
                  label: {
                      normal: {
                          position: 'inner',
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data:[
                      {value:0, name:'行驶中'},
                      {value:0, name:'告警'},
                      {value:0, name:'离线'},
                      {value:0, name:'充电'},
                  ],
                  color:["#6177FD","#EF6E6E","#8CB2D2","#0092E0"],
              },
              {
                  name:'车辆类型',
                  type:'pie',
                  radius: ['58%', '78%'],
                  center:["49%","43%"],
                  data:[
                      {value:0, name:'出租车'},
                      {value:0, name:'分时租赁'},
                      {value:0, name:'公务用车'},
                      {value:0, name:'物流车'},
                      {value:0, name:'大巴'},
                  ],
                  color:["#FF792F","#C933FF","#2975E0","#6BBC73","#FFD800"],
              }
          ]
      },
      car:url.car,
      carInfo:{
        registeredCar:"0", //注册车辆
        operateCar:"0",    //投运车辆
        periodicLease:"0", //分时租赁
        serviceCar:"0",    //公务用车
        logisticsCar:"0",  //物流车
        bus:"0",           //大巴
        tax:"0",           //出租车
        charging:"0",      //充电
        moving:"0",        //行驶
        waring:"0",        //告警
        offline:"0",       //离线
        tripDistance:"0",  //行驶里程
        carbonReduction:"0",//碳减排放量
        useRatio:"0",      //车辆利用率
        usageRatio:"0",    //车辆使用率
      }
    }
  },
  ready() {
    this.fetch();
    socket(this.car.socket.url, (res)=>{
        res = JSON.parse(res);
        this.carInfo = res.data;
        this.setEcharts(res.data);
    }, (res)=>{});
  },
  methods: {
    fetch() {
      ajax(`${this.car.ajax.url}/530100`, {
      }).then((res)=>{
        this.carInfo = res.data;
        this.setEcharts(res.data);
      }).catch((res)=>{})
    },
    setEcharts(res){
        var myChart = echarts.init(document.getElementById('carEcharts'));
        let car = [
          {
            key:"tax",
            name:"出租车"
          },
          {
            key:"periodicLease",
            name:"分时租赁"
          },
          {
            key:"serviceCar",
            name:"公务用车"
          },
          {
            key:"logisticsCar",
            name:"物流车"
          },
          {
            key:"bus",
            name:"大巴"
          },
          
        ];
        let status = [
          {
            key:"moving",
            name:"行驶中"
          },
          {
            key:"waring",
            name:"告警"
          },
          {
            key:"offline",
            name:"离线"
          },
          {
            key:"charging",
            name:"充电"
          }
        ];
        let carData=[],statusData=[];
        car.forEach((el,i)=>{
          carData[i] = {};
          carData[i].value = res[[el.key]];
          carData[i].name = el.name;
        })
        status.forEach((el,i)=>{
          statusData[i] = {};
          statusData[i].value = res[[el.key]];
          statusData[i].name = el.name;
        })
        this.option.series[0].data = statusData;
        this.option.series[1].data = carData;
        myChart.setOption(this.option);
    }
  }
};
</script>