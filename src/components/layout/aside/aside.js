const tabAside = require('./tab/tab');
const panel = require('./panel/panel');
const hostUrl = require('../../../service/host.js');
require('../../../common/components/base/pop/pop');
require('../../../common/components/base/icon/icon');
require('../../../common/lib/jquery.scrollbar-gh-pages/jquery.scrollbar.css')
require('../../../common/lib/jquery.scrollbar-gh-pages/jquery.scrollbar.min.js');
const template = require('./aside.tpl');
const ajax = require('appUtil/ajaxHttp');
require('./aside.scss');

export default {
  name: "Aside",
  template,
  props: {
    aside: {
      type: Array,
      default: () => []
    },
    indexs: {
      type: Array,
      default: () => [0,0,0]
    }
  },
  data() {
    return {
      currentIndex: 0,
      username: window.localStorage.getItem('sassUsername')
    }
  },
  ready(){
    $(window).on('resize', () => {
      this.resizeNav();
    });
  },
  methods: {
    resizeNav() {
      let navH = $('#nav-scroll').height();
      let bodyH = $(window).height() - 90 - 90;
      if (navH >= bodyH) {
        $('#nav-scroll').scrollbar();
      } else {
        $('#nav-scroll').css('max-height','auto');
      }
      $('.scroll-wrapper').css('height', bodyH);
    },
    
  },
  components: {
    tabAside,
    panel
  },
  events: {
    curtabItem({item, index}){
      this.$set('currentIndex',index)
      this.$set('indexs[0]', index);
    },
    initScroll(){
      setTimeout(()=>{
        this.resizeNav();
      },0)
    }
  }
}