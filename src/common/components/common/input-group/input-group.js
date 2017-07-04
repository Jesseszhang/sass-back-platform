/**
 * input-group 组件
 *
 * @props kind - input的类型,type='numer'或'string'
 * @props inputItems - input列的数据(label与value值)
 * @props isDisabled - input是否可选
 * @props hasExtra -   input后是否有额外信息
 * @props extraInfo -  input后额外的信息
 * @props inputHeaderInfo -  input-group列头的信息
 * @props class -  class名
 * @props maxlength -  input输入值的最大长度
 * @props maxValue -  input允许输入的最大值
 * @props minValue -  input允许输入的最小值
 * @props max -  input允许输入的最小值
 * @props min -  input允许输入的最小值
 *
 */

const Vue = require('vue');

const { ajaxRtn } = require('src/common/utils/utils');
require('./input-group.scss');
const tip = require('components/base/pop/tip');

const template = require('./input-group.tpl');

const baseMixin = require('components/mixin/base');

const inputGroup = {
  name: "input-group",

  template,

  mixins: [baseMixin],

  props: {
    kind: {
      type: String,
      default: 'string'
    },
    inputItems: {
      type: Array,
      default: () => [],
      twoWay: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    hasExtra: {
      type: Boolean,
      default: false
    },
    extraInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
    inputHeaderInfo: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    maxlength: {
      type: Number
    },
    maxValue: {
      type: Number
    },
    minValue: {
      type: Number
    },
    max: {
      type: Number
    },
    min: {
      type: Number
    }
  },

  ready() {
    this._init();
  },

  methods: {
    /**
     * 初始化输入框是否可选
     */
    _init() {
      if (this.isDisabled){
        $("input", this.$el).attr("disabled", true);
      } else {
        $("input", this.$el).attr("disabled", false);
      }
    },
    
    /**
     * 获取当前组件值
     */
    getData() {
      return this.inputItems;
    },

    /**
     * 限制输入的数字最大值
     */
    monitorVal(val, index) {
      // let max = Math.pow(10, this.maxlength-1);
      if (this.max && this.kind === 'number'){
        var max = this.max
      } else if (this.kind === 'string' && this.maxValue){
        var max = this.maxValue
      }

      if (this.min && this.kind === 'number'){
        var min = this.min
      } else if (this.kind === 'string' && this.minValue){
        var min = this.minValue
      }

      if (parseInt(val) > max){
        tip(`最大值应为${max}`)
        this.inputItems[index].value = max;
      }

      if (!parseInt(val) && val != "-" && val != ""){
        tip("请输入数字!")
      }

      if (min){
        if (parseInt(val) < min){
          tip(`最小值应为${min}`);
          this.inputItems[index].value = min;
        }
      }
    }
  },

  watch: {
    "isDisabled": function(val){
      this._init(); //值改变时,重新给input添加属性
    },
    "inputItems": function(val){
      
    }
  }
}

module.exports = Vue.component('input-group', inputGroup);
