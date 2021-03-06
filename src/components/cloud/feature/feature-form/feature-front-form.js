const featureFormMixin = require('./feature-form-mixin/feature-form-mixin');
const apiPath = require('../../../../service/requestPath.js');
const tip = require('../../../../common/components/base/pop/tip');
const ajax = require('appUtil/ajaxHttp');

export default {
  mixins: [featureFormMixin],
  data() {
    return {
      addressUrl: apiPath.getFrontAddressGroupUrl,
      subAddressUrl: apiPath.getSubAddressFrontGroupUrl,
      featureUrl: apiPath.getFeatureFrontGroupUrl,
      featureDetailUrl: apiPath.getFeatureFrontDetailUrl,
      featureAddUrl: apiPath.featureFrontAddUrl,
      featureUpdateUrl: apiPath.featureFromFrontUpdateUrl
    }
  }
}