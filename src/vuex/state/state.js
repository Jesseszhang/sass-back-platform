import { jobSet, staffSet, accountList, roleList, organizeList } from './system'
import { carType, carSeries, carBrand, brandList, carList, hardwareList, allCarBrand} from './car'
import * as cloud from './cloud'
import { pagination } from './pagination'
import { btnCom } from './common'

export default Object.assign({
  message: {
    show: false,
    duration: 3000
  },
  isEmpty: false,
  //分页
  pagination,
  //硬件词典
  carType,
  carBrand,
  allCarBrand,
  carSeries,
  brandList,
  carList,
  hardwareList,
  //面包屑
  crumbs: [],
  //组织授权
  jobSet,
  staffSet,
  accountList,
  roleList,
  organizeList,
  //返回的错误信息
  errorInfo: ""
}, cloud,btnCom);
