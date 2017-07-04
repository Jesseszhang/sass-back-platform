import app from './app/app.js'
import { setPageTitle } from './utils/utils.js'
const router = require('./router/router.js')
const spinner = require('src/common/utils/spinner');

//登录页面
// const loginlayout = require('./components/login/login-layout/login-layout')
// import login from './components/login/login-layout/login-layout'
const loginlayout =  require('./components/login/login')

//page subRouters
import pageLayout from './components/pageLayout/pageLayout.js'

//个人中心
import operationLog from './components/userCenter/userCenter-list/userCenter-list'
import userSet from './components/userCenter/userSet/userSet'
import workPlatform from './components/userCenter/workPlatform/workPlatform'

//组织授权
import organizeSet from './components/organize/organizeSet/organizeSet-list/organizeSet-list'
import organizeSetForm from './components/organize/organizeSet/organizeSet-form/organizeSet-form'
import organizeSetDetail from './components/organize/organizeSet/organizeSet-detail/organizeSet-detail'
import jobSet from './components/organize/jobSet/jobSet-list/jobSet-list'
import jobSetForm from './components/organize/jobSet/jobSet-form/jobSet-form'
import staffSet from './components/organize/staffSet/staffSet-list/staffSet-list'
import staffSetForm from './components/organize/staffSet/staffSet-form/staffSet-form'
import accountSet from './components/organize/accountSet/accountSet-list/accountSet-list'
import accountSetForm from './components/organize/accountSet/accountSet-form/accountSet-form'
import roleSet from './components/organize/roleSet/roleSet-list/roleSet-list'
import roleSetForm from './components/organize/roleSet/roleSet-form/roleSet-form'

//硬件词典
import carType from './components/business/carType/carType-list/carType-list'
import carSeries from './components/business/carSeries/carSeries-list/carSeries-list'
import carBrand from './components/business/carBrand/carBrand-list/carBrand-list'
import carTypeForm from './components/business/carType/carType-form/carType-form'
import carSeriesForm from './components/business/carSeries/carSeries-form/carSeries-form'
import carBrandForm from './components/business/carBrand/carBrand-form/carBrand-form'
import hardware from './components/business/hardware/hardware-list/hardware-list'
import hardwareForm from './components/business/hardware/hardware-form/hardware-form'
import operateList from './components/business/operate/operate-list/operate-list'
import operateForm from './components/business/operate/operate-form/operate-form'
import tboxDictionary from './components/business/tboxDictionary/tboxDictionary-list/tboxDictionary-list'
import tboxDictionaryForm from './components/business/tboxDictionary/tboxDictionary-form/tboxDictionary-form'
import tcuDictionary from './components/business/tcuDictionary/tcuDictionary-list/tcuDictionary-list'
import tcuDictionaryForm from './components/business/tcuDictionary/tcuDictionary-form/tcuDictionary-form'

//数据中心
import userLog from './components/dataCenter/dataCenter-list/dataCenter-list'

//商业列表
import commercialList from './components/business/commercial/commercial-list/commercial-list'
import commercialForm from './components/business/commercial/commercial-form/commercial-form'
import comAuthorize from './components/business/commercial/commercial-authorize/commercial-authorize'
import commercialDetail from './components/business/commercial/commercial-detail/commercial-detail'


//套餐
import comboList from './components/business/combo/combo-list/combo-list'
import comboForm from './components/business/combo/combo-form/combo-form'


//系统消息
import commercialMessage from './components/business/commercial/commercial-message/commercial-message'
import commercialMessageForm from './components/business/commercial/commercial-message-form/commercial-message-form'

//互联互通
import interconnectionList from './components/business/commercial/interconnection/interconnection-list/interconnection-list'
import interconnectionForm from './components/business/commercial/interconnection/interconnection-form/interconnection-form'




import notFound from './components/notFound/notFound.js'

import bigData from './components/bigData/layout/layout'

const cloudRouter = require('./components/cloud/cloud-router.js');

