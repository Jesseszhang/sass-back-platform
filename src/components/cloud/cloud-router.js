//cloud
import featureBack from './feature/feature-list/feature-back-list'
import featureFront from './feature/feature-list/feature-front-list'
import featureApp from './feature/feature-list/feature-app-list'
import featureAppForm from './feature/feature-form/feature-app-form'
import featureBackForm from './feature/feature-form/feature-back-form'
import featureFrontForm from './feature/feature-form/feature-front-form'
import addressBack from './address/address-list/address-back-list'
import addressFront from './address/address-list/address-front-list'
import addressApp from './address/address-list/address-app-list'
import addressAppForm from './address/address-form/address-app-form'
import addressBackForm from './address/address-form/address-back-form'
import addressFrontForm from './address/address-form/address-front-form'
import addressForm from './address/address-form/address-app-form'
import addressAppDetail from './address/address-detail/address-app-detail'
import addressBackDetail from './address/address-detail/address-back-detail'
import addressFrontDetail from './address/address-detail/address-front-detail'
import menuBack from './menu/menu-list/menu-back-list'
import menuFront from './menu/menu-list/menu-front-list'
import menuApp from './menu/menu-list/menu-app-list'
import menuAppForm from './menu/menu-form/menu-app-form'
import menuBackForm from './menu/menu-form/menu-back-form'
import menuFrontForm from './menu/menu-form/menu-front-form'
import application from './application/application-list/application-list'
import applicationForm  from './application/application-form/application-form'
module.exports = {
  //back功能设置
  '/backstage/feature': {
    name: 'backstageFeature',
    title: '后台功能设置',
    component: featureBack,
    type: 'back'
  },
  '/backstage/feature/add': {
    name: 'backstageFeatureAdd',
    title: '添加功能',
    component: featureBackForm,
    type: 'back'
  },
  '/backstage/feature/update': {
    name: 'backstageFeatureUpdate',
    title: '编辑功能',
    component: featureBackForm,
    type: 'back'
  },
  //front功能设置
  '/feature': {
    name: 'feature',
    title: '功能设置',
    component: featureFront,
    type: 'front'
  },
  'feature/add': {
    name: 'featureAdd',
    title: '添加功能',
    component: featureFrontForm,
    type: 'front'
  },
  '/feature/update': {
    name: 'featureUpdate',
    title: '编辑功能',
    component: featureFrontForm,
    type: 'front'
  },
  // app功能设置
  '/appBack/feature': {
    name: 'appFeature',
    title: 'app后台功能设置',
    component: featureApp,
    type: 'app'
  },
  '/appBack/feature/add': {
    name: 'appFeatureAdd',
    title: '添加功能',
    component: featureAppForm,
    type: 'app'
  },
  '/appBack/feature/update': {
    name: 'appFeatureUpdate',
    title: '编辑功能',
    component: featureAppForm,
    type: 'app'
  },
  // back地址设置
  '/backstage/address': {
    name: 'backstageAddress',
    title: '后台地址管理',
    component: addressBack,
    type: 'back'
  },
  '/backstage/address/add': {
    name: 'backstageAddressAdd',
    title: '添加地址',
    component: addressBackForm,
    type: 'back'
  },
  '/backstage/address/update': {
    name: 'backstageAddressUpdate',
    title: '编辑地址',
    component: addressBackForm,
    type: 'back'
  },
  '/backstage/address/detail': {
    name: 'backstageAddressDetail',
    title: '地址详情',
    component: addressBackDetail,
    type: 'back'
  },
  // front地址设置
  '/address': {
    name: 'address',
    title: '地址管理',
    component: addressFront,
    type: 'front'
  },
  '/address/add': {
    name: 'addressAdd',
    title: '添加地址',
    component: addressFrontForm,
    type: 'front'
  },
  '/address/update': {
    name: 'addressUpdate',
    title: '编辑地址',
    component: addressFrontForm,
    type: 'front'
  },
  '/address/detail': {
    name: 'addressDetail',
    title: '地址详情',
    component: addressFrontDetail,
    type: 'front'
  },
  // app地址设置
  '/appBack/address': {
    name: 'appAddress',
    title: 'App后台地址管理',
    component: addressApp,
    type: 'app'
  },
  '/appBack/address/add': {
    name: 'appAddressAdd',
    title: '添加地址',
    component: addressAppForm,
    type: 'app'
  },
  '/appBack/address/update': {
    name: 'appAddressUpdate',
    title: '编辑地址',
    component: addressAppForm,
    type: 'app'
  },
  '/appBack/address/detail': {
    name: 'appAddressDetail',
    title: '地址详情',
    component: addressAppDetail,
    type: 'app'
  },
  //back菜单管理
  '/backstage/menu': {
    name: 'backstageMenu',
    title: '后台菜单管理',
    component: menuBack,
    type: 'back',
    rank: 'one',
    subRoutes: {
      '/add': {
        name: 'backstageMenuAdd',
        title: '添加菜单',
        component: menuBackForm,
        type: 'back',
        rank: 'sub'
      },
      '/update': {
        name: 'backstageMenuUpdate',
        title: '编辑菜单',
        component: menuBackForm,
        type: 'back',
        rank: 'sub'
      }
    }
  },
  // front菜单管理
  '/menu': {
    name: 'menu',
    title: '菜单管理',
    component: menuFront,
    type: 'front',
    rank: 'one',
    subRoutes: {
      '/add': {
        name: 'menuAdd',
        title: '添加菜单',
        component: menuFrontForm,
        type: 'front',
        rank: 'sub'
      },
      '/update': {
        name: 'menuUpdate',
        title: '编辑菜单',
        component: menuFrontForm,
        type: 'front',
        rank: 'sub'
      }
    }
  },
  //app菜单管理
  '/appBack/menu': {
    name: 'appMenu',
    title: 'app后台菜单管理',
    component: menuApp,
    type: 'app',
    rank: 'one',
    subRoutes: {
      '/add': {
        name: 'appMenuAdd',
        title: '添加菜单',
        component: menuAppForm,
        type: 'app',
        rank: 'sub'
      },
      '/update': {
        name: 'appMenuUpdate',
        title: '编辑菜单',
        component: menuAppForm,
        type: 'app',
        rank: 'sub'
      }
    }
  },

  '/application': {
    name: 'application',
    title: '应用设置',
    component: application
  },
  '/application/add': {
    name: 'applicationAdd',
    title: '添加应用',
    component: applicationForm
  },
  '/application/update': {
    name: 'applicationUpdate',
    title: '编辑应用',
    component: applicationForm
  }
}
