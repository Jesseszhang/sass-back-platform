import spinner from './spinner'
const tip = require('../common/components/base/pop/tip');
var hostUrl = require('./host.js')
var router = require('../router')
var address = hostUrl.host
var docking = true;
let lockRequest = {};

let defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

module.exports = function(type, url, params, diff) {
  let exhost = address;

  let urls = docking ? address + '/api/' + url : url;

  let ajaxOptions = {
    url: urls,
    type: type,
    data: type === 'get' ? params : JSON.stringify(params),
    contentType: 'application/json',
    dataType: 'json',
  }
  let acceptToken = window.localStorage.getItem('sassToken');
  if (acceptToken) {
    ajaxOptions.headers = Object.assign(defaultHeaders, { token: acceptToken });
  }
  // debugger
  return new Promise((resolve, reject) => {
    let acceptToken = window.localStorage.getItem('sassToken');
    if(!acceptToken) {
      tip('登录失效，请重新登录！')
      reject();
      return false;
    }
    $.ajax(Object.assign(ajaxOptions, {
      success: (res) => {
        if (res.code === 0) {
          resolve(res.data);
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
  });
}
