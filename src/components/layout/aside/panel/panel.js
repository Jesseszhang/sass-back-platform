const tip = require('../../../../common/components/base/pop/tip');
const template = require('./panel.tpl');
require('./panel.scss');

module.exports = {
	name: 'panel',
  template,
	props:{
    curItem: {
      type: Object,
      required: true
    },
    curSelected: {
      type: Number,
      default: 0
    }
	},
  methods:{
    status(item) {
      if (!item.status) {
        tip('没有访问该功能的权限，请联系管理员')
      }
    }
  }
}