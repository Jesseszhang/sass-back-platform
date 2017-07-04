const hostUrl = require('./host.js')
const address = hostUrl.host
const uploadAddress = hostUrl.uploadHost
let upload = uploadAddress + "/file"
let authorityhost = address
let authoritydocking = true
let docking = true
let authorityhostS = 'http://dev.web.evclub.com'

module.exports = {

  uploadFileUrl: docking ? upload + "/upload/img" : "/upload/img",
  //权限按钮接口
  pageBtnIdList: authoritydocking ? authorityhost + "/api/address/pageBtnIdList" : "/api/address/pageBtnIdList",

  //================= userCenter ==============
  getOperationLogUrl : authoritydocking ? authorityhost + "/api/position/queryPage" : "/api/position/queryPage",

  //================= system ==================
  getJobListUrl: authoritydocking ? authorityhost + "/api/position/queryPage" : "/api/position/queryPage",
  getPositionListUrl: authoritydocking ? authorityhost + "/api/position/queryNodeList" : "/api/position/queryNodeList",
  getJobDetailUrl: authoritydocking ? authorityhost + "/api/position/queryDetails" : "/api/position/queryDetails",
  updateJobSetInfoUrl: authoritydocking ? authorityhost + "/api/position/update" : "/api/position/update",
  saveJobSetInfoUrl: authoritydocking ? authorityhost + "/api/position/add" : "/api/position/add",

  getStaffListUrl: authoritydocking ? authorityhost + "/api/employee/queryPage" : "/api/employee/queryPage",
  getStaffDetailUrl: authoritydocking ? authorityhost + "/api/employee/queryDetails" : "/api/employee/queryDetails",
  updateStaffUrl: authoritydocking ? authorityhost + "/api/employee/update" : "/api/employee/update",
  addNewStaff: authoritydocking ? authorityhost + "/api/employee/add" : "/api/employee/add",

  getAccountListUrl: authoritydocking ? authorityhost + "/api/account/querypage" : "/api/account/querypage",
  getAccountDetailUrl: authoritydocking ? authorityhost + "/api/account/detail" : "/api/account/detail",
  updateAccountUrl: authoritydocking ? authorityhost + "/api/account/update" : "/api/account/update",
  addNewAccountUrl: authoritydocking ? authorityhost + "/api/account/add" : "/api/account/add",

  getRoleListUrl: authoritydocking ? authorityhost + "/api/role/queryList" : "/api/role/queryList",
  getRoleDetailInfoUrl: authoritydocking ? authorityhost + "/api/role/queryDetail" : "/api/role/queryDetail",
  updateRoleUrl: authoritydocking ? authorityhost + "/api/role/update" : "/api/role/update",
  addNewRoleUrl: authoritydocking ? authorityhost + "/api/role/add" : "/api/role/add",

  getOrganizeListUrl: authoritydocking ? authorityhost + "/api/department/queryList" : "/api/department/queryList",
  getParentListUrl: authoritydocking ? authorityhost + "/api/department/queryParentListById" : "/api/department/queryParentListById",
  getDepartmentUrl: authoritydocking ? authorityhost + "/api/department/queryNodeList" : "/api/department/queryNodeList",
  getOrganizeDetailUrl: authoritydocking ? authorityhost + "/api/department/queryDetail" : "/api/department/queryDetail",
  updateOrganizeUrl: authoritydocking ? authorityhost + "/api/department/update" : "/api/department/update",
  addNewOrganizeUrl: authoritydocking ? authorityhost + "/api/department/add" : "/api/department/add",

  optionListUrl:  authoritydocking ? authorityhost + "/api/resource/queryPage?platformType=0" : "/api/resource/queryPage?platformType=0",
  // 权限功能菜单结构
  resourceTreeUrl:  authoritydocking ? authorityhost + "/api/menu/queryResourceTree?platformType=0" : "/api/menu/queryResourceTree?platformType=0",
  appresourceTreeUrl:  authoritydocking ? authorityhost + "/api/menu/queryResourceTree?platformType=1" : "/api/menu/queryResourceTree?platformType=1",

  //================= car ==================
  getCarTypeUrl: authoritydocking ? authorityhost + "/api/carTypeInfo/findCarInfo" : "/api/carTypeInfo/findCarInfo",
  getCarSeriesUrl: authoritydocking ? authorityhost + "/api/carSeries/findCarSeries" : "/api/carSeries/findCarSeries",
  getCarSeriesByIdUrl: authoritydocking ? authorityhost + "/api/carSeries/queryCarSeriesById" : "/api/carSeries/queryCarSeriesById",
  getUpdateCarSeriesUrl: authoritydocking ? authorityhost + "/api/carSeries/updateCarSeries" : "/api/carSeries/updateCarSeries",
  getSaveCarSeriesUrl: authoritydocking ? authorityhost + "/api/carSeries/save" : "/api/carSeries/save",
  getCarBrandUrl: authoritydocking ? authorityhost + "/api/carBrand/findBrands" : "/api/carBrand/findBrands",
  getAllCarBrandUrl: authoritydocking ? authorityhost + "/api/carBrand/queryBrandList" : "/api/carBrand/queryBrandList",

  editCarBrandInfoUrl: authoritydocking ? authorityhost + "/api/carBrand/queryBrandById" : "/api/carBrand/queryBrandById",

  updateCarBrandInfoUrl: authoritydocking ? authorityhost + "/api/carBrand/updateBrand" : "/api/carBrand/updateBrand",
  saveCarBrandInfoUrl: authoritydocking ? authorityhost + "/api/carBrand/save" : "/api/carBrand/save",
  editCarTypeInfoUrl: authoritydocking ? authorityhost + "/api/carTypeInfo/queryCarTypeInfoById" : "/api/carTypeInfo/queryCarTypeInfoById",
  updateCarTypeInfoUrl: authoritydocking ? authorityhost + "/api/carTypeInfo/updateCarTypeInfo" : "/api/carTypeInfo/updateCarTypeInfo",
  saveCarTypeInfoUrl: authoritydocking ? authorityhost + "/api/carTypeInfo/insertCarTypeInfo" : "/api/carTypeInfo/insertCarTypeInfo",
  queryBrandRelatedUrl: authoritydocking ? authorityhost + "/api/carBrand/queryBrandRelatedList" : "/api/carBrand/queryBrandRelatedList",

  //================= hardware =============
  getHardwareListUrl: authoritydocking ? authorityhost + "/api/device/page" : "/api/device/page",
  getHardWareEditInfoUrl: authoritydocking ? authorityhost + "/api/device/findById" : "/api/device/findById",
  getHardWareOperateUrl: authoritydocking ? authorityhost + "/api/device/getCommercialList" : "/api/device/getCommercialList",
  // getHardWareBrandUrl: authoritydocking ? authorityhost + "/api/carBrand/queryBrandList" : "/api/carBrand/queryBrandList",
  getHardWareSeriesUrl: authoritydocking ? authorityhost + "/api/carTypeInfo/queryAll" : "/api/carTypeInfo/queryAll",
  addNewHardwareUrl: authoritydocking ? authorityhost + "/api/device/add" : "/api/device/add",
  updateHardwareUrl: authoritydocking ? authorityhost + "/api/device/update" : "/api/device/update",
  //========================================
  getOperateListInfoUrl: authoritydocking ? authorityhost + "/api/operate/findOperateBaseInfo" : "/api/operate/findOperateBaseInfo",
  getTboxListInfoUrl: authoritydocking ? authorityhost + "/api/Box/findBox" : "/api/Box/findBox",
  getTcuListInfoUrl: authoritydocking ? authorityhost + "/api/Tcu/findTcu" : "/api/Tcu/findTcu",
  getSystemLogUrl: authoritydocking ? authorityhost + "/api/systemLog/queryPage" : "/api/systemLog/queryPage",
  getOperationLogUrl: authoritydocking ? authorityhost + "/api/systemLog/queryPage" : "/api/systemLog/queryPage",
  getCommercialListUrl: authoritydocking ? authorityhost + "/api/commercial/findCommercials" : "/api/commercial/findCommercials",

  deleteOperateInfoUrl: authoritydocking ? authorityhost + "/api/operate/deleteOperateBaseInfo" : "/api/operate/deleteOperateBaseInfo",
  //===============cloud=====================
  getAddressListInfoUrl: authoritydocking ? authorityhost + "/api/address/queryPage" : "/api/address/queryPage",
  getFrontAddressListUrl: authoritydocking ? authorityhost + "/api/business/address/queryPage" : "/api/business/address/queryPage",
  getFeatureListUrl: authoritydocking ? authorityhost + "/api/resource/queryPage" : "/api/resource/queryPage",
  getFrontFeatureListUrl: authoritydocking ? authorityhost + "/api/business/resource/queryPage" : "/api/business/resource/queryPage",
  getApplicationListUrl: authoritydocking ? authorityhost + "/api/business/role/queryPage" : "/api/business/role/queryPage",
  getMenuListUrl: authoritydocking ? authorityhost + "/api/menu/queryList" : "/api/menu/queryList",
  getFrontMenuListUrl: authoritydocking ? authorityhost + "/api/business/menu/queryList" : "/api/business/menu/queryList",

  getFeatureDetailUrl: authoritydocking ? authorityhost + "/api/resource/queryDetail" : "/api/resource/queryDetail",
  getFeatureFrontDetailUrl: authoritydocking ? authorityhost + "/api/business/resource/queryDetail" : "/api/business/resource/queryDetail",
  getFeatureGroupUrl: authoritydocking ? authorityhost + "/api/resource/queryFunction" : "/api/resource/queryFunction",
  getFeatureFrontGroupUrl: authoritydocking ? authorityhost + "/api/business/resource/queryFunction" : "/api/business/resource/queryFunction",
  getAddressGroupUrl: authoritydocking ? authorityhost + "/api/address/queryAddressList" : "/api/address/queryAddressList",
  getFrontAddressGroupUrl: authoritydocking ? authorityhost + "/api/business/address/queryAddressList" : "/api/business/address/queryAddressList",
  getSubAddressGroupUrl: authoritydocking ? authorityhost + "/api/address/getBtnUrl" : "/api/address/getBtnUrl",
  getSubAddressFrontGroupUrl: authoritydocking ? authorityhost + "/api/business/address/getBtnUrl" : "/api/business/address/getBtnUrl",
  getAddressFrontGroupUrl: authoritydocking ? authorityhost + "/api/business/address/queryAddressList" : "/api/business/address/queryAddressList",
  featureUpdateUrl: authoritydocking ? authorityhost + "/api/resource/update" : "/api/resource/update",
  featureFromFrontUpdateUrl: authoritydocking ? authorityhost + "/api/business/resource/update" : "/api/business/resource/update",
  featureAddUrl: authoritydocking ? authorityhost + "/api/resource/add" : "/api/resource/add",
  featureFrontAddUrl: authoritydocking ? authorityhost + "/api/business/resource/add" : "/api/business/resource/add",
  featureFrontUpdateUrl: authoritydocking ? authorityhost + "/api/business/address/queryAddressList" : "/api/business/address/queryAddressList",

  getRoleDetailUrl: authoritydocking ? authorityhost + "/api/business/role/queryDetail" : "/api/business/role/queryDetail",
  getResourceListUrl: authoritydocking ? authorityhost + "/api/business/resource/queryResourceFunction" : "/api/business/resource/queryResourceFunction",
  getAddressDetailUrl: authoritydocking ? authorityhost + "/api/address/queryDetail" : "/api/address/queryDetail",
  getAddressFrontDetailUrl: authoritydocking ? authorityhost + "/api/business/address/queryDetail" : "/api/business/address/queryDetail",
  getAddressListUrl: authoritydocking ? authorityhost + "/api/address/queryFuntionList" : "/api/address/queryFuntionList",
  getAddressFrontListUrl: authoritydocking ? authorityhost + "/api/business/address/queryFuntionList" : "/api/business/address/queryFuntionList",
  addressAddUrl: authoritydocking ? authorityhost + "/api/address/add" : "/api/address/add",
  addressFrontAddUrl: authoritydocking ? authorityhost + "/api/business/address/add" : "/api/business/address/add",
  addressUpdateUrl: authoritydocking ? authorityhost + "/api/address/update" : "/api/address/update",
  addressFrontUpdateUrl: authoritydocking ? authorityhost + "/api/business/address/update" : "/api/business/address/update",
  addressMainUrl: authoritydocking ? authorityhost + "/api/address/getMainUrl" : "/api/address/getMainUrl",
  addressFrontMainUrl: authoritydocking ? authorityhost + "/api/business/address/getMainUrl" : "/api/business/address/getMainUrl",
  getupdateRoleUrl: authoritydocking ? authorityhost + "/api/business/role/update" : "/api/business/role/update",
  getaddRoleUrl: authoritydocking ? authorityhost + "/api/business/role/add" : "/api/business/role/add",
  getMenuDetailUrl: authoritydocking ? authorityhost + "/api/menu/queryDetail" : "/api/menu/queryDetail",
  getMenuFrontDetailUrl: authoritydocking ? authorityhost + "/api/business/menu/queryDetail" : "/api/business/menu/queryDetail",
  getMenuGroupUrl: authoritydocking ? authorityhost + "/api/menu/queryParentList" : "/api/menu/queryParentList",
  getMenuFrontGroupUrl: authoritydocking ? authorityhost + "/api/business/menu/queryParentList" : "/api/business/menu/queryParentList",
  getMenuAddressGroupUrl: authoritydocking ? authorityhost + "/api/address/queryAddressList" : "/api/address/queryAddressList",
  getMenuFrontAddressGroupUrl: authoritydocking ? authorityhost + "/api/business/address/queryAddressList" : "/api/business/address/queryAddressList",
  menuAddUrl: authoritydocking ? authorityhost + "/api/menu/add" : "/api/menu/add",
  menuFrontAddUrl: authoritydocking ? authorityhost + "/api/business/menu/add" : "/api/business/menu/add",
  menuUpdateUrl: authoritydocking ? authorityhost + "/api/menu/update" : "/api/menu/update",
  menuFrontUpdateUrl: authoritydocking ? authorityhost + "/api/business/menu/update" : "/api/business/menu/update",

  //=============== userSet =====================
  setUserInfoUrl: authoritydocking ? authorityhost + "/api/account/updatepassword" : "/api/account/updatepassword",
  //=============== operate =====================
  addOperateUrl: authoritydocking ? authorityhost + "/api/operate/insertOperateBaseInfo" : "/api/operate/insertOperateBaseInfo",
  updateOperateUrl: authoritydocking ? authorityhost + "/api/operate/updateOperateBaseInfo" : "/api/operate/updateOperateBaseInfo",
  addTboxUrl: authoritydocking ? authorityhost + "/api/Box/insertBox" : "/api/Box/insertBox",
  addTcuUrl: authoritydocking ? authorityhost + "/api/Tcu/insertTcu" : "/api/Tcu/insertTcu",
  updateTboxUrl: authoritydocking ? authorityhost + "/api/Box/updateBox" : "/api/Box/updateBox",
  updateTcuUrl: authoritydocking ? authorityhost + "/api/Tcu/updateTcu" : "/api/Tcu/updateTcu",
  //=============== commercial =====================
  updateMerchantInfoUrl: authoritydocking ? authorityhost + "/api/commercial/updateMerchant" : "/api/commercial/updateMerchant",
  getCommercialDetailUrl: authoritydocking ? authorityhost + "/api/commercial/findById" : "/api/commercial/findById",
  getOperateListUrl: authoritydocking ? authorityhost + "/api/operate/queryOperateInfoList" : "/api/operate/queryOperateInfoList",
  getAllAreaUrl: authoritydocking ? authorityhost + "/api/commercial/selectPcd" : "/api/commercial/selectPcd",
  
  getOperatorGsmListUrl: authoritydocking ? authorityhost + "/api/operatorGsm/queryROperatorGsmList" : "/api/operatorGsm/queryROperatorGsmList",
  insertOrUpdateOperatorGsm: authoritydocking ? authorityhost + "/api/operatorGsm/insertOrUpdateOperatorGsm" : "/api/operatorGsm/insertOrUpdateOperatorGsm",
  deleteROperatorGsm: authoritydocking ? authorityhost + "/api/operatorGsm/deleteROperatorGsm" : "/api/operatorGsm/deleteROperatorGsm",
  insertBatchROperatorGsm: authoritydocking ? authorityhost + "/api/operatorGsm/insertBatchROperatorGsm" : "/api/operatorGsm/insertBatchROperatorGsm",
  deleteROperatorGsm: authoritydocking ? authorityhost + "/api/operatorGsm/deleteROperatorGsm" : "/api/operatorGsm/deleteROperatorGsm",
  //=================combo==================
  comboListUrl: authoritydocking ? authorityhost + "/api/combo/page" : "/api/combo/page",
  comboDetailUrl: authoritydocking ? authorityhost + "/api/combo/findById" : "/api/combo/findById",
  comboAddUrl: authoritydocking ? authorityhost + "/api/combo/add" : "/api/combo/add",
  comboUpdateUrl: authoritydocking ? authorityhost + "/api/combo/update" : "/api/combo/update",
  queryNotifyCommercialListUrl: authoritydocking ? authorityhost + "/api/notify/queryNotifyCommercialPage" : "/api/notify/queryNotifyCommercialPage",
  addNotifyCommercialUrl: authoritydocking ? authorityhost + "/api/notify/addNotifyCommercial" : "/api/notify/addNotifyCommercial",
  updateNotifyCommercialUrl: authoritydocking ? authorityhost + "/api/notify/addNotifyCommercial" : "/api/notify/addNotifyCommercial",
  getAllcomboList: authoritydocking ? authorityhost + "/api/combo/comboList" : "/api/combo/comboList",
}
