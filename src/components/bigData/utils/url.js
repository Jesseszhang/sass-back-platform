const url = {
    //统计概况
    countOverView: {
        ajax: {
            url: '/statisticsInfo/detail'
        },
        socket: {
            url: '/4/1'
        }
    },
    //告警
    alarm: {
        ajax: {
            url: '/warningInfo/detail'
        },
    socket: {
      url: '/5/1'
    }
  },

    //充电概况
    chargeOverview: {
        ajax: {
            url: '/chargingInfo/detail'
        },
        socket: {
            url: '/6/1'
        }
    },
    //充电桩
    chargingPile: {
        ajax: {
            url: '/chargingPile/detail'
        },
        socket: {
            url: '/2/6'
        }
    },
    //车辆
    car: {
        ajax: {
            url: '/car/detail'
        },
        socket: {
            url: '/3/7'
        }
    },
    //地图概况
    mapOverview: {
        ajax: {
            url: '/map/city/survey/530100'
        },
        socket: {
            url: '/1/1'
        }
    },
    //地图详情
    mapDetail: {
        ajax: {
            spot: '/map/area/spot/survey/', //站点区域概况
            car: '/map/area/car/survey/', //站点区域概况
            spotStatus: '/map/area/spot/status/', //获取地图页电桩区域概略状态
            carStatus: '/map/area/car/status/', //获取地图页车辆区域概略状态
        },
        socket: {
            url: '/1/4'
        }
    }
}

module.exports = url;