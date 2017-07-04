const Vue = require('vue');

const stringUtil = require('src/common/utils/string')

/**
 * 根据组件的主题转换成主题的 class
 *
 * @param {String}
 * @return {String}
 *
 * @example 'primary' -> 'theme-primary'
 */
Vue.filter('themeClass', (value) => {
  return value ? `theme-${value}` : ''
})

Vue.filter('time', (value, format, clean=false) => {
  if (!value) {
    return clean ? '' : '--';
  }

  // '1476778191' -> 1476778191 -> 1476778191000
  if (!isNaN(value) && /^\d{10}$/.test(value)) {
    value = Number(value) * 1000;
  }

  let time = new Date(value)
  let str = format || 'yyyy-MM-dd';
  let Week = ['日', '一', '二', '三', '四', '五', '六'];

  str = str.replace(/yyyy|YYYY/, time.getFullYear());
  str = str.replace(/yy|YY/, (time.getYear() % 100) > 9 ? time.getYear() % 100 : '0' + (time.getYear() % 100));

  str = str.replace(/MM/, time.getMonth() + 1 > 9 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1));
  str = str.replace(/M/g, time.getMonth() + 1);

  str = str.replace(/w|W/g, Week[time.getDay()]);

  str = str.replace(/dd|DD/, time.getDate() > 9 ? time.getDate() : '0' + time.getDate());
  str = str.replace(/d|D/g, time.getDate());

  str = str.replace(/hh|HH/, time.getHours() > 9 ? time.getHours() : '0' + time.getHours());
  str = str.replace(/h|H/g, time.getHours());
  str = str.replace(/mm/, time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes());
  str = str.replace(/m/g, time.getMinutes());

  str = str.replace(/ss|SS/, time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds());
  str = str.replace(/s|S/g, time.getSeconds());

  return str;
});

/**
 * 去掉前后换行符
 *
 * @param {String}
 * @return {String}
 */
Vue.filter('trimEnter', (str) => {
  if (!stringUtil.isString(str)) {
    return str;
  }

  return str.replace(/(^\n*)|(\n*$)/g, '');
});

/**
 * 去掉前后空白符
 *
 * @param {String}
 * @return {String}
 */
Vue.filter('trim', (str) => {
  if (!stringUtil.isString(str)) {
    return str;
  }

  return str.replace(/(^\s*)|(\s*$)/g, '');
});

/**
 * [description] 转换金钱
 * @param  {[type]} money [description] 金额
 * @param  {[type]} nums  [description] 几位
 * @return {[type]}       [description]
 */
Vue.filter('money',(value, nums) =>{
  let _str = "--";
  if(value==""||value==null){
    return _str;
  }
  if (isNaN(nums)) {
    return value/100;
  } else {
    return (parseFloat(value/100)).toFixed(nums);
  }

});

/**
 * [description] 逗号分隔金额
 * @return {[type]}  5,000,000.45456
 */
Vue.filter('commaFormatMoney',(val) =>{
  return (val + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
      return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
  });

});

/**
 * 将年月日替换掉
 * @param  {String}
 * @return {String}
 * @example 2016年10月1日 -> 2016-10-1
 */
Vue.filter('replaceStr', (str) => {
  if (!stringUtil.isString(str)) {
    return str;
  }

  return (str.replace(/年|月/g, '-')).replace('日', '');
});

/**
 * [description] 从年月日中获取年、月、日
 * @param  {[type]} str 2016年10月1日
 * @timeKind      Y M D
 * @return {[type]}   年月日的数字 eg: 2016 或者 10 或者1
 *
 */
Vue.filter('fetchTime', (str, timeKind) => {
  let tStr = str.replace(/年|月/g, '/').replace('日', '');
  let date = new Date(tStr);

  if (timeKind == 'Y') {
    return date.getFullYear();
  }

  if (timeKind == 'M') {
    return date.getMonth() + 1;
  }

  if (timeKind == 'D') {
    return date.getDate();
  }

  return '时间格式请传入Y|M|D';
});
