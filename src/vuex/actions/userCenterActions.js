import ajax from '../../service/ajax'
import requestPath from '../../service/requestPath'
const tip = require('../../common/components/base/pop/tip');
//获取我的操作列表
export const getOperationList = ({ dispatch, state }, data) => {
  ajax(requestPath.getOperationLogUrl, {
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_OPERATION_LIST', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}