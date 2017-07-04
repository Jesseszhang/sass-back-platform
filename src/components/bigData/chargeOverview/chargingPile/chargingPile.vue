<template>
  <div class="chargingPile">
    <div class="pileTop">
      {{title}}
    </div>
    <div class="pileMid">
      <div class="Mleft">
        <div>
          <div class="fl">
            <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="数据大屏_默认" transform="translate(-1817.000000, -99.000000)" stroke="#FFFFFF" stroke-width="3">
                        <g id="ic_register" transform="translate(1819.000000, 101.000000)">
                            <ellipse id="Oval-3" opacity="0.900000036" cx="15" cy="15" rx="15" ry="15"></ellipse>
                            <path d="M10,11.5 L20,11.5" id="Path-16" stroke-linecap="round"></path>
                            <path d="M10,18.5 L20,18.5" id="Path-16-Copy" stroke-linecap="round"></path>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
          <div class="fr">

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
          </div>
        </div>
        <div>
          <div>
            <svg width="27px" height="32px" viewBox="0 0 27 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M1844.28817,383.254119 C1846.14803,380.841782 1847.26437,377.754976 1847.26437,374.390598 C1847.26437,366.669554 1841.38489,361 1834.13218,361 C1826.87948,361 1821,366.669554 1821,374.390598 C1821,378.193979 1822.42668,381.642624 1824.7414,384.163112 C1826.30629,385.762707 1832.86125,392.31766 1832.86125,392.31766 C1833.97094,393.427355 1834.66826,393.004299 1835.35928,392.313275 L1842.56126,385.111294 C1842.94419,384.769716 1844.28817,383.254119 1844.28817,383.254119 Z M1834.13218,377.817782 C1836.06667,377.817782 1837.63489,376.249567 1837.63489,374.315077 C1837.63489,372.380587 1836.06667,370.812373 1834.13218,370.812373 C1832.19769,370.812373 1830.62948,372.380587 1830.62948,374.315077 C1830.62948,376.249567 1832.19769,377.817782 1834.13218,377.817782 Z" id="path-1"></path>
                    <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="26.264368" height="32" fill="white">
                        <use xlink:href="#path-1"></use>
                    </mask>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.900000036">
                    <g id="数据大屏_默认" transform="translate(-1821.000000, -361.000000)" stroke="#FFFFFF" stroke-width="6">
                        <use id="ic_station" mask="url(#mask-2)" xlink:href="#path-1"></use>
                    </g>
                </g>
            </svg>
          </div>
          <div></div>
        </div>
      </div>
      <div class="Mright">
      </div>
    </div>
  </div>
</template>
<script>
require("./chargingPile.scss");
export default {
  name: "chargingPile",
  data() {
    return {
      title: '充电桩'
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

  }
};
</script>