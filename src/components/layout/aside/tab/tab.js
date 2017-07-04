const template = require('./tab.tpl');
const ajax = require('appUtil/ajaxHttp');
require('./tab.scss');

module.exports = {
	name: 'tabAside',
	template,
	props: {
    items: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
	},
	data(){
		return {
			currentIndex: 0
		}
	},
	methods:{
		select(index) {
			this.currentIndex = index;
			this.index = index;
  		this.$dispatch("curtabItem", {
        index: index
      });
		},
  	isActive(index) {
      return index === this.index;
    }
	}
}