/**
* @props imgUrl - 图片url
* @props isMouseWheel - 鼠标滚动图片是否放大缩小
*/

const Vue = require('vue');

require('./img-handle.scss');
const template = require('./img-handle.tpl');

const ImgHandle = {
	name: "img-handle",

	template,

	props: {
		imgUrl: {
			type: String,
      default: ''
		},
		isMouseWheel: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			scaleLen: 1,
			rotateAngle: 0,
			dragImgObj: {
				dragging: false,
		    startTop: 0,
		    startLeft: 0,
		    dragPosY: 0,
		    dragPosX: 0
			}
		}
	},

	methods: {
		handleImg(item) {
			var $this = $(this.$el).find(".main-img");
			if (item === 1) {
				this.scaleLen += 0.1;
				$this.css({
					'transition-duration': '0s',
					'-webkit-transform': 'scale(' +this.scaleLen+ ') rotate(' +this.rotateAngle+ 'deg)'
				});
			} else if(item === 2) {
				if(this.scaleLen > 0.3) {
					this.scaleLen -= 0.1;
					$this.css({
						'transition-duration': '0s',
						'-webkit-transform': 'scale(' +this.scaleLen+ ') rotate(' +this.rotateAngle+ 'deg)'
					});
				}
			} else if(item === 3) {
				this.rotateAngle += 90;
				$this.css({
					'transition-duration': '0.3s',
					'-webkit-transform': 'scale(' +this.scaleLen+ ') rotate(' +this.rotateAngle+ 'deg)'
				});
			}
		},
		trimPX (_px) {  
      if(_px==null || _px=="")  
        return 0;  
      return parseInt(_px.substr(0, _px.lastIndexOf("px")));  
    }, 
		mousedown(event) {
			this.dragImgObj.dragging = true;
			this.dragImgObj.startTop = this.trimPX(document.getElementById("mainImg").style.top);
			this.dragImgObj.startLeft = this.trimPX(document.getElementById("mainImg").style.left);
			this.dragImgObj.dragPosX = event.clientX;
			this.dragImgObj.dragPosY = event.clientY;
			event.preventDefault();
		},
		mousemove(event) {
			if(this.dragImgObj.dragging) {
				document.getElementById("mainImg").style.top = "0px";
        let leftRange = parseInt(this.dragImgObj.startLeft)+(event.clientX - this.dragImgObj.dragPosX);
        let topRange = parseInt(this.dragImgObj.startTop) + (event.clientY - this.dragImgObj.dragPosY)
        document.getElementById("mainImg").style.left = leftRange + "px";
        document.getElementById("mainImg").style.top = topRange + "px";
			}
		},
		mouseup(event) {
			this.dragImgObj.dragging = false;
		},
		mousewheel(event) {
			if(this.isMouseWheel) {
				if (event.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
	        if (event.wheelDelta > 0) { //当滑轮向上滚动时  
	            this.handleImg(1);
	        } else { //当滑轮向下滚动时  
	            this.handleImg(2);  
	        }
	      } else if (event.detail) {  //Firefox滑轮事件  
	        if (event.detail> 0) { //当滑轮向上滚动时  
	            this.handleImg(1);
	        } else { //当滑轮向下滚动时  
	            this.handleImg(2);  
	        }
	      }
			}
		}
	}
}

module.exports = Vue.component('img-handle', ImgHandle);