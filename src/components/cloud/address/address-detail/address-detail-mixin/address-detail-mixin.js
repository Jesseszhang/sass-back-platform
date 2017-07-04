require('../../../../../common/components/common/tab-panel/tab-panel');
const cloudService = require('../../../cloudService');
const tip = require('../../../../../common/components/base/pop/tip');
const apiPath = require('../../../../../service/requestPath.js');
const template = require('../address-detail.tpl');
const ajax = require('appUtil/ajaxHttp');
require('../address-detail.scss');

module.exports = {
  name: 'addressDetail',
  template,
  data() {
    return {
      curType: "",
      addressDetailUrl: apiPath.getAddressDetailUrl, 
      addressListUrl: apiPath.getAddressListUrl, 
      thItems: ["所属系统", "所属功能组", "功能名称", "可见菜单", "主执行地址名称", "主执行地址", "排序"],
      thLength: 7,
      detail: {},
      list: [],
      tabItems: [{
        value: 1,
        text: '查看地址'
      }, {
        value: 2,
        text: '所属功能'
      }],
      statusArr: ['控制访问权限', '不控制访问权限', '禁止访问']
    }
  },
  ready() {
    let type = this.$route.type
    if (type === 'back') {
      this.curType = 0;
    } else if (type === 'front') {
      this.curType = 0;
    } else if (type === 'app') {
      this.curType = 1;
    }
    this.getAddressDetail();
    this.getAddressListInfo()
  },
  methods: {
    getAddressDetail() {
      ajax(this.addressDetailUrl, {
        data: {
          id: this.$route.query.id
        },
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code ===0) {
          this.$refs.loading.hide();
          this.detail = Object.assign({}, res.data);
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    getAddressListInfo() {
      ajax(this.addressListUrl, {
        data: {
          id: this.$route.query.id
        },
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code ===0) {
          this.$refs.loading.hide();
          this.$set('list', res.data)
        }
      }).catch((res) => {
        tip(res.message)
      })
    }
  },
  filters: {
    statusFilter(val) {
      return this.statusArr[val];
    }
  }
};