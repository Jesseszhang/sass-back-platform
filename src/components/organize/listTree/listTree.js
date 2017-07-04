const item = require('../treeItem/treeItem');
const template = require('./listTree.tpl');
require('./listTree.scss');

const listTree = {
  name: 'listTree',
	template,
  props: {
    listData: Object
  },
  data() {
    return {
      itemId: ''
    }
  },
  components: {
    item
  },
  events: {
    itemId(val) {
      if (val) {
        this.itemId = val
        this.$dispatch('organizateId', val)
      }
    }
  }
}

module.exports = listTree