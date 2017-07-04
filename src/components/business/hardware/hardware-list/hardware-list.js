const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./hardware-list.tpl');
const commonMixin = require('../../../mixin/commonMixin');
require('./hardware-list.scss');

export default {
  name: "hardware",
  template,
  mixins: [commonMixin],
  data() {
    return {
      thItems: ["序号", "图片", "设备名称", "运营商", "额定电压(V)", "额定电流(A)", "接口数量", "电桩类型","支持对接充电网", "操作"],
      thLength: 10,
      url: apiPath.getHardwareListUrl,
      defaultImg: require('../../../../assets/default.png'),
      ratedPowerList: [
        {label: "请选择额定功率", value: ""},
        {label: "慢速(<=10kW）", value: "1"},
        {label: "快速(10kW~50kW)", value: "2"},
        {label: "超速(>=50kW)", value: "3"}
      ],
      chargerTypeList: [
        {label: "请选电桩类型", value: ""},
        {label: "交流", value: "0"},
        {label: "直流", value: "1"},
        {label: "交直流一体", value: "2"}
      ]
    }
  },
  methods: {
    fetchQuery({ queryValue }) {
      this.$refs.tableData.query(queryValue).fetch();
    }
  }
}