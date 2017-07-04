const tip = require('comDir/components/base/pop/tip');


/**
 * @param {String} url
 * @param {Object} opts
 *       {String} type - 'get' | 'post'
 *       {String} dataType - default is json
 *       {String} contentType:
 *
 */
const ajax = function (url, opts = {}) {
  let host = 'http://dev.api.show_big_data.com';
  url = `${host}${url}`;
  let ajaxOptions = {
    url: url,
    type: 'GET',
    dataType: 'json',
  }

  Object.assign(ajaxOptions, opts);

  return new Promise((resolve, reject) => {
    $.ajax(Object.assign(ajaxOptions, {
      success: (res) => {
        if (res.code === 0) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      error: (err) => {
        tip('网络异常，请检查网络连接或重试');
      }
    }))
  })
}

module.exports = ajax;