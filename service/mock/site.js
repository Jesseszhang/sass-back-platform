const siteList = require('../apiData/site/siteList');
const stallList = require('../apiData/site/stallList');
const saveRegionResult = require('../apiData/site/saveRegionResult');
const areaList = require('../apiData/site/areaList');
const updateRegion = require('../apiData/site/updateRegion');
const stallDelte = require('../apiData/site/stallDelete');
const saveStall = require('../apiData/site/saveStall');
const delStall = require('../apiData/site/delStall');
const queryByBoxCode = require('../apiData/site/queryByBoxCode');
const queryNotBindingBox = require('../apiData/site/queryNotBindingBox');
const nameList = require('../apiData/site/nameList');
const updateWare = require('../apiData/site/updateWare');
const move = require('../apiData/site/move');

module.exports = function(app) {
 
  app.get('/site/api/site/page', function (req, res) {
	  res.send(siteList);
	});

	//查询车位信息列表
	app.get('/site/api/stall/queryStall', function (req, res) {
	  res.send(stallList);
	});

	//保存区域
	app.post('/site/api/stall/saveRegion', function (req, res) {
	  res.send(saveRegionResult);
	});

	//获取区域列表
	app.get('/site/api/stall/findAll', function (req, res) {
	  res.send(areaList);
	});

	//修改区域
	app.post('/site/api/stall/updateRegion', function (req, res) {
	  res.send(updateRegion);
	});

	//删除区域
	app.post('/site/api/stall/delete', function (req, res) {
	  res.send(stallDelte);
	});

	//添加车位
	app.post('/site/api/stall/saveStall', function (req, res) {
	  res.send(saveStall);
	});

	//删除车位
	app.post('/site/api/stall/delStall', function (req, res) {
	  res.send(delStall);
	});

	//根据控制器编号获取所有设备code
	app.get('/site/api/stall/queryByBoxCode', function (req, res) {
	  res.send(queryByBoxCode);
	});

	//查询该站点下的所有未使用以及该站点下正在使用中的控制器code
	app.get('/site/api/stall/queryNotBindingBox', function (req, res) {
	  res.send(queryNotBindingBox);
	});

	//查询该站点下的所有未使用以及该站点下正在使用中的控制器code
	app.get('/site/api/stall/nameList', function (req, res) {
	  res.send(nameList);
	});

	//编辑车位
	app.post('/site/api/stall/updateWare', function (req, res) {
	  res.send(updateWare);
	});
	
	//车位上下移动
	app.post('/site/api/stall/move', function (req, res) {
	  res.send(move);
	});
}