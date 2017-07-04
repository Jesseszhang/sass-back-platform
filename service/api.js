const { deepReplaceVal } = require('src/utils/object');
const config = require('./config');
const apiData = require('./config/api.json');
const marketing = require('./config/marketing.json');


var apiPort = config.apiPort;
var apiHost = config.apiHost;
var apiUri = `${apiHost}:${apiPort}`;

//release环境的uri
//var releaseUri = "//192.168.1.191";
var releaseUri = "";
//各个测试环境的uri， 请各位开发人员修改了请不要提交
var devUri = ""

var docking = true;

const apiPath = deepReplaceVal({
  obj: Object.assign(apiData, marketing),
  cb (val) {
    return `${docking ? releaseUri : devUri}${val}`;
  }
});

module.exports = {
  apiPath
}