router.map({
  '/': {
    name: 'login',
    title: '登录页面',
    component: loginlayout
  },
  '/login': {
    name: 'login',
    title: '登录页面',
    component: loginlayout
  },
  '*': {
    name: 'notFound',
    title: '错误404',
    component: notFound
  },
  '/page': {
    name: 'page',
    title: '页面',
    component: pageLayout,
    subRoutes: Object.assign({
      //tcu
      "/tcuDictionary": {
        name: 'tcuDictionary',
        title: 'tcu词典',
        component: tcuDictionary
      },
      "/tcuDictionary/Add": {
        name: 'tcuDictionaryAdd',
        title: 'tcu词典新增',
        component: tcuDictionaryForm
      },
      "/tcuDictionary/Edit": {
        name: 'tcuDictionaryEdit',
        title: 'tcu词典编辑',
        component: tcuDictionaryForm
      },
      //tbox
      "/tboxDictionary": {
        name: 'tboxDictionary',
        title: 'tbox词典',
        component: tboxDictionary
      },
      "/tboxDictionary/Add": {
        name: 'tboxDictionaryAdd',
        title: 'tbox词典新增',
        component: tboxDictionaryForm
      },
      "/tboxDictionary/Edit": {
        name: 'tboxDictionaryEdit',
        title: 'tbox词典编辑',
        component: tboxDictionaryForm
      },
      //运营商列表
      '/operateList': {
        name: 'operateList',
        title: '营运商列表',
        component: operateList
      },
      '/operateList/Add': {
        name: 'operateAdd',
        title: '新增营运商',
        component: operateForm
      },
      '/operateList/Edit': {
        name: 'operateEdit',
        title: '编辑营运商',
        component: operateForm
      },
      //数据中心
      '/userLog':{
        name: 'userLog',
        title: '用户行为日志',
        component: userLog
      },
      //个人中心
      '/userSet':{
        name: 'userSet',
        title: '个人设置',
        component: userSet
      },
      '/operationLog':{
        name: 'operationLog',
        title: '我的操作',
        component: operationLog
      },
      '/workPlatform':{
        name: 'workPlatform',
        title: '工作台',
        component: workPlatform
      },
      //组织授权
      '/roleSet/Add':{
        name: 'roleSetAdd',
        title: '角色新增',
        component: roleSetForm
      },
      '/roleSet/Edit':{
        name: 'roleSetEdit',
        title: '角色编辑',
        component: roleSetForm
      },
      '/roleSet':{
        name: 'roleSet',
        title: '角色管理',
        component: roleSet
      },
      '/accountSet/Add':{
        name: 'accountSetAdd',
        title: '账号权限新增',
        component: accountSetForm
      },
      '/accountSet/Edit':{
        name: 'accountSetEdit',
        title: '账号权限编辑',
        component: accountSetForm
      },
      '/accountSet':{
        name: 'accountSet',
        title: '账号权限',
        component: accountSet
      },
      '/organizeSet':{
        name: 'organizeSet',
        title: '组织机构',
        curtype: "menu",
        component: organizeSet,
        subRoutes: {
          "/Add": {
            name: 'organizeSetAdd',
            title: '组织机构新增',
            curtype: "set",
            component: organizeSetForm
          },
          "/Edit": {
            name: 'organizeSetEdit',
            title: '组织机构编辑',
            curtype: "set",
            component: organizeSetForm
          },
          "/Detail": {
            name: 'organizeSetDetail',
            title: '组织机构详情',
            curtype: "detail",
            component: organizeSetDetail
          }
        }
      },
      '/jobSet': {
        name: 'jobSet',
        title: '岗位设置',
        component: jobSet
      },
      '/jobSet/Add': {
        name: 'jobSetAdd',
        title: '岗位新增',
        component: jobSetForm
      },
      '/jobSet/Edit': {
        name: 'jobSetEdit',
        title: '岗位编辑',
        component: jobSetForm
      },
      '/staffSet': {
        name: 'staffSet',
        title: '员工管理',
        component: staffSet
      },
      '/staffSet/Add': {
        name: 'staffSetAdd',
        title: '员工管理新增',
        component: staffSetForm
      },
      '/staffSet/Edit': {
        name: 'staffSetEdit',
        title: '员工管理编辑',
        component: staffSetForm
      },
      //硬件词典
      '/carType': {
        name: 'carType',
        title: '车型管理',
        component: carType
      },

      '/carType/Add': {
        name: 'carTypeAdd',
        title: '添加车型',
        component: carTypeForm
      },
      '/carType/Edit': {
        name: 'carTypeEdit',
        title: '编辑车型',
        component: carTypeForm
      },
      '/carSeries': {
        name: 'carSeries',
        title: '车系管理',
        component: carSeries
      },

      '/carSeries/Add': {
        name: 'carSeriesAdd',
        title: '添加车系',
        component: carSeriesForm
      },
      '/carSeries/Edit': {
        name: 'carSeriesEdit',
        title: '编辑车系',
        component: carSeriesForm
      },

      '/carBrand': {
        name: 'carBrand',
        title: '品牌管理',
        component: carBrand
      },

      '/carBrand/Add': {
        name: 'carBrandAdd',
        title: '添加品牌',
        component: carBrandForm
      },
      '/carBrand/Edit': {
        name: 'carBrandEdit',
        title: '编辑品牌',
        component: carBrandForm
      },

      '/hardware':{
        name: 'hardware',
        title: '充电设备',
        component: hardware
      },

      '/hardware/Add':{
        name: 'hardwareAdd',
        title: '设备新增',
        component: hardwareForm
      },
      '/hardware/Edit':{
        name: 'hardwareEdit',
        title: '设备编辑',
        component: hardwareForm
      },
      //商户列表
      '/commercialList': {
        name: 'commercialList',
        title: '商户列表',
        component: commercialList
      },
      '/commercialList/Add': {
        name: 'commercialAdd',
        title: '商户新增',
        component: commercialForm
      },
      '/commercialList/Edit': {
        name: 'commercialEdit',
        title: '商户编辑',
        component: commercialForm
      },
      '/commercialList/commercialDetail': {
        name: 'commercialDetail',
        title: '商户详情',
        component: commercialDetail
      },
      '/commercialList/comAuthorize': {
        name: 'comAuthorize',
        title: '商户授权',
        component: comAuthorize
      },
      '/commercialMessage': {
        name: 'commercialMessage',
        title: '系统消息',
        component: commercialMessage
      },
      '/commercialMessage/Add': {
        name: 'commercialMessageForm',
        title: '系统消息新增',
        component: commercialMessageForm
      },
      '/commercialMessage/Edit': {
        name: 'commercialMessageForm',
        title: '系统消息编辑',
        component: commercialMessageForm
      },
      '/interconnection': {
        name: 'interconnectionList',
        title: '互联互通列表',
        component: interconnectionList
      },
      '/interconnection/Add': {
        name: 'interconnectionAdd',
        title: '互联互通新增',
        component: interconnectionForm
      },
      '/interconnection/Edit': {
        name: 'interconnectionEdit',
        title: '互联互通编辑',
        component: interconnectionForm
      },
      '/comboList': {
        name: 'comboList',
        title: '套餐列表',
        component: comboList
      },
      '/comboList/Add': {
        name: 'comboAdd',
        title: '套餐新增',
        component: comboForm
      },
      '/comboList/Edit': {
        name: 'comboEdit',
        title: '套餐编辑',
        component: comboForm
      },
    }, cloudRouter)
  },
  '/bigData': {
    name: 'bigData',
    title: '大数据',
    component: bigData
  }
})

/** 
 * 每次路由（视图）切换完成
 * 1. 设置页面的标题
*/
router.beforeEach(function (transition) {
  spinner.start();
  $('.datetimepicker').remove();
  let token = window.localStorage.getItem('sassToken')
  if(!token && transition.to.matched[0].handler.name == 'page'){
    router.go({
      name: 'login'
    })
  }
  transition.next();
});
router.afterEach(function (transition) {
  setPageTitle(transition.to.title);
  spinner.end();
});

router.start(app, '#app')
