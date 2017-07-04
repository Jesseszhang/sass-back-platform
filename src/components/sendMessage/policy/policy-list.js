
const template = require('../comList.tpl');

const topicListMixin = require('../listMixin');

const ActivityTopic = {
	mixins: [topicListMixin],
	template,

	data() {
		return {
			thItems: ["话题标题","话题链接与ID","详情链接与ID","话题时间","状态","浏览量","发帖量","报名信息","操作"],
			thItemSort:[
				{
					txt:'信息标题',
					isSort:0
				},
				{
					txt:'信息详情',
					isSort:0
				},
				
				{
					txt:'浏览量',
					isSort:1,
					keys:'browse',
					sortVal:1
				},
				{
					txt:'状态',
					isSort:0
				},
				{
					txt:'发布时间段',
					isSort:0
				},
				{
					txt:'操作',
					isSort:0
				},
			],
			type:3,
			topicAddName:"policy-add",
			addBtnName:"+ 新增政策",
			queryOpt:{'type':3},
		
		}
	}
}

module.exports = ActivityTopic;
