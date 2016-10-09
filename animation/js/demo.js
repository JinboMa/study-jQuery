$("body").prepend('<div class="test"></div>');

//fadeOut渐渐消失，参数接收动画时间（单位：毫秒）,或者fast快，slow慢
$(".test").fadeOut("slow");

//fadeIn渐渐消失，参数接收动画时间（单位：毫秒）,或者fast快，slow慢
$(".test").fadeIn("slow");

//slideUp向上收起，参数接收动画时间（单位：毫秒）,或者fast快，slow慢
$(".test").slideUp();

//slideDown向下伸展，参数接收动画时间（单位：毫秒）,或者fast快，slow慢
$(".test").slideDown();

//动画延迟,参数接收动画延迟时间（单位：毫秒）,只能放在动画链中
$(".test").fadeOut().delay(1000).fadeIn();

//animate自定义动画,参数接收动画时间（单位：毫秒）
$(".test").after('<div class="demo"></div>');
$(".demo").css("backgroundColor","green").animate({
	width : "400px",
	height : "200px"
},2000).delay(1000).slideUp("slow");

//ajax
$.ajax({
	type : "get",
	url : "http://www.ikindness.cn/api/test/get",
	data : {
		a : 1
	},
	dataType : "json",
	success : function(data){
		console.log(data);
	}
});