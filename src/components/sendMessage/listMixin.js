require('components/common/table-data/table-data');
const { inputBox: inputBoxEvent, dropMenu: dropMenuEvent } = require('components/config/event.json');
const tip = require('components/base/pop/tip');
const pop = require('components/base/pop/pop');

const ajaxHttp = require('appUtil/ajaxHttp');
const { apiPath } = require('serviceDir/api');
const communityMixin = require('./communityMixin');
const methMinxin = require('./methMixin');
const Clipboard = require('clipboard');


const topicListCommon = {
  mixins: [communityMixin,methMinxin],

  data() {
    return {
      url: "/api/sendMessage/list",
      deleteUrl: "",
      pageInitCt: 1,
      placeItem:"按话题关键字搜索",
      sortTypeVal:1,
      brandVal:"",
      brandList:[
      ],

      model:'topics',
      searchName:"topicKey",
      searchVal: "",
      timeVal:0,
      
      tagObj:{},
      domain:window.location.hostname+(window.location.port? ':'+window.location.port:""),
      
    }
  },
  methods:{
    initZeroClicp(){
      let clipTips = {
        "topicLink":"话题链接",
        "topicId":"话题ID",
        "infoLink":"详情链接",
        "infoId":"详情ID",
        "detailsLink":"详情链接",
        "detailsId":"详情ID"
      }
     let btns = document.getElementsByClassName('zclip');
      if($('.zclip-tip').length==0){
        $('body').append('<span class="zclip-tip fa"></span>');
      }
      let $tgZip = $('.zclip-tip').eq(0);
      $(btns).on('mouseover',function(e){
        let _key = $(this).attr("clipType");
        let $o = $(this).offset();
        
        $tgZip.css({'left':$o.left+($(this).width())/2+'px','top':$o.top+$(this).height()+6+'px'});
        $tgZip.text('点击复制'+clipTips[_key]);
        $tgZip.addClass('mover-zclip');
      }).on('mouseout',function(e){
        $tgZip.removeClass('mover-zclip');
      })
      let clipboard = new Clipboard(btns);
      clipboard.on('success', function(e) {
        let _key = e.trigger.getAttribute("clipType")
        let _ms = clipTips[_key] || "";
          tip(`复制${_ms}成功`);
      });
      clipboard.on('error', function(e) {
          let _key = e.trigger.getAttribute("clipType")
          let _ms = clipTips[_key] || "";
          tip(`复制${_ms}失败`);
      });
    },
    searchData(){
      this.searchVal = this.$refs.userInputbox.val();
      console.log(this.searchVal);
      this.$refs.tableData.query({
        "type":this.type,
        "brand":this.brandVal,
        "startTime":this.calendar.items.startTime.value,
        "endTime":this.calendar.items.endTime.value,
        "searchName":this.searchName,
        "searchVal":this.searchVal,
        "sortType":this.sortTypeVal || 1
      }).fetch();
    },
    sortTableCall(idx,stas){
      let _val = this.thItemSort[idx].sortVal;
      let _sortVal = stas==0? 1 : stas==1? _val :(0-_val);
      this.sortTypeVal = _sortVal;
      this.searchData();

    },
    showDelPop(id,idx) {
        this.tagObj = Object.assign({},{'id':id, 'idx':idx});
        this.$refs.popsdelete.show();
     },
    deleteSure(){ //删除
        let args = {
          'model':this.model,
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
    cancel(){
        this.$refs.popsdelete.hide();
        this.tagObj = {};
    }
    
  },
  events:{
    [dropMenuEvent.menu.change](selecObj){
      console.log(selecObj);
      let queryName = selecObj.queryName;
      this[queryName] = selecObj.value;
    },
    [inputBoxEvent.change](obj){
          this.searchVal = obj.value
    }
  },
  components:{
    pop
  }
}

module.exports = topicListCommon;