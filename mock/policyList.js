const apiUrl = require('../service/api.js');

const list = require('./policyList.json');


module.exports = function(app) {

app.get(apiUrl.community.detailsInfoList, function(req,res){
		res.send(list);
	})

}