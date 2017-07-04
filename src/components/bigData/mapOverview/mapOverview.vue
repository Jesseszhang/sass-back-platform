<template lang="html">
  <div class="mapOverview">
    <div id="map-eacharts" style="width: 100%;height:880px;">
    </div>
    <div class="info">
      <div class="info-section">
        <table>
          <tr>
            <th>电桩</th>
            <td class="title">
              空闲
            </td>
            <td class="value">{{ mapInfo.spotStatusSurvey.freeNums }}</td>
            <td class="title">繁忙</td>
            <td class="value">{{ mapInfo.spotStatusSurvey.usedNums }}</td>
            <td class="title">异常</td>
            <td class="value">{{ mapInfo.spotStatusSurvey.abnormalNums }}</td>
            <td class="title">离线</td>
            <td class="value">{{ mapInfo.spotStatusSurvey.offLineNums }}</td>
          </tr>
          <tr>
            <th>车辆</th>
            <td class="title">
              充电中
            </td>
            <td class="value">{{ mapInfo.carStatusSurvey.chargeNums }}</td>
            <td class="title">行驶中</td>
            <td class="value">{{ mapInfo.carStatusSurvey.travelNums }}</td>
            <td class="title">告警</td>
            <td class="value">{{ mapInfo.carStatusSurvey.alarmNums }}</td>
            <td class="title">离线</td>
            <td class="value">{{ mapInfo.carStatusSurvey.offLineNums }}</td>
          </tr>
        </table>
      </div>
      <div class="info-section"></div>
    </div>
  </div>
</template>
<script>
require('./mapOverview.scss')
const { socket } =  require('./../utils/socket.js');
const ajax =  require('./../utils/ajax.js');
const url   = require('./../utils/url.js');
const echarts = require('echarts');

