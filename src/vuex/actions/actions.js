//全局共用的actions
import * as common from './commonActions';
//硬件词典
import * as car from './carActions';
//系统设置action
import * as system from './systemActions';

let actions = Object.assign(
  {},
  common,
  car,
  system)

export {
  actions as default
}