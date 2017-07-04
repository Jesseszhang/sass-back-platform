<template>
  <div class="alarm">
    <div class="alarmTop">
    告警
    </div>
    <div class="alarmMid">
      <div class="alarmMidTop">
        <div class="fl" id="alarmEcharts" style="width: 75.3%;height:100%;">
        </div>
        <div class="warnnums fr">
          <div class="chargeWarn">
            <p>电桩告警</p>
            <p>{{ alarmData.chargerWarning }}</p>
          </div>
          <div class="carWarn">
            <p>车辆告警</p>
            <p>{{ alarmData.carWarning }}</p>
          </div>
        </div>
      </div>
      <div class="alarmMidBot">
        <div class="info fl">
          <div class="top">
            <div class="fl">
              <p>今日电桩报警数(次)</p>
              <p>{{ alarmData.dayChargerWarning }}</p>
            </div>
            <div class="fr">
              <p>连续24小时离线桩(个)</p>
              <p>{{ alarmData.dayChargerOutline }}</p>
            </div>
          </div>
          <div class="bot" id="scroll">
              <ul class="scroll-box">
                <li v-for="item in alarmData.chargerWarningMsg" track-by="$index">
                  <span>{{ item }}</span>
                </li>
              </ul>
          </div>
        </div>
        <div class="info fr">
          <div class="top">
            <div class="fl">
              <p>今日车辆报警数(次)</p>
              <p>{{ alarmData.dayCarWarning }}</p>
            </div>
            <div class="fr">
              <p>连续24小时离线车(辆)</p>
              <p>{{ alarmData.dayCarOutline }}</p>
            </div>
          </div>
          <div class="bot" id="carWarnScroll">
            <ul class="scroll-box" id="carWarnScroll1">
              <li v-for="item in alarmData.carWarningMsg" track-by="$index"><span>{{ item }}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require("./alarm.scss");
require('./../lib/jquery.jcarousellite.min.js');

const { socket } =  require('./../utils/socket.js');
const ajax =  require('./../utils/ajax.js');
const url   = require('./../utils/url.js');

import echarts from "echarts";
export default {
  name: "alarm",
  data() {
    return {
      alarm: url.alarm,
      optionwarn: {
        color:["#FF4029","#FF7A29"],
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c}"
        },
        series: [
          {
            type: 'pie',
            radius: ['60%','85%'],
            center: ['49%', '48%'],
            data: [{
                value: 300,
                name: '电桩',
              }, {
                value: 310,
                name: '车辆'
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal:{ 
                label:{ 
                  show: true, 
                  formatter: '{b}',
                }, 
                labelLine :{
                  length:1,
                  show:true
                }
              } 
            }
        },
        {
            type:'pie',
            radius:['40%','40%'],
            center:['49%', '46%'],
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    textStyle:{
                      fontSize:'14'
                    }
                },
            },
            data:[
              {
              name:'总告警',
              itemStyle:{
                  normal:{color:'#fff'}
              },
              tooltip: {
                  show: false
              },
            },
            {
              name:'0',
              itemStyle:{
                  normal:{
                    color:'#fff',
                    }
              },
              tooltip: {
                  show: false
              },
            }
            ],
            itemStyle:{ 
            normal:{ 
                  label:{ 
                    show: true, 
                    formatter: '{b}' 
                  }, 
                  labelLine :{show:true} 
                } 
            } 
          },
        ]
      },
      alarmData: {
        chargerWarning: 0,//电桩告警数
        carWarning: 0,//车辆告警数 
        dayChargerWarning: 0,//今日电桩告警数
        dayChargerOutline: 0,//24小时电桩离线数 ,
        dayCarWarning: 0,//今日车辆告警数
        dayCarOutline: 0,//24小时车辆离线数量 
        chargerWarningMsg: [],//电桩告警信息 
        carWarningMsg: []//车辆告警信息
      },
      itemScroll: null,
      msg : ['hello','apple','apple','apple','apple','apple','apple','apple','apple','apple','apple']
    }
  },
  ready() {
    let echartsAlarm = this._init();

    echartsAlarm.then((myChart)=>{
      this.fetch(myChart);
      this.socketGet(myChart);
    }).catch(()=>{

    });

    
  },
  methods: {
    fetch(myChart) {
      ajax(this.alarm.ajax.url, {
        data: {
          cityCode: 530100
        }
      }).then((res)=>{
        this._convertData(res.data);
        myChart.setOption(this.optionwarn);

        
        // let box = document.getElementById('scroll');
        // let child = document.getElementById('scroll1');
        // let childCopy = document.getElementById('scroll2');
        // let carBox = document.getElementById('carWarnScroll');
        // let carBoxChild = document.getElementById('carWarnScroll1');
        // let carBoxChildCopy = document.getElementById('carWarnScroll2');
        // this.scroll(box, child, childCopy, 500);
        // this.scroll(carBox, carBoxChild, carBoxChildCopy, 500);
      }).catch((res)=>{

      });
    },
    
    socketGet(myChart) {
      socket(this.alarm.socket.url, (res)=>{
        res = JSON.parse(res);
        this._convertData(res.data);
        myChart.setOption(this.optionwarn);
      }, (res)=>{
      });
    },

    _init() {
      let armEcharts = document.getElementById('alarmEcharts');
      
      return new Promise((resolve, reject)=>{
        if (armEcharts) {
          let myChart = echarts.init(armEcharts);
          resolve(myChart);             
          myChart.setOption(this.optionwarn); 
        } else {
          reject();
        }
      });
    },
  
    _convertData(data) {
      if (!data) {
        return ;
      }

      this.optionwarn.series[0]['data'][0]['value'] = data.chargerWarning;//电桩告警数
      this.optionwarn.series[0]['data'][1]['value'] = data.carWarning;//车辆告警数
      this.optionwarn.series[1]['data'][1]['name'] = data.carWarning + data.chargerWarning;//车辆告警数
      let alarmData = {
          chargerWarning: data.chargerWarning,//电桩告警数
          carWarning: data.carWarning,//车辆告警数 
          dayChargerWarning: data.dayChargerWarning,//今日电桩告警数
          dayChargerOutline: data.dayChargerOutline,//24小时电桩离线数 ,
          dayCarWarning: data.dayCarWarning,//今日车辆告警数
          chargerWarningMsg: data.chargerWarningMsg,//电桩告警信息 
          dayCarOutline: data.dayCarOutline,//车辆离线数
          carWarningMsg: data.carWarningMsg//车辆告警信息
        };

      this.alarmData = alarmData;

      
      this.$nextTick(function () {
          //dom已更新
        $("#scroll").jCarouselLite({
          vertical: true,
          auto: 6000,
          speed: 2000,
          visible:4,
          scroll: 4
        });

        $("#carWarnScroll").jCarouselLite({
          vertical: true,
          auto: 6000,
          speed: 2000,
          visible:4,
          scroll: 4
        });

      })
    }
  }
};
</script>