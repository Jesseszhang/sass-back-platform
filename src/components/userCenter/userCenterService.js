const http = require('../../service/httpRequest');

module.exports = {
  setUserInfo(params) {
    return http('post', '/account/updatepassword', params);
  },
  getOperationLog(params) {
    return http('get', 'systemLog/queryPage', params);
  },
  getWorkPlatform(params){
  	return http('get', 'commercial/findWorkTable', params);
  }
}
