const utils = require('../../../../utils/utils.js');
const operateService = require('../../operateService');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./operate-form.tpl');
require('./operate-form.scss');
require('components/base/loading/loading');

export default {
  name: "operateForm",
  template,
  data() {
    return {
      isEdit: false,
      uploadImg: apiPath.uploadFileUrl,
      params: {
        operateId: "",
        createTime: "",
        operateId: "",
        shortName: "",
        operateName: "",
        servicePhone: "",
        serviceTime: "",
        icon: "",
        remark: "",
        appName: "",
        iosUrl: "",
        androidUrl: ""
      },
      curId: ""
    }
  },
  route: {
    data(transition) {
      let param = {
        operateId: this.$route.query.id
      }
      if (this.$route.query.id) {
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
      this.curId = this.$route.query.id;

      if (this.curId) {
        return operateService.getOperateDetail(param).then((res) => {
          this.params = Object.assign({}, this.params, res);
        }).catch((res) => {
          tip(res.message || '系统出错，请联系客服！')
        })
      } else {
        transition.next()
      }
    }
  },
  computed: {
    update() {
      return utils.time(this.params.updateTime, 'yyyy-MM-dd hh:mm');
    }
  },

  methods: {
    beforeSubmit(queryOpt, _this) {
      _this.queryOpt.operateId = this.$route.query.id
      _this.queryOpt.id = this.$route.query.id
      _this.queryOpt.createTime = this.params.createTime
      if (_this.queryOpt.androidUrl === "") {
        _this.queryOpt.androidUrl = null
      }
      if (_this.queryOpt.iosUrl === "") {
        _this.queryOpt.iosUrl = null
      }
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateOperateUrl : apiPath.addOperateUrl;
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
  filters: {
    filterImg(val) {
      return val ? val : this.baseImgPath
    },
    getTime(val) {
      if (val) {
        return utils.time(val)
      } else {
        return '暂无更新';
      }
    }
  }
}