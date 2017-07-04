/**
 * select-city 组件 省 城市 区 三级联动
 *
 * @props theme - 主题 可选（primary，default）
 * @props single - 是否是多个下拉框一起选择
 * @props pcdUrl - 获取省市区JSON的Url
 * @props noDis - 是否隐藏区级下拉窗,
 *   可选true=>省市区,false=>省市;同时宽度响应改变
 * @function  _changesPcd - 把需要用的的数据存入省市区对应数组中;
 * @function  dropMenuChange - dispatch到父亲的方法,里面监听了选中省市区的name和value;
 */

const Vue = require('vue');

require('components/base/drop-menu/drop-menu');

require('./select-city.scss');
const template = require('./select-city.tpl');

const baseMixin = require('components/mixin/base');

const { apiPath } = require('appService/api');

const { selectCity: selectCitys } = require('components/config/event.json');

const pcdJson = require("appAsset/address.json");

const SelectCity = {
  template,

  mixins: [baseMixin],

  props: {
    theme: {
      type: String,
      default: "primary"
    },

    queryName: {
      type: String,
      default: ""
    },
    pcdUrl:{
      type: String,
      default: apiPath.common.selectPcd
    },
    noDis:{
      type: Boolean,
      default: true
    },
    editObj:{
      type:Object,
      default:()=>{}
    },
    cityObj:{
      type:Object,
      default:()=>{
//      "pro":"110000",
//      "cit":"110100",
//      "area":"110102",
      },
    },
    pro:{
      type:Number,
    },
    cit:{
      type:Number,
    },
    test:{
      type:String,
      default:''
    }
  },

  data: () => {
    return {
      pcdArrs:[],
      provincesArr: [{text: "选择省",value:-1}],
      citiesArr:[{text:'选择市',value:-1}],
      districtsArr:[{text:'选择区',value:-1}],
      provinceText:'',
      provinceValue:'',
      cityText:'',
      cityValue:'',
      districtText:'',
      districtValue:'',
    }
  },
  ready(){
    let provinces = [];
    this.pcdArrs = pcdJson.data;
    provinces = this._changesPcd(this.pcdArrs,'pname');
    this.$set("provincesArr",provinces);
  },
  methods: {
    _changesPcd(arr,name){
      let temp =[];
      for(let key in arr){
        temp[key]={};
        temp[key].text = arr[key][name];
        temp[key].value = arr[key].id;
        temp[key].index = key;
      }
      return temp;
    },
    _returnIndex(arr,val){
      for(let i of arr){
        if(i.value == val){
          return i.index;
        }
      }
    }
  },
  events:{
    dropMenuChange(val){
      if(val.text != val.optionItem.text){
        return false;
      }
      if(val.queryName=="province"&&this.noDis==false){
        let cityArr = this.pcdArrs[val.optionItem.index].citys;
        this.proIndex = val.optionItem.index;
        let cityArrs = this._changesPcd(cityArr,'cname');
        this.$refs.cit.text = '选择市';
        cityArrs.unshift({text:'选择市',value:-1});
        this.$set("citiesArr",cityArrs);
        this.provinceText = val.text;
        this.provinceValue = val.value;
        return false;
      }
      if(val.queryName=="province"&&this.noDis==true&&val.optionItem.index){
        let cityArr = this.pcdArrs[val.optionItem.index].citys;
        this.proIndex = val.optionItem.index;
        this.$set("citiesArr",this._changesPcd(cityArr,'cname'));
        this.provinceText = val.text;
        this.provinceValue = val.value;
        var districtArr;
        if(cityArr&&cityArr.length>0){
          this.cityText = cityArr[0].cname;
          this.cityValue = cityArr[0].id;
          districtArr = this.pcdArrs[this.proIndex].citys[0].districts;
          this.$set("districtsArr",this._changesPcd(districtArr,'dname'));
          this.$refs.cit.text = this.cityText;
          this.$refs.cit.value = this.cityValue;
          this.districtText = districtArr[0].dname;
          this.districtValue = districtArr[0].id;
          this.$refs.dis.text = this.districtText;
          this.$refs.dis.value = this.districtValue;
        }
      }else if(val.queryName=="city"&&val.optionItem&&val.optionItem.index){
        if(this.proIndexTemp && (this.proIndexTemp != this.proIndex)){
          districtArr = this.pcdArrs[this.proIndex].citys[0].districts;
        }else{
          districtArr = this.pcdArrs[this.proIndex].citys[val.optionItem.index].districts;
        }
        this.proIndexTemp = this.proIndex;
        this.cityText = val.text;
        this.cityValue = val.value;
        this.$set("districtsArr",this._changesPcd(districtArr,'dname'));
        this.$refs.dis.text = districtArr[0].dname;
        this.$refs.dis.value = this.districtValue;
      }else if(val.queryName=="district"){
        this.districtText = val.text;
        this.districtValue = val.value;
      }
      if(val.queryName&&this.provinceValue){
        return this.$dispatch(selectCitys.selectCitys,{
          provinceValue:this.provinceValue,
          provinceText:this.provinceText,
          cityValue:this.cityValue,
          cityText:this.cityText,
          districtValue:this.districtValue,
          districtText:this.districtText
        })
      }
    }
  },
  watch:{
    pro(val){
      this.provinceValue = this.pro;
      this.cityValue = this.cit;
      let index  = this._returnIndex(this.provincesArr,val);
      let cityArr = this.pcdArrs[index].citys;
      this.proIndex = index;
      this.$set("citiesArr",this._changesPcd(cityArr,'cname'));
    }
  }
};

module.exports = Vue.component('select-city', SelectCity);