export default {
  name: "mapOverview",
  props: {
    showMapOverView: {
      type: Boolean,
      twoWay: true,
      default() {
        return true;
      }
    },
    location: [],
    mapName: {
      type: String,
      twoWay: true
    },
    cityCode: {
      type: [String, Number],
      twoWay: true

    }
  },
  data() {
    return {
      title: '全局地图',
      mapOverview: url.mapOverview,
      myChart: null,
      mapInfo: {
        spotStatusSurvey: {
          freeNums: 0,//空闲数量 
          usedNums: 0 ,//繁忙数量
          abnormalNums: 0 ,//异常数量
          offLineNums: 0//离线
        },
        carStatusSurvey: {
          chargeNums: 0 ,//充电中
          travelNums: 0  ,//行驶中
          alarmNums: 0  ,//告警中
          offLineNums: 0 // 离线数量
        }
      }
    }
  },
  ready() {
    this._init();
    this.fetch();
    this.socketGet();
  },
  methods: {
    _init() {
      const data = require('./kunming.json');

      echarts.registerMap('kunming', data);
      let chart = echarts.init(document.getElementById('map-eacharts'));
      this.myChart = chart;
    },

    _setMap(chart, mapData) {

      const geoCoordMap = {
        '禄劝': [102.59995,25.996533],
        '东川': [103.182,26.12349],
        '寻甸': [103.157588,25.699474],
        '富民': [102.467888,25.359667],
        '嵩明': [103.038777,25.375087],
        '五华': [102.654412,25.199165],
        '盘龙': [102.820014,25.162165],
        '西山': [102.562904,25.06436],
        '官渡': [102.883437,25.061911],
        '安宁': [102.485544,24.961785],
        '呈贡': [102.881382,24.931275],
        '宜良': [103.145989,24.968215],
        '晋宁': [102.594987,24.706944],
        '石林': [103.431962,24.794545]
      };
      
      chart.setOption({
        title: {
          text: "昆明市",
          textStyle: {
            color: '#fff',
            fontSize: 20
          },
          top: 31
        },
        tooltip : {
          trigger: 'item',
          formatter: function (params) {
            let chargeNums = (typeof params.data.chargeNums == 'number') ? params.data.chargeNums : '--';
            let carNums = (typeof params.data.carNums == 'number') ? params.data.carNums : '--';
            return `电桩:${chargeNums}<br/> 车辆:${carNums}`;
            // return 'Legend ' + name;
          }
        },
        geo: {
          map: 'kunming',
          roam: false,//默认不开启。如果只想要开启缩放或者平移
          itemStyle:{
            normal: {
              borderWidth:3,
              borderColor:'#2980FF',
              areaColor: 'transparent',
              label: {
                show: false,
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            emphasis: {                 // 也是选中样式
              borderWidth:3,
              borderColor:'#2980FF',
              areaColor: '#2980FF',
              label: {
                show: false,
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            }
          }
        },
        series: [
          {
          type: 'map',
          map: 'kunming',
          mapType: 'china',
          selectedMode: 'single',
          data: this.convertData(mapData.sort(function (a, b) {
            return b.value - a.value;
          }).slice(0, 14), geoCoordMap),
          itemStyle:{
            normal: {
              borderWidth:3,
              borderColor:'#2980FF',
              areaColor: 'transparent',
              label: {
                show: true
              },
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            },
            emphasis: {                 // 也是选中样式
              borderWidth:3,
              borderColor:'#2980FF',
              areaColor: '#2980FF',
              label: {
                show: true
              },
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            }
          },

          label: {
            normal: {
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          }
        },
        {
          name: '',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: (this.convertData(mapData.sort(function (a, b) {
            return b.value - a.value;
          }).slice(0, 14), geoCoordMap)),
          symbolSize: function (val) {
            return val[2] / 500;
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: false,
          label: {
            normal: {
              formatter: '{b}',
              position: 'left',
              show: false,
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#FF792F',
              shadowBlur: 10,
              show: false,
              shadowColor: '#FF792F'
            }
          },
          zlevel: 1
        }
        ]
      });

      chart.on('click', (params)=> {
        let city = params.name;
        this.mapName = city;
        this.cityCode = params.data.areaCode;
        this.location[0] = params.data.value[0];
        this.location[1] = params.data.value[1];
        this.showMapOverView = false;
      });
    },

    convertData(data, geoCoordMap) {
      let res = [];

      for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
              res.push({
                  areaCode: data[i].areaCode,
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value),
                  chargeNums: data[i].chargeNums,
                  carNums:data[i].carNums
              });
          }
      }

      return res;
    },

    fetch() {
      ajax(this.mapOverview.ajax.url).then((res)=>{
        this.mapInfo.spotStatusSurvey = res.data.spotStatusSurvey;
        // debugger
        this.mapInfo.carStatusSurvey = res.data.carStatusSurvey;
        let mapData = this.handleData(res.data.spotSurvey);
        this._setMap(this.myChart, mapData);
     
      }).catch(()=>{
        console.log('数据请求失败请联系开发人员');
      })
    },

    socketGet() {
      socket(this.mapOverview.socket.url, (res)=>{
        res = JSON.parse(res);
        //市区
        if(res.type == 1) {
            // debugger
            let mapData = this.handleData(res.data.spotSurvey);
            this.mapInfo.spotStatusSurvey = res.data.spotStatusSurvey;
            this.mapInfo.carStatusSurvey = res.data.carStatusSurvey;                      
            this._setMap(this.myChart, mapData);
        }
     
      }, (res)=>{
      });
    },

    handleData(data) {
      const mapData = [{
        areaCode: 530128,
        name: '禄劝',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530113,
        name: '东川',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530129,
        name: '寻甸',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530124,
        name: '富民',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530127,
        name: '嵩明',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530102,
        name: '五华',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530103,
        name: '盘龙',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530112,
        name: '西山',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530111,
        name: '官渡',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530181,
        name: '安宁',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530114,
        name: '呈贡',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530125,
        name: '宜良',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530122,
        name: '晋宁',
        value: 0,
        chargeNums: 0,
        carNums: 0
      },{
        areaCode: 530126,
        name: '石林',
        value: 0,
        chargeNums: 0,
        carNums: 0
      }];
     
      data.map((item)=>{
       mapData.map((area)=>{
          if (item.areaCode == area.areaCode) {
            area.chargeNums = item.chargeNums;
            area.carNums = item.carNums;
            area.value = item.chargeNums + item.carNums;
          }
       })
      });

      return mapData;

    }
  }
};
</script>