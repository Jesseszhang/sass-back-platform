const chargingTemplateList = require('../apiData/marketing/charging-template-list');
const chargingTemplateDetail = require('../apiData/marketing/charging-template-detail');

module.exports = function(app) {
  app.get('/api/billing/page', function (req, res) {
    res.send(chargingTemplateList);
  });
  app.get('/api/billing/findById', function (req, res) {
    res.send(chargingTemplateDetail);
  });
}
