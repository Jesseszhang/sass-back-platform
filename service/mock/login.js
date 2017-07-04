const loginInfo = require('../apiData/login/login');
const logout = require('../apiData/login/logout');
const userInfo = require('../apiData/login/userInfo');

module.exports = function(app) {
  app.post('/merchant/api/merchant/login', function (req, res) {
  	console.log(122)
    res.send(loginInfo);
  });
  app.post('/merchant/api/merchant/logout', function (req, res) {
    res.send(logout);
  });
  app.get('/merchant/api/merchant/getMerchantByToken', function (req, res) {
    res.send(userInfo);
  });
}
