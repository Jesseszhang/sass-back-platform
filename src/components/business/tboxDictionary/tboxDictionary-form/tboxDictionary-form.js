const businessService = require('../../businessService');
const utils = require('../../../../utils/utils.js');
const operateService = require('../../operateService');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./tboxDictionary-form.tpl');
require('./tboxDictionary-form.scss');
require('components/base/loading/loading');

export default {
  name: "tboxDictionaryForm",
  template,
  data() {
    return {
      uploadImg: apiPath.uploadFileUrl,
      isEdit: false,
      params: {
        id: "",
        type: "",
        manufacturer: "",
        remark: "",
        imgUrl: ""
      },
      curId: ""
    }
  },
  ready() {
    this.getTboxInfo()
  },
  methods: {
    getTboxInfo() {
      let param = {
        boxId: this.$route.query.id
      }
      if (this.$route.query.id) {
        this.isEdit = true;
        this.curId = this.$route.query.id;
        businessService.getTboxDetail(param).then((data) => {
          this.params = Object.assign({}, this.params, data);
        })
      } else {
        this.isEdit = false;
      }
    },
    beforeSubmit(queryOpt, _this) {
      _this.queryOpt.operateId = this.$route.query.id
      this.$refs.loading.show();
    },
    submit() {
      let submitUrl = this.isEdit ? apiPath.updateTboxUrl : apiPath.addTboxUrl;
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
  }
}