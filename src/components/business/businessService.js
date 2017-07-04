var http = require('../../service/httpRequest');
module.exports = {
  //根据ID获取硬件信息
  getHardWareEditInfo(params) {
    return http('get', 'device/findById', params);
  },
  // 获取运营商列表接口
  getHardWareOperate(params) {
    return http('get', 'device/getCommercialList', params);
  },
  // 获取生产厂商列表
  getHardWareDevice(params) {
    return http('get', 'device/manufacturer/list', params);
  },
  // 获取设备系列列表
  getHardWareSeries(params) {
    return http('get', 'device/series/list', params);
  },
  // 获取品牌信息
  getHardWareBrand(params) {
    return http('get', 'carBrand/queryBrandList', params);
  },
  // 获取所有车型
  getHardWareSeries(params) {
    return http('get', 'carTypeInfo/queryAll', params);
  },
  // 获取商业列表信息
  getCommercialList(params) {
    return http('get', 'commercial/findCommercials', params);
  },
  // 获取商业详情信息
  getCommerciaInfo(params) {
    return http('get', 'commercial/findCommercialInfo', params);
  },
  // 管理员设置
  getMerchantInfo(params) {
    return http('get', 'commercial/findMerchantById', params);
  },
  // 更新管理员设置
  updateMerchantInfo(params) {
    return http('post', 'commercial/updateMerchant', params);
  },
  // 根据商户ID查找应用
  getComRoleInfo(params) {
    return http('get', 'commercial/findRoleById', params);
  },
  // addMerchantRole
  addMerchantRole(params) {
    return http('post', 'commercial/addMerchantRole', params);
  },
  // commercial详情
  getCommercialDetail(params) {
    return http('get', 'commercial/findById', params);
  },
  // 新增commercial
  addCommercial(params) {
    return http('post', 'commercial/addCommercial', params);
  },
  // 修改commercial
  updateCommercial(params) {
    return http('post', 'commercial/updateCommercial', params);
  },
  // 获取所有应用
  getAllApply(params) {
    return http('get', 'commercial/findRoles', params);
  },
  // 获取所有的省市区
  getAllArea(params) {
    return http('get', 'commercial/selectPcd',params);
  },
  // 获取对应的所属下拉商户
  getSelectCommList(params) {
    return http('get', 'commercial/findCommLevel', params);
  },
  // 修改硬件接口
  updateHardware(params) {
    return http('post', 'device/update', params);
  },
  // 修改硬件接口
  addNewHardware(params) {
    return http('post', 'device/add', params);
  },
  // tcu列表
  getTcuListInfo(params) {
    return http('get', 'Tcu/findTcu', params);
  },
  // tcu详情
  getTcuDetail(params) {
    return http('get', 'Tcu/findTcuById', params);
  },
  // tcu新增
  addTcu(params) {
    return http('post', 'Tcu/insertTcu', params);
  },
  // tcu更新
  updateTcu(params) {
    return http('post', 'Tcu/updateTcu', params);
  },
  // tbox列表
  getTboxListInfo(params) {
    return http('get', 'Box/findBox', params);
  },
  // tbox详情
  getTboxDetail(params) {
    return http('get', 'Box/findBoxById', params);
  },
  // tbox新增
  addTbox(params) {
    return http('post', 'Box/insertBox', params);
  },
  // tbox更新
  updateTbox(params) {
    return http('post', 'Box/updateBox', params);
  },
  // 获取所有运营商
  getOperateList(params) {
    return http('get', '/operate/queryOperateInfoList', params);
  },
  // 获取所运营商通信配置
  getOperatorGsm(params) {
    return http('get', '/operatorGsm/findOperatorGsm', params);
  },
  
  deleteROperatorGsm(params) {
    return http('post', '/operatorGsm/deleteROperatorGsm', params);
  },

  findAllROperatorGsmList(params) {
    return http('get', '/operatorGsm/qureyAllCommercialGsm', params);
  },

  findROperatorGsm(params) {
    return http('get', '/operatorGsm/findROperatorGsm', params);
  },

  findAllCommercialGsm(params) {
    return http('get', '/operatorGsm/findAllCommercialGsm', params);
  }
}
