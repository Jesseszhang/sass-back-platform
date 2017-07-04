const cloudService = require('../../../cloudService');
const tip = require('../../../../../common/components/base/pop/tip');
const apiPath = require('../../../../../service/requestPath.js');
const { dropMenu: dropMenuEvent } = require('components/config/event.json');
const template = require('../feature-form.tpl');
const ajax = require('appUtil/ajaxHttp');
require('../feature-form.scss');

module.exports = {
  name: "featureForm",
  template,
  data() {
    return {
      uploadImg: apiPath.uploadFileUrl,
      isEdit: false,
      params: {
        id: "",
        isMenu: 1,
        remark: "",
        isShow : 0,
        sort : 0,
        icon: "",
        urls: null
      },
      curType: "",
      addressUrl: apiPath.getAddressGroupUrl,
      subAddressUrl: apiPath.getSubAddressGroupUrl,
      featureUrl: apiPath.getFeatureGroupUrl,
      featureDetailUrl: apiPath.getFeatureDetailUrl,
      featureAddUrl: apiPath.featureAddUrl,
      featureUpdateUrl: apiPath.featureUpdateUrl,
      addressGroupPage: [],
      featureGroup: [],
      addressGroup: [],
      subAddressGroup: [],
      iconArr: []
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
    this.getAllGroup();
    this.getFeatureDetail();
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
    getFeatureDetail() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(this.featureDetailUrl, {
          data: {
            id: this.$route.query.id
          },
          async: false,
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          if (res.code === 0) {
            this.params = Object.assign({}, this.params, res.data, {
              urls: res.data.urls ? res.data.urls.split(',').map((item) => parseInt(item)) : res.data.urls
            })
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
    getAllGroup() {
      ajax(this.featureUrl, {
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
          this.featureGroup = []
          this.featureGroup.push({
            label: '请选择所属功能组',
            value: -1
          })
          res.data.map((item) => {
            this.featureGroup.push({
              label: item.name,
              value: item.parentId
            })
          })
        }
      }).catch((res) => {
        tip(res.message)
      });
      ajax(this.addressUrl, {
        async: false,
        data: {
          platformType: this.curType
        },
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        if (res.code === 0) {
          this.$refs.loading.hide();
          this.addressGroup = []
          this.addressGroup.push({
            label: "请选择主执行地址",
            value: -1
          })
          res.data.map((item) => {
            this.addressGroup.push({
              label: item.name + '(' + item.url + ')',
              value: item.id
            })
            this.addressGroupPage.push({
              label: item.url,
              value: item.id
            })
          })
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    beforeSubmit(queryOpt, _this) {
      _this.queryOpt = Object.assign({}, _this.queryOpt, this.params)
      _this.queryOpt.urls = queryOpt.urls.join(',')
      _this.queryOpt.id =parseInt(queryOpt.id, 10) 
      _this.queryOpt.platformType = this.curType
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? this.featureUpdateUrl : this.featureAddUrl;
      this.$refs.formArea.setAction(submitUrl).submit()
    },
    submitSuccess(res) {
      this.$refs.loading.hide();
      if (res.code === 0) {
        let message = this.isEdit ? '编辑成功' : '新增成功'
        tip(message)
      } else {
        tip(res.message)
      }
    }
  },
  watch: {
    ["params.url"](val) {
      if (val) {
        let params = {}
        if (val !== -1) {
          this.addressGroupPage.map((item) => {
            if (item.value == val) {
              params.pageUrl = item.label 
            }
          })
        } else {
          params.pageUrl = null
        }
      
        params.platformType = this.curType;
        /**
         * [subAddressGroup description] 将从地址置空
         * @type {Array}
         */
        ajax(this.subAddressUrl, {
          data: params,
          beforeSend: () => {
            this.subAddressGroup = []
            this.$refs.loading.show();
          }
        }).then((res) => {
          if (res.code === 0) {
            this.$refs.loading.hide();
            if (res.data.length !== 0) {
              res.data.map((item) => {
                this.subAddressGroup.push({
                  label: item.name, 
                  value: item.id
                })
              })
            }
          }
        }).catch((res) => {
          tip(res.message)
        })
      }
    }
  }
}