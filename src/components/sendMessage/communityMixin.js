const ajaxHttp = require('appUtil/ajaxHttp');
const { apiPath } = require('serviceDir/api');

require('components/base/btn/btn');
require('components/base/form-area/form-area');
require('components/base/input-box/input-box');


const calendar = require('components/common/data-calendar/data-calendar');
require("./sendCom.scss");

var communityMixin = {

	data() {
		return {
			timeType:"",
			timeVal:0,
			calendar:{
                show: false,
                x:0,
                y:0,
                picker:"",
                type:"date",
                value:"",
                sep:"-",
                range: false,
                end:'',
                begin:'',
                items:{
                    startTime:{
                        type:"date",
                        value:"",
                        end:new Date().getFullYear()+'-'+(1+new Date().getMonth())+'-'+new Date().getDate(),
               					begin:'',
                        sep:"-"
                    },
                    endTime:{
                        type:"date",
                        value:"",
                        end:new Date().getFullYear()+'-'+(1+new Date().getMonth())+'-'+new Date().getDate(),
                				begin:'',
                        sep:"-"
                    }
                }
            }
		}
	},
methods: {
		timeSet(i){
			this.timeVal = i;

			let startT  = "";
			let endT = "";
			if(i!==0){
				startT = this.formatDay(i);
				endT = this.formatDay(0);

			}
			this.calendar.items.startTime.value = startT;
			this.calendar.items.endTime.value = endT;
      console.log('start'+this.calendar.items.startTime.value);
      console.log('end'+this.calendar.items.endTime.value);
      this.searchData();

		},
		formatTime: function (time) {
			let dTime = new Date(time),
				dMinutes = dTime.getMinutes();
			dMinutes = dMinutes < 10 ? "0" + dMinutes : dMinutes;
			return `${dTime.getFullYear()}-${dTime.getMonth() + 1}-${dTime.getDate()}  ${dTime.getHours()}:${dMinutes}`;
		},
		//天数日期转换
		formatDay(t,ac='-'){
			let t1 = new Date(new Date().getTime() - t*24*60*60*1000);
			return `${t1.getFullYear()}${ac}${(1+t1.getMonth())}${ac}${t1.getDate()}`;
		},
		
		getQueryString(name) {
			if(typeof window.location.hash.split("?")[1] === 'undefined'){
				return '';
			}
			let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			let r = window.location.hash.split("?")[1].match(reg);
			if (r != null) return unescape(r[2]); return null;
		},
		open(e,type) {
            // 设置类型
            this.calendar.picker=type
            this.calendar.type=this.calendar.items[type].type
            this.calendar.value=this.calendar.items[type].value
            
            // 可不用写
            this.calendar.sep=this.calendar.items[type].sep

            this.calendar.show=true
            this.calendar.x=e.target.offsetLeft
            this.calendar.y=e.target.offsetTop+e.target.offsetHeight+8;
            if(type==="startTime"){
            	this.calendar.end=this.calendar.items.endTime.value || this.calendar.items.endTime.end;;
            	this.calendar.begin="";
            }else{
            	this.calendar.begin=this.calendar.items.startTime.value;
            	this.calendar.end=this.calendar.items.endTime.end;
            }

            this.$refs.dropmenu && this.$refs.dropmenu.fold(); //收起下拉框

        }
	},
	watch:{
		'calendar.value': function (value) {
            this.calendar.items[this.calendar.picker].value=value;
        }
	},
        filters:{
        limitStr: function(str, leng) {
            let len = (typeof leng =='undefined')? 32 : leng;
                 if(str.length*2 <= len) {
                  return str;
                 }
             let strlen = 0, s = "";
             for(let i = 0;i < str.length; i++) {
              s = s + str.charAt(i);
              if (str.charCodeAt(i) > 255) {
               strlen = strlen + 2;
               if(strlen >= len){
                return s.substring(0,s.length-1) + "...";
               }
              } else {
               strlen = strlen + 1;
               if(strlen >= len){
                return s.substring(0,s.length-2) + "...";
               }
              }
             }
             return s;
            }
    },
	components:{
		calendar
	}
}

module.exports = communityMixin;