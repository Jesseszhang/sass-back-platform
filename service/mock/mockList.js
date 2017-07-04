const apiUrl = require('../api.js');

const list = require('../apiData/policyList.json');


module.exports = function(app) {

app.get(apiUrl.community.detailsInfoList, function(req,res){
		res.send(list);
	})

}