var http = require('../../service/httpRequest');
module.exports = {
  //运营商列表信息
  getOperateListInfo(params) {
    return http('get', 'operate/findOperateBaseInfo', params);
  },
  getOperateDetail(params) {
  	return http('get', 'operate/queryOperateInfoById', params);
  },
  addOperate(params) {
  	return http('post', 'operate/insertOperateBaseInfo', params);
  },
  updateOperate(params) {
		return http('post', 'operate/updateOperateBaseInfo', params);
  },
  deleteOperateInfo(params) {
    return http('post', 'operate/deleteOperateBaseInfo', params);
  },
  //管理员设置页面
  getfindMerchantInfo(params) {
    return http('get', '/commercial/findMerchantById', params);
  }
}
