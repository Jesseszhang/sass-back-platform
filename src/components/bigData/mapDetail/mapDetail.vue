<template>
  <div class="mapDetail" >
    <div class="fixed-top">
      <a href="javascript:void(0);" @click="backOverview">
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <svg width="14px" height="10px" viewBox="0 0 14 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
            <title>ic_back</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <g id="数据大屏_地图展开" transform="translate(-929.000000, -44.000000)" stroke="#FFFFFF" stroke-width="2">
                    <g id="ic_back" transform="translate(931.000000, 45.000000)">
                        <path d="M1.1390873,1.1390873 L6.6390873,1.1390873 L6.6390873,6.6390873" id="Path-2" transform="translate(3.889087, 3.889087) scale(-1, 1) rotate(45.000000) translate(-3.889087, -3.889087) "></path>
                        <path d="M0.5,4 L10.5,4" id="Path-4"></path>
                    </g>
                </g>
            </g>
        </svg>
        <span>返回全局</span>
      </a>
      <strong>
        {{ mapName }}
      </strong>
    </div>
    <div id="container" style="width:877px; height: 1000px;"></div>
    <div class="info" v-show="panelInfoShow">
      <div class="info-header">
        <h3>{{ panelInfo.name }}</h3>
        <div class="section clearfix">
          <div class="title">地址：</div>
          <div class="con">{{ panelInfo.address }}</div>
        </div>
        <div class="section clearfix">
          <div class="title">
            类型：
          </div>
          <div class="con">
           <span class="dc">直流 {{ panelInfo.dcNum }}</span>|<span class="swap">交流 {{ panelInfo.acNum }}</span>
          </div>
        </div>
      </div>
      <div class="info-content ">
        <div class="status clearfix">
          <div class="idle"><span>空闲</span><strong>{{ panelInfo.freeNum }}</strong></div>
          <div class="busy"><span>繁忙</span><strong>{{ panelInfo.usedNum }}</strong></div>
          
        </div>
        <div class="status clearfix">
          <div class="odd"><span>异常</span><strong>{{ panelInfo.abnormalNum }}</strong></div>
          <div class="offine"><span>离线</span><strong>{{ panelInfo.offLineNum }}</strong></div>
        </div>
      </div>
      
    </div>
    <div class="state">
      <div class="section clearfix">
        <h3>电桩</h3>
        <p class="idle">
          <span class="text">空闲</span><span class="num">{{ citySurvey.spotStatusSurvey.freeNums }}</span>
        </p>
        <p class="busy">
          <span class="text">繁忙</span><span class="num">{{ citySurvey.spotStatusSurvey.usedNums }}</span>
        </p>
        <p class="odd">
          <span class="text">异常</span><span class="num">{{ citySurvey.spotStatusSurvey.abnormalNums }}</span>
        </p>
        <p class="offine">
          <span class="text">离线</span><span class="num">{{ citySurvey.spotStatusSurvey.offLineNums }}</span>
        </p>
      </div>
      <div class="section clearfix">
        <h3>车辆</h3>
        <p class="charging">
          <img src="../../../assets/ic_car_charging.svg" />
          <span class="text">充电中</span><span class="num">{{ citySurvey.carStatusSurvey.chargeNums }}</span>
        </p>
        <p class="driving">
          <img src="../../../assets/ic_car_driving.svg" />
          <span class="text">行驶中</span><span class="num">{{ citySurvey.carStatusSurvey.travelNums }}</span>
        </p>
        <p class="alarm">
          <img src="../../../assets/ic_car_alarm.svg" />
          <span class="text">告警</span><span class="num">{{ citySurvey.carStatusSurvey.alarmNums }}</span>
        </p>
        <p class="offine-car">
           <img src="../../../assets/ic_car_offine.svg" />
          <span class="text">离线</span><span class="num">{{ citySurvey.carStatusSurvey.offLineNums }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
require('./mapDetail.scss');
const { socket } =  require('./../utils/socket.js');
const ajax =  require('./../utils/ajax.js');
const url   = require('./../utils/url.js');

export default {
  name: "mapDetail",
  props: {
    showMapDetail: {
      type: Boolean,
      twoWay: true,
      default() {
        return true;
      }
    },
    location: {
      type: Array,
      twoWay: true,
      default() {
        return []
      }
    },
    mapName: {
      type: String
    },
    cityCode: {
      type: [String, Number]
    }
  },
  data() {
    return {
      title: '地图详情',
      mapDetail: url.mapDetail,
      panelInfo: {
        name: '',//站点名称
        address: '',//站点地址
        acNum: 0,//交流桩数量 
        dcNum: 0,//直流桩数量
        freeNum: 0,//枪头空闲数
        usedNum: 0,//枪头占用数
        abnormalNum: 0,//枪头异常数
        offLineNum: 0//枪头离线数 
      },
      citySurvey: {
        carStatusSurvey: {
          "chargeNums":0,
          "travelNums":0,
          "alarmNums":0,
          "offLineNums":0
        },
        spotStatusSurvey: {
          "freeNums":0,
          "usedNums":0,
          "abnormalNums":0,
          "offLineNums":0
        }
      },
      carMarker: [],
      stationMarkers: [],
      carInfoData: {},
      panelInfoShow: false
    }
  },
  ready() {
    let loadPromise = this.laodMap();

    loadPromise.then(()=>{

      let config = {
        resizeEnable: true,
        zoom:13
      };

      if (this.location.length > 0) {
        config.center = this.location;
      }

      let map = new AMap.Map("container", config);
      
      map.setMapStyle("blue_night");
      map.setDefaultCursor("pointer");
      //只展示交通路线
      map.setFeatures(["road", "point"]);
      //加载放大缩小插件
      AMap.plugin(['AMap.ToolBar'], function(){
        map.addControl(new AMap.ToolBar({
          position: 'RT'
        }));
      });
      map.on('complete', ()=>{
          //创建站点marker
          this.loadStation((res)=>{
            res.data.map((item)=>{
              this._createStationMarker(map, item);
            });
          });

          //创建小汽车
          this.loadCarMarkerData((res)=>{
            let arr = res.data;
            arr.map((item)=>{
              this._createCarMarker(map, parseInt(item.status), item);
            });
            
          });
          //socket
          this.socketGet((res)=>{
            if (res.type == 3) {
              let car = res.data;
              let hasCar = false;
              this.carMarker.map((item)=>{
                if (car.id == item.id) {
                  hasCar = true;
                  let postion = item.marker.getPosition();
                  var lngX = postion.lng, latY = postion.lat;
              
                  var lineArr = [];        
                  lineArr.push([lngX, latY]);
                  

                  lineArr.push([car.lng, car.lat]);
                  item.lineArr = lineArr;
              
                  // 绘制轨迹
                  var polyline = new AMap.Polyline({
                      map: map,
                      path: lineArr,
                      strokeColor: "#00A",  //线颜色
                      strokeOpacity: 0,     //线透明度
                      strokeWeight: 1,      //线宽
                      // strokeStyle: "solid"  //线样式
                  });
                  var passedPolyline = new AMap.Polyline({
                      map: map,
                      // path: lineArr,
                      strokeColor: "#F00",  //线颜色
                      strokeOpacity: 0,     //线透明度
                      strokeWeight: 1,      //线宽
                      // strokeStyle: "solid"  //线样式
                  });

                  item.marker.on('moving',function(e){
                    passedPolyline.setPath(e.passedPath);
                  });
                  
                  item.marker.moveAlong(lineArr, 300);

                  if (item.status != car.status) {
                    this._updateCarMarker(parseInt(car.status), item.marker, car);                    
                  }
                } 
              });

              //新增汽车
              if (!hasCar) {
                this._createCarMarker(map, parseInt(car.status), car);
              }

            }

            if (res.type == 2) {
              let station = res.data;
              let hasStation = false;
              this.stationMarkers.map((item)=>{
                if (item.id == station.id) {
                  hasStation = true;
                  
                  item.marker.setContent(`<div class="station-marker"><span class="text scale5">${station.acNum + station.dcNum}</span></div>`)
                  item.marker.on('mouseover', (e)=>{
                    
                    this.panelInfo = {
                      name: station.name,//站点名称
                      address: station.address,//站点地址
                      acNum: station.acNum,//交流桩数量 
                      dcNum: station.dcNum,//直流桩数量
                      freeNum: station.freeNum,//枪头空闲数
                      usedNum: station.usedNum,//枪头占用数
                      abnormalNum: station.abnormalNum,//枪头异常数
                      offLineNum: station.offLineNum//枪头离线数 
                    };
                    
                    this.panelInfoShow = true;
                  })
                }
              });

              //站点为新增
              if (!hasStation) {
                this._createStationMarker(map, station);
              }
            }
          });
      });
    }).catch(()=>{

    })

    this.loadSpot();
    this.loadCar();
  },
  methods: {
    laodMap() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.src = this._getScriptSrc();

      document.head.appendChild(script);

      return new Promise((resolve, reject) => {
        window['amapInitComponent'] = () => {
          return resolve();
        };
        script.onerror = error => reject(error);
      });;
    },

    backOverview() {
      this.showMapDetail = false;
    },

    loadStation(callback) {
      let url = this._getUrl(this.mapDetail.ajax.spot);
      ajax(url).then((res)=>{
        callback(res);
      }).catch(()=>{

      });
    },
    /**
    * 加载地图车辆marker数据
    */
    loadCarMarkerData(callback) {
      let url = this._getUrl(this.mapDetail.ajax.car);
      ajax(url).then((res)=>{
        callback(res);
      }).catch(()=>{

      });
    },

    loadSpot(callback) {
      let url = this._getUrl(this.mapDetail.ajax.spotStatus);
      ajax(url).then((res)=>{
        this.citySurvey.spotStatusSurvey = res.data;
        // callback(res);
      }).catch(()=>{

      });
    },

    loadCar() {
      let url = this._getUrl(this.mapDetail.ajax.carStatus);
      ajax(url).then((res)=>{
        this.citySurvey.carStatusSurvey = res.data;
        // callback(res);
      }).catch(()=>{

      });
    },

    socketGet(callback) {
       socket(this.mapDetail.socket.url, (res)=>{
        res = JSON.parse(res);
        callback(res);
      }, (res)=>{
      });
    },

    _getUrl(url) {
      return `${url}${this.cityCode}`;
    },

    _getScriptSrc() {
      // amap plugin prefix reg
        const amap_prefix_reg = /^AMap./;

        const config = {
          key: 'c90051613092039448a887df151d558e',
          v: 1.3,
          protocol: 'http',
          hostAndPath: 'webapi.amap.com/maps',
          callback: 'amapInitComponent'
        };

        const paramKeys = ['v', 'key', 'callback'];
        const params = Object.keys(config)
        .filter(k => paramKeys.indexOf(k) !== -1)
        .filter(k => config[k] != null)
        .map(k => {
              let v = config[k];
              if (Array.isArray(v)) return { key: k, value: v.join(',')};
              return {key: k, value: v};
            }).map(entry => `${entry.key}=${entry.value}`).join('&');

        return `${config.protocol}://${config.hostAndPath}?${params}`;
    },

    /**
    * @params map 地图实例对象
    * @params tpl marker内容模板
    * @return {Object}
    **/
    _createMarkerFactory(map, tpl, config) {
      let marker = new AMap.Marker({ //添加自定义点标记
          map: map,
          position: config.location, //基点位置
          offset: config.offset, //相对于基点的偏移位置
          draggable: false,  //是否可拖动
          content: `${tpl}`,   //自定义点标记覆盖物内容
          autoRotation: true
      });

      return marker;
    },
    
    /**
    * 站点marker创建
    * @param map 地图实例
    * @param lng 经度
    * @param lat 纬度
    * @param total 电桩总数
    * @param showInfo 展示信息对象
    */
    _createStationMarker(map, stationInfo) {
      let tpl = `<div class="station-marker"><span class="text scale5">${stationInfo.acNum + stationInfo.dcNum}</span></div>`;
      let marker = this._createMarkerFactory(map, tpl, {
        location: [stationInfo.lng, stationInfo.lat],
        offset: new AMap.Pixel(-10, -10)
      });

      marker.on('mouseover', (e)=>{
        // infoWindow = this._openInfo(map, [103.5000,26.08349]);
        this.panelInfo = {
          name: stationInfo.name,//站点名称
          address: stationInfo.address,//站点地址
          acNum: stationInfo.acNum,//交流桩数量 
          dcNum: stationInfo.dcNum,//直流桩数量
          freeNum: stationInfo.freeNum,//枪头空闲数
          usedNum: stationInfo.usedNum,//枪头占用数
          abnormalNum: stationInfo.abnormalNum,//枪头异常数
          offLineNum: stationInfo.offLineNum//枪头离线数 
        };
       
        this.panelInfoShow = true;
      });

      marker.on('mouseout', (e)=>{
        this.panelInfoShow = false;
      });

      this.stationMarkers.push({
        id: stationInfo.id,
        marker: marker
      })

    },
    /**
    * @param map 地图实例对象
    * @param status 车辆状态
    */
    _createCarMarker(map, status, data) {
      let classStyle = '';
      let statusTxt = '';//:充电中,2:行驶中,3:告警中,4:离线

      switch(status) {
        case 1:
          classStyle = 'car-charging-marker';
          statusTxt = '充电中';
          break;
        case 2:
          classStyle = 'car-driving-marker';
          statusTxt = '行驶中';
          break;
        case 3:
          classStyle = 'car-alarm-marker';
          statusTxt = '告警中';
          break;
        default:
          statusTxt = '离线';
          classStyle = 'car-offine-marker';
      }
  
      let tpl = `<div class="${classStyle}"></div>`;
      let location = [data.lng, data.lat];
      let marker = this._createMarkerFactory(map, tpl, {
        location: location,
        offset: new AMap.Pixel(-14, -7)
      });

      let infoWindow = null;
      this.carInfoData = {
        statusTxt: statusTxt,
        carNum: data.carNum,
        soc: data.soc,
        mileage: data.mileage,
        brand: data.brand
      };

      marker.on('mouseover', (e)=>{
        infoWindow = this._openInfo(map, [e.lnglat.lng, e.lnglat.lat], this.carInfoData);
      });

      marker.on('mouseout', (e)=>{
        infoWindow&&infoWindow.close();
      });

      this.carMarker.push({
        id: data.id,
        marker: marker,
        status: data.status,
        lineArr: []
      });

    },

    _updateCarMarker(status,  marker, car) {
      let classStyle = '';
      let statusTxt = '';//:充电中,2:行驶中,3:告警中,4:离线

      switch(status) {
        case 1:
          classStyle = 'car-charging-marker';
          statusTxt = '充电中';
          break;
        case 2:
          classStyle = 'car-driving-marker';
          statusTxt = '行驶中';
          break;
        case 3:
          classStyle = 'car-alarm-marker';
          statusTxt = '告警中';
          break;
        default:
          statusTxt = '离线';
          classStyle = 'car-offine-marker';
      }
  
      let tpl = `<div class="${classStyle}"></div>`;
      
      marker.setContent(tpl);

      this.carInfoData = {
        statusTxt: statusTxt,
        carNum: car.carNum,
        soc: car.soc,
        mileage: car.mileage,
        brand: car.brand
      };
      // let infoWindow = null;
      // let infoData = {
      //   statusTxt: statusTxt,
      //   carNum: data.carNum,
      //   soc: data.soc,
      //   mileage: data.mileage,
      //   brand: data.brand
      // };

      // marker.on('mouseover', (e)=>{
      //   infoWindow = this._openInfo(map, [e.lnglat.lng, e.lnglat.lat], infoData);
      // });

      // marker.on('mouseout', (e)=>{
      //   infoWindow&&infoWindow.close();
      // });
    },

    _openInfo(map, location, infoData) {
      let tpl = `<div class="car-info">
        <p><span>状态</span><strong>${infoData.statusTxt}</strong></p>
        <p><span>车牌号</span><strong>${infoData.carNum}</strong></p>
        <p><span>型号</span><strong>${infoData.brand}</strong></p>
        <p><span>行驶总里程</span><strong>${infoData.mileage}</strong></p>
        <p><span>电池SOC</span><strong>${infoData.soc}%</strong></p>
      </div>`;

      const infoWindow = new AMap.InfoWindow({
          isCustom: true, 
          content: tpl,
          offset: new AMap.Pixel(16, -20)
      });

      infoWindow.open(map, location);

      return infoWindow;
      
    }

  },

  watch:{
    location: function(val, oldVal) {
      console.log(val)
    }
  }

};
</script>