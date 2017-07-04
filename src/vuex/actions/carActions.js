import ajax from '../../service/ajax'
import requestPath from '../../service/requestPath'
const tip = require('../../common/components/base/pop/tip');

//获取硬件词典列表
export const getHardwareList = ({ dispatch, state }, data) => {
  ajax(requestPath.getHardwareListUrl, {
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_HARDWARE_LIST', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取车系列
export const getCarSeries = ({ dispatch, state }, data) => {
  ajax(requestPath.getCarSeriesUrl, {
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_CAR_SERIES', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取车类型
export const getCarType = ({ dispatch, state }, data) => {
  ajax(requestPath.getCarTypeUrl, {
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_CAR_TYPE', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取所有的品牌
export const getAllCarBrand = ({ dispatch, state }, data) => {
  ajax(requestPath.getAllCarBrandUrl, {
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_ALL_CAR_BRAND', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取车类型
export const getCarBrand = ({ dispatch, state }, data) => {
  ajax(requestPath.getCarBrandUrl, {
    type: 'get',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('GET_CAR_BRAND', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//获取品牌编辑信息
export const editCarBrandInfo = ({ dispatch, state }, data) => {
  ajax(requestPath.editCarBrandInfoUrl, {
    type: 'post',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('EDIT_CAR_BRAND_INFO', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}

//提交品牌编辑信息
export const submitCarBrandInfo = ({ dispatch, state }, data) => {
  ajax(requestPath.updateCarBrandInfoUrl,{
    type: 'post',
    data: data
  }).then((res, err) => {
      if (res.code === 0) {
        return dispatch('UPDATE_CAR_BRAND_INFO', res);
      } else {
        return dispatch('ERROR_INFO', res)
      }
    }).catch((res)=>{
        tip(res.message)
      })
}
