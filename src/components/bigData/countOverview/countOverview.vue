<template>
  <div class="countOverview">
    <div class="countTop">
      统计概况
    </div>
    <div class="countMid">
      <div class="line fl chargernums">
        <img src="./ic_charge.png" alt="">
        <div>
          <p>投运电桩(个)</p>
          <p>{{ statisticsInfo.operateCharger | formatNum }}</p>
        </div>
      </div>
      <div class="line fr carnums">
        <div>
          <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg width="41px" height="31px" viewBox="0 0 41 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
              <title>ic_car</title>
              <desc>Created with Sketch.</desc>
              <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                      <stop stop-color="#FFFFFF" offset="0%"></stop>
                      <stop stop-color="#FBFFCC" offset="100%"></stop>
                  </linearGradient>
                  <path d="M258.539334,112.239051 C254.896401,112.419219 252,115.426617 252,119.110169 C252,122.90197 255.082783,125.989831 258.885589,125.989831 L286.114411,125.989831 C289.918336,125.989831 293,122.909701 293,119.110169 C293,115.434148 290.102602,112.419735 286.460675,112.239077 L282.971242,102.817606 C282.393433,101.257524 280.580715,100 278.919145,100 L266.080855,100 C264.413232,100 262.6051,101.261485 262.028758,102.817606 L258.539334,112.239051 Z M264.809545,105.476434 C265.128955,104.422011 266.277677,103.567232 267.395703,103.567232 L277.604297,103.567232 C278.713183,103.567232 279.873237,104.429244 280.190455,105.476434 L281.927684,111.211299 L263.072316,111.211299 L264.809545,105.476434 Z M260.524294,121.148588 C261.650081,121.148588 262.562712,120.235957 262.562712,119.110169 C262.562712,117.984382 261.650081,117.071751 260.524294,117.071751 C259.398507,117.071751 258.485876,117.984382 258.485876,119.110169 C258.485876,120.235957 259.398507,121.148588 260.524294,121.148588 Z M284.475706,121.148588 C285.601493,121.148588 286.514124,120.235957 286.514124,119.110169 C286.514124,117.984382 285.601493,117.071751 284.475706,117.071751 C283.349919,117.071751 282.437288,117.984382 282.437288,119.110169 C282.437288,120.235957 283.349919,121.148588 284.475706,121.148588 Z M257.976271,126.499435 L262.562712,126.499435 L262.562712,128.716638 C262.562712,129.941165 261.567523,130.93384 260.350098,130.93384 L260.188885,130.93384 C258.966892,130.93384 257.976271,129.949702 257.976271,128.716638 L257.976271,126.499435 Z M282.437288,126.499435 L287.023729,126.499435 L287.023729,128.716638 C287.023729,129.941165 286.028539,130.93384 284.811115,130.93384 L284.649902,130.93384 C283.427909,130.93384 282.437288,129.949702 282.437288,128.716638 L282.437288,126.499435 Z" id="path-2"></path>
                  <mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="41" height="30.9338404" fill="white">
                      <use xlink:href="#path-2"></use>
                  </mask>
              </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="数据大屏_默认" transform="translate(-252.000000, -100.000000)" stroke="#FFFFFF" stroke-width="2" fill="url(#linearGradient-1)">
                      <use id="ic_car" mask="url(#mask-3)" xlink:href="#path-2"></use>
                  </g>
              </g>
          </svg>
        </div>
        <div>
          <p>投运车辆(辆)</p>
          <p>{{ statisticsInfo.operateCar | formatNum}}</p>
        </div>
      </div>
      <div class="line fl other">
        <div>
          <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg width="17px" height="28px" viewBox="0 0 17 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
              <title>ic_electric</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="数据大屏" transform="translate(-63.000000, -255.000000)" stroke-width="2" stroke="#FFFFFF">
                      <polyline id="ic_electric" points="72.6378187 256.903226 64 269 78.832618 269 67.9262812 281.096774"></polyline>
                  </g>
              </g>
          </svg>
        </div>
        <div>
          <p>累计充电量(Kw.h)</p>
          <p>{{ statisticsInfo.electricity | formatNum}}</p>
        </div>
      </div>
      <div class="line fr other">
        <div>
          <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg width="30px" height="25px" viewBox="0 0 30 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
              <title>ic_mileage</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="数据大屏" transform="translate(-249.000000, -256.000000)" stroke="#FFFFFF" stroke-width="2">
                      <g id="ic_mileage" transform="translate(250.000000, 257.500000)">
                          <path d="M14.3004292,0 L13.7167382,22.5378788" id="Path-9" stroke-dasharray="7,10"></path>
                          <path d="M7.00429185,0 L0,22.5378788" id="Path-10"></path>
                          <path d="M28.0171674,0 L21.0128755,22.5378788" id="Path-10-Copy" transform="translate(24.515021, 11.268939) scale(-1, 1) translate(-24.515021, -11.268939) "></path>
                      </g>
                  </g>
              </g>
          </svg>
        </div>
        <div>
          <p>累计行程里程(Km)</p>
          <p>{{ statisticsInfo.mileage | formatNum}}</p>
        </div>
      </div>
      <div class="line fl other">
        <div>
          <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg width="25px" height="20px" viewBox="0 0 25 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
              <title>ic_frequency</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="数据大屏" transform="translate(-59.000000, -339.000000)" fill="#FFFFFF">
                      <path d="M59.055794,357.870968 C59.055794,357.318683 59.5059767,356.870968 60.0555056,356.870968 L82.7771124,356.870968 C83.3292379,356.870968 83.776824,357.314833 83.776824,357.870968 C83.776824,358.423252 83.3266413,358.870968 82.7771124,358.870968 L60.0555056,358.870968 C59.5033801,358.870968 59.055794,358.427103 59.055794,357.870968 Z M59.055794,349.806452 C59.055794,349.254167 59.5059767,348.806452 60.0555056,348.806452 L82.7771124,348.806452 C83.3292379,348.806452 83.776824,349.250316 83.776824,349.806452 C83.776824,350.358736 83.3266413,350.806452 82.7771124,350.806452 L60.0555056,350.806452 C59.5033801,350.806452 59.055794,350.362587 59.055794,349.806452 Z M59.055794,340.129032 C59.055794,339.576748 59.5059767,339.129032 60.0555056,339.129032 L82.7771124,339.129032 C83.3292379,339.129032 83.776824,339.572897 83.776824,340.129032 C83.776824,340.681317 83.3266413,341.129032 82.7771124,341.129032 L60.0555056,341.129032 C59.5033801,341.129032 59.055794,340.685167 59.055794,340.129032 Z" id="ic_frequency"></path>
                  </g>
              </g>
          </svg>
        </div>
        <div>
          <p>累计充电次数(次)</p>
          <p>{{ statisticsInfo.chargeCount | formatNum}}</p>
        </div>
      </div>
      <div class="line fr other">
        <div>
          <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg width="23px" height="28px" viewBox="0 0 23 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
              <title>ic_carbon</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="数据大屏" transform="translate(-253.000000, -335.000000)" stroke="#FFFFFF" stroke-width="2">
                      <path d="M274.447158,339.831264 C272.328619,338.006446 269.570719,336.903226 266.555121,336.903226 C259.873558,336.903226 254.457082,342.319136 254.457082,349 C254.457082,355.680864 259.873558,361.096774 266.555121,361.096774 L266.555121,361.096774 C269.616364,361.096774 272.412049,359.959903 274.542918,358.085378" id="ic_carbon"></path>
                  </g>
              </g>
          </svg>
        </div>
        <div>
          <p>累计碳排减量(Kg)</p>
          <p>{{ statisticsInfo.carbonReduction | formatNum}}</p>
        </div>
      </div>
      <div class="line fl other">
        <div>
          <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg width="21px" height="28px" viewBox="0 0 21 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
              <title>ic_amount</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="数据大屏" transform="translate(-61.000000, -415.000000)" fill="#FFFFFF">
                      <path d="M72.416309,425.823217 L72.416309,430.641126 L80.2967962,430.641126 C80.8534577,430.641126 81.304721,431.08499 81.304721,431.641126 C81.304721,432.19341 80.8544961,432.641126 80.2967962,432.641126 L72.416309,432.641126 L72.416309,441.409477 C72.416309,441.96204 71.9724442,442.40998 71.416309,442.40998 C70.8640243,442.40998 70.416309,441.961851 70.416309,441.409477 L70.416309,432.641126 L62.5358219,432.641126 C61.9791603,432.641126 61.527897,432.197261 61.527897,431.641126 C61.527897,431.088841 61.9781219,430.641126 62.5358219,430.641126 L70.416309,430.641126 L70.416309,425.823217 L62.5358219,425.823217 C61.9791603,425.823217 61.527897,425.379353 61.527897,424.823217 C61.527897,424.270933 61.9781219,423.823217 62.5358219,423.823217 L80.2967962,423.823217 C80.8534577,423.823217 81.304721,424.267082 81.304721,424.823217 C81.304721,425.375502 80.8544961,425.823217 80.2967962,425.823217 L72.416309,425.823217 Z M63.5172919,415.881376 C63.9078162,415.490851 64.5447984,415.494669 64.9323714,415.882242 L68.177868,419.127738 C68.5688706,419.518741 68.5719809,420.149571 68.178734,420.542818 C67.7882097,420.933342 67.1512274,420.929525 66.7636545,420.541952 L63.5181578,417.296455 C63.1271553,416.905453 63.1240449,416.274623 63.5172919,415.881376 Z M75.0474681,420.542818 C75.4379924,420.933342 76.0749747,420.929525 76.4625476,420.541952 L79.7080443,417.296455 C80.0990468,416.905453 80.1021572,416.274623 79.7089102,415.881376 C79.3183859,415.490851 78.6814037,415.494669 78.2938307,415.882242 L75.048334,419.127738 C74.6573315,419.518741 74.6542211,420.149571 75.0474681,420.542818 Z" id="ic_amount"></path>
                  </g>
              </g>
          </svg>
        </div>
        <div>
          <p>电桩补贴金额(万元)</p>
          <p>{{ statisticsInfo.chargeSubsidy | formatNum}}</p>
        </div>
      </div>
      <div class="line fr other">
        <div>
          <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg width="21px" height="28px" viewBox="0 0 21 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
              <title>ic_amount</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="数据大屏" transform="translate(-61.000000, -415.000000)" fill="#FFFFFF">
                      <path d="M72.416309,425.823217 L72.416309,430.641126 L80.2967962,430.641126 C80.8534577,430.641126 81.304721,431.08499 81.304721,431.641126 C81.304721,432.19341 80.8544961,432.641126 80.2967962,432.641126 L72.416309,432.641126 L72.416309,441.409477 C72.416309,441.96204 71.9724442,442.40998 71.416309,442.40998 C70.8640243,442.40998 70.416309,441.961851 70.416309,441.409477 L70.416309,432.641126 L62.5358219,432.641126 C61.9791603,432.641126 61.527897,432.197261 61.527897,431.641126 C61.527897,431.088841 61.9781219,430.641126 62.5358219,430.641126 L70.416309,430.641126 L70.416309,425.823217 L62.5358219,425.823217 C61.9791603,425.823217 61.527897,425.379353 61.527897,424.823217 C61.527897,424.270933 61.9781219,423.823217 62.5358219,423.823217 L80.2967962,423.823217 C80.8534577,423.823217 81.304721,424.267082 81.304721,424.823217 C81.304721,425.375502 80.8544961,425.823217 80.2967962,425.823217 L72.416309,425.823217 Z M63.5172919,415.881376 C63.9078162,415.490851 64.5447984,415.494669 64.9323714,415.882242 L68.177868,419.127738 C68.5688706,419.518741 68.5719809,420.149571 68.178734,420.542818 C67.7882097,420.933342 67.1512274,420.929525 66.7636545,420.541952 L63.5181578,417.296455 C63.1271553,416.905453 63.1240449,416.274623 63.5172919,415.881376 Z M75.0474681,420.542818 C75.4379924,420.933342 76.0749747,420.929525 76.4625476,420.541952 L79.7080443,417.296455 C80.0990468,416.905453 80.1021572,416.274623 79.7089102,415.881376 C79.3183859,415.490851 78.6814037,415.494669 78.2938307,415.882242 L75.048334,419.127738 C74.6573315,419.518741 74.6542211,420.149571 75.0474681,420.542818 Z" id="ic_amount"></path>
                  </g>
              </g>
          </svg>
        </div>
        <div>
          <p>车辆补贴金额(万元)</p>
          <p>{{ statisticsInfo.carSubsidy | formatNum}}</p>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
require('./countOverview.scss');
const { socket } =  require('./../utils/socket.js');
const ajax =  require('./../utils/ajax.js');
const url   = require('./../utils/url.js');

export default {
  name: "countOverview",
  data() {
    return {
      countOverView: url.countOverView,
      firstUrl: '/statisticsInfo/detail',
      statisticsInfo: {
        operateCharger: 0,//投运电桩数 ,
        electricity: 0,// 累计充电量 
        chargeCount: 0,//累计充电次数
        chargeSubsidy: 0,//电桩补贴金额
        operateCar: 0,//投运车辆 
        mileage: 0,// 里程
        carbonReduction: 0,//碳减排放量
        carSubsidy: 0//车辆补贴金额
      }
    }
  },
  ready() {
    this.fetch();

    socket(this.countOverView.socket.url, (res)=>{
      res = JSON.parse(res);

      this.statisticsInfo = res.data;
    }, (res)=>{
    });
  },
  methods: {
    fetch() {
      ajax(this.countOverView.ajax.url, {
        data: {
          cityCode: 530100
        }
      }).then((res)=>{
        // console.log(res.data)
        this.statisticsInfo = res.data;
      }).catch((res)=>{

      })
    }
  }
};
</script>