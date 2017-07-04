const cloudService = require('../../../cloudService');
const tip = require('../../../../../common/components/base/pop/tip');
const apiPath = require('../../../../../service/requestPath.js');
const template = require('../address-form.tpl');
const ajax = require('appUtil/ajaxHttp');
require('../address-form.scss');

module.exports = {
  name: "addressForm",
  template,
  data() {
    return {
      urlArr: [],
      isEdit: false,
      params: {
        id: "",
        status : 0,
        type: 0,
        resourceAddrId: null
      },
      addressDetailUrl: apiPath.getAddressDetailUrl,
      addressAddUrl: apiPath.addressAddUrl,
      addressUpdateUrl: apiPath.addressUpdateUrl,
      getAddressMainUrl: apiPath.addressMainUrl,
      mainUrl: []
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
    this.getAddressInfo();
  },
  methods: {
    getAddressInfo() {
      if (this.$route.query.id) {
        this.isEdit = true
        ajax(this.addressDetailUrl, {
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
            this.params.resourceAddrId = res.data.parentId
            if (res.data.btnUrl && res.data.btnUrl !== "") {
              res.data.btnUrl.split(',').map((item) => {
                let cur = {}
                cur.url = item
                this.urlArr.push(cur)
              })
            } else {
              this.urlArr.push({
                url: res.data.url
              })
            }
          }
        }).catch((res) => {
          tip(res.message)
        }) 
      } else {
        this.urlArr = [{
          url: ""
        }]
        this.isEdit = false
      }
    },
    addUrl() {
      let cur = {
        url: ""
      }
      this.urlArr.push(cur)
    },
    subtractUrl(index) {
      this.urlArr.splice(index, 1)
    },
    beforeSubmit(queryOpt, _this) {
      let params = this.params;
      let curArr = []
      if (this.params.type === 1) {
        this.urlArr.map((item) => {
          curArr.push(item.url)
        })
        params.btnUrl = curArr.join(',')
        delete _this.queryOpt.url
        _this.queryOpt.btnUrl = params.btnUrl
      } else if (this.params.type === 0) {
        this.params.btnUrl = ""
        params.url = this.urlArr[0].url
        _this.queryOpt.btnUrl = params.btnUrl
        _this.queryOpt.url = params.url
      }
      _this.queryOpt.platformType = this.curType
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? this.addressUpdateUrl : this.addressAddUrl;
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
    ["params.type"](val) {
      if (val === 1) {
        let params = {}
        params.platformType = this.curType;
        ajax(this.getAddressMainUrl, {
          data: params,
          beforeSend: () => {
            this.$refs.loading.show();
          }
        }).then((res) => {
          this.$refs.loading.hide();
          if (res.code === 0) {
            this.mainUrl = []
            this.mainUrl.push({
              label: '请选择子地址所属主地址',
              value: -1
            })
            res.data.map((item) => {
              let cur = {}
              cur.label = item.name + '-' + item.url
              cur.value = parseInt(item.id, 10)
              this.mainUrl.push(cur)
            })
          }
        }).catch((res) => {
          tip(res.message)
        }) 
      } else if (val === 0) {
        this.params.resourceAddrId = null
        this.params.btnId = ""
        this.urlArr = []
        this.urlArr.push({
          url: this.params.url
        })
      }
    }
  }
}