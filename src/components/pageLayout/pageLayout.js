import AsideLayout from '../layout/aside/aside'
import Breadcrumbs from '../layout/breadCrumbs/bread-crumbs'
const { getAsideInfo } = require('../../vuex/actions/commonActions');
const http = require('../../service/httpRequest');
const apiPath = require('../../service/requestPath.js');
const tip = require('../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');
const template = require('./pageLayout.tpl');
const store = require('../../vuex/store');
const { isEmpty } = require('../../common/utils/object');
require('./pageLayout.scss');

export default {
  name: 'pageLayout',
  template,
  data() {
    return {
      asideInfo: [],
      breadCrumbs: [],
      pageBtnList: [],
      indexs: [],
      btnVos: [],
      routerInfo: "",
    }
  },
  route: {
    data(transition) {
      http('get', 'menu/accountPermissionMenu', {
        platformType: 0
      }).then((data) => {
        this.routerInfo = transition
        this.loadBtn(this.routerInfo)
        this.$set('asideInfo', data)
        this.getBreadCrumbs(data, transition.to);
        this.$broadcast('initScroll')
      })
      transition.next();
    },
    waitForData: true
  },

  methods: {
    getBreadCrumbs(data, to) {
      let breadCrumbs = [];
      let indexs = [];
      let path = to.path;

      let search = function(list, index) {
        for (let i = 0, length = list.length; i < length; i++) {
          let e = list[i];
          let link = e.link;
          indexs[index] = i;
          breadCrumbs[index] = {
            name: e.description,
            router: link
          }
          let curPath = path.split('?')
          if (link && curPath[0].includes(link)) {
            if (link !== curPath[0]) {
              breadCrumbs[index+1] = {
                name: to.title,
                router: ''
              }
            } else {
              breadCrumbs[index].router = '';
            }
            return true;
          }

          let sub = e.sub;
          if(sub && sub.length !== 0 && search(sub, index + 1)) {
            return true;
          }
        }
        return false;
      };
      if (search(data, 0)) {
        this.$set('breadCrumbs', breadCrumbs);    
        this.$set('indexs', indexs);
      }
    },

    loadBtn(transition) {
      // debugger
      let curPath = transition.to.path.split('?')
      let params = {
        url: curPath[0],
        platformType: 0
      }
      let setBtn = (list) => {
        if (!list) {
          return false;
        }

        let o = {}

        for (let i = 0; i < list.length; i++) {
          let data = list[i];
          o[data.url] = true;
        }

        return o;
      };
      http('get','address/pageBtnIdList', params).then((res) => {
        this.$set('pageBtnList', setBtn(res));
        this.validateBtn(this.pageBtnList)
      })
    },

    validateBtn(data) {
      data = data ? data : this.pageBtnList;
      this.btnArr.map((item) => {
        let flag = item.flag;
        let pageBtnList = data;
        if (flag) {
          // debugger
          /**
           * 当匹配按钮数据为空，则页面按钮隐藏
           * @param  {Boolean} isEmpty(pageBtnList) ||            !(flag in pageBtnList) [description]
           * @return {[type]}                       [description]
           */
          if (isEmpty(pageBtnList) || !(flag in pageBtnList)) {
            item.show = false
          } else if (flag in pageBtnList) {
            item.show = true;
          }
        }
      })
    }
  },

  store,

  vuex: {
    getters: {
      btnArr: (state) => {
        return state.btnArr;
      }
    }
  },

  watch: {
    btnArr(val){
      if (this.routerInfo) {
        this.loadBtn(this.routerInfo);
      }
    }
  },
  components: {
    AsideLayout,
    Breadcrumbs
  }
}