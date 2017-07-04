export default {
  ALERT(state, opt) {
    state.message = opt;
  },

  //================= userCenter ==============
  GET_ALL_CAR_BRAND(state, res){
    state.allCarBrand.data = res.data
  },
  //================= userCenter ==============
  GET_OPERATION_LIST(state, res){
    state.roleList.data = res.data.records
    state.pagination = res.data.pager
    if (res.data.records.length === 0) {
      state.isEmpty = true
    } else {
      state.isEmpty = false
    }
  },

  //================= system =================

  //获取组织列表
  GET_ORGANIZE_LIST(state, res){
    state.roleList.data = res.data
    state.pagination = res.data.pager
  },

  //获取角色列表
  GET_ROLE_LIST(state, res){
    state.roleList.data = res.data.records
    var { current, pages, size, total } = res.data;
    state.pagination = { current, pages, size, total };
    if (res.data.records.length === 0) {
      state.isEmpty = true
    } else {
      state.isEmpty = false
    }
  },

  GET_ACCOUNT_LIST(state, res){
    state.accountList.data = res.data.records
    var { current, pages, size, total } = res.data;
    state.pagination = { current, pages, size, total }
    if (res.data.records.length === 0) {
      state.isEmpty = true
    } else {
      state.isEmpty = false
    }
  },

  GET_JOB_LIST(state, res){
    state.jobSet.data = res.data.records
    var { current, pages, size, total } = res.data;
    state.pagination = { current, pages, size, total }
    if (res.data.records.length === 0) {
      state.isEmpty = true
    } else {
      state.isEmpty = false
    }
  },

  GET_JOB_DETAIL(state, res){
    state.jobSet.editData = res.data
  },

  GET_STAFF_LIST(state, res){
    state.staffSet.data = res.data.records
    var { current, pages, size, total } = res.data;
    state.pagination = { current, pages, size, total }
    if(res.data.records.length === 0){
      state.isEmpty = true
    }else{
      state.isEmpty = false
    }
  },

  //=================  car ====================
  //获取汽车系列
  GET_CAR_SERIES(state, res) {
    state.carSeries.data = res.data.records
    var { current, pages, size, total } = res.data;
    state.pagination = { current, pages, size, total }
      //判断是否为空
    if (res.data.records.length == 0) {
      state.isEmpty = true
    } else {
      state.isEmpty = false
    }
  },

  //获取汽车类型
  GET_CAR_TYPE(state, res) {
    state.carType.data = res.data.records
    var { current, pages, size, total } = res.data;
    state.pagination = { current, pages, size, total }
      //判断是否为空
    if (res.data.records.length == 0) {
      state.isEmpty = true
    } else {
      state.isEmpty = false
    }
  },

  //获取汽车类型编辑信息
  EDIT_CAR_BRAND_INFO(state, res) {
    state.carBrand.editData = res.data
  },

  //获取汽车品牌
  GET_CAR_BRAND(state, res) {
    state.carBrand.data = res.data.records
    var { current, pages, size, total } = res.data;
    state.pagination = { current, pages, size, total }
      //判断是否为空
    if (res.data.records.length == 0) {
      state.isEmpty = true
    } else {
      state.isEmpty = false
    }
  },

  //=================  hardware  ====================
  GET_HARDWARE_LIST(state, res) {
    $('.tooltips').tooltip()
    state.hardwareList.data = res.data.records
    var { current, pages, size, total } = res.data;
    state.pagination = { current, pages, size, total }
      //判断是否为空
    if (res.data.records.length == 0) {
      state.isEmpty = true
    } else {
      state.isEmpty = false
    }
  },

  //设置分页插件
  SET_PAGINATION(state, opt) {
    Object.assign(state.pagination, opt)
  },

  //设置面包屑导航
  SET_BREADCRUNBS(state, arr) {
    state.crumbs = arr
  },

  //设置ajax error请求弹框
  ERROR_INFO(state, res) {
    state.errorInfo = res.error || "请求数据失败，联系接口开发人员！";
  },

  //设置面包屑导航
  SET_BREAD_CRUMB(state, breadCrumbArr) {
    state.breadCrumb = breadCrumbArr;
  },

  //设置alert的message
  SET_ALERT_MESSAGE(state, text) {
    state.alertInfo = text;
  },

  //新增按钮
  ADD_PAGE_BTN(state, comp) {
    state.btnArr.push(comp);
  }

}
