const express = require('express');
const app = express();
const netControllerDetail = require('../apiData/maintain/netControllerDetail');

const orderList = require('../apiData/order/orderList');
const clientList = require('../apiData/client/clientList');
const basicData = require('../apiData/client/basicData');
const clientDetailOrderList = require('../apiData/client/orderList');

const policyList = require('../apiData/policyList');

const config = require('../config');
const apiPort = config.apiPort;


//TODO: const { apiPath } = require('src/service/api');
require('./marketingApi')(app);

app.get('/api/sendMessage/list', function(req,res){
	res.send(policyList);
})

app.get('/api/box/queryBoxDetail', function (req, res) {
  res.send(netControllerDetail);
});

app.get('/api/chargerorder/queryList', function (req, res) {
  res.send(orderList);
});


//================ client ===================
app.get('/card/api/user/queryUsers', function (req, res) {
  res.send(clientList);
});
app.post('/card/api/user/findByUserId', function (req, res) {
  res.send(basicData);
});
app.get('/card/api/user/findOrderByUser', function (req, res) {
  res.send(clientDetailOrderList);
});

//================= site =================
require('./site')(app);
//================= cost ==================
require('./cost')(app);
//================= login =================
require('./login')(app);
//================= other =================
app.listen(apiPort, function () {
  console.log(`Api path listening on port ${apiPort}!`);
});
