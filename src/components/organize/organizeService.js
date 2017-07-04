var http = require('../../service/httpRequest');
module.exports = {
  setUserInfo(params) {
    return http('post', 'systemLog/queryPage', params);
  },
  getOperationLog(params) {
    return http('post', 'systemLog/queryPage', params);
  },
  getOrganizeDetail(params) {
  	return http('get', 'department/queryDetail', params);
  },
  getOrganizeList(params){
  	return http('get', 'department/queryList', params);
  },
  // getParentDep(params){
  // 	return http('get', 'department/queryParentListById', params);
  // }
}
