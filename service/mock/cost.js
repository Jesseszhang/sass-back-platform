const billPage = require('../apiData/site/billPage');
const billDetail = require('../apiData/cost/getDetailById');

module.exports = function(app) {
	app.get('/api/billing/getDetailById', function (req, res) {
	  res.send(billDetail);
	});
	//获取计费模板名称
	app.get('/api/billing/selectNameList', function (req, res) {
	  res.send(billPage);
	});
}