const template = require('./notFound.tpl');
require('./notFound.scss');

export default {
  name: "notFound",
  template,
  data() {
    return {}
  },
  route: {
    data(transition) {
      document.title = '404';
      transition.next();
    }
  }
}