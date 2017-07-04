<template lang="html">
  <div class="chargeOverview">
    <div class="overviewTop">
    {{title}}
    </div>
    <div class="overviewMid">
      <div class="MidTitle">
        <div class="title">
          <div class="fl">今日充电负荷</div>
          <div class="fl">今日行驶里程</div>
        </div>
        <div  id="viewEcharts" style="width: 100%;height:96%;">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require("./chargeOverview.scss")
import echarts from "echarts";
const { socket } =  require('./../utils/socket.js');
const ajax =  require('./../utils/ajax.js');
const url   = require('./../utils/url.js');

export default {
  name: "chargeOverview",
  data() {
    return {
      title: '充电概况',
      option:{
        title: {
        },
        tooltip: {
            trigger: 'axis',
            axisPointer:{
              lineStyle:{
                color:"rgba(255,255,255,0.3)"
              }
            }
        },
        legend:{
            show:false
        },
        xAxis: {
            type: 'category',
            data: ['00：00','01：00','02：00','03：00','04：00','05：00','06：00','07：00','08：00','09：00','10：00','11：00','12：00','13：00','14：00','15：00','16：00','17：00','18：00','19：00','20：00','21：00','22：00','23：00','24：00'],
            boundaryGap : false,
            axisLine: {
                lineStyle:{
                    color:"rgba(255,255,255,0.3)",
                },
                onZero: false
                
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:"rgba(255,255,255,0.3)",
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                color: "rgba(255,255,255,0.3)"
                },
                interval:2
            },
            axisTick:{
              show:false
            }
        },
        yAxis: [
            {
                name: '负荷(Kw)',
                type: 'value',
                // max: 7000,
                axisLabel: {
                    show: true,
                    textStyle: {
                    color: "rgba(255,255,255,0.3)"
                    }
                },
                axisLine: {
                    lineStyle:{
                        color:"rgba(255,255,255,0.3)"
                    },
                    onZero: false
                    
                },
                axisTick:{
                  show:false
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:"rgba(255,255,255,0.3)"
                    }
                },
            },
            {
                name: '里程(Km)',
                type: 'value',
                // max: 7000,
                axisLabel: {
                    show: true,
                    textStyle: {
                    color: "rgba(255,255,255,0.3)"
                    }
                },
                axisTick:{
                  show:false
                },
                axisLine: {
                    lineStyle:{
                        color:"rgba(255,255,255,0.3)"
                    },
                    onZero: false
                    
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:"rgba(255,255,255,0.3)"
                    }
                },
            }
        ],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        series: [
            {
                name: '负荷(Kw)',
                type: 'line',
                itemStyle:{
                    normal: {
                        color:"#00B0FF",
                    },
                    emphasis:{
                        color:"#00B0FF",
                        borderWidth:2,
                        borderColor:"#ffffff"
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        color:"#00B0FF",
                    },
                },
                symbolSize: 11,
                data: ["","","","","","","","","","","","","","","","","","","","","","","","",""]
            },
            {
                name: '里程(Km)',
                type: 'line',
                yAxisIndex:1,
                itemStyle:{
                    normal: {
                        color:"#E65454",
                    },
                    emphasis:{
                        color:"#E65454",
                        borderWidth:2,
                        borderColor:"#ffffff"
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        color:"#E65454"
                    }
                },
                symbolSize: 11,
                data: ["","","","","","","","","","","","","","","","","","","","","","","","",""]
            }
        ]
    },
    chargeOverview:url.chargeOverview,
    }
  },
  ready() {
    this.fetch();
    socket(this.chargeOverview.socket.url, (res)=>{
      res = JSON.parse(res);
      this.setEcharts(res.data);
    }, (res)=>{});
  },
  methods: {
    fetch() {
      ajax(this.chargeOverview.ajax.url, {
        data: {
          cityCode: 530100
        }
      }).then((res)=>{
          this.setEcharts(res.data);
      }).catch((res)=>{

      })
    },
    setEcharts(res){
        var myChart = echarts.init(document.getElementById('viewEcharts'));
        //今日充电负荷
        res.chargeLoad.forEach((el,i)=>{
            this.option.series[0].data[i] = el;
        })
        //今日行驶里程
        res.mileage.forEach((el,i)=>{
            this.option.series[1].data[i] = el;
        })
        myChart.setOption(this.option);
    }
  }
};
</script>
<style lang="scss" scope>
.chargeOverview {
  height: 100%;
}
</style>