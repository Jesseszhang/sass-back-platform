const { apiPath } = require('serviceDir/api');
const ajax = require('src/utils/ajax');

//获取网络控制器
const getNetControllerList = ({ dispatch, state }, queryOpt) => {
  ajax('get', apiPath.maintain.netController)
    .query(queryOpt)
    .end((err, res) => {
      if (res.body.code === 0) {
        return dispatch('GET_NET_CONTROLLER_LIST', res.body);
      } else {
        return dispatch('ERROR_INFO', res.body)
      }
    })
}

module.exports = {
  netController: {
    list: {
      get: getNetControllerList
    }
  }
}