//设置面包屑导航 curmbs导航数组
export const setBreadCrumbs= ({dispatch, state},curmbs)=>{
  return dispatch('SET_BREADCRUNBS',curmbs);
}

//设置分页
export const setPagination = ({dispatch},opt) => {
	return dispatch('SET_PAGINATION',opt)
}

export const alertMessage = ({dispatch}, opt) => {
	dispatch('ALERT', Object.assign({ show: true }, opt));
}

//设置详情图片
export const setTopicInfoImgs = ({dispatch, state}, imgList) => {
	return dispatch('TOPIC_INFO_IMGS', imgList);
}

