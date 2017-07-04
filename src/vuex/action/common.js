//设置面包屑导航 curmbs导航数组
const setBreadCrumb = ({dispatch, state}, breadCrumbArr) => {
  return dispatch('SET_BREAD_CRUMB', breadCrumbArr);
}

//设置alert的message
const setAlertInfo = ({dispatch, state}, text) => {
  return dispatch('SET_ALERT_MESSAGE', text)
}

//新增页面按钮
const addPageBtn = ({dispatch, state}, comp) => {
  return dispatch('ADD_PAGE_BTN', comp)
}

module.exports = {
  setBreadCrumb,
  setAlertInfo,
  addPageBtn
}