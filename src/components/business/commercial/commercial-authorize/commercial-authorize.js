require('../../../../common/lib/data-picker/data-picker');
const businessService = require('../../businessService');
const apiPath = require('../../../../service/requestPath.js');
const ajax = require('appUtil/ajaxHttp');
const tip = require('../../../../common/components/base/pop/tip');
const template = require('./commercial-authorize.tpl');
require('./commercial-authorize.scss');
require('components/base/loading/loading');

export default {
  name: "comAuthorize",
  template,
  data() {
    return {
      params: {
        "commLevel": "",
        "merchant": {
          "serviceTime": this.getNormalTime(new Date(), 0),
          "accountNumber": null
        },
        "boughtChargerCount": "0",
        "showboughtChargerCount": "",
        "roles": [],
        "comboId": "",
        "merchants": "",
        "shortName": "",
        "rank": -1,
        "stake": "",
        "multistage": 1
      },
      readonly: false,
      gunNum: "",
      role: [],
      apply: [],
      allcomboList:[],
      ranklist: [{
        label: '请选择套餐级别',
        value: -1
      },{
        label: '免费版',
        value: 1
      },{
        label: '商务版',
        value: 2
      },{
        label: '专业版',
        value: 3
      }]
    }
  },
  route: {
    data({to: { query: { id } } }) {
      let params = {
        id: this.$route.query.id 
      }
      this.params.id = this.$route.query.id 
      this.$refs.loading.show();
      return Promise.all([
        businessService.getComRoleInfo(params),
        businessService.getAllApply()
        ]).then(([info, apply]) => {
        this.$refs.loading.hide();
        if (info.roles) {
          info.roles.map((item) => {
            this.role.push(item.id)
          })
        }
        let cur = {}
        cur.roles = this.role
        this.apply = apply
        if (info.combo) {
          this.params.comboId = info.combo.id || null
          this.gunNum = info.combo.deviceAmount
        } else {
          this.params.comboId = null
        }
        this.params.commLevel = info.commLevel
        if (info.merchant && info.merchant.serviceTime) {
          this.params = Object.assign({}, this.params, info, cur)
          this.params.merchant.serviceTime = this.getNormalTime(info.merchant.serviceTime)
        } else {
          let cur = new Date()
          this.params.merchants = info.merchants
          this.params.shortName = info.shortName
          this.params.commLevel = info.commLevel
          this.params.merchant.serviceTime = this.getNormalTime(cur,1)
        }
        if (!this.params.merchant.accountNumber) {
          this.params.merchant.accountNumber = 5
        }
        this.params.showboughtChargerCount = info.boughtchargerCount
      }).catch((res) => {
        tip(res.message)
      })
    },
    waitForData: true
  },

  ready() {
    $('.datepicker-input').attr('readonly', true)
    this.getAllcomboList()
  },
  computed: {

  },
  methods: {
    getAllcomboList() {
      ajax(apiPath.getAllcomboList, {
        async: false,
        beforeSend: () => {
          this.$refs.loading.show();
        }
      }).then((res) => {
        this.$refs.loading.hide();
        if (res.code === 0) {
          this.$set('allcomboList', res.data);
        }
      }).catch((res) => {
        tip(res.message)
      })
    },
    getNormalTime(ms,add) {
      let date = new Date(ms);
      let localTime = {};
      localTime.Y = add ? date.getFullYear()+add : date.getFullYear();
      localTime.M = (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1);
      localTime.D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
      return localTime.Y+'-'+localTime.M+'-'+localTime.D
    },
    submit() {
      let params = {}
      let curArray = []
      this.params.roles.map((item) => {
        curArray.push(parseInt(item))
      })
      this.params.roleIds = curArray
      params = Object.assign({}, this.params)
      this.$refs.loading.show();
      params.packageLevel = this.params.comboId
      params.boughtChargerCount = this.params.boughtChargerCount
      businessService.addMerchantRole(params).then((data) => {
        this.$refs.loading.hide();
        tip('操作成功')
      }).catch((res) => {
        this.$refs.loading.hide();
        tip(res.message)
      })
    }
  },
  watch: {
    ["params.comboId"](val){
      if (val) {
        this.allcomboList.map((item) => {
          if (item.id == this.params.comboId) {
            this.gunNum = item.deviceAmount
          }
        })
      }
    },
    ["params.rank"](val) {
      if (val === 1) {
        this.params.stake = 1,
        this.readonly = true;
      } else if (val === 2) {
        this.params.stake = 10;
        this.readonly = false;
      } else if (val === 3) {
        this.params.stake = 50;
        this.readonly = false;
      } else {
        this.readonly = false;
      }
    }
  }
}