const { apiPath } = require('serviceDir/api');
const ajax = require('src/utils/ajax');

//获取计费模板列表
const getList = ({ dispatch, state }, queryOpt) => {
  ajax('get', apiPath.marketing.chargingTemplateList)
    .query(queryOpt)
    .end((err, res) => {
      if (res.body.code === 0) {
        return dispatch('GET_CHARGING_TEMPLATE_LIST', res.body);
      } else {
        return dispatch('ERROR_INFO', res.body)
      }
    })
}

//获取计费模板版本列表
const getVersionList = ({ dispatch, state }, queryOpt) => {
  ajax('get', apiPath.marketing.chargingTemplateVersionList)
    .query(queryOpt)
    .end((err, res) => {
      if (res.body.code === 0) {
        return dispatch('GET_CHARGING_TEMPLATE_VERSION_LIST', res.body);
      } else {
        return dispatch('ERROR_INFO', res.body)
      }
    })
}

//获取计费模板詳情
const getDetail = ({ dispatch, state }, queryOpt) => {
  ajax('get', apiPath.marketing.chargingTemplateDetail)
    .query(queryOpt)
    .end((err, res) => {
      if (res.body.code === 0) {
        return dispatch('GET_CHARGING_TEMPLATE_DETAIL', res.body);
      } else {
        return dispatch('ERROR_INFO', res.body)
      }
    })
}

module.exports = {
  chargingTemplate: {
    list: getList,
    versionList: getVersionList,
    detail: {
      get: getDetail
    }
  }
}
