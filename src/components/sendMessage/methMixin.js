const ajaxHttp = require('appUtil/ajaxHttp');
const { apiPath } = require('serviceDir/api');
const tip = require('components/base/pop/tip');

var methMixin = {

	data() {
		return {
      deleteUrl: "",  //删除或还原
      hideUrl: "", //隐藏或显示
      toplicJump:["","generaltopic-edit", "infotopic-edit", "activitytopic-edit"], //话题跳转地址
      tagObj:{}
		}
	},
methods: {
      showDelPop(id,idx,t) {
        this.tagObj = Object.assign({},{'id':id, 'idx':idx});
        if(t){
            this.tagObj = Object.assign({},this.tagObj,{'postType':t});
        }
        this.$refs.popsdelete.show();
      },
      stickFn(id,idx,val){ //置顶
        let that = this;
        let _val = val==0? 1: 0;
        let args = {
          'postId':id,
          'isTop': _val
        }

        ajaxHttp(this.setStick, {
            type: "post",
            data: args
        }).then((res)=> {
            this.$refs.tableData.trItems[idx]["stick"] = _val;
        }).catch((res)=> {
            tip(res.message);
        })
      },
      setEssenceFn(id,idx, val){ //精华
        let that = this;
        let _val = val==0? 1: 0;
        let args = {
          'postId':id,
          'isBest': _val
        }

        ajaxHttp(this.setEssence, {
            type: "post",
            data: args
        }).then((res)=> {
            this.$refs.tableData.trItems[idx]["elite"] = _val;
        }).catch((res)=> {
            tip(res.message);
        })
      },
  		hidePost(id,idx,val){ //隐藏
        let that = this;
        let _val = val==0? 1: 0;
        let args = {
          'id': id,
          'model':this.model,
          'isVisible': _val
        };

        ajaxHttp(this.hideUrl, {
            type: "post",
            data: args
        }).then((res)=> {
            this.$refs.tableData.trItems[idx]["visible"] = _val;
        }).catch((res)=> {
            tip(res.message);
        })
      },
      deleteSure(){ //删除
        let _mod = this.model;
        if(this.tagObj['postType']==3){
            _mod = this.modelQues
        }
        let args = {
          'model':_mod,
          'id':this.tagObj.id,
          'isDeleted':1
        };

        ajaxHttp(this.deleteUrl, {
            type: "post",
            data: args
        }).then((res)=> {
            tip(res.error || "删除成功");
            this.$refs.tableData.trItems.splice(this.tagObj.idx,1);
            this.cancel();
        }).catch((res)=> {
            tip(res.message);
        })
  	},
    //获取品牌
    getBrandFn(){
      ajaxHttp(this.brandUrl, {
            type: "get",
            data: {}
        }).then((res)=> {
          let arr=[];
          res.data && res.data.forEach((item,idx) => {
              arr.push({'value':item.brandId,'text':item.vertifyBrand});
          });
          this.brandList = this.brandList.concat(arr);
            //this.cancel();
        }).catch((res)=> {
            tip(res.message || '获取品牌列表失败,请稍候在试');
        })
    },
    cancel(){
        this.$refs.popsdelete.hide();
        this.tagObj = {};
    }
  }
}
module.exports = methMixin;