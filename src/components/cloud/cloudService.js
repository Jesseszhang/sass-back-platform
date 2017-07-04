const http = require('../../service/httpRequest');
module.exports = {
  //功能管理
  getFeatureList: (params) => http('get', 'business/resource/queryPage', params),
  getFeature: (params) => http('get', 'business/resource/queryDetail', params),
  addFeature: (params) => http('post', 'business/resource/add', params),
  updateFeature: (params) => http('post', 'business/resource/update', params),

  getBackstageFeatureList: (params) => http('get', 'resource/queryPage', params),
  getBackstageFeature: (params) => http('get', 'resource/queryDetail?platformType=0', params),
  addBackstageFeature: (params) => http('post', 'resource/add', params),
  updateBackstageFeature: (params) => http('post', 'resource/update', params),

  //地址管理
  getAddressList: (params) => http('get', 'business/address/queryPage', params),
  getAddress: (params) => http('get', 'business/address/queryDetail', params),
  addAddress: (params) => http('post', 'business/address/add', params),
  updateAddress: (params) => http('post', 'business/address/update', params),
  getAddressFeatureList: (params) => http('get', 'business/address/queryFuntionList', params),

  getBackstageAddressList: (params) => http('get', 'address/queryPage', params),
  getBackstageAddress: (params) => http('get', 'address/queryDetail', params),
  addBackstageAddress: (params) => http('post', 'address/add', params),
  updateBackstageAddress: (params) => http('post', 'address/update', params),
  getBackstageAddressFeatureList: (params) => http('get', 'address/queryFuntionList', params),
  getBackstageMainUrl: (params) => http('get', 'address/getMainUrl', params),
  getfontMainUrl: (params) => http('get', 'business/address/getMainUrl', params),

  //菜单管理
  getMenuList: (params) => http('get', 'business/menu/queryList', params),
  getMenu: (params) => http('get', 'business/menu/queryDetail', params),
  addMenu: (params) => http('post', 'business/menu/add', params),
  updateMenu: (params) => http('post', 'business/menu/update', params),

  getBackstageMenuList: (params) => http('get', 'menu/queryList', {platformType: 0}),
  getBackstageMenu: (params) => http('get', 'menu/queryDetail', params),
  addBackstageMenu: (params) => http('post', 'menu/add', params),
  updateBackstageMenu: (params) => http('post', 'menu/update', params),

  //角色管理
  getRoleList: (params) => http('get', 'business/role/queryPage', params),
  getRole: (params) => http('get', 'business/role/queryDetail', { roleId: params.id }),
  addRole: (params) => http('post', 'business/role/add', params),
  updateRole: (params) => http('post', 'business/role/update', params),

  //有权功能列表
  getResourceFunction: (params) => http('get', 'business/resource/queryResourceFunction', params),

  //下拉菜单组
  getFeatureGroup: () => http('get', 'business/resource/queryFunction'),
  getAddressGroup: () => http('get', 'business/address/queryAddressList'),
  getMenuGroup: () => http('get', 'business/menu/queryParentList'),

  getBackstageFeatureGroup: () => http('get', 'resource/queryFunction?platformType=0'),
  getBackstageAddressGroup: () => http('get', 'address/queryAddressList?platformType=0'),
  getBackstageSubressGroup: (params) => http('get', 'address/getBtnUrl', params),
  getFontSubressGroup: (params) => http('get', 'business/address/getBtnUrl', params),
  getBackstageMenuGroup: () => http('get', 'menu/queryParentList?platformType=0')
}
