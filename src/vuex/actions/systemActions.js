import ajax from '../../service/ajax'
import requestPath from '../../service/requestPath'
const tip = require('../../common/components/base/pop/tip');

//获取岗位管理列表
export const getJobSetList = ({ dispatch, state }, data) => {
  ajax(requestPath.getJobListUrl,{
    type:'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_JOB_LIST', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取员工管理列表
export const getStaffList = ({ dispatch, state }, data) => {
  ajax(requestPath.getStaffListUrl,{
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_STAFF_LIST', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取账号权限列表
export const getAccountList = ({ dispatch, state }, data) => {
  ajax(requestPath.getAccountListUrl,{
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_ACCOUNT_LIST', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取角色管理列表
export const getRoleList = ({ dispatch, state }, data) => {
  ajax(requestPath.getRoleListUrl,{
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_ROLE_LIST', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取组织机构列表
export const getOrganizeList = ({ dispatch, state }, data) => {
  ajax(requestPath.getOrganizeListUrl,{
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_ORGANIZE_LIST', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

