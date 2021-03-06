const featureListMixin = require('./feature-list-mixin/feature-list-mixin');
const apiPath = require('../../../../service/requestPath.js');

export default {
  mixins: [featureListMixin],
  data() {
    return {
      thItems: ["序号", "所属子系统", "所属功能组", "功能名称", "可见菜单", "是否菜单", "功能标识", "主执行地址名称", "主执行地址", "排序", "操作"],
      thLength: 11,
      url: apiPath.getFeatureListUrl,
      queryOpt: {
      	platformType: 1,
      	type: 0
      }
    }
  }
}