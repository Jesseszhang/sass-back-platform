/**
 * date-time 组件
 *
 * @props theme - 主题
 * @props config - bootstrap-datetimepicker 的 config，
 *                 http://www.bootcss.com/p/bootstrap-datetimepicker/
 * @props placeholder - 输入框占位符
 * @props queryName - 参数名字
 * @props empty - 是否可以为空
 * @props errorMessage - 没填时间的错误提示
 * @props noPastTime - 不能选择过去的时间
 *
 * @evetns change - 时间值改变
 */
const Vue = require('vue');

require('components/base/input-box/input-box');
require('components/base/icon/icon');
require('./date-time.scss');

const formMixin = require('components/mixin/form');
const { dateTime: dateTimeEvent } = require('components/config/event.json');

const DateTime = {
  name: 'date-time',

  template: require('./date-time.tpl'),

  mixins: [formMixin],

  props: {
    theme: {
      type: String,
      default: 'primary'
    },

    value: String,

    queryName: {
      type: String,
      default: ''
    },

    config: {
      type: Object,
      default: () => {
        return {}
      }
    },

    placeholder: {
      type: String,
      default: ''
    },

    empty: {
      type: Boolean,
      default: true
    },

    errorMessage: String,

    noPastTime: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      themeClass: this.theme ? `theme-${this.theme}` : '',
      dangerTip: `请选择${this.errorMessage}时间！`,
      today: ''
    }
  },

  watch: {
    value(val) {
      this.$dispatch(dateTimeEvent.change, {
        dispatcher: this,
        value: val,
        queryName: this.queryName
      })
    }
  },

  methods: {
    /**
     * 验证时间控件的值是否达到标准
     */
    verify() {
      // if (this.noPastTime && new Date(this.$els.input.value).getTime() < this.today) {
      //   this.dangerTip = `${this.errorMessage}时间不能小于今天！`;

      //   return false
      // }

      return !!this.$els.input.value
    },

    val() {
      return this.$els.input.value
    }
  },

  created() {
    this.today = new Date().getTime()

    if (this.noPastTime) {
      Object.assign(this.config,
        { startDate: new Date() }
      )
    }
  }
}

module.exports = Vue.component('date-time', DateTime);
