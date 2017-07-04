//设置登录信息
const setLoginInfo = ({dispatch, state}, loginInfo) => {
	return dispatch('SET_LOGININFO', loginInfo);
}

module.exports = {
  setLoginInfo
}