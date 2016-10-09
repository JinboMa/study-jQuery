$.fn.extend({
	banner1 : function(){
		var $arrImgs = this.find("a"),
			len = $arrImgs.length;
		this._tab($arrImgs,len);
	},
	banner2 : function(option){
		var _this = this;
		$.map(option,function(item){
			$("<a></a>").appendTo(_this).css("backgroundImage","url(" + item + ")");
		});
		this._tab(this.find("a"),option.length);
	},
	_setCurrent : function(imgs,index){
		imgs.eq(index).addClass("current").siblings(".current").removeClass("current");
	},
	_tab : function(imgs,len){
		var _this = this,
			index = 0;
		this._setCurrent(imgs,index);
		setInterval(function(){
			index = index > len - 2 ? 0 : index + 1;
			_this._setCurrent(imgs,index);
		},2000);
	},
	_getMessage : function(time){
		var $this = this,
			status = 1,
			timeStart = time;
		this.click(function(){
			if(status){
				status = 0;
				$this.css("backgroundColor","gray");
				$this.text(timeStart + "秒后重新获得");
				var messages = "",
					i = 0,
					time = timeStart-1,
					_this = this;
				while(i++ < 6){
					messages += Math.floor(Math.random()*10);
				}
				$("p").text(messages);
				var timer = setInterval(function(){
					if(time == 0){
						clearInterval(timer);
						time = timeStart-1;
						status = 1;
						$this.text("重新获得验证码");
						$this.css("backgroundColor","green");
					}
					else $this.text((time--) + "秒后重新获得");
				},1000);
			}
		});
	}
});
$(".banner1").banner1();
$(".banner2").banner2(["./image/bg1.jpg","./image/bg2.jpg","./image/bg3.jpg"]);
$(".check")._getMessage(60);
