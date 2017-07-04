const template = require('./treeItem.tpl');
require('./treeItem.scss');

const treeItem = {
  name: 'item',
  template,
  props: {
    model: Object
  },
  data() {
    return {
      open: true
    }
  },
  computed: {
    isFolder() {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    getModelId(item) {
      this.$dispatch('itemId',item.id)
    },
    toggle() {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}

module.exports = treeItem