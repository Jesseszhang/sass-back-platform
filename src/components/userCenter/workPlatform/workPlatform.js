import echarts from "echarts"
import userCenterService from "../userCenterService.js"
const apiPath = require('../../../service/requestPath.js');
const tip = require('../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./workPlatform.tpl');
const commonMixin = require('../../mixin/commonMixin');
require('./workPlatform.scss');

export default {
  name: "workPlatform",
  template,
  mixins: [commonMixin],
  data() {
    return {
    	detail: {},
    	xAxisData: [],
    	yAxisData: [],
    	nodata: false
    }
  },

  route: {
    data(transition) {
    	let params = {}
    	userCenterService.getWorkPlatform(params).then((data) => {
        this.$set('detail', data)
        if(data.commChargerRank && data.commChargerRank.length != 0){
        	this.nodata = false;
	        data.commChargerRank.map((item) => {
	       		this.xAxisData.push(item.commercialName)
	       		this.yAxisData.push(parseInt(item.sumElectricity)/100)
	       	})
	       	setTimeout(() => {
	       		this.initEchart();
	       	},0)
        } else if (data.commChargerRank && data.commChargerRank.length === 0) {
        	this.nodata = true;
        } else {
        	this.nodata = true;
        }
        if (transition) {
          transition.next();
        }
      }).catch((res) => {
      	tip(res.message)
      })
    },
    waitForData: true
  },
  ready() {
  	$(document).ready(() => {
	  	$(window).on('resize',() => {
	  		if (document.getElementById('rank-echarts')) {
	  			this.initEchart();
	  		}
	  	});
  	});
  },
  methods: {
  	initEchart() {
	  	let rankEcharts = echarts.init(document.getElementById('rank-echarts'))
			var option = {
	      title: {
	        text: ''
	      },
	      tooltip: {},
	      xAxis: {
	        data: this.xAxisData,
	        axisTick: {
	        	show: false
	        }
	      },
	      yAxis: {
		      axisLine: {
		      	show: false
		      },
		      axisTick: {
		      	show: false
		      }
	      },
	      series: [{
	        name: '电量信息',
	        type: 'bar',
	        data: this.yAxisData,
	        itemStyle: {
	        	normal: {
	        		color: "#4e6baf"
	        	}
	        }
	      }]
	    } 
	    rankEcharts.setOption(option) 
  	}
  },
  components: {
  	echarts
  }
}