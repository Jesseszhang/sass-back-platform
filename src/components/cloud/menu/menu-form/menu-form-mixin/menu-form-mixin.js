const cloudService = require('../../../cloudService');
const tip = require('../../../../../common/components/base/pop/tip');
const apiPath = require('../../../../../service/requestPath.js');
const template = require('../menu-form.tpl');
const ajax = require('appUtil/ajaxHttp');
require('../menu-form.scss');

module.exports = {
  name: "menuForm",
  template,
  data() {
    return {
      uploadImg: apiPath.uploadFileUrl,
      curType: "",
      menuGroup: [],
      addressGroup: [],
      showParent: true,
      isEdit: false,
      menuDetailUrl: apiPath.getMenuDetailUrl,
      menuGroupUrl: apiPath.getMenuGroupUrl,
      addressGroupUrl: apiPath.getMenuAddressGroupUrl,
      menuAddUrl: apiPath.menuAddUrl,
      menuUpdateUrl: apiPath.menuUpdateUrl,
      params: {
        id: "",
        icon: "",
        status : 1,
        parentId: null
      },
      iconArr: []
    };
  },
  route: {
    data(transition) {
      this.getMenuDetail();
      transition.next();
    }
  },
   /**
   * [ready description] 不推荐使用 computed
   * @return {[type]} [description]
   */
  ready() {
    let type = this.$route.type
    this.params.id = this.$route.query.id || ""
    if (type === 'back') {
      this.curType = 0;
    } else if (type === 'front') {
      this.curType = 0;
    } else if (type === 'app') {
      this.curType = 1;
    }
    this.getMenuAllGroup();
    this.iconArrFun()
  },
  methods: {
    iconArrFun() {
      if (this.isEdit) {
        this.iconArr = [{
          url: this.params.icon
        }]
      } else {
        this.iconArr = []
      }
    },
    getMenuAllGroup() {
      ajax(this.menuGroupUrl, {
        data: {
          platformType: this.curType
        },
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code === 0) {
          this.$refs.loading.hide();
          this.menuGroup = []
          this.menuGroup.push({
            label: '请选择上级节点',
            value: -1
          })
          res.data.map((item) => {
            this.menuGroup.push({
              label: item.name,
              value: item.id
            })
          })
        }
      }).catch((res) => {
        tip(res.message)
      });
      ajax(this.addressGroupUrl, {
        data: {
          platformType: this.curType
        },
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code === 0) {
          this.$refs.loading.hide();
          this.addressGroup = []
          this.addressGroup.push({
            label: '请选择默认访问地址',
            value: -1
          })
          res.data.map((item) => {
            this.addressGroup.push({
             label: item.name + '(' + item.url + ')', 
             value: item.id 
            })
          })
        }
      }).catch((res) => {
        tip(res.message)
      });
    },
    getMenuDetail() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(this.menuDetailUrl, {
          data: {
            id: this.$route.query.id
          },
          async: false,
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          this.$refs.loading.hide();
          if (res.code === 0) {
            this.params = Object.assign({}, this.params, res.data);
            this.showParent = this.params.parentId != 0;
            if (res.data.icon) {
              this.iconArr = [{
                  url: res.data.icon
                }]
            } else {
              this.iconArr = []
            }
          }
        }).catch((res) => {
          tip(res.message)
        }) 
      } else {
        this.isEdit = false
      }
    },
    beforeSubmit(queryOpt, _this) {
      _this.queryOpt.platformType = this.curType
      _this.queryOpt.parentId = this.params.parentId
      _this.queryOpt.url = this.params.urlId === -1 ? null : this.params.urlId;
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? this.menuUpdateUrl : this.menuAddUrl;
      this.$refs.formArea.setAction(submitUrl).submit()
    },
    submitSuccess(res) {
      this.$refs.loading.hide();
      if (res.code === 0) {
        let message = this.isEdit ? '编辑成功' : '新增成功'
        tip(message)
        this.$dispatch('getMenu')
      } else {
        tip(res.message)
      }
    }
  }
}
