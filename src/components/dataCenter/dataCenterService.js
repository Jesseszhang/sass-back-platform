var http = require('../../service/httpRequest');
module.exports = {

  getSystemLog(params) {
    return http('get', 'systemLog/queryPage', params);
  }
}
