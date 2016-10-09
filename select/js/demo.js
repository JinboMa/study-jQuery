$.fn.extend({
	_select : function(index,all){
		var len = all.length,
			i=0;
		all.css("display","block");
		$(".last").css("display","block");
		$(".next").css("display","block");
		while(i < len - 10){
			if(i < index - 5){
				all.eq(i).css("display","none");
			}
			i++;
		}
		if(index == 1)$(".last").css("display","none");
		if(index == len)$(".next").css("display","none");
		all.removeClass("current");
		$(this).addClass("current");
		$(".content").text("第" + index + "页")
	},
	_allClick : function(){
		var all = this;
		this.click(function(){
		$(this)._select(parseInt(this.innerText),all);
		});
	},
	_btnLeft : function(){
		var all = this;
		$(".last").click(function(){
			index = $(".current").text();
			index--;
			if(index < 1)index = 1;
			all.eq(index-1)._select(index,all);
		})
	},
	_btnRight : function(){
		var all = this;
		$(".next").click(function(){
			index = $(".current").text();
			index++;
			if(index > all.length)index = all.length;
			all.eq(index-1)._select(index,all);
		})
	},
	_creatAll : function(all){
		for(var i = 1 ;i <= all;i++){
			$("<div>"+i+"</div>").addClass("con").appendTo(this);
		}
		$(".con").eq(0).addClass("current"); 
		$(".con")._allClick();
		$(".con")._btnLeft();
		$(".con")._btnRight();
	}
})
$(".num")._creatAll(50);
