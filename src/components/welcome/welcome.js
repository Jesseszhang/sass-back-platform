const template = require('./welcome.tpl');
require('./jobSet-list.scss');

const welcome = {
  name: "welcome",
  template,
  route: {
    data(transition) {
      document.title = '欢迎您使用充电网服务系统！'
      transition.next()
    }
  }
}
module.exports = welcome;