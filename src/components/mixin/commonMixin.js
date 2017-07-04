const utils = require('../../utils/utils.js');
module.exports = {
	data() {
		return {
			
		}
	},
	filters: {
    Null(val) {
      if (val == "" || val == null) {
        return '暂无'
      } else {
        return val
      }
    },
  	time(val) {
      if (val) {
        return utils.time(val, "yyyy-MM-dd hh:mm")
      } else {
        return '暂无'
      }
    },
    getFisrtImg(val) {
      if (val == null || val == "") {
        return this.defaultImg
      } else {
        let imgObj = val.split(',')
        return imgObj[0]
      }
    },
    ratedVoltage(val) {
      if (val == null) {
        return ""
      } else {
        return val.replace(',', '/')
      }
    },
    chargerType(val) {
      if (val == 0 || val == 1 || val == 2) {
        let arr = ['交流','直流','交直流一体']
        return arr[parseInt(val)]
      } else {
        return '暂无'
      }
    },
    commLevel(val) {
      if (val) {
        let type = ['集团商户','商户','子商户'];
        return type[parseInt(val) - 1]
      } else {
        return '--'
      }
    },
    commType(val) {
      let type = ['个人','企业'];
      return type[parseInt(val) - 1]
    },
    commIndustry(val) {
      if (val) {
        let type = ['商业体','住宅','公共设施','政府机构','其他'];
        return type[parseInt(val) - 1]
      }else{
        return '暂无'
      }
    },
    commCategory(val) {
      let type = ['实体','虚拟'];
      return type[parseInt(val) - 1]
    },
    statusInfo(val) {
      if (val) {
        return "启用"
      } else {
        return "禁用"
      }
    },
    statusText(val) {
      if (val) {
        return '启用'
      } else {
        return '禁用'
      }
    },
    staffInfo(val) {
      if (val) {
        return '在职'
      } else {
        return '离职'
      }
    },
    tofixed(val) {
      if (val === null || val === "") {
        return "暂无"
      } else {
        return (parseInt(val)/100).toFixed(2)
      }
    },
    null(val){
      if (val === null || val === "") {
        return "暂无"
      } else {
        return val
      }
    },
    typeStatus(val) {
      if (val == 0) { 
        return '主地址'
      }else if(val == 1){
        return '从地址'
      }else{
        return '暂无'
      }
    },
    statusFilter(val) {
      return this.statusArr[val]
    },
    applicationStatus(val) {
      return parseInt(val) ? '启用' : '禁用';
    }
  }
}