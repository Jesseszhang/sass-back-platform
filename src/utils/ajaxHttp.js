import spinner from './spinner'
var router = require('../router')

const tip = require('../common/components/base/pop/tip');
let defaultHeaders = {
  'Accept': 'application/json'
};
let lockRequest = {};

/**
 * @param {String} url
 * @param {Object} opts
 *       {String} type - 'get' | 'post'
 *       {String} dataType - default is json
 *       {String} contentType:
 *
 */
const ajaxHttp = function ajax(url, opts = {}) {

  spinner.start();

  let ajaxOptions = {
    url: url,
    type: 'get',
    dataType: 'json',
  }

  let token = window.localStorage.getItem('sassToken');
  if (token) {
    ajaxOptions.headers = Object.assign(defaultHeaders,{ token: token });
  }

  Object.assign(ajaxOptions, opts);

  return new Promise((resolve, reject) => {
    $.ajax(Object.assign(ajaxOptions, {
      success: (res) => {
        if (res.code === 0) {
          resolve(res);
        } else if(res.code === 2) {
          tip('登录信息过期');
          window.localStorage.removeItem('sassToken');
          router.go({
            path: '/login'
          });
        } else {
          reject(res);
        }
      },
      complete: ()=>{
        spinner.end()
        lockRequest[url] = false
      },
      error: (err) => {
        tip('网络异常，请检查网络连接或重试');
      }
    }))
  })
}

module.exports = ajaxHttp;